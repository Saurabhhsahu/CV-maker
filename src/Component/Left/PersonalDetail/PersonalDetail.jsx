import React from "react";
import './PersonalDetail.css'

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
                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Full name</div>
                            <input 
                                className="input"
                                 type="text" 
                                value={personalInfo.name}
                                placeholder="Full name"
                                onChange={onChange}
                                data-key="name"
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
                                value={personalInfo.email}
                                onChange={onChange}
                                data-key="email"
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
                                value={personalInfo.phoneNumber}
                                onChange={onChange}
                                data-key="phoneNumber"
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
                                value={personalInfo.address}
                                onChange={onChange}
                                data-key="address"
                            />
                        </label>
                    </div>
                </form>
            </div>
    )
}