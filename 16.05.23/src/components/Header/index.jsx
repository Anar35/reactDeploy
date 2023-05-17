import { useContext } from "react";
import WishList from "../WishList";
import { WishListContext } from "../../context/WishListContext";

function Header({ searchInput, setSearchInput, setSearch }) {
  const [wishes, setWishes, setIsOpen, isOpen] = useContext(WishListContext);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(searchInput);
  }
  return (
    <header>
      <nav>
        <form id="search-form" onSubmit={(e) => handleSearch(e)}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            onChange={(e) => setSearchInput(e.target.value.trim())}
            id="search"
            type="text"
          />
          <button className="search">Search</button>
        </form>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="wishList"
        >
          WishList <i className="fa-solid fa-heart"></i>{" "}
          {wishes ? wishes.length : 0}
        </button>
      </nav>
      {isOpen ? <WishList /> : "  "}
    </header>
  );
}

export default Header;
