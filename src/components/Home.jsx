import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio minus
            at magni consequatur molestias, quasi repellat, sed dignissimos,
            pariatur non nulla cupiditate aliquam illum. Laudantium iure a
            dolorem maiores quis similique! Laudantium architecto, cupiditate
            excepturi aperiam non cum quod ad accusantium repellendus eaque enim
            ipsam inventore in nesciunt nulla voluptate?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillGithub />
              <p>GitHub</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
