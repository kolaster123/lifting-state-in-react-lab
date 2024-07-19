// src/components/IngredientList.jsx
const IngredientList = ({ ingredients, addToBurger }) => {
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
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            action={() => addToBurger(ingredient)}
            actionText="+"
          />
        ))}
      </ul>
    );
  };
  
  export default IngredientList;
  