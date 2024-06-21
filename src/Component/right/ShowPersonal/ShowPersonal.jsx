import React from "react";
import './ShowPersonal.css'

export default function ShowPersonal({personalInfo}){
    return(
        <div className="showPersonal">
            <div className="name">{personalInfo.name}</div>
            <div className="other">
                <div className="showEmail field">
                    {personalInfo.email}
                </div>

                <div className="showPhone field">
                    {personalInfo.phoneNumber}
                </div>

                <div className="showAddress field">
                    {personalInfo.address}
                </div>
            </div>
        </div>
    )
}