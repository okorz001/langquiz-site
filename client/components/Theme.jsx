import React from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'

console.log(colors)

export default function Theme({children}) {
    // TODO: read from store
    const theme = createMuiTheme({
        palette: {
            primary: colors.cyan,
            type: 'dark',
        },
        typography: {
            fontFamily: 'Noto Sans, sans-serif'
        }
    })
    return (
        <MuiThemeProvider theme={theme} children={children} />
    )
}
