import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false) 
  const searchCache = useSelector((store) => store.search)
   const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuerry]) {
        setSuggestions(searchCache[searchQuerry]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({ [searchQuerry]: json[1] }));
  };
 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointer"
          alt="menu-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 p-2 border-gray-800 border rounded-l-3xl"
            value={searchQuerry}
            onChange={(e) => setSearchQuerry(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-800 border-l-0 rounded-r-3xl p-2 bg-gray-100">
            Search
          </button>
        </div>
        <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-50">
          <ul>
            {showSuggestions && suggestions.map((ele) => (
              <li key={ele} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://devtalk.blender.org/uploads/default/original/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a.png"
        />
      </div>
    </div>
  );
};

export default Head;
