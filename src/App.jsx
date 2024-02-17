
import React from 'react';
import {  signOut } from 'firebase/auth'



export const App = () => {

  const dispatch = useDispatch()


  

  const signedOut = () => {
    signOut()
  }

  return (
    <>
    <div>
      <Router_App />
      </div>
      <button onClick={signedOut}>Sign Out</button>
        
    </>
  );
};

export default App


