import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";

function Card({ movies }) {
  const [wishes, setWishes] = useContext(WishListContext);
  return (
    <>
      {movies &&
        movies.map((movie, idx) => (
          <div key={idx} className="col-3 mb-5">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
                <button
                  onClick={() => {
                    let wishMovie = wishes.find(
                      (mov) => mov.imdbID == movie.imdbID
                    );
                    if (!wishMovie) {
                      localStorage.setItem(
                        "wishList",
                        JSON.stringify([...wishes, movie])
                      );
                      setWishes([...wishes, movie]);
                    }
                  }}
                  href="#"
                  className="like btn btn-primary d-flex justify-content-center align-items-center"
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Card;
