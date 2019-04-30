import React from 'react'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'

// no-op enhancer
export function instrument() {
    return x => x
}

export default function Container({router, store, children}) {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
        </Provider>
    )
}
