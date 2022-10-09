import React, { useState, useEffect } from "react";
import "./styles/form.css";
import Mail from "../../static/images/news.png";
import MailchimpForm from "./CustomForm";
function MailChimp() {
  const postUrl =
    "https://gmail.us18.list-manage.com/subscribe?u=e9ce3401f062aa032357227a9&id=f2eef6e434";

  return (
    <div>
      <div className="container rowx">
        <section className="col50 mail">
          <img src={Mail} alt="" />
        </section>
        <section
          className="col50 Subscribe "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            {" "}
            <h1>Subscribe to our newsletter</h1>
            <p>
              Be the first to get exclusive offers and the latest news on our
              product directly in your inbox.
            </p>
            <div className="">
              <MailchimpForm url={postUrl} />
            </div>
          </div>
          {/* <MailChimp /> */}
        </section>
      </div>
    </div>
  );
}

export default MailChimp;
