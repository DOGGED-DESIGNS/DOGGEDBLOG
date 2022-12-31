import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Drawcat from "../../hook/drawcat";

const Realestatebtn = () => {
  const { cat, data, loading, error } = Drawcat();
  useEffect(() => {
    cat("real estate");
  }, []);
  return (
    <>
      {!loading ? (
        data.data.length > 6 ? (
          <div className="link-btn">
            <NavLink to={`/under/${data.data[0].category}`}>More_Post</NavLink>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default Realestatebtn;
