import React from "react";
import './PersonalDetail.css'
import InputGroup from "../../InputGroup";

export default function PersonalDetail({
    personalInfo,
    onChange
}){
    return(
            <div className="personal">
                <h2 style={{marginBottom:"10px"}}>Personal details</h2>
                <form 
                action=""
                >
                    <InputGroup
                    label='Full name' type='text' value={personalInfo.name} placeholder='Full name' onChange={onChange} dataKey='name'
                    />

                    <InputGroup
                    label='E-mail' type='email' value={personalInfo.email} placeholder='E-mail' onChange={onChange} dataKey='email'
                    />

                    <InputGroup
                    label='Phone number' type='tel' value={personalInfo.phoneNumber} placeholder='Phone number' onChange={onChange} dataKey='phoneNumber'
                    />

                    <InputGroup
                    label='Address' type='text' value={personalInfo.address} placeholder='Address' onChange={onChange} dataKey='address'
                    />
                </form>
            </div>
    )
}