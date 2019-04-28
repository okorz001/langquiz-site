import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './App'
import reducer from './reducers'

const store = createStore(reducer, window.LangQuiz)

const app = (
    <Provider store={store}>
        <App {...window.LangQuiz} />
    </Provider>
)
render(app, document.getElementById('app'))
