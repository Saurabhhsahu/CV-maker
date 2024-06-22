import React from "react";

function InputGroup({
  label,
  type,
  value,
  placeholder,
  onChange,
  dataKey
}) {
  return (
    <div className="inputDiv">
        <label>
            <div className="inputLabel">{label}</div>
            <input 
                className="input"
                  type={type} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                data-key={dataKey}
            />
        </label>
    </div>
  );
}

export default InputGroup;