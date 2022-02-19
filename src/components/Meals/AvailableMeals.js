import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Soup",
    description:
      "If light is the word of the day, this is what you should have",
    price: 99,
  },
  {
    id: 2,
    name: "Grilled Burger",
    description: "This dish bypasses the stomach, goes directly to the heart!",
    price: 49,
  },
  {
    id: 3,
    name: "Pizza",
    description: "Hungry, need something perfect and fast? Ceeeertoooo!",
    price: 1,
  },
  {
    id: 4,
    name: "Italian Pasta",
    description: "Only for the connaisseurs, cheesy pasta with red sauce",
    price: 10,
  },
  {
    id: 5,
    name: "Steak",
    description: "Only for the strong!",
    price: 7,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
