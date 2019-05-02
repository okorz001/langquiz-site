import React from 'react'
import {render} from 'react-dom'

import App from './components/App'
import Container, {instrument} from './components/Container'
import {load} from './persistence'
import newRouter from './router'
import newStore from './store'

const initialState = Object.assign({}, window.LangQuiz, {
    currentCourse: load('currentCourse'),
})

const router = newRouter()
const store = newStore(router, instrument, initialState)

function mount() {
    const props = {router, store}
    const app = <Container {...props}><App /></Container>
    render(app, document.getElementById('app'))
}

router.start(mount)
