import './App.css';
import { useState } from 'react'

function App() {

  const [value, setValue] = useState('')
  const [country, setCountry] = useState([])

  const onChangeHandler = (e) => {
    let newData = e.target.value.split(',')
    setCountry(newData)
  }

  // sankar@silfratech.com

  const Button = [
    {
      id: 1,
      button: "Button1",
      value: "This is Button 1"
    },
    {
      id: 2,
      button: "Button2",
      value: " This is Button 2"
    },
    {
      id: 3,
      button: "Button3",
      value: " This is Button 3"
    }]

  const countries = [
    {
      name: 'India',
      value: 'IN',
      cities: [
        'Delhi',
        'Mumbai'
      ]
    },
    {
      name: 'Pakistan',
      value: 'PK',
      cities: [
        'Lahore',
        'Karachi'
      ]
    },
    {
      name: 'Bangladesh',
      value: 'BG',
      cities: [
        'Dhaka',
        'Chittagong'
      ]
    }
  ];

  return (
    <div className="App">

      {Button.map((element) => {
        return <h1 key={element.id} onClick={() => setValue(element.value)}>{element.button}</h1>
      })}

      <h2>Value of button is : {value}</h2>

      <form>
        <select onChange={onChangeHandler} style={{ marginRight: '10px' }}>
          <option>Select</option>
          {countries.map((element, index) => {
            return <option value={element.cities} key={index}>{element.name}</option>
          })}
        </select>

        <select>
          <option>Select</option>
          {country.length > 0 && country.map((element,index) => {
            return <option value={element} key={index}>{element && element}</option>
          })}

        </select>

      </form>

    </div>
  );
}

export default App;
