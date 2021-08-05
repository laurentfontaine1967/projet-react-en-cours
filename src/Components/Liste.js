import {useState} from 'react'
import MOCK_DATA from "./MOCK_DATA";


function ListePage() {
  const [users, setUsers] = useState(MOCK_DATA)

  const deleteUser = id => {
    const newList = users.filter(user => user.id !== id)
    setUsers(newList)
  }

  const addUser = () => {
    const newUser = {
      id: 123456789,
      first_name: "Julien",
      last_name: "Delusseau",
      email: "jdel@gmail.com"
    }
    setUsers([newUser, ...users])
  }
  return (
      <div className="table table-responsive">
        <button onClick={addUser}>Ajout</button>
        <table className="table">
              <thead>
                <tr>
                
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Supprimer</th> 
                </tr>
              </thead>

              <tbody>
                {
                  users.map(post => (
                    <tr>
                      
                      <td>{post.first_name}</td>
                      <td>{post.last_name} </td>
                      <td>{post.email}</td>
                      <td><button type="button"  class="btn btn-primary" onClick={() => deleteUser( post.id)}>Supprimer </button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          
        
      </div>
    
  );
}

export default ListePage;
