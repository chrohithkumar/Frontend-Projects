 import React from 'react'
 function Child ({ todos, handleAdd }){
    console.log('🟡 Child rendered');

    return (
        <div>
            {todos.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
            <button onClick={handleAdd}>Add Todo from Child</button>
        </div>
    )
}

export default React.memo(Child);
