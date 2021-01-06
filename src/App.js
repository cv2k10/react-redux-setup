import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Timer from './components/Timer';
import allReducer from './reducers';

const store = createStore(allReducer);

function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

export default App;
