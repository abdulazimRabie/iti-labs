import ProductCard from "@/components/product-card";
import Pagination from "@/components/pagination";
import type { ProductListResponse } from "@/types/product";
import { Suspense } from "react";

const LIMIT = 12;

async function getProducts(page: number): Promise<ProductListResponse> {
  const skip = (page - 1) * LIMIT;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
    { next: { revalidate: 3600 } }
  );
  return res.json();
}

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductList({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const data = await getProducts(currentPage);
  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
            All Products
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            showing {data.products.length} of {data.total} items
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
              thumbnail={product.thumbnail}
              price={product.price}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}