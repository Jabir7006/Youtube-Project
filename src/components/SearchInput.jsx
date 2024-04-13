import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ytContext } from "../contextAPI";
import { apiUrl } from "../utils/fetchFromAPI";

const SearchInput = ({ setShowSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchResults, setLoading } = useContext(ytContext);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  const handleChange = async (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setSearchSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `${apiUrl}/search-suggestions?q=${e.target.value}`
      );

      setSearchSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSearch = async (query = searchQuery) => {
    try {
      setLoading(true);
      setSearchResults([]);
      setSearchSuggestions([]);
      const response = await axios.get(`${apiUrl}/search?q=${query}`);
      setSearchResults(response.data);
      localStorage.setItem("searchResults", JSON.stringify(response.data));
      navigate(`/search/${query}`);
      setLoading(false);
    } catch (error) {
      console.error("Error searching videos:", error);
      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  return (
    <>
      <div className="relative flex-wrap items-stretch mx-auto w-full hidden md:flex">
        <input
          type="search"
          className="relative mx-3 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full border border-[#303030] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[rgb(59,113,202)] focus:outline-none text-white"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={searchQuery}
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
        {/*Search button*/}

        <Link
          to={`/search/${searchQuery}`}
          className="relative me-3 z-[2] flex items-center rounded-r-full bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 bg-[#222222]"
          type="button"
          onClick={() => handleSearch(searchQuery)}
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {searchSuggestions?.length > 0 && (
          <ul className="absolute top-12 left-4 w-[78%] bg-[#222222] rounded-md mt-1 py-1 z-10 text-gray-300">
            {searchSuggestions?.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-[#404040] font-medium "
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ============ Mobile Search Bar =============== */}

      <>
        <div className="relative mb-4 flex flex-wrap items-stretch mx-auto w-full md:hidden">
          <i
            data-tooltip-id="my-tooltip"
            data-tooltip-offset={20}
            data-tooltip-content="Back"
            data-tooltip-place="bottom"
            className="hover:bg-[#666666] rounded-full p-3 cursor-pointer"
            onClick={() => setShowSearch(false)}
          >
            <BiLeftArrowAlt size={25} />
          </i>

          <input
            type="search"
            className="relative mx-3 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full border border-[#303030] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[rgb(59,113,202)] focus:outline-none text-white"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            value={searchQuery}
            onChange={handleChange}
            onKeyUp={handleEnter}
          />
          {/*Search button*/}
          <Link
            to={`/search/${searchQuery}`}
            className="relative me-3 z-[2] flex items-center rounded-r-full bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 bg-[#222222]"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => handleSearch(searchQuery)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <i
            className="hover:bg-[#666666] rounded-full p-[.9rem] cursor-pointer hidden min-[425px]:block"
            data-tooltip-id="my-tooltip"
            data-tooltip-offset={20}
            data-tooltip-content="search with voice"
            data-tooltip-place="bottom"
          >
            <BsFillMicFill size={20} />
          </i>

          {searchSuggestions?.length > 0 && (
            <ul className="absolute top-12 left-[12%] right-[15%] bg-[#222222] rounded-md mt-1 py-1 z-10 text-gray-300">
              {searchSuggestions?.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-[#404040] font-medium "
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    </>
  );
};

export default SearchInput;
