import React from "react";
import LoginForm from "./User/LoginForm";
import AboutUs from "./Components/aboutUs";
import Carousel from "./Components/carousel";
import farmers from "./Assets/farmers.json";
import Lottie from "lottie-react";
import Footer from "./Components/footer";
import { useState, useEffect } from "react";

export default function LandingPage({ token }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading ? (
    <Lottie
      className=" min-h-screen absolute top-0 min-w-full bg-gray-100 w-2/6 h-2/6 "
      animationData={farmers}
    />
  ) : (
    <div>
      <div>
        <LoginForm token={token} />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
