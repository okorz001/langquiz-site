import React from 'react'
import {Link} from 'react-router5'
import ListItem from '@material-ui/core/ListItem'

export default class ListItemLink extends React.Component {
    constructor(props) {
        super(props)

        this.renderLink = linkProps => {
            const {routeName, routeParams} = this.props
            return <Link routeName={routeName}
                         routeParams={routeParams}
                         {...linkProps} />
        }
    }

    render() {
        const listProps = Object.assign({}, this.props)
        // These are for renderLink not ListItem
        delete listProps.routeName
        delete listProps.routeParams
        // Do not use renderLink component if disabled
        if (!this.props.disabled) {
            listProps.component = this.renderLink
        }
        return <ListItem {...listProps} />
    }
}
