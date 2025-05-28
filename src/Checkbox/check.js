import React, { useState } from 'react'


export default function Check() {

    const [selectRow,setSelectedRow]=useState([]);

    const handleSelected=(e,item)=>{
        const checked=e.target.checked
        setSelectedRow((prev)=>{

            if(checked){
                return [...prev,item]
    
            }
            else{
                 return prev.filter((row)=>row.id !== item.id) 

            }
        })
        
    }


console.log(selectRow)

    const handleAllSelect=(e)=>{
       const checked=e.target.checked;
       if(checked){
        setSelectedRow(dummydata)
       }
       else{
        setSelectedRow([])
       }

    }

    

    const dummydata=[
        {
          "id": 1,
          "name": "John Doe",
          "mobile": "1234567890"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "mobile": "9876543210"
        },
        {
          "id": 3,
          "name": "Emily Johnson",
          "mobile": "4567891234"
        },
        {
          "id": 4,
          "name": "Michael Brown",
          "mobile": "3216549870"
        },
        {
          "id": 5,
          "name": "Sarah Davis",
          "mobile": "7891234567"
        }
      ]

      const isHeaderChecked=selectRow.length===dummydata.length
      
  return (
    <div>
        <table className='table  table-bordered mt-2 checktable'>
            <thead>
                <tr>
                    <td>
                        <div>
                            <input type='checkbox' checked={isHeaderChecked} onChange={handleAllSelect}></input>
                        </div>
                    </td>
                    <td>Code</td>
                    <td> Name</td>
                    <td>mobile</td>
                </tr>
            </thead>
            <tbody>
            {
                dummydata.map((item,index)=>{
                    const isChecked = selectRow.some((row) => row.id === item.id); 

                    return(
                        <tr key={index}>
                            <td>
                                <div>
                                <input type='checkbox' 
                                value={item.id}
                                onChange={(e)=>handleSelected(e,item)}
                                checked={isChecked}

                                ></input>

                                </div>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    )
                })
            }
                
            </tbody>
        </table>
    </div>
  )
}
