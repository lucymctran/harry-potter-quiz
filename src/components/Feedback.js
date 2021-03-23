import React from "react";

const Feedback = (props) => {
  const { score } = props;
  return (
    <div>
      <div>
        <h1 style={{ color: "blue" }}>Your Score {score}/5</h1>
      </div>
    </div>
  );
};

export default Feedback;
