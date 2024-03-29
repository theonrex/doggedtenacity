import React from "react";
import NewsLettersubcribe from "./NewsLettersubcribe";
import DarkMode from "../components/darkmode";

function App() {
  return (
    <div className="">
      <div className="dark_float">
        <button className="dark_nav_btn my-float ">
          <DarkMode />
        </button>
      </div>
      <div className="">
        <NewsLettersubcribe />
        {/* Footer  */}
        <footer className="text-center text-white">
          {/* Grid container  */}
          <div className="container">
            {/* Section: Links  */}
            <section className="mt-5">
              {/* Grid row */}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* Grid column  */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/about" className="text-white">
                      About
                    </a>
                  </h6>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/post" className="text-white">
                      Blog
                    </a>
                  </h6>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}

                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#gallery" className="text-white">
                      Gallery
                    </a>
                  </h6>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/contact" className="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
                {/* Grid column  */}
              </div>
              {/* Grid row */}
            </section>
            {/* Section: Links  */}
            <hr className="my-5" />
            {/* Section: Text  */}
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    A blog for people who want more good things in life and to
                    lead peaceful lives. It's full of unique articles and blog
                    posts you won't be able to find anywhere else.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* Grid container  */}
          <div className="text-center p-3">
            © 2020 Copyright:{" "}
            <a className="text-white" href="/#">
              Dogged Tenacity
            </a>
          </div>
        </footer>
      </div>
      {/* End of .container  */}
    </div>
  );
}

export default App;
