import React, { useState } from 'react';

export default function FileUploader() {
    const [selectedFile, setSelectedFile] = useState([]); // State for storing the file
    const [errorMessage, setErrorMessage] = useState('');   // State for error messages

    const handleFileChange = (event) => {
        const file = Array.from( event.target.files); // Get the first selected file

        // Validate the file type
        if (file.length>0) {
            setSelectedFile(file); // Store the file in state
            setErrorMessage('');   // Clear any previous errors
        } else {
            setSelectedFile(null); // Reset the state if validation fails
            setErrorMessage('Invalid file type. Only JPEG, PNG, and PDF are allowed.');
        }
    };

    const handleSubmit = () => {
        if (selectedFile) {
            console.log('File ready to upload:', selectedFile);
            // Perform the file upload or any action here
        } else {
            console.log('No file selected or invalid file type.');
        }
    };

    return (
        <div>
            <input
                type="file"
                onChange={handleFileChange} multiple
                accept="image/jpeg, image/png, application/pdf" // Restrict file types
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            
                {
                    selectedFile.map((item,index) => {
                        console.log(item,'itemmmm')
                       return (
                            <>
                                <div key={index}>
                                    <p>Selected File: {item.name}</p>
                                    <p>File Size: {(item.size / 1024).toFixed(2)} KB</p>
                                    <p>File Type: {item.type}</p>
                                </div>
                            </>
                        )
                    })
                }

        

            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
}
