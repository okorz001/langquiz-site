import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

export function LanguageSelectPage({languages}) {
    const choices = languages
        // TODO: hardcoding en, can't learn en from en
        .filter(it => it.id != 'en')
        .map(it => {
            const linkProps = {
                routeName: 'home',
                routeParams: {
                    learning: it.id,
                    from: 'en',
                },
            }
            return <li key={it.id}><Link {...linkProps}>{it.name}</Link></li>
        })
    return (
        <div>
            Select your language:
            <ul>{choices}</ul>
        </div>
    )
}

export default connect(
    state => ({languages: state.languages})
)(LanguageSelectPage)
