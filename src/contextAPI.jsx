/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

export const ytContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectCategories, setSelectCategories] = useState("new");
  const [videos, setVideos] = useState([]);
  const [seekTime, setSeekTime] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  return (
    <ytContext.Provider
      value={{
        loading,
        searchResults,
        isLoggedIn,
        selectCategories,
        setSelectCategories,
        videos,
        setVideos,
        setIsLoggedIn,
        setLoading,
        setSearchResults,
        seekTime,
        setSeekTime,
        commentsCount,
        setCommentsCount,
      }}
    >
      {props.children}
    </ytContext.Provider>
  );
};
