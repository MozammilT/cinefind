function Pagination() {
  return (
    <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-10">
      <div class="flex items-center justify-between w-full max-w-80 text-gray-500 font-medium">
        <button
          type="button"
          aria-label="prev"
        //   class="rounded-full bg-slate-200/50"
        >
          <img src="page.svg" />
        </button>

        <div class="flex items-center gap-2 text-sm font-medium">
          <button class="h-10 w-10 flex items-center justify-center aspect-square">
            1
          </button>
          <button class="h-10 w-10 flex items-center justify-center aspect-square">
            2
          </button>
          <button class="h-10 w-10 flex items-center justify-center aspect-square text-white border border-indigo-200 rounded-full">
            3
          </button>
          <button class="h-10 w-10 flex items-center justify-center aspect-square">
            4
          </button>
          <button class="h-10 w-10 flex items-center justify-center aspect-square">
            5
          </button>
        </div>

        <button
          type="button"
          aria-label="next"
        //   class="rounded-full bg-slate-200/50"
        >
          <img src="page.svg" className="rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
