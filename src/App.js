import React, { useState } from 'react';
import './App.css';
import Form from "./components/form";
import Lists from "./components/lists";

export default function App() {

  const [budget, setBudget] = useState([]);
  const [value, setValue] = useState("");
  const [cost, setCost] = useState("");
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editTargetId, setEditTargetId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !cost) return;
    let newBudget = {
      id: Date.now(),
      title: value,
      money: cost,
    };

    console.log(newBudget)

    setBudget(prev => [...prev, newBudget])
    setValue("")
    setCost("")
    setTotal(prev => parseInt(prev) + parseInt(cost));
  }

  const handleSubmitEdit =(e)=>{
    e.preventDefault();
    if(!value || !cost) return;

    let newBudget = {
      id: editTargetId,
      title:value,
      money:cost,
    }

    budget.map(x=>{
      if(x.id === editTargetId){
        setTotal(prev=> parseInt(prev)-parseInt(x.money) + parseInt(cost));
        return newBudget;
      }
    })
    
    setBudget(budget);

    console.log(budget);

    setIsEditing(false);
    setEditTargetId("");
    setValue("")
    setCost("")
  }

  return (
    <div className="pt-4 px-5 flex bg-orange-300 h-screen w-screen flex-col">
      <p className="font-bold text-4xl w-full">
        예산 계산기
      </p>
      <div className="flex bg-white w-full py-3 px-5 mt-5 flex-col">
        <Form handleSubmit={handleSubmit} handleSubmitEdit={handleSubmitEdit} value={value} setValue={setValue} cost={cost} setCost={setCost} isEditing={isEditing} setIsEditing={setIsEditing} editTargetId={editTargetId} setEditTargetId={setEditTargetId} budget={budget}/>
        <div className="mt-3">
          <Lists budget={budget} setBudget={setBudget} total={total} setTotal={setTotal} isEditing={isEditing} setIsEditing={setIsEditing} editTargetId={editTargetId} setEditTargetId={setEditTargetId} setValue={setValue} setCost={setCost} /></div>
      </div>
      <div className="flex justify-end">총지출: {total}원</div>
    </div>
  )

}