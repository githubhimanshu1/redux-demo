import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import cakeStore from './redux/cakes/cakeStore'
import CakeContainer from './components/cakeContainer';
function App() {
  return (
    <Provider store={cakeStore}>
    <div className="App">
      <section>
        <CakeContainer></CakeContainer>
      </section>
    </div>
    </Provider>
  );
}

export default App;
