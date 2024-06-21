import React,{useState} from "react";
import './Experience.css'

export default function Experience({
    companyName,
    setCompanyName,
    positionTitle,
    setPositionTitle,
    exStartDate,
    setExStartDate,
    exEndDate,
    setExEndDate,
    exLocation,
    setExLocation,
    description,
    setDescription
}){
    const [toggleButton, setToggleButton] = useState(false)

    function toggle(){
        return(
            <div>
                <form >
                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Company name</div>
                            <input 
                                className="input"
                                    type="text" 
                                value={companyName}
                                placeholder="Company name"
                                onChange={e => {
                                    setCompanyName(e.target.value)}}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Position title</div> 
                            <input 
                                className="input"
                                type="text" 
                                placeholder="Position title"
                                value={positionTitle}
                                onChange={e => setPositionTitle(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">startDate</div>
                            <input 
                                className="input"
                                type="text" 
                                placeholder="Start date"
                                value={exStartDate}
                                onChange={e => setExStartDate(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">End date</div>
                            <input 
                                className="input"
                                type="text" 
                                placeholder="End date"
                                value={exEndDate}
                                onChange={e => setExEndDate(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Location</div>
                            <input 
                                className="input"
                                type="text" 
                                placeholder="Location"
                                value={exLocation}
                                onChange={e => setExLocation(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="inputDiv">
                        <label>
                            <div className="inputLabel">Description</div>
                            <textarea style={{height:"100px"}}
                                className="input"
                                type="text" 
                                placeholder="Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
                <button className="educationMore">
                    Add more
                </button>
            </div>
        )
    }

    const content = () => {
        setToggleButton(!toggleButton);
    }

    const up = () =>{
        return (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="35" 
                height="35"
            >
                <path d="M7.41 16.59L12 12.41l4.59 4.59L18 15.17l-6-6-6 6z"/>
            </svg>
        )
    }

    const down = () => {
        return(
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="35" 
                height="35"
            >
                <path d="M7.41 8.41L12 12.59l4.59-4.59L18 9.83l-6 6-6-6z"/>
            </svg>
        )
    }

    return(
        <div className="education">
            <div className="toggle">
                <h2>Experience</h2>
                <button
                    onClick={content}
                    style={{backgroundColor:'white',border:'none'}}
                >
                    {toggleButton ? up() : down()}
                </button>
            </div>
            {toggleButton && toggle()}
        </div>
    )
}