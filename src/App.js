import './App.css';
import {createContext} from 'react';
import ChildComponent from './ChildComponent';

export const FirstName = createContext();

function App() {

  return (
    <FirstName.Provider value={'John'}>
      <div className="App">
        < ChildComponent />
      </div>
    </FirstName.Provider>
  );
}

export default App;
