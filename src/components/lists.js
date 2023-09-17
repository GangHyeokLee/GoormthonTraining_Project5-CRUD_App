import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import List from "./list";


const Lists = ({ budget, setBudget, total, setTotal, isEditing, setIsEditing, editTargetId, setEditTargetId ,setValue, setCost }) => {
    const handleDeleteAll = () => {
        setBudget([]);
        setTotal(0)
        localStorage.setItem("total", JSON.stringify(0))
    }

    const handleEnd = (result) => {
        if (!result.destination) return;

        const newBudget = budget;
        const [reorderedItem] = newBudget.splice(result.source.index, 1);
        budget.splice(result.destination.index, 0, reorderedItem);
        setBudget(newBudget);
        localStorage.setItem("budget", JSON.stringify(newBudget))
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
                                        isEditing={isEditing}
                                        setIsEditing={setIsEditing} 
                                        editTargetId={editTargetId} 
                                        setEditTargetId={setEditTargetId}
                                        setValue={setValue}
                                        setCost={setCost}
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

export default Lists