import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  }, []);

  return <>
    <h3 className="friend">Friends: {friends.length}</h3>
    {
        friends.map(friend => <Friend friend={friend}></Friend>)
    }
  </>;
}
