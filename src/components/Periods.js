import React from 'react'
import { Input, Button} from '@innovaccer/design-system'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

export default function Periods() {
  const[cycle, setCycle] =useState(0)
  const[date, setDate] =useState()
  const[length, setLength] =useState(0)
  const[next, setNext] =useState([])
  const[nextOv, setNextOv]=useState([])

  

  function periodCalc(e){
   e.preventDefault();
   Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    console.log(date.toLocaleDateString());
    return date;
   }
   setNext([]);
   setNextOv([]);
  for (let i=1;i<=3;i++){
    setNext(arr=>[...arr,date.addDays(i*cycle).toDateString()])
    setNextOv(arr=>[...arr,date.addDays(14+((i-1)*cycle)).toDateString()])
  }
  //  setNext(date.addDays(28).toDateString())
  //  setNextOv(date.addDays(14).toDateString())
  }
  console.log(next)
  console.log(nextOv)

  return (
    <>
      <form onSubmit={periodCalc}>
        <h1>Periods Calculator</h1>
        <div className="w-50">
          <h3>Select your Cycle Length :</h3>
          <Input value={cycle} onChange={(e) => setCycle(e.target.value)} placeholder="Average Length of Cycles"/>
          <h3>How long did it last?</h3>
          <Input value={length} onChange={(e) => setLength(e.target.value)} placeholder="Time Period"/>
          <h3>First Day of Your Last Period from the Calendar :</h3>
          <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(date) => setDate(date)} />
        </div>
        <div>
            <Button disabled={!(cycle>0 && length>0 && date)} type="submit">
              Submit
            </Button>
        </div>

      </form>
      <div className="center">
        <h2>Important dates for the next 3 cycles:</h2>
      <div className="d-flex justify-content-around">
        <h3>Periods <br/>{next.map(date=><div><br/>{date}</div>)}
        </h3>
        <h3>Most Probable Ovulation Days <br/>{nextOv.map(date=><div><br/>{date}</div>)}
        </h3>
      </div>
    
          </div>
    </>
    
  )
}
