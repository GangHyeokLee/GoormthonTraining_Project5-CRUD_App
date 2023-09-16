import React from 'react'

const List = React.memo(function (
    {id, title, money, budget, setBudget, total, setTotal, provided, snapshot, isEditing, setIsEditing, editTargetId, setEditTargetId, setValue, setCost}
) {

    const handleDelete = (id)=>{
        let delbudget = budget.filter(x=>x.id===id);
        // console.log(delbudget)
        setTotal(prev=>parseInt(prev)-parseInt(delbudget[0].money))
        let newbudget = budget.filter(x => x.id!==id);
        // console.log(newbudget);
        setBudget(newbudget);
    }

    const handleEdit = (e)=>{
        // console.log(id);
        setIsEditing(true);
        setValue(title);
        setCost(money);
        setEditTargetId(id);
    }

    return (
        <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray400" : "bg-white"} flex flex-row my-3 w-full border rounded px-5 py-3`}
        >
            <div className="flex w-full">{title}</div>
            <div className="flex w-full justify-between">
                <div className="flex">{money}</div>
                <div>
                    <button className="mr-3" onClick={handleEdit}>수정</button>
                    <button onClick={() => handleDelete(id)}>삭제</button>
                </div>
            </div>
        </div>
    )
});

export default List