import React from "react";
import './PersonalDetail.css'

export default function PersonalDetail({
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress
}){
    return(
            <div className="personal">
                <h2 style={{marginBottom:"10px"}}>Personal details</h2>
                <form 
                action=""
                >
                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Full name</div>
                            <input 
                                className="input"
                                 type="text" 
                                value={name}
                                placeholder="Full name"
                                onChange={e => {
                                    console.log(e.target.value);
                                    setName(e.target.value)}}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">E-mail</div> 
                            <input 
                                className="input"
                                type="email" 
                                placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Phone number</div>
                            <input 
                                className="input"
                                type="tel" 
                                placeholder="Phone number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Address</div>
                            <input 
                                className="input"
                                type="text" 
                                placeholder="Address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
            </div>
    )
}