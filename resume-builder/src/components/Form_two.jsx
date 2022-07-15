import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import '../style.css';
function Form_two(props) {

    function handleAdd(){
        var newObject={
            InstituteName : document.getElementById('InstituteName').value,
            Description : document.getElementById('Description').value,
            Grade : document.getElementById('Grade').value

        }
        props.data.Education.push(newObject);
        var inputs=document.querySelectorAll('input');
        inputs.forEach((input)=>{
            input.value='';
        });
        
    }
    function submit(){
        var newObject={
            InstituteName : document.getElementById('InstituteName').value,
            Description : document.getElementById('Description').value,
            Grade : document.getElementById('Grade').value

        }
        props.submit(newObject);
    }
    

    return <div className="form-div">
        <h1 className='mt-5 mb-5'>Educational Details</h1>
        <input id="InstituteName" className='form-control input-field' name="InstituteName" type="text" placeholder="Name of Institute" />
        <input id="Description" className="form-control input-field" name="Description" type="text" placeholder="Description" />
        <input id="Grade" className="form-control input-field" name="Grade" type="text" placeholder="Grade" />
        <span className='btn-space mt-4'><Button onClick={handleAdd} variant="contained" color="success">
            Add One More Institute
        </Button></span> 

        <span className="btn-space mt-3"><LoadingButton onClick={submit} endIcon={<SendIcon />} variant="contained">
            Next
        </LoadingButton></span>




    </div>
}

export default Form_two;