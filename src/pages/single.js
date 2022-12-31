import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

import Navbar from "../components/navbar";
import Drawcat from "../hook/drawcat";
import Generalhook from "../hook/generalhook";
import Singledraw from "../hook/singledraw";

import Related from "../hook/related";
import Relatedcomp from "../components/relatecomp";

const Single = () => {
  const { general, dispatch } = Generalhook();

  const [handle, setHandle] = useState(true);

  const dd = Related();

  const { id } = useParams();

  const { data, error, loading, singleonly } = Singledraw();

  useEffect(() => {
    singleonly(id);
  }, [handle]);

  const navigate = useNavigate();

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
  const month = Month[new Date(data?.data[0]?.time).getMonth()];
  const year = new Date(data?.data[0]?.time).getFullYear();
  const day = new Date(data?.data[0]?.time).getDate();

  if (!loading) {
    if (data.data.length < 1) {
      navigate("/");
    }
  }
  return (
    <>
      <header className="header">
        <Navbar />
        <section className="single">
          <div className="single__cover">
            {!loading ? (
              <div className="single__comp1">
                <div className="d-flex single__comp1--control">
                  <div className="single__comp1--svg">
                    <img
                      src={`http://localhost:4000${data.data[0].userimage}`}
                      alt=""
                    />
                  </div>
                  <p className="p-0 mb-4 text-center text-capitalize">
                    {`${month} ${day}, ${year}`}
                    <span className="admin">{data.data[0].username}</span>
                  </p>

                  {general[0].user && (
                    <div className="d-flex">
                      <a href="#" className="genimg2 d-block">
                        <img src="./img/deleteblogsvg.svg" alt="" />
                      </a>
                      <a href="#" className="genimg2 d-block">
                        <img src="./img/editblogsvg.svg" alt="" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="comp2__cover">
                  <div>
                    <img
                      src={
                        data.data[0].image == ""
                          ? data.data[0].altimage
                          : data.data[0].image
                      }
                      alt=""
                    />
                  </div>
                  <h4 className="semititle2">{data.data[0].title}</h4>
                  <p>{data.data[0].post}</p>
                </div>
              </div>
            ) : (
              "fetching data"
            )}

            <div className="single__comp2">
              <h2 className="text-center px-0 semititle3">related post</h2>
              {!loading ? (
                <Relatedcomp
                  uuid={data.data[0].uuid}
                  category={data.data[0].category}
                />
              ) : (
                "fetching data"
              )}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Single;
