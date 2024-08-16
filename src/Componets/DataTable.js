import React, { useState } from 'react';
import FieldInputs from './FieldInputs';

function DataTable({ data }) {
    const [showFieldInputs, setShowFieldInputs] = useState(false);
    console.log('Received data in DataTable:', data);

    let updatedField = [];

    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (error) {
            console.error('Failed to parse data string:', error);
            return <p>Error: Invalid data format</p>;
        }
    }

    // Check if data is an object
    if (typeof data !== 'object' || data === null) {
        console.log('Data is not an object');
        return <p>Error: Invalid data format</p>;
    }

    // Check if data contains the nested updatedField
    updatedField = data.updatedField?.updatedField || [];

    if (updatedField.length === 0) {
        console.log('No items in data');
        return <p></p>;
    }

    if (showFieldInputs) {
        return <FieldInputs fields={updatedField} />;
    }

    return (
        <div className='container_data'>
            <div>
                <h3>Processed Data :-</h3>
            </div>
           <div className='table-width'>
           <table style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Field</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Example</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedField.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.field || ''}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.description || ''}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                {Array.isArray(item.example) ? (
                                    <ul>
                                        {item.example.map((ex, idx) => (
                                            <li key={idx}>{`${ex.serialNo}. ${ex.particulars}`}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    item.example || ''
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
            <button onClick={() => setShowFieldInputs(true)}>NEXT</button>
        </div>
    );
}

export default DataTable;