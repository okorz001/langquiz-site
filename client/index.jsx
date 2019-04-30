import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'

import App from './components/App'
import newRouter from './router'
import newStore from './store'

const router = newRouter()
const store = newStore(router, window.LangQuiz)

const app = (
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
)

router.start(() => {
    render(app, document.getElementById('app'))
})
