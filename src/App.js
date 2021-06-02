import './App.css';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import Header from './components/header';
import Search from './components/search';
import Content from './components/content';

import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons'

library.add(fab,fas,far);

function App() {
  return (
    <FirebaseDatabaseProvider>
      <div className="App">
        <Header/>
        <Search/>
        
          <Content/>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
