import React from "react";

function Home() {
  return (
    <div>
      <h1 className="title">
        Welcome To Did You know
        <img
          width="6%"
          src="https://i.pinimg.com/originals/c9/0b/74/c90b744829f3d55fd0731cc52af9edc6.jpg "
          alt="img"
        />{" "}
      </h1>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg ">
            <img
              className="img"
              width="75%"
              src=" https://previews.123rf.com/images/houbacze/houbacze1701/houbacze170100275/70447677-tomato-easy-vector-illustration-isolated-paper-bubble-banner-did-you-know-this-element-is-well-adapted-.jpg"
              alt="img"
            />
          </div>
          <div class="col-lg">
            <h2 class="tagline">
              We provides Heaps of interesting fun facts and figures to keep you
              entertained.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
