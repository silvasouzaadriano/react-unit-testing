import { useState } from "react"

type UserListProps = {
  initialItems: string[]
}

function UserList({ initialItems }: UserListProps) {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState(initialItems)

  function addToUsersList() {
    setTimeout(() => {
      setUsers(state => [...state, newUser]);
    }, 500);
  }

  function removeFromUserList(user: string) {
    setTimeout(() => {
      setUsers(state => state.filter(user => user !== user));
    }, 500);
  }


  return (
    <>
      <input placeholder="New User" value={newUser} onChange={e => setNewUser(e.target.value)} />
      <button onClick={addToUsersList}>Add</button>
      <ul>
        {users.map(user => (
          <li key={user}>
            {user}
            <button onClick={() => removeFromUserList(user)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList;
