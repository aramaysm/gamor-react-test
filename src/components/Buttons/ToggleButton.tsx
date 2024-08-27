
import React from "react";
import "../../styles/_buttons.scss"

export const ToggleSwitch = ({ label, onClick }: any) => {
    return (
      <div className="row gap-1">
       <h4 className="w-8 color-title">{label}</h4>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox"
                 name={label} id={label} onChange={onClick} />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    );
  };