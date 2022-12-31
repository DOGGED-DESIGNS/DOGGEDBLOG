import Generaldraw from "../hook/generaldraw";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Recentlyadded = () => {
  const { draw, loading, Add, error } = Generaldraw();

  useEffect(() => {
    Add();
  }, []);
  return (
    <>
      {!loading
        ? draw.data.slice(0, 4).map((rec) => {
            return (
              <div className="main2__comp2--cover" key={rec.uuid}>
                <div>
                  <span>{rec.category}</span>
                  <img
                    src={
                      rec.image == ""
                        ? rec.altimage
                        : `http://localhost:4000${rec.image}`
                    }
                    alt=""
                  />
                </div>
                <NavLink to={`/single/${rec.uuid}`}>
                  <h2 className="semititle">{rec.title}</h2>
                </NavLink>
                <p className="text-center">{`${rec.post.slice(0, 60)}`}</p>
              </div>
            );
          })
        : "fetching data"}
    </>
  );
};

export default Recentlyadded;
