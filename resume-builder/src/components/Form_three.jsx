import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import '../style.css';
function Form_three(props) {

    function handleAdd(){
        var newObject={
            OrganizationName : document.getElementById('OrganizationName').value,
            Designation : document.getElementById('Designation').value,
            Duration : document.getElementById('Duration').value,
            Description : document.getElementById('Description').value

        }
        props.data.Experience.push(newObject);
        var inputs=document.querySelectorAll('input');
        inputs.forEach((input)=>{
            input.value='';
        });
        
    }
    function submit(){
        var newObject={
            OrganizationName : document.getElementById('OrganizationName').value,
            Designation : document.getElementById('Designation').value,
            Duration : document.getElementById('Duration').value,
            Description : document.getElementById('Description').value

        }
        props.submit(newObject);
    }
    

    return <div className="form-div">
        <h1 className='mt-5 mb-5'>Job Experience</h1>
        <input id="OrganizationName" className='form-control input-field' name="OrganizationName" type="text" placeholder="Name of Organization" />
        <input id="Designation" className="form-control input-field" name="Designation" type="text" placeholder="Designation" />
        <input id="Duration" className="form-control input-field" name="Duration" type="text" placeholder="Duration (in years)" />
        <input id="Description" className="form-control input-field" name="Description" type="text" placeholder="Description" />
        
        <span className='btn-space mt-5'><Button onClick={handleAdd} variant="contained" color="success">
            Add One More Experience
        </Button></span> 

        <span className="btn-space mt-3"><LoadingButton onClick={submit} endIcon={<SendIcon />} variant="contained">
            Next
        </LoadingButton></span>




    </div>
}

export default Form_three;