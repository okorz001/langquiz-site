import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

const ROUTES = [
    {name: 'landing', path: '/'},
    {name: 'select', path: '/select'},
    {name: 'study', path: '/study/:learning/:from'},
]

export default function newRouter() {
    const router = createRouter(ROUTES, {
        allowNotFound: true,
    })
    router.usePlugin(browserPlugin())
    return router
}
