import { useState } from "react"

function App() {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState(['Adriano', 'Giovanni', 'João'])

  function addToUsersList() {
    setUsers(state => [...state, newUser]);
  }

  return (
    <>
      <input placeholder="New User" value={newUser} onChange={e => setNewUser(e.target.value)} />
      <button onClick={addToUsersList}>Add</button>
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    </>
  )
}

export default App
