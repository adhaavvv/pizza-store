// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { pizza } from "./data.js";

function App() {
  return (
    <div className="container">
    <div style={{ textAlign: "center"}}>
      <Header />
      <Tagline />
      <div style={{marginTop: "10px"}}>
        <Menu pizzas={pizza}/>
      </div>
        <div style={{ marginTop: "30px"}}>  
      <Footer /> 
      <OrderButton />
      </div> 
    </div>
    </div>
  );
}

function OrderButton() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 25;
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return (
    <div style={{marginTop: "10px"}}>
    {isOpen ? (<button className='btn' onClick={() => alert("Your order has been placed!")}> Order </button>) : " "}
    </div>
  );
}

function ShopOpenHours() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 25;
  return currentHour >= openHour && currentHour < closeHour;
}

function Tagline() {
  const isOpen = ShopOpenHours();

  return (
    <div style={{ textAlign: "center"}}>
      <p style={{ fontFamily: "Courier New", fontSize: "15px"}}>{isOpen ? "Authentic Italian Cuisine" : " "}</p>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 style={{ fontFamily: "Arial Black" , color: "orange", textAlign: "Center", fontSize: "48px", textTransform: "uppercase" }}>Adhav's Pizza Co.</h1>
    </div>
  );
}

// function Menu({ pizzas }) {
//   return(
//     <div>
//       {pizzas.map((pizza, index) => (
//         <Pizza
//             key={index}
//             name={pizza.name}
//             ingredients={pizza.ingredients}
//             price={pizza.price}
//             photoName={pizza.photoName}
//             soldOut={pizza.soldOut}
//         />
//       ))}
//     </div>
//   )
// }

function Menu() {
    return (
        <div className="menu" style={{ fontFamily:"Courier New" }}>
            <h2>Our Menu</h2>
            <div className="pizzas">
              <Pizza 
                image_source="pizzas/margherita.jpg"
                image_alt="Margherita Pizza"
                type="Margherita Pizza"
                desc="Tomato, Mozzarella Cheese"
                price="10"> </Pizza>
                <Pizza 
                image_source="pizzas/spinaci.jpg"
                image_alt="Spinaci Pizza"
                type="Spinaci Pizza"
                desc="Tomato, Mozzarella Cheese, Spinach"
                price="12"> </Pizza>
                <Pizza
                  image_source="pizzas/funghi.jpg"
                  image_alt="Funghi Pizza"
                  type="Funghi Pizza"
                  desc="Tomato, Mozzarella Cheese, Mushrooms, Onion"
                  price="12"></Pizza>
                <Pizza
                  image_source="pizzas/salamino.jpg"
                  image_alt="Salamino Pizza"
                  type="Salamino Pizza"
                  desc="Tomato, Mozzarella Cheese, Pepperoni"
                  price="15"></Pizza>
                <Pizza
                  image_source="pizzas/prosciutto.jpg"
                  image_alt="Prosciutto Pizza"
                  type="Prosciutto Pizza"
                  desc="Tomato, Mozzarella Cheese, Ham, Aragula, Burrete Cheese"
                  price="18"></Pizza>
                <Pizza
                  image_source="pizzas/focaccia.jpg"
                  image_alt="Focaccia"
                  type="Focaccia"
                  desc="Bread with Italian Olive Oil and Rosemary"
                  price="6"></Pizza>

        </div>
        </div>

    )
}

function Pizza({ image_source, image_alt, type, desc, price }) {
    return (
      <div className="pizza">
        <img src={image_source} alt={image_alt} width="150" style={{ borderRadius:"10px"}}></img>
        <h3>{type}</h3>
        <p>{desc}</p>
        <p>${price}</p>
      </div>
    );
  }

// function Pizza({ name, ingredients, price, photoName, soldOut }) {
//   return (
//     <div className="pizza">
//       <img src={photoName} alt={name} width="150" style={{ borderRadius:"10px"}} />
//       <h3>{name}</h3>
//       <p>{ingredients}</p>
//       <p>${price}</p>
//       {soldOut && <p style={{color:"red"}}>Sold Out</p>}
//     </div>
//   );
// }


function Footer() {
    const isOpen = ShopOpenHours();
  
    return (
      <footer className="footer">
        <p>{isOpen ? "We're currently open!" : "Sorry we're closed."}</p>
      </footer>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
