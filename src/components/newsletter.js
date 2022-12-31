const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div>
          <img src="./img/big newsblogsvg.svg" alt="" />
        </div>
        <h2 className="text-center semititle3">get news letter</h2>

        <p className="text-center text-capitalize">
          get every weekly update and insight freedback
        </p>
        <input type="text" placeholder="email" />
        <a href="#">
          <div>
            subscribe
            <div className="genimg2">
              <img src="./img/submitblogsvg.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Newsletter;
