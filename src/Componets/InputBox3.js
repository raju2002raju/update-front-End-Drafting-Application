import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from './FormField';


const DraftForm = () => {
  const [fields, setFields] = useState([
    { label: 'Court' },
    { label: 'Title' },
    { label: 'Facts', addParagraph: true },
    { label: 'Prayer', addParagraph: true },
  ]);

  const [activeRecording, setActiveRecording] = useState(null);
  const formFieldRefs = useRef([]);
  const navigate = useNavigate();

  const addField = (index) => {
    const newFields = [...fields];
    const currentLabel = fields[index].label;
    const currentBaseLabel = currentLabel.split(' ')[0]; 
    let newLabel;

    const match = currentLabel.match(/(\d+)$/);
    if (match) {
      const number = parseInt(match[1], 10);
      newLabel = `${currentBaseLabel} ${number + 1}`;
    } else {
      newLabel = `${currentBaseLabel} 1`;
    }

    newFields.splice(index + 1, 0, { label: newLabel, addParagraph: true });
    setFields(newFields);
  };

  const handleNext = () => {
    const transcripts = formFieldRefs.current.map(ref => ref?.getTranscripts());
    navigate('/output', { state: { data: transcripts } });
  };

  const handleStartRecording = (index) => {
    setActiveRecording(index);
  };

  const handleStopRecording = () => {
    setActiveRecording(null);
  };

  return (
   <div >
    <div style={{ display: 'flex', justifyContent: 'end', padding: '20px'}}>
    <Link to='update_prompt'>< img   src='./Images/setting.png' className='setting_icon'/></Link>

    </div>
     <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 20px'  }}>
      
      <div className="draft-form">
        {fields.map((field, index) => (
          <FormField
            key={index}
            ref={el => (formFieldRefs.current[index] = el)}
            label={field.label}
            onAdd={field.addParagraph ? () => addField(index) : null}
            isRecording={activeRecording === index}
            onStartRecording={() => handleStartRecording(index)}
            onStopRecording={handleStopRecording}
          />
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='submit_btn' onClick={handleNext}>NEXT</button>
        </div>
      </div>
    
    </div>
   </div>
  );
};

export default DraftForm;
