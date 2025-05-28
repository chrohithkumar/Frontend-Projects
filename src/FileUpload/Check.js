import React, { useState } from 'react';

export default function Check() {
    const [files, setFiles] = useState([]);
    const [upload, setUpload] = useState(true);

    const handlefile = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length > 0) {
            // Filter out duplicates based on the file name
            const filterfiles = selectedFiles.filter((file) => {
                return !files.some((existingFile) => existingFile.name === file.name);
            });

            // Update the state with new files, avoiding duplicates
            setFiles((prev) => [
                ...prev,
                ...filterfiles
            ]);
        } else {
            console.log('No files have been selected');
        }
    };

    console.log(files, 'files');

    const handleUpload = () => {
        if (files.length > 0) {
            setUpload(false);
           // console.log(`The selected files: ${files.map(file => file.name).join(", ")}`);
            // Uncomment this if you want to clear the files after upload
            // setFiles([]); 
        }
    };

    return (
        <div>
            <input type="file" multiple accept=".png,.jpeg,.pdf" onChange={handlefile} />
            <br />
            <div>
                {upload && (
                    <div>
                        <p>Selected Files: {files.map((item) => item.name).join(", ")}</p>
                    </div>
                )}
            </div>
            <div>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}
