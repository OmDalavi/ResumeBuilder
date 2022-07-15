import React,{useState} from 'react';
import Heading from './Heading';
import Form_one from './Form_one';
import Form_two from './Form_two';
import Form_three from './Form_three';
import Form_four from './Form_four';
import Resume from './Resume';
import '../style.css';
function App(){
    const [data,setData]=useState({
        step:1,
        Name : '',
        Phone: '',
        Email: '',
        Address: '',
        Education:[
            {
                InstituteName: '',
                Description: '',
                Grade:''
            },
            {
                InstituteName: '',
                Description:'',
                Grade:''
            }
        ],
        Experience :[
            {
                OrganizationName:'',
                Designation:'',
                Duration:'',
                Description:''
            },
            {
                OrganizationName:'',
                Designation:'',
                Duration:'',
                Description:''
            }
        ],
        Skills :[]

    });
    function step_one_update(Name,Phone,Email,Address) {
        setData({
            step:2,
            Name : Name,
            Phone: Phone,
            Email: Email,
            Address: Address,
            Education:[
                
            ],
            Experience :[
                
            ],
            Skills :[]
            })
            

        }
    function step_two_update(newObject){
        setData((prevData)=>{
            return {
                step:3,
                Name : prevData.Name,
                Phone: prevData.Phone,
                Email: prevData.Email,
                Address: prevData.Address,
                Education:[
                    ...prevData.Education,newObject
                ],
                Experience :[
                    
                ],
                Skills :[]
                }
        });
        

        
        

        
    }

    function step_three_update(newObject){
        setData((prevData)=>{
            return {
                step:4,
                Name : prevData.Name,
                Phone: prevData.Phone,
                Email: prevData.Email,
                Address: prevData.Address,
                Education:[
                    ...prevData.Education
                ],
                Experience :[
                    ...prevData.Experience,newObject
                ],
                Skills :[]
                }
        });

    }

    function step_four_update(newObject){
        setData((prevData)=>{
            return {
                step:5,
                Name : prevData.Name,
                Phone: prevData.Phone,
                Email: prevData.Email,
                Address: prevData.Address,
                Education:[
                    ...prevData.Education
                ],
                Experience :[
                    ...prevData.Experience
                ],
                Skills :[...prevData.Skills,newObject]
                }
        });
    }
    
    
    
    return <div>
        {data.step!=5 ? <Heading heading='Curriculum Vitae' /> : null} 
        <hr/>
        {data.step==1 ? <Form_one submit={step_one_update} /> : data.step==2 ? <Form_two data={data} submit={step_two_update} /> : data.step==3 ? <Form_three data={data} submit={step_three_update} /> : data.step==4 ? <Form_four data={data} submit={step_four_update} /> : <Resume data={data} />}
        
    </div>
}

export default App;