import React from "react";
import './ShowPersonal.css'

export default function ShowPersonal({
    name = 'Name',
    email = 'Email',
    phoneNumber = 'Phone Number',
    address = 'Address'
}){
    return(
        <div className="showPersonal">
            <div className="name">{name}</div>
            <div className="other">
                <div className="showEmail field">
                    {email}
                </div>

                <div className="showPhone field">
                    {phoneNumber}
                </div>

                <div className="showAddress field">
                    {address}
                </div>
            </div>
        </div>
    )
}