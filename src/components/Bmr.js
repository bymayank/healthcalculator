import { Dropdown, Input, Button } from '@innovaccer/design-system'
import React from 'react'
import { useState } from 'react'

export default function Bmr() {

  const[weight, setWeight] = useState("")
  const[height, setHeight] = useState("")
  const[age, setAge] = useState("")
  const[bmr, setBmr] = useState(0);
  const[gender, setGender] = useState(0);

  function bmrCalc(e){
    if (weight > 0 && height > 0 && age>1) {
      if (gender === 1){
        setBmr(((10*weight)+(6.25*height)-(5*age)+5).toFixed(1));
      } 
      else if (gender === 2) {
        setBmr(((10*weight)+(6.25*height)-(5*age)-161).toFixed(1));
      }
    } 
    else {
      setBmr(0)
      alert("Please enter a valid weight, height and age");
    }

    setWeight("");
    setHeight("");
    setAge("");
  }




  return (
    <>
      <h1>BMR (Basal Metabolic Rate) Calculator</h1>
      <form >
        <div className="w-50">
          <Input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)"/>
          <Input value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)"/>
          <Input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age"/>
          <Dropdown className="w-50" options={[{ label: "Male", value: 1 }, { label: "Female", value: 2 },]} placeholder="Gender" onChange={(value) => setGender(value)} />
        </div>
        <div>
            <Button onClick={bmrCalc} disabled={!(weight>0 && height>0 && age>0 && gender)}>
              Submit
            </Button>
        </div>

      </form>
      <div>
          <h2>Your BMR is: {bmr} Calories/Day</h2>
          <table >
            <tbody>
            <tr >
              <th>Type of Lifestyle</th>
              <th>Description</th>
              <th>Calories/Day</th>
            </tr>
            <tr>
              <td>Sedentary</td>
              <td>Little or no exercise :- </td>
              <td>{1.2*bmr}</td>
            </tr>
            <tr>
              <td>Slightly Active</td>
              <td>Exercise 1-3 times/week :- </td>
              <td>{1.375*bmr}</td>
            </tr>
            <tr>
              <td>Moderately Active</td>
              <td>Exercise 3-5 times/week :- </td>
              <td>{1.55*bmr}</td>
            </tr>
            <tr>
              <td>Slightly Active</td>
              <td>Exercise 6-7 times/week :- </td>
              <td>{1.725*bmr}</td>
            </tr>
            <tr>
              <td>Extremely Active</td>
              <td>Very intense exercise daily, or physical job :- </td>
              <td>{1.9*bmr}</td>
            </tr>
            </tbody>
            
          </table>
      </div>
    </>
  )
}
