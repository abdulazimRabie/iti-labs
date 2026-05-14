"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleBackward = () => {
        router.push(`${pathname}?page=${currentPage - 1}`)
    }

    const handleForward = () => router.push(`${pathname}?page=${currentPage + 1}`)

    return (
    <div className="flex items-center justify-center gap-4 py-10">
        <button
        onClick={handleBackward}
        disabled={currentPage <= 1}
        className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 
                    hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
        ← Prev
        </button>

        <span className="text-sm text-slate-500">
            Page 
        <span className="font-semibold text-slate-800">{currentPage}</span> of{" "}
        <span className="font-semibold text-slate-800">{totalPages}</span>
        </span>

        <button
            onClick={handleForward}
            disabled={currentPage >= totalPages}
            className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 
                        hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
        Next →
        </button>
    </div>
    );
}