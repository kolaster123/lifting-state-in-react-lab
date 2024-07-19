// src/components/BurgerStack.jsx
import React from 'react';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  const Ingredient = ({ ingredient, action, actionText }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={action}>{actionText}</button>
      </li>
    );
  };

  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            action={() => removeFromBurger(index)}
            actionText="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
