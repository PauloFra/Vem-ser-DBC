import { useState } from 'react';
import './App.css';
import List from './components/List';
import { PeopleDTO } from './models/PeopleDTO';

function App() {

  
  const [people , setPeople] = useState<PeopleDTO['people']>(
    [{
      nome:'Gabriel',
      idade:12,
      url:'url...',
      note:'pergunta pouco'
    },]
  );

  return (
    <div className="App">
      <List people={people} />
    </div>
  );
}

export default App;
