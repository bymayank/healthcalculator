import { Dropdown, Input, Button } from "@innovaccer/design-system";
import React from "react";
import { useState } from "react";

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [unit, setUnit] = useState(1);

  function bmiCalc(e) {
    if (weight > 0 && height > 0) {
      if (unit === 1) {
        setBmi((weight / (height * height)).toFixed(1));
      } else if (unit === 2) {
        setBmi(((weight / (height * height)) * 703).toFixed(1));
      }
    } 
    
    setWeight("");
    setHeight("");
  }


  return (
    <>
      <h1>BMI (Body Mass Index) Calculator</h1>
      <form>
        <div className="w-50">
          <Dropdown
            options={[
              { label: "Metric Units (kg/m)", value: 1 },
              { label: "English Units (lb/in)", value: 2 },
            ]}
            placeholder="Units"
            onChange={(value) => setUnit(value)}
          />
          <h3>Weight in {unit === 1 ? "Kilograms (kg)" : "Pounds (lb)"} :</h3>
          <Input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />
          <h3>Weight in {unit === 1 ? "Metres (m)" : "Inches(in)"} :</h3>
          <Input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />
        </div>
        <div>
          <Button onClick={bmiCalc} disabled={!(weight>0 && height>0 && unit>0)}>Submit</Button>
        </div>
      </form>
      <div>
        <h2>Your BMI is: {bmi}</h2>
        <p>
          {bmi === 0
            ? ""
            : bmi < 25
            ? "You are underweight"
            : bmi >= 25 && bmi < 30
            ? "You are a healthy weight"
            : "You are overweight"}
        </p>
      </div>
    </>
  );
}
