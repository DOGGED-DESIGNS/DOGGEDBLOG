import Navbar from "../components/navbar";

const Write = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <section className="write">
          <div className="write__cover">
            <div className="write__comp1 my-3">
              <input type="text" placeholder="title" />
              <textarea
                placeholder="post"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="write__comp2 p-3">
              <div className="border write__comp2--cover mb-5 p-3">
                <h2 className="semititle3 text-decoration-none p-0 mb-3">
                  publish
                </h2>
                <div>
                  <p className="text-left">
                    <span className="font-weight-bolder p-0 border-left-0 admin">
                      visibility :
                    </span>
                    public
                  </p>
                  <p className="text-left">
                    <span className="font-weight-bolder p-0 border-left-0 admin">
                      status :
                    </span>
                    public
                  </p>
                  <label className="semititle mb-3" for="file">
                    upload image
                  </label>
                  <input type="file" className="d-none" id="file" />

                  <div className="d-flex justify-content-between">
                    <a href="" className="btnz">
                      upload
                    </a>
                    <a href="" className="btnz">
                      save to draft
                    </a>
                  </div>
                </div>
              </div>
              <div className="border write__comp2--cover mb-5 p-3">
                <h2 className="semititle3 text-decoration-none p-0 mb-3">
                  category
                </h2>
                <div>
                  {/* <!-- category section --> */}
                  <div className="pl-2 radio mb-3">
                    <input type="radio" name="radio" />
                    <span className="font-weight-bolder p-0 border-left-0 admin">
                      education
                    </span>
                  </div>
                  <div className="pl-2 radio mb-3">
                    <input type="radio" name="radio" />
                    <span className="font-weight-bolder p-0 border-left-0 admin">
                      food
                    </span>
                  </div>
                  <div className="pl-2 mb-3">
                    <input type="radio" name="radio" />
                    <span className="font-weight-bolder p-0 border-left-0 admin">
                      Technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Write;
