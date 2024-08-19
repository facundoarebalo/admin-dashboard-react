import './App.css'
import UsersContext from './context/UsersContext'
import Admin from './views/Admin'

function App() {


  return (
    <UsersContext>
      <Admin />
    </UsersContext>
  )
}

export default App
