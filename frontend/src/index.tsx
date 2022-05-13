import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { AppStateProvider } from './AppState';
import './i18n/configs'

// const defaultContexValue={
//   username:"lcy"
// }
// export const appContext=React.createContext(defaultContexValue)
ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


