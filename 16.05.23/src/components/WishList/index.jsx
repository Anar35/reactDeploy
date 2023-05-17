import React, { useContext, useEffect } from "react";
import { WishListContext } from "../../context/WishListContext";

const WishList = () => {
  const [wishes, setWishes] = useContext(WishListContext);
  useEffect(() => {
    if (localStorage.getItem("wishList")) {
      setWishes(JSON.parse(localStorage.getItem("wishList")));
    }
  },[]);
  return (
    <div
      style={{
        fontSize: "30px",
        width: "400px",
        height: "500px",
        backgroundColor: "#0B326D",
        position: "absolute",
        top: "10%",
        right: "0",
        overflow: "scroll",
        zIndex: "99",
      }}
    >
      <ul style={{ padding: "0" }}>
        {wishes &&
          wishes.map((wish) => {
            return (
              <li
                style={{
                  display: "flex",
                  border: "1px solid white",
                  padding: "5px",
                  margin: "5px",
                }}
                key={wish.imdbID}
              >
                <img
                  style={{ width: "80px", height: "110px" }}
                  src={wish.Poster}
                  alt={wish.Title}
                />
                <p style={{ fontSize: "20px", color: "white" }}>{wish.Title}</p>
                <p style={{ fontSize: "20px", color: "white" }}>-{wish.Year}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WishList;
