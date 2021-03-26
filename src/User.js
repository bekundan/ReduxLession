import React from "react";

const User = (props) => {
  //   console.warn(props.data);
  const { data } = props;
  return (
    <div>
      <h1>User components</h1>
      <h4>{data.name}</h4>
      <p>{data.age}</p>
      <p>{data.address}</p>
      <p>{data.work}</p>
    </div>
  );
};

export default User;
