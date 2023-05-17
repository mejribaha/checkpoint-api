import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPerson from "./CardPerson";
import axios from "axios";
import { setUser } from "../app/taskSlice";

function ListPersons() {
  const lists = useSelector((state) => state.person.persons);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => dispatch(setUser(res.data)))
    .catch((err) => console.log(err));
  },[])
  return (
    <div >
      
      <div className="cards">
        {lists.map((item, i) => {
          return <CardPerson person={item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ListPersons;
