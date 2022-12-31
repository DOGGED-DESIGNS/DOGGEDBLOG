import { useState } from "react";
import Navbar from "../components/navbar";
import Searchhook from "../hook/searchhook";

const Search = () => {
  const { searchdate, searchz, loading, egg } = Searchhook();

  const [handle, setHandle] = useState("");

  let counter = 0;

  const changes = (e) => {
    e.preventDefault();

    setHandle(e.target.value);

    searchz(handle);
  };

  if (loading) {
    return (
      <>
        <header className="header">
          <Navbar />
          {/* <!-- section search --> */}

          <section className="search">
            <div className="search__input">
              <h2 className="text-capitalize text-center">search here!</h2>
              <input type="text" name="" id="" onChange={changes} />
            </div>
          </section>
          {/* <!-- end of search --> */}

          <p> please wait...</p>
        </header>
      </>
    );
  }

  if (egg) {
    return (
      <header className="header">
        <Navbar />
        {/* <!-- section search --> */}

        <section className="search">
          <div className="search__input">
            <h2 className="text-capitalize text-center">search here!</h2>
            <input type="text" name="" id="" onChange={changes} />
          </div>
        </section>
        {/* <!-- end of search --> */}

        <p>sorry no result found. </p>
      </header>
    );
  }

  return (
    <>
      <header className="header">
        <Navbar />
        {/* <!-- section search --> */}

        <section className="search">
          <div className="search__input">
            <h2 className="text-capitalize text-center">search here!</h2>
            <input type="text" name="" id="" onChange={changes} />
          </div>
        </section>
        {/* <!-- end of search --> */}

        {searchdate.data.length < 1 ? (
          ""
        ) : (
          <div className="main2__comp2">
            {searchdate.data.map((m) => {
              counter++;
              return (
                <div className="main2__comp2--cover">
                  <div>
                    <span>{counter}</span>
                    <img src={m.image == "" ? m.altimage : m.image} alt="" />
                  </div>
                  <h2 className="semititle">{m.title}</h2>
                  <p>{`${m.post.substring(0, 70)}..`}</p>
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Search;
