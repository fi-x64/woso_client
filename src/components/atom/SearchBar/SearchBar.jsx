import Search from "antd/es/input/Search";
import React from "react";

function SearchBar() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      className="search-bar"
      enterButton
    />
  );
}

export default SearchBar;
