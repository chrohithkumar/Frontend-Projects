import React, { useState } from 'react';

export default function ExperimentalModal() {
    const [showModal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '' });

    const handleAbout = () => {
        setModal(true);
        setModalContent({
            title: 'About Me',
            message: 'Excellent',
        });
    };

    const handleCrush = () => {
        setModal(true);
        setModalContent({
            title: 'Crush List',
            message: <ol>
                <li>Kumari</li>
                <li>Priya</li>
                <li>Pushpa</li>
            </ol>,
        });
    };

    const handleClose = () => setModal(false);

    return (
        <div>
            {/* Buttons */}
            <div>
                <button onClick={handleAbout}>About Me</button>
                <button onClick={handleCrush}>My Crush List</button>
            </div>

            {/* Modal */}
            {showModal && (
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
                        zIndex: 1,
                    }}
                    // onClick={handleClose} // Close modal when clicking outside
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            width: '400px',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
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
                        <div>
                            <h1>{modalContent.title}</h1>
                            <p>{modalContent.message}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
