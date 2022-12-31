import { NavLink } from "react-router-dom";
import Onlycat from "../hook/onlycat";

import { useEffect, useState } from "react";

import Under from "../pages/under";
import Generalhook from "../hook/generalhook";

const Navbar = () => {
  const { Add, draw, error, loading } = Onlycat();

  const [toggle, setToggle] = useState(false);

  const [indexz, setIndexz] = useState(null);

  const { dispatch, general, tog } = Generalhook();

  useEffect(() => {
    Add();
  }, []);

  return (
    <>
      <nav className="navz">
        <div className="container">
          <NavLink to={"/"}>
            <div className="imglogo">
              <img src="../img/logoblogsvg.svg" alt="logo" />
            </div>
          </NavLink>
          <div className={toggle ? "activez navz__cont" : "navz__cont"}>
            <div className="navz__first">
              <div className="navz__first--sec">
                <div>
                  <div className="genimg">
                    <img
                      className=""
                      src="../img/small newsblogsvg.svg"
                      alt=""
                    />
                  </div>
                  <a
                    className="span1"
                    href="
                  #"
                  >
                    <span className="span1">news letter</span>
                  </a>
                </div>

                {general[0].user ? (
                  <div>
                    <div className="genimg">
                      <img className="" src="../img/userblogsvg.svg" alt="" />
                    </div>
                    <span className="span1">uzoechi</span>
                  </div>
                ) : (
                  ""
                )}

                {general[0].user ? (
                  <div>
                    <a className="logout" href="#">
                      Logout
                    </a>
                  </div>
                ) : (
                  <div>
                    <a className="btnz" href="#">
                      Login
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="navz__second">
              <ul>
                {!loading
                  ? draw.data.slice(3, 6).map((c, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className={index === indexz ? "linkactive" : ""}
                            to={`/under/${c.category}`}
                            onClick={() => {
                              tog();
                              setIndexz(index);
                            }}
                          >
                            {c.category}
                          </NavLink>
                        </li>
                      );
                    })
                  : "fetching data"}
              </ul>

              <div>
                <NavLink className="mr-5" to={"/search"}>
                  <div className="genimg">
                    <img className="" src="../img/searchblogsvg.svg" alt="" />
                  </div>
                </NavLink>

                {general[0].user ? (
                  <NavLink to={"/write"} className="btnz">
                    write
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="ham"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
