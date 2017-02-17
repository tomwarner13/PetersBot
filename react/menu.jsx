import React from 'react';
import MenuItem from './menuItem.jsx';
import { List } from 'material-ui/List';

export default class Menu extends React.Component {
    componentWillMount() {
        this.setState({
            menuItems: this.props.menuItems
        });
    }

    render() {
        return (<div className="menu-body col-md-6-offset-3">
            <List>
                {this.state.menuItems.map((item) => (<MenuItem key={item.name} item={item} />))}
            </List>
        </div>
        );
    }
}