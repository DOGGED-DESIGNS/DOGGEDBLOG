import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Drawcat from "../../hook/drawcat";

const Main3comp1 = () => {
  const { data, cat, loading, error } = Drawcat();

  useEffect(() => {
    cat("real estate");
  }, []);

  return (
    <>
      {!loading
        ? data.data.slice(0, 2).map((inn) => {
            return (
              <div className="main2__comp1--cover" key={inn.uuid}>
                <div>
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

export default Main3comp1;
