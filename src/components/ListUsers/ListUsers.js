import React from "react";
import { map, isEmpty } from "lodash";
import User from "./User";

import "./ListUsers.scss";
import { registerLocale } from "react-datepicker";

export default function ListUsers(props) {
  const { users } = props;

  if (isEmpty(users)) {
    return <h2>No existe ningún registro.</h2>;
  }

  return (
    <ul className="list-user">
      {map(users, (user) => (
        <User key={user.id} user={user}/>
      ))}
    </ul>
  );
}


