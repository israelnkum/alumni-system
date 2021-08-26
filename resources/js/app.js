import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/dashboard'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, Store } from './utils/store'
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap')

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={Store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Dashboard/>
                </BrowserRouter>
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    )
}
