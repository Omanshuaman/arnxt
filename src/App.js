import React, { useState, useEffect } from "react";
import Logo from "./assests/logo.png";
import Ellipse from "./assests/ellipse.svg";
import Line from "./assests/line.svg";
import Hero from "./assests/hero.jpg";
import Quleep from "./assests/quleeplogo.svg";
import Android from "./assests/android.svg";
import Ios from "./assests/ios.svg";
import Volume from "./assests/volume.png";
import Mp3 from "./assests/logospell.mp3";

import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const audioElement = document.querySelector("audio");
    if (!isPlaying) {
      audioElement.play();
      setIsPlaying(true);
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };
  const iconStyle = {
    backgroundImage: `url(${Volume})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "24px",
    height: "24px",
    opacity: isPlaying ? "1" : "0.5",
  };

  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">
          <img src={Logo} alt="Your SVG" className="logo-png"></img>
        </label>
        <div>
          <span>
            <div
              className="fa-2x"
              style={iconStyle}
              onClick={handlePlayClick}
            />
          </span>
          <audio hidden>
            <source src={Mp3} type="audio/mp3" />
          </audio>
        </div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>We are Hiring!</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <div className="sign-in-up">
            <button className="sign-button">Sign Up</button>
            <button className="sign-button">Sign In</button>
          </div>
        </ul>
      </nav>
      <section>
        <div className="background-ellipse">
          <div class="text-column">
            <div className="selleverything-text">
              <div className="sell-text">SELL</div>
              <div className="sell-text">EXPERIENCE</div>
              <div className="sell-text">ANYWHERE</div>
            </div>
            <div className="buttonanddivider">
              <div className="row-button">
                <button className="contact-us">Contact Us</button>
                <button className="contact-us">Become our Partner</button>
              </div>
              <div className="column-divider">
                <div className="trusted-text">Trusted By World Leaders</div>
                <img src={Line} alt="Your SVG" className="line-svg"></img>
              </div>
            </div>
          </div>

          <div class="image-column">
            <img src={Hero} alt="Your Image" className="hero-jpg" />
          </div>
        </div>
        <img src={Ellipse} className="ellipse-svg"></img>
      </section>
      <footer>
        <div className="footer-child1">
          <img src={Quleep} alt="Your Image" className="quleep-svg" />

          <div className="footer-child1text">
            Arnxt is a product by Quleep. Quleep specialises in developing B2B2C
            Augmented reality product for business across the Globe. We are
            expert in creating immersive and outstanding visual delight that
            intensify human interaction through emerging technologies.
          </div>
        </div>
        <div className="footer-child2">
          <div className="a-tag">Resources</div>
          <div className="a-tag">Blogs</div>
          <div className="a-tag">Career</div>
          <div className="a-tag">Privacy Policy</div>
          <div className="a-tag">Terms and Conditions</div>
          <div className="a-tag">Submit your query</div>
        </div>
        <div className="footer-child3">
          <div className="a-tag">Contact us</div>
          <div className="a-tag">
            Noida - Serenia, IHDP Business Park, Sector 127, Noida-201303
          </div>
          <div className="a-tag">
            Kolkata - 11th floor Kamdhenu Building 75C, Park Street,
            Kolkata-700016 .
          </div>
          <div className="a-tag">+91 9883019518</div>
          <div className="a-tag">reach us at care@arnxt.com</div>
        </div>
        <div className="footer-child4">
          <img src={Android} alt="Your Image" className="android-svg" />
          <img src={Ios} alt="Your Image" className="ios-svg" />
          <div className="a-tag">Subscribe to arnxt newsletter</div>
          <input className="subscribe-input" placeholder="Email ID"></input>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
