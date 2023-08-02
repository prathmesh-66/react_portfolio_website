import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form"; // Correct the import path here

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat" />
      <Form /> {/* Use the imported Form component */}
      <Footer />
    </div>
  );
};

export default Contact;
