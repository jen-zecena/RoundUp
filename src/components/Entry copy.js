import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.date}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.location}</dd>
    </div>
  );
}

export default Entry;
