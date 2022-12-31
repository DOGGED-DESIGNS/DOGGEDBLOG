import Main2comp2 from "../components/main2/main2comp2";
import Navbar from "../components/navbar";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Drawcat from "../hook/drawcat";

import Generalhook from "../hook/generalhook";

const Under = (props) => {
  const { general, dispatch, tog } = Generalhook();

  const { data, cat, loading, error } = Drawcat();
  const { id } = useParams();

  useEffect(() => {
    cat(id);
  }, [tog]);

  let counter = 0;

  return (
    <>
      <header>
        <Navbar />
        <section>
          {!loading ? (
            data.data < 1 ? (
              <h2 className=" border text-capitalize font-weight-bold text-center text-primary pt-5">
                {" "}
                coming soon ..
              </h2>
            ) : (
              <div className=" main2__comp2">
                {data.data.map((inn) => {
                  counter++;
                  return (
                    <div className="main2__comp2--cover" key={inn.uuid}>
                      <div>
                        <span>{counter}</span>
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
                })}
              </div>
            )
          ) : (
            " fetching data"
          )}
        </section>
      </header>
    </>
  );
};

export default Under;
