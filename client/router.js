import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

const ROUTES = [
    {name: 'select', path: '/'},
    {name: 'home', path: '/:learning/:from'},
]

export default function newRouter() {
    const router = createRouter(ROUTES)
    router.usePlugin(browserPlugin())
    return router
}
