import React from "react";
import './ShowEducation.css'

export default function ShowEducation({
    schoolName,
    degree,
    edStartDate,
    edEndDate,
    edLocation
}){
    return(
        <div className="showEducation">
            <h3 style={{textAlign:'center', backgroundColor:'#f3f4f6', padding:'5px', fontWeight:'600', marginBottom:'10px'}}>
                Education
            </h3>
            <div className="educationInfo">
                <div className="educationLeft">
                    <p>{edStartDate} – {edEndDate}</p>
                    <p>{edLocation}</p>
                </div>

                <div className="educationRight">
                    <p style={{fontWeight:'600'}}>{schoolName}</p>
                    <p>{degree}</p>
                </div>
            </div>
        </div>
    )
}