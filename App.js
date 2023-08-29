import store from './store/mainStore'
import { Provider } from 'react-redux'
import Navigate from "./navigate";

function App() {


  return <Provider store={store}><Navigate /></Provider>;
}

export default App;
