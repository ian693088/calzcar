create type public.app_role as enum ('admin', 'user');
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;
create policy "own roles readable" on public.user_roles for select to authenticated using (user_id = auth.uid());

-- First account ever created becomes the admin; later sign-ups get no admin rights.
create or replace function public.handle_first_admin()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end $$;
create trigger on_auth_user_created_admin after insert on auth.users
for each row execute function public.handle_first_admin();

create table public.cars (
  id uuid primary key default gen_random_uuid(),
  make text not null,
  model text not null,
  year int not null,
  body_type text not null default 'Sedan',
  category text not null default 'New Cars',
  price_kes numeric not null default 0,
  mileage_km int not null default 0,
  transmission text not null default 'Automatic',
  fuel text not null default 'Petrol',
  condition text not null default 'New',
  credit_available boolean not null default false,
  status text not null default 'available',
  featured boolean not null default false,
  description text not null default '',
  images text[] not null default '{}',
  created_at timestamptz not null default now()
);
grant select on public.cars to anon, authenticated;
grant insert, update, delete on public.cars to authenticated;
grant all on public.cars to service_role;
alter table public.cars enable row level security;
create policy "cars public read" on public.cars for select to anon, authenticated using (true);
create policy "admins insert cars" on public.cars for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "admins update cars" on public.cars for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admins delete cars" on public.cars for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 1 and 120),
  phone text not null default '' check (char_length(phone) <= 40),
  email text not null check (char_length(email) between 3 and 200),
  interest text not null default 'Other' check (char_length(interest) <= 60),
  message text not null default '' check (char_length(message) <= 3000),
  car_id uuid references public.cars(id) on delete set null,
  car_label text not null default '' check (char_length(car_label) <= 200),
  status text not null default 'new',
  created_at timestamptz not null default now()
);
grant insert on public.inquiries to anon, authenticated;
grant select, update, delete on public.inquiries to authenticated;
grant all on public.inquiries to service_role;
alter table public.inquiries enable row level security;
create policy "anyone can send inquiry" on public.inquiries for insert to anon, authenticated with check (status = 'new');
create policy "admins read inquiries" on public.inquiries for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admins update inquiries" on public.inquiries for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "admins delete inquiries" on public.inquiries for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "public read car images" on storage.objects for select using (bucket_id = 'car-images');
create policy "admins upload car images" on storage.objects for insert to authenticated with check (bucket_id = 'car-images' and public.has_role(auth.uid(), 'admin'));
create policy "admins delete car images" on storage.objects for delete to authenticated using (bucket_id = 'car-images' and public.has_role(auth.uid(), 'admin'));

insert into public.cars (make, model, year, body_type, category, price_kes, mileage_km, transmission, fuel, condition, credit_available, featured, images) values
('Subaru','Forester',2021,'SUV','New Cars',2000000,17181,'Automatic','Petrol','New',false,false,'{}'),
('Toyota','RAV4 Hybrid',2024,'SUV','New Cars',5300000,0,'Automatic','Hybrid','New',true,true,'{https://images.pexels.com/photos/27497571/pexels-photo-27497571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}'),
('Ford','Ranger Raptor',2022,'Pickup','Second-Hand',5000000,18500,'Automatic','Petrol','Excellent',true,true,'{https://images.pexels.com/photos/29026609/pexels-photo-29026609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}'),
('Mercedes-Benz','E-Class 350',2024,'Sedan','New Cars',7500000,0,'Automatic','Petrol','New',false,true,'{https://images.pexels.com/photos/16288341/pexels-photo-16288341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}'),
('Honda','Civic Type R',2023,'Hatchback','On Credit',0,1200,'Manual','Petrol','New',true,false,'{https://images.pexels.com/photos/17612417/pexels-photo-17612417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}'),
('Audi','Q7 55 TFSI',2021,'SUV','Second-Hand',5700000,42000,'Automatic','Petrol','Good',false,false,'{https://images.pexels.com/photos/18393010/pexels-photo-18393010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}'),
('BMW','M4 Competition',2023,'Coupe','Imports',11500000,5200,'Automatic','Petrol','New',false,true,'{https://images.pexels.com/photos/17898713/pexels-photo-17898713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}');