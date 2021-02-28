import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './style.css';

import Story from '../Pages/Story';
import NavBar from '../NavBar';
import Login from '../Pages/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/login" component={Login}/>
      <Story />
    </Router>
  );
}

export default App;



// function App() {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Switch>
//           <Route path="/github">
//             <Github />
//           </Route>
//           <Route path="/admin">
//             <Admin />
//           </Route>
//           <Route path="/">
//             <Story />
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }