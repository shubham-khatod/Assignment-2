import { useState } from 'react';
import './App.css';
import Display from './Display';
import UserDetails from './UserDetails';

function App() {
  const [details, setDetails] = useState([]);

  const submitHandler = (firstname, lastName) => {
    setDetails([...details, { firstname, lastName }]);
  }
  return (
    <div className='rootClass'>
      <UserDetails submitHandler={submitHandler} />
      <Display details={details} />
    </div>

  );
}

export default App;
