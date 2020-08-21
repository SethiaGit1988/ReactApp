import React from "react";

const Card = ({ name, email, id }) => {
  // const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br4 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?50x50`} alt="photo" />
      <div>
        <h5>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
