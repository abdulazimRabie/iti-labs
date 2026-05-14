import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// AppPagination.jsx — knows nothing about URLs
export function AppPagination({ total, current, onPageChange }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {current > 1 ? (
            <PaginationPrevious
              onClick={() => onPageChange(current - 1)}
              className="cursor-pointer"
            />
          ) : (
            <PaginationPrevious className="pointer-events-none opacity-40" />
          )}
        </PaginationItem>

        <PaginationItem>
          <PaginationLink isActive className="cursor-pointer">
            {current}
          </PaginationLink>
        </PaginationItem>

        {current + 1 <= total && (
          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(current + 1)}
              className="cursor-pointer"
            >
              {current + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {current + 2 <= total && (
          <PaginationItem>
            <PaginationLink
              onClick={() => onPageChange(current + 2)}
              className="cursor-pointer"
            >
              {current + 2}
            </PaginationLink>
          </PaginationItem>
        )}

        {current + 3 <= total && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          {current < total ? (
            <PaginationNext
              onClick={() => onPageChange(current + 1)}
              className="cursor-pointer"
            />
          ) : (
            <PaginationNext className="pointer-events-none opacity-40" />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
