const meatOptions = ["Bacon", "Sausage", "Ham", "Turkey", "Turkey Bacon", "Scrapple"];

const breakfastMenu = [
    {name: "Toast w/ Butter & Jelly", price: 1.25, description: "", count: 0, },
    {name: "Bagel w/ Butter & Jelly", price: 1.50, description: "", count: 0, },
    {name: "Bagel w/ Cream Cheese", price: 2.50, description: "", count: 0, },
    {name: "Egg Sandwich", price: 2.50, description: "", count: 0, },
    {name: "Egg Sandwich w/ Meat & Cheese", price: 3.50, description: "", count: 0, meat: meatOptions },
    {name: "Bagel or Croissant w/ Meat, Egg, & Cheese", price: 3.95, description: "", count: 0, meat: meatOptions },
    {name: "English Muffin w/ Meat, Egg, & Cheese", price: 3.75, description: "", count: 0, meat: meatOptions },
    {name: "Grilled Cheese", price: 2.50, description: "", count: 0, },
    {name: "Grilled Cheese w/ Meat", price: 3.50, description: "", count: 0, meat: meatOptions },
    {name: "B.L.T.", price: 5.75, description: "", count: 0, },
    {name: "B.L.T w/ Egg", price: 4.50, description: "", count: 0, },
    {name: "Breakfast Platter Special", price: 5.25, description: "", count: 0, meat: meatOptions },
    {name: "Breakfast Platter w/out Meat", price: 4.25, description: "", count: 0, },
    {name: "Steak, Egg, and Cheese", price: [5.25, 6.75], description: "", count: 0, type: ["Sandwich", "Sub"] },
    {name: "Pancakes or French Toast", price: 4.25, description: "", count: 0, type: ["Pancakes", "French Toast"] },
    {name: "Pancakes or French Toast Platter", price: 6.25, description: "", count: 0, meat: meatOptions, type: ["Pancakes", "French Toast"] },
    {name: "Cheese Omelet", price: 4.25, description: "", count: 0 },
    {name: "Ham & Cheese Omelet", price: 5.25, description: "", count: 0 },
    {name: "Western Omelet", price: 5.95, description: "", count: 0 }
   ];

  
const lunchMenu = [];
const platterMenu = [];
const saladMenu = [];
const sidesMenu = [];
const comboMenu = [];
const drinkMenu = [];


 const petersMenu = [breakfastMenu, lunchMenu, platterMenu, saladMenu, sidesMenu, comboMenu, drinkMenu];

const menuItems = [
  { name: "BLT", price: 3, category: "breakfast" },
  { name: "Bagel", price: 1, category: "breakfast" },
  { name: "Bacon Egg & Cheese", price: 3, category: "breakfast" },
  { name: "Grilled Cheese", price: 2, category: "breakfast" },
  { name: "Turkey Sub", price: 5, category: "lunch" },
  { name: "Chicken Wrap", price: 4, category: "lunch" },
  { name: "Burger", price: 4, category: "dinner" },
  { name: "Fish Dinner", price: 8, category: "dinner" },
  { name: "Chocolate Milk", price: 2, category: "drink" },
  { name: "Orange Juice", price: 2, category: "drink" }
];
