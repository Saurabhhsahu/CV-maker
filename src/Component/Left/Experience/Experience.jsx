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

    return(
        <div className="education">
            <div className="toggle">
                <h2>Experience</h2>
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