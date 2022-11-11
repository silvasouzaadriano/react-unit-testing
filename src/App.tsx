import { useState } from "react"

function App() {
  const [users, setUsers] = useState(['Adriano', 'Giovanni', 'João'])

  function addToUsersList() {
    setUsers(state => [...state, 'New']);
  }

  return (
    <>
      <button onClick={addToUsersList}>Add</button>
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    </>
  )
}

export default App
