import React, { useState } from 'react';

export default function Hello() {
    const [showModal, setShowModal] = useState(false); // Control modal visibility
    const [modalContent, setModalContent] = useState(''); // Track modal content

    // Functions to handle button clicks
    const handleAboutMe = () => {
        setModalContent({
            title: "About Me",
            content: "I am Rocking! I am great at learning.",
        });
        setShowModal(true);
    };

    const handleAboutLove = () => {
        setModalContent({
            title: "About Love",
            content: "My girl is too sexy!",
        });
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        // setModalContent(null);
    };

    return (
        <div>
            {/* Buttons */}
            <button onClick={handleAboutMe}>About Me</button>
            <button onClick={handleAboutLove}>About Love</button>

            {/* Modal */}
            {showModal  && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '400px',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        {/* Close Button */}
                        <div
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                        >
                            X
                        </div>

                        {/* Modal Content */}
                        <h1>{modalContent.title}</h1>
                        <p>{modalContent.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
