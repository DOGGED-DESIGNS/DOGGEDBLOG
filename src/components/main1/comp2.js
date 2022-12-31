import Drawcat from "../../hook/drawcat";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Maincomp2 = () => {
  const { cat, loading, error, data } = Drawcat();
  useEffect(() => {
    cat("real estate");
  }, []);
  return (
    <>
      {!loading
        ? data.data.slice(-1).map((real) => {
            return (
              <div className="comp2__cover" key={real.uuid}>
                <div>
                  <img
                    src={real.image == "" ? real.altimage : real.image}
                    alt=""
                  />
                </div>
                <NavLink to={`/single/${real.uuid}`}>
                  <h4 className="semititle2">{real.title}</h4>
                </NavLink>
                <p>{real.post.substring(0, 100)}...</p>
              </div>
            );
          })
        : "fetchin data.."}
    </>
  );
};

export default Maincomp2;
