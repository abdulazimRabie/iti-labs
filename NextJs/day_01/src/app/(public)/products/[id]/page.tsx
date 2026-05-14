import Image from "next/image";
import { notFound } from "next/navigation";
import type { Product } from "@/types/product";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  if (!res.ok || data.message) {
    notFound();
  }
  return data;
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  const discountedPrice =
    product.discountPercentage > 0
      ? (
          product.price *
          (1 - product.discountPercentage / 100)
        ).toFixed(2)
      : null;

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-2">
        <nav className="flex items-center gap-2 text-sm text-slate-400">
          <span className="hover:text-slate-600 transition-colors cursor-pointer">
            Products
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-slate-900 font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left — Images */}
          <div className="w-full lg:w-[55%] space-y-4">
            {/* Hero Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-contain p-8 hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(1, 5).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden bg-white border border-slate-100 cursor-pointer hover:border-slate-300 transition-colors"
                >
                  <Image
                    src={img}
                    alt="gallery"
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 25vw, 14vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="w-full lg:w-[45%] flex flex-col py-2">
            {/* Category & Brand */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-sm text-slate-400">
                {product.brand}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-[2.5rem] font-bold text-slate-900 leading-tight tracking-tight mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200 fill-slate-200"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                {product.rating}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-sm text-slate-400">
                {product.reviews.length} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-slate-100">
              {discountedPrice ? (
                <>
                  <span className="text-3xl font-bold text-slate-900">
                    ${discountedPrice}
                  </span>
                  <span className="text-lg text-slate-400 line-through">
                    ${product.price}
                  </span>
                  <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
                    Save {Math.round(product.discountPercentage)}%
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-slate-900">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-[15px] mb-8">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-10">
              <button className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all active:scale-[0.98]">
                Add to Cart
              </button>
              <button className="w-14 h-14 flex items-center justify-center border border-slate-200 rounded-xl text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all active:scale-[0.98]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Info Pills */}
            <div className="grid grid-cols-2 gap-3">
              <InfoPill
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                }
                label="Stock"
                value={`${product.availabilityStatus} (${product.stock})`}
                valueColor={
                  product.stock > 0 ? "text-emerald-600" : "text-rose-600"
                }
              />
              <InfoPill
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                label="Warranty"
                value={product.warrantyInformation}
                valueColor="text-slate-900"
              />
              <InfoPill
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
                label="Shipping"
                value={product.shippingInformation}
                valueColor="text-slate-900"
              />
              <InfoPill
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                }
                label="Returns"
                value={product.returnPolicy}
                valueColor="text-slate-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="border-t border-slate-100 pt-12">
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Customer Reviews
            </h2>
            <span className="text-sm text-slate-400">
              {product.reviews.length} verified ratings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-slate-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar with initials */}
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                    {review.reviewerName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-200 fill-slate-200"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-component ─── */

function InfoPill({
  icon,
  label,
  value,
  valueColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueColor: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white">
      <div className="w-9 h-9 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
          {label}
        </p>
        <p className={`text-sm font-semibold truncate ${valueColor}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
