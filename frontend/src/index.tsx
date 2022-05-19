import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css'
import 'antd/dist/antd.css';
import App from './App';
import { AppStateProvider } from './AppState';
import './i18n/configs'
import { Provider } from "react-redux";
import store from "./redux/store";
// const defaultContexValue={
//   username:"lcy"
// }
// export const appContext=React.createContext(defaultContexValue)
const ProviderFixed=Provider as unknown as React.FC<PropsWithChildren<any>>;
ReactDOM.render(
  <React.StrictMode>
    <ProviderFixed store={store}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
    </ProviderFixed>
  </React.StrictMode>,
  document.getElementById("root")
);


