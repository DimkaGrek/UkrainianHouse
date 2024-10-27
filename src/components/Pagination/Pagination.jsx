import ReactPaginate from 'react-paginate';
import { BiChevronsRight } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronsLeft } from 'react-icons/bi';

export const Pagination = ({ setPage, page, totalPages }) => {
  const handlePageClick = event => {
    setPage(event.selected);
  };

  const handleFirstPage = () => {
    setPage(0);
  };

  const handleLastPage = () => {
    setPage(totalPages - 1);
  };

  if (totalPages <= 1) return;

  return (
    <div className="flex items-center justify-center gap-[17px]">
      <button
        className="page-link"
        onClick={handleFirstPage}
        disabled={page === 0}
      >
        <BiChevronsLeft />
      </button>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        forcePage={page}
        containerClassName={'pagination flex gap-[4px]'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeLinkClassName={'active-pg'}
        previousLabel={
          <button className="page-link" disabled={page === 0}>
            <BiChevronLeft />
          </button>
        }
        nextLabel={
          <button className="page-link" disabled={page === totalPages - 1}>
            <BiChevronRight />
          </button>
        }
        breakLabel={'...'}
      />

      <button
        className="page-link"
        onClick={handleLastPage}
        disabled={page === totalPages - 1}
      >
        <BiChevronsRight />
      </button>
    </div>
  );
};
