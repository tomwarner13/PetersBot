import React from 'react';
import { ListItem } from 'material-ui/List';

export default class MenuItem extends React.Component {
    componentWillMount() {
        this.setState({
            item: this.props.item
        });
    }

    render() {
        let { item } = this.state;
        return (<ListItem primaryText={item.name} secondaryText={`$ ${item.price}`}/>
        );
    }
}