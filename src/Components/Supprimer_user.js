

import MOCK_DATA from "./MOCK_DATA";


function Supprimer(id) {

   const Nouveautableau =MOCK_DATA.filter(function(user){

        return MOCK_DATA["id"] === id;
     

    });
 
    return (
   
        <div className="table table-responsive">
          {Nouveautableau.map((post) => {
            return (
              <table>
                <thead>
                  <tr>
                  
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Supprimer</th> 
                  </tr>
                </thead>
  
                <tbody>
                  <tr>
                    
                    <td>{post.first_name}</td>
                    <td>{post.last_name} </td>
                    <td>{post.email}</td>
                    <td><button type="button"  class="btn btn-primary" onClick={() => Supprimer()}>Supprimer </button></td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      
    );
     
    
        }























   























    














    
    export default Supprimer;   
     

        //  MOCK_DATA.set({ MOCK_DATA: deleteProd });
    

    
    


        
      
     
   
  

       
     
 
      




