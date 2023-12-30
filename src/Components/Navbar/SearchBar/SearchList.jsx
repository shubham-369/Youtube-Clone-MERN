import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchList.css";

function SearchList({ TitleArray, setSearchQuery }) {
  return (
    <>
      <div className="Container_SearchList">
        {TitleArray.map((m, i) => {
          return (
            <p key={i} onClick={() => setSearchQuery(m)} className="titleItem">
              <FaSearch />
              {m}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default SearchList;
