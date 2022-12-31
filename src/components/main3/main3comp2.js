import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Drawcat from "../../hook/drawcat";
const Main3comp2 = () => {
  const { cat, loading, error, data } = Drawcat();

  useEffect(() => {
    cat("real estate");
  }, []);

  let counter = 0;

  return (
    <>
      {!loading
        ? data.data.slice(2, 6).map((inn, index) => {
            counter++;
            return (
              <div className="main2__comp2--cover" key={inn.uuid}>
                <div>
                  <span>{counter}</span>
                  <img
                    src={inn.image === "" ? inn.altimage : inn.image}
                    alt=""
                  />
                </div>
                <NavLink to={`/single/${inn.uuid}`}>
                  <h2 className="semititle">{inn.title}</h2>
                </NavLink>
                <p>{`${inn.post.slice(0, 50)}..`}</p>
              </div>
            );
          })
        : "fetching data"}
    </>
  );
};

export default Main3comp2;
