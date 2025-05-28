import React, { useState } from 'react';

export default function Check() {
  // Dummy data for table
  const data = [
    { id: 1, name: "John Doe", mobile: "123-456-7890" },
    { id: 2, name: "Jane Smith", mobile: "987-654-3210" },
    { id: 3, name: "Emily Johnson", mobile: "456-789-1234" },
    { id: 4, name: "Michael Brown", mobile: "321-654-9870" },
    { id: 5, name: "Sarah Davis", mobile: "789-123-4567" },
  ];

  // State to manage selected checkboxes
  const [selectedIds, setSelectedIds] = useState([]);

  // Logic to handle checkbox clicks
  const toggleBodyCheckbox = (id) => {
    // If already selected, remove from the array
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      // Otherwise, add to the array
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Logic for header checkbox
  const toggleHeaderCheckbox = (checked) => {
    if (checked) {
      // If checking the header, select all IDs
      setSelectedIds(data.map((item) => item.id));
    } else {
      // If unchecking the header, clear all IDs
      setSelectedIds([]);
    }
  };

  // Header checkbox is selected if all body checkboxes are selected
  const isHeaderChecked = selectedIds.length === data.length;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isHeaderChecked}
                onChange={(e) => toggleHeaderCheckbox(e.target.checked)}
              />
            </th>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => toggleBodyCheckbox(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
