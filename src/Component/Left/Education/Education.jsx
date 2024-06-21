import React, {useState} from "react";
import './Education.css'

export default function Education({
    schoolName,
    setSchoolName,
    degree,
    setDegree,
    edStartDate,
    setEdStartDate,
    edEndDate,
    setEdEndDate,
    edLocation,
    setEdLocation
}){
    const [toggleButton, setToggleButton] = useState(false)

    function toggle(){
        return(
            <div>
                <form>
                    <div className="inputDiv">
                        <label>
                                <div className="inputLabel">School</div>
                                <input 
                                    className="input"
                                    type="text" 
                                    value={schoolName}
                                    placeholder="School Name"
                                    onChange={e => setSchoolName(e.target.value)}
                                />
                        </label> 
                    </div>
        
                    <div className="inputDiv">
                        <label>
                                <div className="inputLabel">Degree</div>
                                <input 
                                    className="input"
                                    type="text" 
                                    value={degree}
                                    placeholder="Degree"
                                    onChange={e => setDegree(e.target.value)}
                                />
                        </label> 
                    </div>
        
                    <div className="inputDiv">
                        <label>
                                <div className="inputLabel">Start Date</div>
                                <input 
                                    className="input"
                                    type="text" 
                                    value={edStartDate}
                                    placeholder="Start Date"
                                    onChange={e => setEdStartDate(e.target.value)}
                                />
                        </label> 
                    </div>
        
                    <div className="inputDiv">
                        <label>
                                <div className="inputLabel">End Date</div>
                                <input 
                                    className="input"
                                    type="text"
                                    value={edEndDate}
                                    placeholder="End Date"
                                    onChange={e => setEdEndDate(e.target.value)}
                                />
                        </label> 
                    </div>
        
                    <div className="inputDiv">
                        <label>
                                <div className="inputLabel">Location</div>
                                <input 
                                    className="input"
                                    type="text" 
                                    value={edLocation}
                                    placeholder="Location"
                                    onChange={e => setEdLocation(e.target.value)}
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

    return(
        <div className="education">
            <div className="toggle">
                <h2>Education</h2>
                <button
                    onClick={content}

                >
                    {toggleButton ? 'up' : 'down'}
                </button>
            </div>
            {toggleButton && toggle()}
        </div>
    )
}