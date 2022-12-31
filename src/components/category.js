import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Onlycat from "../hook/onlycat";

const Category = () => {
  const { Add, draw, loading, error } = Onlycat();

  useEffect(() => {
    Add();
  }, []);

  return (
    <>
      {!loading
        ? draw.data.map((cat, index) => {
            return (
              <div className="main3__comp1--cover" key={index}>
                <div>
                  <img src={cat.catimage} alt="" />
                </div>
                <NavLink to={`/under/${cat.category}`}>
                  <p className="text-center text-capitalize">{cat.category}</p>
                </NavLink>
              </div>
            );
          })
        : "fetching data"}
    </>
  );
};

export default Category;
