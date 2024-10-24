const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search products by title..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-lg bg-luxuryBlack text-white border border-luxuryGold focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
