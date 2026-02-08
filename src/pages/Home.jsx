import React from "react";
import PostCards from "../api/PostCards.jsx";
import WelcomeProfileCard from "../basics/WelcomeProfileCard.jsx";


// Página principal con ejemplos prácticos de cada unidad.
const Home = () => {

  return (
    <div className="container py-4">
        <div className="">
            <WelcomeProfileCard image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"/>
        </div>
      <section className="mb-5">
        <h2 className="mb-3">Feed</h2>
        <PostCards />
      </section>
    </div>
  );
};

export default Home;
