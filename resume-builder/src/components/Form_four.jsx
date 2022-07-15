import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import '../style.css';
function Form_four(props) {

    function handleAdd(){
        var newObject= document.getElementById('Skill').value;
            

        
        props.data.Skills.push(newObject);
        var inputs=document.querySelectorAll('input');
        inputs.forEach((input)=>{
            input.value='';
        });
        
    }
    function submit(){
        var newObject= document.getElementById('Skill').value;
        props.submit(newObject);
    }
    

    return <div className="form-div">
        <h1 className='mt-5 mb-5'>My Skills</h1>
        <input id="Skill" className='form-control input-field' name="SkillName" type="text" placeholder="Type Your Skill" />
        
        
        <span className='btn-space mt-4'><Button onClick={handleAdd} variant="contained" color="success">
            Add One More Skill
        </Button></span> 

        <span className="btn-space mt-3"><LoadingButton onClick={submit} endIcon={<SendIcon />} variant="contained">
            Submit
        </LoadingButton></span>




    </div>
}

export default Form_four;