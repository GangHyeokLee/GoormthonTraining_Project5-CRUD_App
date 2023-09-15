import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import List from "./list";

export default function Lists({ budget, setBudget, total, setTotal, handleEdit }) {


    

    const handleDeleteAll = ()=>{
        setBudget([]);
        setTotal(0)
    }

    const handleEnd=(result)=>{
        console.log('result', result);
        if(!result.destination) return;

        const newBudget = budget;

        const [reorderedItem] = newBudget.splice(result.source.index, 1);

        budget.splice(result.destination.index, 0, reorderedItem);

        setBudget(newBudget);
    }



    return (
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="budget">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {budget.map((data, index) => (
                            <Draggable
                                key={data.id}
                                draggableId={data.id.toString()}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <List
                                    key={data.id}
                                    id={data.id}
                                    title={data.title} 
                                    money={data.money}
                                    budget={budget}
                                    setBudget={setBudget}
                                    total={total}
                                    setTotal={setTotal}
                                    provided={provided}
                                    snapshot={snapshot}
                                    handleEdit={handleEdit}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <button onClick={handleDeleteAll}>목록 지우기</button>
        </DragDropContext>
    )
}
