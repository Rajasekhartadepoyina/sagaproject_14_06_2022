import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
)