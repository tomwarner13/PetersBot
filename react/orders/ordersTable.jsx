import React from 'react';


export default class OrdersTable extends React.Component {
    componentWillMount() {
        let orders = [
            {
                name: "Order In the Pork",
                status: "Ongoing",
                individualOrders: [{
                    name: "Markese",
                    items: [{ name: "Bacon Egg & Cheese", price: 3, category: "breakfast" }]
                },
                {
                    name: "Tom",
                    items: [{ name: "BLT", price: 3, category: "breakfast" }]
                }]
            },
            {
                name: "First World Order",
                status: "Ordered",
                individualOrders: [{
                    name: "Andrew",
                    items: [
                        { name: "Grilled Cheese", price: 2, category: "breakfast" },
                        { name: "Chocolate Milk", price: 2, category: "drink" }]
                },
                {
                    name: "Steven",
                    items: [
                        { name: "Pancakes", price: 5, category: "breakfast" },
                        { name: "Orange Juice", price: 2, category: "drink" }]
                }]
            },
        ];
        this.setState({
            orders: orders
        });
    }

    generateRowCell(order) {
        let amountOfPeople = order.individualOrders.length;
        return (
            <tr>
                <td key="name">{order.name}</td>
                <td key="count">{amountOfPeople}</td>
                <td key="status">{order.status}</td>
            </tr>
        );
    }

    render() {
        let { orders } = this.state;
        return (<div class="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of People</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => this.generateRowCell(order))}
                </tbody>
            </table>
        </div>
        );
    }
}