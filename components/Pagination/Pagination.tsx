"use client";

import type { PaginationProps } from "../../types/componentProps";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";
import handlePagination from "../../utils/handlePagination";
import "./index.scss";

const Pagination = ({ meta }: PaginationProps) => {
  const { currentPage, totalPages } = meta || {};
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="Pagination">
      <MdChevronLeft
        className={`Pagination__btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() =>
          handlePagination("prev", currentPage, pathname, searchParams, router)
        }
      />
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <MdChevronRight
        className={`Pagination__btn ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() =>
          handlePagination("next", currentPage, pathname, searchParams, router)
        }
      />
    </div>
  );
};

export default Pagination;
