import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export default function List({ budget, setBudget, handleEdit }) {


    const handleDelete = (id)=>{
        let newbudget = budget.filter(x => x.id!==id);
        // console.log(newbudget);
        setBudget(newbudget);
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
                                    <div key={data.id}
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        className={`${snapshot.isDragging ? "bg-gray400" : "bg-white"} flex flex-row my-3 w-full border rounded px-5 py-3`}
                                    >
                                            <div className="flex w-full">{data.title}</div>
                                            <div className="flex w-full justify-between">
                                                <div className="flex">{data.money}</div>
                                                <div>
                                                    <button className="mr-3" onClick={()=>handleEdit(data.id)}>수정</button>
                                                    <button onClick={()=>handleDelete(data.id)}>삭제</button>
                                                </div>
                                            </div>

                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
            <button>목록 지우기</button>


        </DragDropContext>
    )
}
