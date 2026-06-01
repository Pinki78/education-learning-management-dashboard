import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import {
  Button,
} from "flowbite-react";

import { useDispatch } from "react-redux";

import { setLoading } from "@/assets/redux-store/store-redux-componets/loadingSlice";

const PaginationList = (props) => {

  const dispatch = useDispatch();

  const {
    currentPage,
    setCurrentPage,
    totalItems,
    itemsPerPage,
  } = props;

  const totalPages = Math.ceil(
    totalItems / itemsPerPage
  );

  const handlePageChange = (page) => {

    if (page < 1 || page > totalPages) {
      return;
    }

    dispatch(setLoading(true));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setCurrentPage(page);

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 500);
  };

  return (
    <section className="mb-3">

      <div className="flex items-center gap-2 flex-wrap">

        {/* Previous */}
        <Button
          className="cursor-pointer bx-previous bx-iconbutton"
          onClick={() =>
            handlePageChange(currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>

        {/* Numbers */}
        <ul className="flex items-center gap-2">

          {[...Array(totalPages)].map((_, index) => {

            const pageNumber = index + 1;

            return (
              <li
                key={pageNumber}
                onClick={() =>
                  handlePageChange(pageNumber)
                }
                className={`
                  cursor-pointer
                  px-4
                  py-2
                  rounded-lg
                  border
                  ${
                    currentPage === pageNumber
                      ? "bg-black text-white"
                      : ""
                  }
                `}
              >
                {pageNumber}
              </li>
            );
          })}
        </ul>

        {/* Next */}
        <Button
          onClick={() =>
            handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="bx-next bx-iconbutton"
        >
          <MdKeyboardDoubleArrowRight />
        </Button>

      </div>
    </section>
  );
};

export default PaginationList;