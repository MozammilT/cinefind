function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="search">
        <div>
          <img src="search.svg" />
          <input
            type="text"
            placeholder="search through 1M+ movies"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
