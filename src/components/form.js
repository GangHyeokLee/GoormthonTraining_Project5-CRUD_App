import React from 'react'

export default function Form({ handleSubmit, value, setValue, cost, setCost }) {
    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleCostChange = (e) => {
        console.log(e.target.value);
        setCost(e.target.value);
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex pt-2 flex-col">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-start w-full p-2">
                        <p className="text-orange-400">
                            지출 항목
                        </p>
                        <input
                            className="px-3 py-2 mr-4  text-gray-500 border-b-2 rounded w-full"
                            type="text"
                            name="value"
                            placeholder="예) 렌트비"
                            value={value}
                            onChange={handleValueChange} />
                    </div>
                    <div className="flex flex-col justify-start w-full p-2">
                        <p className="text-orange-400"> 비용</p>
                        <input className="px-3 py-2 mr-4 border-b-2 rounded w-full"
                            type="number"
                            name="cost"
                            placeholder="0"
                            value={cost}
                            onChange={handleCostChange} />
                    </div>
                </div>
                <input
                    type="submit"
                    value="입력"
                    className="w-20 p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                />
            </form>
        </div>
    )
}
