import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

const ROUTES = [
    {name: 'landing', path: '/'},
    {name: 'select', path: '/select'},
    {name: 'study', path: '/study/:learning/:from', children: [
            {name: 'quiz', path: '/quiz'},
            {name: 'history', path: '/history'},
            {name: 'skills', path: '/skills'},
            {name: 'words', path: '/words'},
        ],
    },
]

export default function newRouter() {
    const router = createRouter(ROUTES, {
        allowNotFound: true,
    })
    router.usePlugin(browserPlugin())
    return router
}
