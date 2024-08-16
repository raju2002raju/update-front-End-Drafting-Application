import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const selectRef = useRef(null);

  const handleSelectChange = () => {
    const selectedValue = selectRef.current.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div className='main_container'>
        <div className='container'>
          <h1>What Do you Want to Draft ?</h1>
          <p>Select a topic from the list below:</p>
          <div className='container2'>
            <select ref={selectRef}>
              <option value=''>What do you want to Draft ?</option>
              <option value='/section1'>Field 01</option>
              <option value='/section2'>Field 02</option>
              <option value='/section3'>Field 03</option>
              <option value='/section4'>Field 04</option>
              <option value='/section5'>Field 05</option>
              <option value='/section6'>Field 06</option>
              <option value='/section7'>Field 07</option>
              <option value='/section8'>Field 08</option>
              <option value='/section9'>Field 09</option>
              <option value='/section10'>Field 10</option>
              <option value='/section11'>Field 11</option>
              <option value='/section12'>Field 12</option>
              <option value='/section13'>Field 13</option>
              <option value='/section14'>Field 14</option>
              <option value='/section15'>Field 15</option>
              <option value='/section16'>Field 16</option>
              <option value='/section17'>Field 17</option>
              <option value='/section18'>Field 18</option>
              <option value='/section19'>Field 19</option>
              <option value='/section20'>Field 20</option>
            </select>
          </div>
          <button onClick={handleSelectChange}>NEXT</button>
      {/* <UploadImagePdf/> */}
        </div>
      </div>
    </div>
  )
}

export default Home
