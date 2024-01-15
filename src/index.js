import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
    <div className="container">
        <Header />
        <Menu />
        <Footer/>
    </div>
    );
}

function Header() {
  // const style = {color: "red", fontSize: "32px", textTransform: "uppercase"};
  return (
  <header className="header"> 
  <h1>Fast React Pizza Co.</h1>
  </header>
  );
}

function Menu(){
  const pizzas = pizzaData;
  // const pizzas = 0;
  const numPizzas = pizzas.length;
return ( 
  <main className="menu">
    <h2>Our Menu</h2>
    {/* conditional rendering if there is data than true and && after will be executed  and can;t return 0 only true or false*/}
      {numPizzas > 0 ? (
        <>
            <p>Authentic italian cuisine bla blah blaj</p>
            <ul className="pizzas">
            {pizzaData.map((pizza) => 
            <Pizza pizzaObject={pizza} key={pizza.name}/>)}
            </ul>
        </>
      ): (<p>We're still working on our menu. Please come back later ;) </p>)
      }
  </main>
);
}

function Pizza({pizzaObject}){
  return (
  <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
      <div>
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <span>{pizzaObject.soldOut ? "SOlD OUT" : pizzaObject.price}</span>
      </div>
  </li>
  );
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

 return ( 
 <footer className="footer">
    {isOpen ?  (
       <Open closeHour={closeHour} openHour={openHour}/>
    ):( <Closed closeHour={closeHour}/>)
    }
 </footer>
 );
}

function Open({closeHour, openHour}){
return (
  <div className="order">
  <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.</p>
  <button className="btn">Order</button>
  </div>
)
}

function Closed({closeHour}){
  return (
  <div>
      <p>We are open till {closeHour}:00</p>  
  </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
         <App />
    </React.StrictMode>
);