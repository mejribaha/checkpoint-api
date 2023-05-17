import React from 'react'
import { Card } from "semantic-ui-react";

function CardPerson({ person }) {
  return (
    <div className="card">
      <Card
        image="https://cdn-icons-png.flaticon.com/512/190/190613.png"
        header={person.name}
        meta={person.phone}
        description={person.address.city}
        extra={person.address.zipcode}
      />
    </div>
  );
}

export default CardPerson
