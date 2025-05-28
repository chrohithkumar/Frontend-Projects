import React, { useState } from 'react'

export default function Model() {
    const [showModel, setShowModel] = useState(false)
    const [model, setModel] = useState(false)
    const handleabtbtn = () => {
        setShowModel(true)
    }
    const handlelovbtn = () => {
        setModel(true)

    }
    const handleClose = () => {
        setShowModel(false);
        setModel(false);
    }

    return (
        <div>

            <button onClick={handleabtbtn}>About Me</button>
            <button onClick={handlelovbtn}>About Love</button>

            <div style={{ marginTop: '10px' }}>
                {showModel && (
                    <>
                        <div>
                            <div onClick={handleClose} style={{ cursor: 'pointer' }}>X</div>
                            <h1>About Me</h1>
                            <p>I am Fucking Rock I am great learing </p>

                        </div>
                    </>
                )}

                {model && (
                    <>
                        <div>
                            <div onClick={handleClose} style={{ cursor: 'pointer' }}>X</div>
                            <h1>About love</h1>
                            <p>my girl too Sexy  </p>

                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
