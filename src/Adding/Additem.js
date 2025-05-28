import React, { useState } from 'react';


export default function Additem() {
    const [youtubeurl, setyoutubeurl] = useState([''])
    const handleyoutube = (value, index) => {
        const newurl = [...youtubeurl];
        console.log(newurl, 'newurl');
        console.log(index, 'index');
        newurl[index] = value
        setyoutubeurl(newurl)
    }

    console.log(youtubeurl, 'youtube')
    const handleAdd = () => {
        const newurl=[...youtubeurl]
        newurl.push(newurl[0]);

        setyoutubeurl(newurl)

       //these is used to remove the content from the first input
       setyoutubeurl((prev)=>{
        const Updateurl=[...prev]
        Updateurl[0]='';
        return Updateurl;
           }) 
    }
    const handledelete = (index) => {
        console.log(index, 'deleteindex')

       const remaingurl= youtubeurl.filter((_,item)=>item!==index);
       console.log(remaingurl,'remains')
       setyoutubeurl(remaingurl)
    }
    return (
        <div>

            <div class="mb-3">
                {youtubeurl.map((url, index) => {

                    return (
                        <div class="input-group "  >
                            <span class="input-group-text" id="basic-addon3">Youtube URL</span>
                            <div style={{display:'flex'}} key={index}>
                                <input type="text" class="form-control" id="basic-url" value={url} onChange={(e) => handleyoutube(e.target.value, index)}
                                    readOnly={index!==0}
                                    disabled={index!==0}
                                    style={{backgroundColor:index!==0?'gray':'white',color:index!==0?'white':'black'}}
                                />
                                < div >
                                    {index === 0 ? (<button onClick={handleAdd} disabled={youtubeurl[0].trim()===''}>
                                        <i class="fa-solid fa-plus"></i>
                                    </button>)

                                        :

                                        (<button onClick={()=>handledelete(index)}>
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>)
                                    }
                                </div>
                            </div>



                        </div>
                    )




                })
                }

            </div>

        </div >
    )
}
