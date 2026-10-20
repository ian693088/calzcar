import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { carTitle, formatKES, type Car } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  const img = car.images[0];
  return (
    <Link
      to="/car/$id"
      params={{ id: car.id }}
      className="group block overflow-hidden rounded-2xl border border-site-import-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-site-import-border">
        {img ? (
          <img src={img} alt={carTitle(car)} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-site-import-muted-foreground">No image</div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-semibold text-site-import-foreground">{car.category}</span>
        {car.status !== "available" && (
          <span className="absolute right-3 top-3 rounded-full bg-site-import-foreground px-2.5 py-0.5 text-xs font-semibold capitalize text-background">{car.status}</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-site-import-foreground">{carTitle(car)}</h3>
        <p className="text-sm text-site-import-muted-foreground">{car.year} · {car.body_type}</p>
        <p className="mt-3 text-xl font-extrabold text-site-import-primary">{formatKES(car.price_kes)}</p>
        {car.credit_available && <p className="text-xs font-semibold text-site-import-accent">Credit available</p>}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-site-import-muted-foreground">
          <span>{car.mileage_km.toLocaleString()} km</span>
          <span>{car.transmission}</span>
          <span>{car.fuel}</span>
          <span>{car.condition}</span>
        </div>
        <p className="mt-4 text-sm font-semibold text-site-import-primary">View details →</p>
      </div>
    </Link>
  );
}

export function FeaturedCars() {
  const { data = [] } = useQuery({
    queryKey: ["cars", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase.from("cars").select("*").order("featured", { ascending: false }).order("created_at", { ascending: false }).limit(3);
      if (error) throw error;
      return data;
    },
  });
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((c) => <CarCard key={c.id} car={c} />)}
    </div>
  );
}
