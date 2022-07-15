import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import '../style.css';
function Form_one(props){


    function submit(){
        var Name=document.getElementById('Name').value;
        var Phone=document.getElementById('Phone').value;
        var Email=document.getElementById('Email').value;
        var Address=document.getElementById('Address').value;
        props.submit(Name,Phone,Email,Address);
    }


    return <div className="form-div">
      <h1 className='mt-5 mb-5'>Personal Details</h1>
      <input id="Name" className='form-control input-field' name="Name" type="text" placeholder="Enter Your Name" />
      <input id="Phone" className='form-control input-field' name="Phone" type="text" placeholder="Contact Number"/>
      <input id="Email" className='form-control input-field' name="Email" type="text" placeholder="Email Address"/>
      <input id="Address" className='form-control input-field' name="Address" type="text" placeholder="Permanent Address"/>
      
    
      <span className="btn-space mt-4"><LoadingButton onClick={submit} endIcon={<SendIcon />} variant="contained">
            Next
        </LoadingButton></span>
    </div>
}
export default Form_one;