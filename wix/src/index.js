import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import "grapesjs/dist/css/grapes.min.css";
import App from './App';
import { TemplateProvider } from './components/templates/TemplateProvider';

ReactDOM.render(

  <TemplateProvider> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </TemplateProvider> ,
  document.getElementById('root')
);

 
