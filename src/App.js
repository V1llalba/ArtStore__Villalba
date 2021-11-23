import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Bienvenida from './components/Bienvenida/Bienvenida';
import {Cart} from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext';

import './App.css';

function App() {

  return (
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
              <Switch>
                <Route exact path="/" component={Bienvenida} />
                <Route exact path='/cuadros' component={ItemListContainer} />
                <Route exact path='/cuadros/:cuadrosID' component={ItemListContainer} />
                <Route exact path='/detalle/:id' component={ItemDetailContainer} />
                <Route exact path='/cart' component={Cart} />
              </Switch>
          </div>
          </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;

