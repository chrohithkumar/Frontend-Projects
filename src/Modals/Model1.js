import React, { useState } from 'react';

function App() {
  const [modalContentId, setModalContentId] = useState(null);

  const modalData = {
    A: "This is detailed information about Content A.",
    B: "Here are the details for Content B.",
    C: "Information for Content C is displayed here.",
  };

  return (
    <div>
      <button onClick={() => setModalContentId('A')}>Open Content A</button>
      <button onClick={() => setModalContentId('B')}>Open Content B</button>
      <button onClick={() => setModalContentId('C')}>Open Content C</button>

      {/* Modal */}
      {modalContentId && (
        <div style={{ background: '#000', color: '#fff', padding: '20px' }}>
          <div >
            <button onClick={() => setModalContentId(null)}>Close</button>
            <p>{modalData[modalContentId]}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
