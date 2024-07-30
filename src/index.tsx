import styled from '@emotion/styled';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


export const ColumnFlex = styled.div`
display: flex;
flex-direction:column;
`
export const RowFlex = styled.div`
display:flex;
flex-direction: row;
`

reportWebVitals();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();