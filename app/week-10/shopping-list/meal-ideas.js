"use client";
import React, { useEffect, useState } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const jsonData = await response.json();
      setSelectedMeal(jsonData.meals[0]); // Update selectedMeal with the details of the clicked meal
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const jsonData = await response.json();
      setMeals(jsonData.meals);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Meal Ideas</h2>
      </div>
      <div>
        <p className="text-black font-bold">
          Here are some meal ideas using {ingredient}:
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-64">
          <div className="flex text-center">
            <ul>
              {meals ? (
                meals.map((meal) => (
                  <li
                    className="my-5 bg-green-400 cursor-pointer hover:bg-green-700"
                    key={meal.idMeal}
                    onClick={() => fetchMealDetails(meal.idMeal)}
                  >
                    {meal.strMeal}
                    {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                      <ul>
                        {Object.keys(selectedMeal).map((key) =>
                          key.startsWith("strIngredient") &&
                          selectedMeal[key] ? (
                            <li
                              className=" cursor-not-allowed py-2 bg-green-300 text-black"
                              key={key}
                            >
                              {selectedMeal[key]}
                            </li>
                          ) : null
                        )}
                      </ul>
                    )}
                  </li>
                ))
              ) : (
                <li>No meal ideas found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealIdeas;
