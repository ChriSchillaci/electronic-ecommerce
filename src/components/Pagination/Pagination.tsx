"use client";

import type { PaginationProps } from "@/types/componentProps";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";
import handlePagination from "@/utils/handlePagination";
import "./index.scss";

const Pagination = ({ meta }: PaginationProps) => {
  const { currentPage, totalPages } = meta || {};
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="Pagination">
      <button
        className={`Pagination__btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() =>
          handlePagination("prev", currentPage, pathname, searchParams, router)
        }
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <MdChevronLeft />
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        className={`Pagination__btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() =>
          handlePagination("next", currentPage, pathname, searchParams, router)
        }
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
