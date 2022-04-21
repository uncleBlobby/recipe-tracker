import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [ingredients, setIngredients] = useState([{
    quantity: "",
    unit: "",
    name: "",
  }])

  const [ingredientRows, setIngredientRows] = useState(1)

  const AddIngredientRow = () => {
    let newIngredientItem = {
      quantity: "",
      unit: "",
      name: ""
    }
    
    setIngredients([...ingredients, newIngredientItem])
  }

  const IngredientRow = () => {
    console.log(`here`)
    return (
      <tr>
      <td>
        <input defaultValue={`Quantity`}/> 
      </td>
      <td>
        <input className="ShortInput" defaultValue={`Units`}/> 
      </td>
      <td>
        <input defaultValue={`Ingredient`}/>
      </td>
        <td>
          <button className="AddIngredientButton" onClick={() => AddIngredientRow()}>+</button>
        </td>
      </tr>
    )
  }

  console.log(ingredients)

  return (
    <div className="App">
      Recipe Name: <input />
      <table className="MainTable">
        <thead>
      Ingredients:
        </thead>
        <tbody>
        {ingredients.map((ingredient, i) => <IngredientRow key={i} />)}
        </tbody>
      </table>
       
    </div>
  )
}

export default App
