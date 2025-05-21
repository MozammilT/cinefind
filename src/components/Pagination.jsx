function Pagination({ currentPage, setCurrentPage }) {
  const pages = [1, 2, 3, 4, 5];

  const goToPage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-10">
      <div className="flex items-center justify-between w-full max-w-80 text-gray-500 font-medium">
        <button
          type="button"
          aria-label="prev"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <img src="page.svg" />
        </button>

        <div className="flex items-center gap-2 text-sm font-medium">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`h-10 w-10 flex items-center justify-center aspect-square ${
                currentPage === page
                  ? "text-white border border-indigo-200 rounded-full bg-white/20"
                  : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="next"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <img src="page.svg" className="rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
