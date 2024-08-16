import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import InputBox1 from './Componets/InputBox1';
import InputBox2 from './Componets/InputBox2';
import InputBox3 from './Componets/InputBox3';
import OutputComponent from './Componets/Transcript';
import DraftForm from './Componets/DraftForm';
import './App.css'
import UpdatePrompt from './Componets/UpdatePrompt';
import Navbar from './Componets/Navbar';
import UploadImagePdf from './Componets/UploadImagePdf';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path='/new_draft' element={<Home/>}  />
        <Route path='upload_documents' element={<UploadImagePdf/>} />
        <Route path="/section1" element={<DraftForm />} />
        <Route path='/section2' element={<InputBox1 />} />
        <Route path='/section3' element={<InputBox2 />} />
        <Route path="/section4" element={<InputBox3 />} />
        <Route path='/section5' element={<InputBox1 />} />
        <Route path='/section6' element={<InputBox2 />} />
        <Route path="/section7" element={<InputBox3 />} />
        <Route path='/section8' element={<InputBox1 />} />
        <Route path='/section9' element={<InputBox2 />} />
        <Route path="/section10" element={<InputBox3 />} />
        <Route path='/section11' element={<InputBox1 />} />
        <Route path='/section12' element={<InputBox2 />} />
        <Route path="/section13" element={<InputBox3 />} />
        <Route path='/section14' element={<InputBox1 />} />
        <Route path='/section15' element={<InputBox2 />} />
        <Route path="/section16" element={<InputBox3 />} />
        <Route path='/section17' element={<InputBox1 />} />
        <Route path='/section18' element={<InputBox2 />} />
        <Route path="/section19" element={<InputBox3 />} />
        <Route path='/section20' element={<InputBox1 />} />
        <Route path='/draftform' element={<DraftForm />} />
        <Route path='/output' element={<OutputComponent />} />
        <Route path='/:id/update_prompt' element={<UpdatePrompt/>} />
      </Routes>
    </Router>
  );
};

export default App;
