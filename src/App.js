import React, { useState } from 'react';
import './App.css';
import Form from "./components/form";
import List from "./components/list";

export default function App() {

  const [budget, setBudget] = useState([]);
  const [value, setValue] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value||!cost) return;
    let newBudget = {
      id: Date.now(),
      title: value,
      money: cost,
    };

    console.log(newBudget)

    setBudget(prev => [...prev, newBudget])
    setValue("")
    setCost("")
  }

  const handleEdit = (e)=>{
    console.log(e);
  }

  return (
    <div className="pt-4 px-5 flex bg-orange-300 h-screen w-screen flex-col">
      <p className="font-bold text-4xl w-full">
        예산 계산기
      </p>
      <div className="flex bg-white w-full py-3 px-5 mt-5 flex-col">
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} cost={cost} setCost={setCost} />
        <div className="mt-3"><List budget={budget} setBudget={setBudget} handleEdit={handleEdit}/></div>
      </div>
    </div>
  )

}