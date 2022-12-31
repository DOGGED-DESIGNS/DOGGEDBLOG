import Related from "../hook/related";

import { useEffect } from "react";

import { NavLink } from "react-router-dom";

const Relatedcomp = ({ uuid, category }) => {
  const { relate, loading, error, data } = Related();
  useEffect(() => {
    relate(uuid, category);
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
        ? data.data.slice(0, 3).map((rec, index) => {
            const month = Month[new Date(data.data[0].time).getMonth()];
            const year = new Date(data.data[0].time).getFullYear();
            const day = new Date(data.data[0].time).getDate();
            return (
              <div className="comp3__cover" key={index}>
                <p className="text-capitalize text-center">
                  {`${month} ${day}, ${year}`}
                  <span className="admin">{rec.username}</span>
                </p>
                <a
                  href={`/single/${rec.uuid}`}
                  onClick={(e) => {
                    // setHandle(!handle);
                  }}
                >
                  <h2 className="semititle">{rec.title}</h2>
                </a>
                <p>{`${rec.post.slice(0, 70)}..`}</p>
              </div>
            );
          })
        : "fetching data"}
    </>
  );
};

export default Relatedcomp;
