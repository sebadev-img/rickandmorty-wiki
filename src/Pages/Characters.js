import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Characters.css";

//Components
import Navbar from "../Components/Navbar/Navbar";
import Search from "../Components/Search/Search";
import Filters from "../Components/Filter/Filters";
import List from "../Components/List/List";
import Pagination from "../Components/Pagination/Pagination";
import Footer from "../Components/Footer/Footer";

const API_URL = "https://rickandmortyapi.com/api/character";
let pageCount = 0;

function Characters() {
  const [isLoading, setIsLoading] = useState(true);
  const [characterCount, setCharacterCount] = useState(0);
  const [list, setList] = useState();
  //const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const getURL = () => {
    let newURL = API_URL;
    newURL += `/?page=${currentPage}`;
    if (searchText) {
      newURL += `&name=${searchText}`;
    }
    if (status) {
      newURL += `&status=${status}`;
    }
    if (gender) {
      newURL += `&gender=${gender}`;
    }

    return newURL;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const url = getURL();
      console.log(url);
      const response = await axios.get(url);
      const data = response.data;
      const newList = data.results;
      const count = data.info.count;
      pageCount = data.info.pages;
      setList(newList);
      setCharacterCount(count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("calling api...currentPage");
    getData();
  }, [currentPage]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("calling api...searchText");
      setCurrentPage(1);
      getData();
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchText]);

  useEffect(() => {
    console.log("calling api...filters");
    setCurrentPage(1);
    getData();
  }, [status, gender]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="main-container">
        <section className="search-section">
          <Search setSearchText={setSearchText} />
        </section>
        <div className="content-container">
          <section className="filter-section">
            <Filters
              setStatus={setStatus}
              setGender={setGender}
              setCurrentPage={setCurrentPage}
            />
          </section>
          <section className="list-section">
            <div>
              {isLoading ? (
                <p>loading...</p>
              ) : (
                <List list={list} characterCount={characterCount}></List>
              )}
            </div>

            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Characters;
