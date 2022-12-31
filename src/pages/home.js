import Headercomp1 from "../components/header/headercomp1";
import Headercomp2 from "../components/header/headercomp2";
import Maincomp1 from "../components/main1/comp1";
import Maincomp2 from "../components/main1/comp2";
import Maincomp3 from "../components/main1/comp3";
import Navbar from "../components/navbar";

import Main2comp1 from "../components/main2/main2comp1";
import Main2comp2 from "../components/main2/main2comp2";
import Realestatebtn from "../components/button/realestatebtn";
import Innovationbtn from "../components/button/innovationbtn";
import Main3comp1 from "../components/main3/main3comp1";
import Main3comp2 from "../components/main3/main3comp2";
import Category from "../components/category";
import Recentlyadded from "../components/recentlyadded";
import Newsletter from "../components/newsletter";
import Generalhook from "../hook/generalhook";

const Home = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <Headercomp1 />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="small-box">
                  <Headercomp2 />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="main1">
          <div className="main1__grid">
            <div className="comp1">
              <Maincomp1 />
            </div>
            {/* <!-- end of comp 1 --> */}
            {/* <!-- comp 2 --> */}
            <div className="comp2">
              <Maincomp2 />
            </div>
            {/* <!-- end of comp2 --> */}
            {/* <!-- comp 3 --> */}
            <div className="comp3">
              <div>
                <Maincomp3 />
              </div>
            </div>
            {/* <!-- end of comp 3 --> */}
          </div>
        </section>

        {/* main2 */}

        <section className="main2">
          <h1 className="semititle3">Innovation</h1>

          {/* <!--  MAIN2 COMP1 --> */}
          <div className="main2__comp1">
            <Main2comp1 />
          </div>

          {/* <!-- MAIN2 COMP1 --> */}

          <div className="main2__comp2">
            <Main2comp2 />
          </div>

          {/* <!-- buttonts --> */}
          <Realestatebtn />
        </section>
        <section className="main2">
          <h1 className="semititle3">Real estate</h1>

          {/* <!--  MAIN2 COMP1 --> */}
          <div className="main2__comp1">
            <Main3comp1 />
          </div>

          {/* <!-- MAIN2 COMP1 --> */}

          <div className="main2__comp2">
            <Main3comp2 />
          </div>

          {/* <!-- buttonts --> */}
          <Innovationbtn />
        </section>
        <section className="main3">
          <h1 className="semititle3">category</h1>
          <div className="main3__comp1">
            <Category />
          </div>
        </section>
        <section className="main4">
          <h1 className="semititle3">Recently added</h1>
          <div className="main4__cover">
            <div className="main4__comp1">
              <Recentlyadded />
            </div>
            <div className="main4__comp2">
              <Newsletter />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
