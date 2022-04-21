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

  const [ingredientInput, updateIngredientInput] = useState({})

  const [currentQTYInput, setCurrentQTYInput] = useState('')

  const [ingredientRows, setIngredientRows] = useState(1)

  const AddIngredientRow = () => {
    let newIngredientItem = {
      quantity: "",
      unit: "",
      name: ""
    }
    
    setIngredients([...ingredients, newIngredientItem])
  }

  const InputBoxScanner = (inputType, event) => {
    console.log(`${inputType}: ${event.target.value}`);
  }
  
  const QTYInputScanner = (event) => {
    console.log(`QTY: ${event.target.value}`)
    // TODO: this is currently broken -- updating the state results in a re-render and clears the input
    // should not be clearing the input box
    // SOLUTION: do not update the state until the data is ready to be committed 
    // Move state update to green checkmark button
    //setCurrentQTYInput(event.target.value);
    
  }

  const IngredientRow = () => {
    //console.log(`here`)
    return (
      <tr>
      <td>
        <input onChange={() => QTYInputScanner(event)} id="QTYInput" className="QuantityInput" placeholder='Quantity' /> 
      </td>
      <td>
        <input className="ShortInput" placeholder='Units'/> 
      </td>
      <td>
        <input className="IngredientNameInput" placeholder='Ingredient Name'/>
      </td>
      <ConfirmIngredientButton quantity={currentQTYInput}/>

      </tr>
    )
  }

  const ConfirmedIngredientRow = (quantity, units, ingredient) => {
    return (
      <tr>
      <td>
        {quantity} 
      </td>
      <td>
        {units}
      </td>
      <td>
        {ingredient}
      </td>
      <EditIngredientButton />

      </tr> 
    )
  }

  const ConfirmIngredientButton = (quantity) => {
    return (
      <td>
        <button className="ConfirmButton" onClick={() => ConfirmIngredientButtonFunction(quantity)} />
      </td>
    )
  }

  const ConfirmIngredientButtonFunction = (quantity) => {
    console.log(`confirmed ingredient: QTY: ${quantity}`)
  }
  
  const EditIngredientButton = () => {
    return (
      <td>
        <button className="EditIngredientButton"> Edit </button>
      </td>
    )
  }


  const AddIngredientButton = () => {
    return (
      <tr>
    <td>
      <button className="AddIngredientButton" onClick={() => AddIngredientRow()}>+</button>
    </td>
    </tr>
    )
  }

  console.log(ingredients)

  return (
    <div className="App">
      Recipe Name: <input /> Date: <input placeholder='DD-MM-YY' /> Batch: <input placeholder='Batch No.' />
      <table className="MainTable">
        <thead>
          <tr>
            <th>Ingredients:</th>
          </tr>
        </thead>
        <tbody>
        {ingredients.map((ingredient, i) => <IngredientRow key={i} />)}
        <AddIngredientButton />
        </tbody>
      </table>
       
    </div>
  )
}

export default App
