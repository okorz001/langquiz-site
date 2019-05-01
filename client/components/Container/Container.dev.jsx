import React from 'react'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router5'
import {createDevTools} from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import SliderMonitor from 'redux-slider-monitor'

// see https://github.com/gaearon/base16-js/tree/master/src
const THEME = 'tomorrow'

// h for hide
const HIDE_KEY = 'alt-h'
// n for next (monitor)
const MONITOR_KEY = 'alt-n'
// m for move
const POSITION_KEY = 'alt-m'

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey={HIDE_KEY}
                 changePositionKey={POSITION_KEY}
                 changeMonitorKey={MONITOR_KEY} >
        <Inspector theme={THEME} invertTheme={false} />
        <SliderMonitor theme={THEME} />
    </DockMonitor>
)

export function instrument() {
    return DevTools.instrument()
}

export default function Container({router, store, children}) {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
            <DevTools />
        </Provider>
    )
}
