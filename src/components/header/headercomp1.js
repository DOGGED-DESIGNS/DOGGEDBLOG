import Generalhook from "../../hook/generalhook";

import Generaldraw from "../../hook/generaldraw";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Headercomp1 = () => {
  const { Add, loading, error, draw } = Generaldraw();

  useEffect(() => {
    Add();
  }, []);
  return (
    <>
      {!loading
        ? draw.data.slice(-1).map((d, index) => {
            return (
              <NavLink to={`/single/${d.uuid}`} key={index}>
                <div className=" text-left textz" key={d.uuid}>
                  <h1>{d.title}</h1>

                  <p
                    className=" text-secondary
                 text-left"
                  >{`${d.post.substring(0, 200)}...`}</p>
                </div>
              </NavLink>
            );
          })
        : "fetching data from database"}
    </>
  );
};

export default Headercomp1;
