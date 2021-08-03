import React from "react";
import "../App.css";

export const Cards = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        const { avatar, first_name, last_name, email } = user;
        return (
          <div key={user.id} className="p-md-3 float-start shadowEffect">
            <div className="card p-3">
                  <img alt="img" src={avatar} className="rounded align-self-center" width="100" />
                  <h5>
                    {first_name} {last_name}
                  </h5>
                  <p>{email}</p>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
