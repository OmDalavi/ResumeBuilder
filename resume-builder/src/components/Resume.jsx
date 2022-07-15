import React from 'react';
import jsPDF from 'jspdf';
import ReactToPdf from 'react-to-pdf';
import '../style.css';

function Resume(props) {
    // function generatePdf() {
    //     var doc = new jsPDF('p', 'pt', 'a2');
    //     doc.addFont('consolas', 'Courier');
    //     doc.setFont('Courier','normal');
    //     console.log(doc.font);
    //     doc.html(document.getElementById('resume'), {
            
    //         callback: function (pdf) {
    //             pdf.save('Resume.pdf');
    //         }
    //     })



    // }
    const ref = React.createRef(document.getElementById('resume'));
    const options = {
        orientation: 'portrait',
        format: 'A3'
    };

    return <div>
        <div className="text-center ms-5 mt-5 mb-5">
            <ReactToPdf options={options} targetRef={ref} filename="Resume.pdf">
                {({ toPdf }) => (
                    <button className="btn btn-primary btn-lg" onClick={toPdf}>Download CV</button>
                )}
            </ReactToPdf>

        </div>


        <div id='resume' ref={ref}>
            <div className='name-div'>
                <div className='name-inner-div'>
                    <h1 className='name'>{props.data.Name}</h1>
                    <p className='contact-details h6'><b>Mobile : </b> {props.data.Phone}</p>
                    <p className='contact-details h6'><b>Email : </b> {props.data.Email}</p>
                    <p className='contact-details h6'><b>Address : </b> <div className='address'>{props.data.Address}</div></p>

                </div>
            </div>
            <div className='education-div'>
                <div className='education-inner-div'>
                    <h3><b>Educational Qualifications</b></h3>
                    {props.data.Education.map((ed) => {
                        return <div className='education'>
                            <ul type=''>
                                <li><p className="education-details"><b>University</b> : {ed.InstituteName}</p></li>
                                <p className="education-details"><b>Specialization</b> : {ed.Description}</p>
                                <p className="education-details"><b>Grade</b> : {ed.Grade}</p>
                            </ul>
                            <hr />
                        </div>

                    }
                    )}
                </div>

            </div>

            <div className='education-div'>
                <div className='education-inner-div'>
                    <h3><b>Experience</b></h3>
                    {props.data.Experience.map((ex) => {
                        return <div className='education'>
                            <ul type=''>
                                <li><p className="education-details"><b>Organization</b> : {ex.OrganizationName}</p></li>
                                <p className="education-details"><b>Designation</b> : {ex.Designation}</p>
                                <p className="education-details"><b>Duration :</b> : {ex.Duration} Years</p>
                                <p className="education-details"><b>Description</b> : {ex.Description}</p>
                            </ul>
                            <hr />
                        </div>

                    }
                    )}
                </div>

            </div>
            <div className='education-div'>
                <div className='education-inner-div bottom'>
                    <h3><b>Skills</b></h3>
                    {props.data.Skills.map((sk) => {
                        return <div className='education'>
                            <ul className="skill">
                                <li ><p className="education-details">  {sk}</p></li>

                            </ul>

                        </div>

                    }
                    )}
                </div>

            </div>



            <br />


        </div>
        {/* <button className="btn btn-primary btn-lg" onClick={generatePdf}>Download CV</button> */}
    </div>
}

export default Resume;