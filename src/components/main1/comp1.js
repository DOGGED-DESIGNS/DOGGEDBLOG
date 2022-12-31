import Drawcat from "../../hook/drawcat";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Maincomp1 = () => {
  const { data, loading, error, cat } = Drawcat();

  useEffect(() => {
    cat("art");
  }, []);

  return (
    <>
      {!loading
        ? data.data.slice(0, 2).map((ar) => {
            return (
              <div className="comp1__cover" key={ar.uuid}>
                <div>
                  <img
                    src={ar.image === "" ? ar.altimage : ar.image}
                    alt="art"
                  />
                </div>
                <NavLink to={`/single/${ar.uuid}`}>
                  <h4 className="semititle">{ar.title}</h4>
                </NavLink>
              </div>
            );
          })
        : " fetching data"}
    </>
  );
};

export default Maincomp1;
