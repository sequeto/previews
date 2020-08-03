import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo}/>
      <Route path='/cadastro/Categoria' component={CadastroCategoria}/>
      <Route path='/' component={Home} exact/>
      <Route component={() => (<div>Pagina 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

