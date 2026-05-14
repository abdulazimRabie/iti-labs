import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = Pick<
  Product,
  "id" | "title" | "brand" | "thumbnail" | "price" | "rating" | "discountPercentage"
>;

export default function ProductCard({
  id,
  title,
  brand,
  thumbnail,
  price,
  rating,
  discountPercentage,
}: ProductCardProps) {
  const discountedPrice =
    discountPercentage > 0
      ? (price * (1 - discountPercentage / 100)).toFixed(2)
      : null;

  return (
    <Link
      href={`/products/${id}`}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-rose-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
          {Math.round(discountPercentage)}% OFF
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest mb-1.5">
          {brand}
        </span>

        <h3 className="font-semibold text-slate-800 text-[15px] leading-snug line-clamp-2 mb-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.round(rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-200 fill-slate-200"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">{rating}</span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
          <div className="flex items-baseline gap-2">
            {discountedPrice ? (
              <>
                <span className="text-lg font-bold text-slate-900">
                  ${discountedPrice}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ${price}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-slate-900">
                ${price}
              </span>
            )}
          </div>

          <div className="w-9 h-9 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
