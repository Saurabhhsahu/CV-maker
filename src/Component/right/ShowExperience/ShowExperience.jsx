import React from "react";

export default function ShowEducation({
    companyName,
    positionTitle,
    exStartDate,
    exEndDate,
    exLocation,
    description
}){
    return(
        <div className="showEducation">
            <h3 style={{textAlign:'center', backgroundColor:'#f3f4f6', padding:'5px', fontWeight:'600', marginBottom:'10px'}}>
                Experience
            </h3>
                <div className="educationInfo">
                    <div className="educationLeft">
                        <p>{exStartDate} – {exEndDate}</p>
                        <p>{exLocation}</p>
                    </div>

                    <div className="educationRight">
                        <p style={{fontWeight:'600'}}>{companyName}</p>
                        <p>{positionTitle}</p>
                        <p style={{marginTop:'10px'}}>{description}</p>
                    </div>
                </div>
        
        </div>
    )
}