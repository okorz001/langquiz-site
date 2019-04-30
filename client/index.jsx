import React from 'react'
import {render} from 'react-dom'

import App from './components/App'
import Container, {instrument} from './components/Container'
import newRouter from './router'
import newStore from './store'

const router = newRouter()
const store = newStore(router, instrument, window.LangQuiz)

function mount() {
    const props = {router, store}
    const app = <Container {...props}><App /></Container>
    render(app, document.getElementById('app'))
}

router.start(mount)
