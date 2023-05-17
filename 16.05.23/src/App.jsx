import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [isLoading, setIsLoading] = useState(false);
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("fast");
  let [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    load();
  }, [search]);

  const load = () => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=1d5d5273`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearch={setSearch}
      />
      <Main movies={movies} isLoading={isLoading} />
    </>
  );
}

export default App;
