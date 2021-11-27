import React from 'react'

const Pill = (props) => {
    return (
        <div className="h-14 bor whitespace-nowrap text-blue-700 flex items-center justify-center mr-11 border-blue-500 rounded-full text-xl font-semibold px-4">
            {props.text}
        </div>
    )
}

export default Pill
