import React from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState('cat')
  return (
    <div className="flex flex-col items-center p-4">
      <form className="w-full max-w-md">
        <div className="relative">
          <label htmlFor="search-input" className="sr-only">Search</label>
          <input
            type="text"
            id="search-input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a6 6 0 100 12 6 6 0 000-12zm3.293 9.293a1 1 0 01-1.414 1.414l-2.829-2.828a1 1 0 010-1.414l2.829-2.829a1 1 0 011.414 1.414L9.414 10l2.879 2.879z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </form>
      <p className="mt-4 text-lg text-white">
        Searched Term is: <span className="font-semibold text-blue-600">{searchTerm}</span>
      </p>
    </div>
  )
}

export default SearchForm;
