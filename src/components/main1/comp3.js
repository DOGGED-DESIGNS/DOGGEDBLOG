import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Drawcat from "../../hook/drawcat";

import Generaldraw from "../../hook/generaldraw";

const Maincomp3 = () => {
  const { Add, draw, loading, error } = Generaldraw();

  useEffect(() => {
    Add();
  }, []);
  const Month = [
    "january",
    "feburary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return (
    <>
      {!loading
        ? draw.data.slice(3, 6).map((dat) => {
            const month = Month[new Date(dat.time).getMonth()];
            const year = new Date(dat.time).getFullYear();
            const day = new Date(dat.time).getDate();

            return (
              <div className="comp3__cover" key={dat.uuid}>
                <p className="text-center text-capitalize">
                  {`${month} ${day}, ${year}`}
                  <span className="admin">{dat.username}</span>
                </p>
                <NavLink to={`/single/${dat.uuid}`}>
                  <h2 className="semititle">{dat.title}</h2>
                </NavLink>
                <p>{`${dat.post.substring(0, 60)}...`}</p>
              </div>
            );
          })
        : " fetching data"}
    </>
  );
};

export default Maincomp3;
