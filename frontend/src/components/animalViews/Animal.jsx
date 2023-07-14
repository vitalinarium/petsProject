// import React, { useState,useEffect }  from "react";
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import { useAuthStore } from '../store/auth';


// const Animal = () => {
//   const [data, setData] = useState([]);
//   const [user] = useAuthStore((state) => [
//     state.user,
//   ]);
  
//   const getData = async () => {
//     const { data } = await axios.get('http://127.0.0.1:8000/get_animals/');
//     setData(data);
//   };
//   useEffect(() => {
//     getData();
//   }, []); 
   
  
//   return (
//     <div>
        
//     <hr></hr>
//     {data.map((output, id) => (
//       <div key={id}>
//         <div>
//           <h2>Category: {output.category}</h2>
//           <h2>Name: {output.name}</h2>
//           <h2>Age: {output.age}</h2>
//           <h2>Description: {output.description}</h2>
//           <h2>From city: {output.city}</h2>
//           <h2>Uploaded by: {output.added_by_user} at {output.date}</h2>
          
//           <img class="animal" src={"http://127.0.0.1:8000" + output.image}/>
//           <br></br>
//           {user().username === output.added_by_user ? <Link to="/myanimals">
//                 <button>My animals</button>
//             </Link> : <Link to="/adopt">
//                 <button>Adopt</button>
//             </Link>}
//           <hr></hr>
          
//         </div>
//       </div>
//     ))}
//   </div>
//   );
// };
   
//   export default Animal;