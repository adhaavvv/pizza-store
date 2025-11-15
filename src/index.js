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
  const closeHour = 22;
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
  const closeHour = 22;
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

// function Menu() {
//   return (
//     <ul>
//       {pizzaData.map((pizza) => (
//         <PizzaItem
//           name={pizza.name}
//           ingredients={pizza.ingredients}
//           price={pizza.price}
//           photoName={pizza.photoName}
//           soldOut={pizza.soldOut}
//         />
//       ))}
//     </ul>
//   );
// }


function Menu() {
    return (
        <div className="menu" style={{ fontFamily:"Courier New" }}>
            <h2>Our Menu</h2>
            <div className="pizzas">
              <Pizza 
                photoName="pizzas/margherita.jpg"
                image_alt="Margherita Pizza"
                name="Margherita Pizza"
                ingredients="Tomato, Mozzarella Cheese"
                price="10"> </Pizza>
                <Pizza 
                photoName="pizzas/spinaci.jpg"
                image_alt="Spinaci Pizza"
                name="Spinaci Pizza"
                ingredients="Tomato, Mozzarella Cheese, Spinach"
                price="12"> </Pizza>
                <Pizza
                  photoName="pizzas/funghi.jpg"
                  image_alt="Funghi Pizza"
                  name="Funghi Pizza"
                  ingredients="Tomato, Mozzarella Cheese, Mushrooms, Onion"
                  price="12"></Pizza>
                <Pizza
                  photoName="pizzas/salamino.jpg"
                  image_alt="Salamino Pizza"
                  name="Salamino Pizza"
                  ingredients="Tomato, Mozzarella Cheese, Pepperoni"
                  price="15"></Pizza>
                <Pizza
                  photoName="pizzas/prosciutto.jpg"
                  image_alt="Prosciutto Pizza"
                  name="Prosciutto Pizza"
                  ingredients="Tomato, Mozzarella Cheese, Ham, Aragula, Burrete Cheese"
                  price="18"></Pizza>
                <Pizza
                  photoName="pizzas/focaccia.jpg"
                  image_alt="Focaccia"
                  name="Focaccia"
                  ingredients="Bread with Italian Olive Oil and Rosemary"
                  price="6"></Pizza>

        </div>
        </div>

    )
}

function Pizza({ photoName, image_alt, name, ingredients, price }) {
    return (
      <div className="pizza">
        <img src={photoName} alt={image_alt} width="150" style={{ borderRadius:"10px"}}></img>
        <h3>{name}</h3>
        <p>{ingredients}</p>
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
