import Card from "../Card";

function Main({ movies, isLoading }) {
  return (
    <section className="movies mt-5">
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : movies ? (
        <div className="container">
          <div className="row">
            <Card movies={movies} />
          </div>
        </div>
      ) : (
        <h1>Data not found!!</h1>
      )}
    </section>
  );
}

export default Main;
