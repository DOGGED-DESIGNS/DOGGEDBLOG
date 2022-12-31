import Generalhook from "../../hook/generalhook";

import Generaldraw from "../../hook/generaldraw";

import { NavLink } from "react-router-dom";

import { useEffect } from "react";

const Headercomp2 = () => {
  const { draw, Add, error, loading } = Generaldraw();

  useEffect(() => {
    Add();
  }, []);

  return (
    <>
      {!loading
        ? draw.data.slice(0, 3).map((ma) => {
            return (
              <div key={ma.uuid}>
                <NavLink to={`/single/${ma.uuid}`}>
                  {`${ma.title.substring(0, 36)}...`}{" "}
                </NavLink>
              </div>
            );
          })
        : "fetching data from database"}
    </>
  );
};

export default Headercomp2;
