import React, { Component } from 'react';
import { Table, Button, Statistic, Row } from 'antd';
import Axios from 'axios';


class Cart extends Component {


 handleclickcheckout =  (totalpice)=>{
     
      Axios.post('http://localhost:8080/add-order',{
        totalPrice:totalpice,
        orderList:this.props.cart
    }).then(result=>{
        console.log(result)
        this.props.handlecartdeleteallproduct()
    }).catch(err=>{
        console.log(err)
    })

 }   
    render() {
        
const columns = [
  
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'price', dataIndex: 'price', key: 'age' },
    { title: 'amount', dataIndex: 'amount', key: 'amount'},
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text,cartItem) => <a onClick={this.props.handlecartdelete(cartItem.id)}>Delete</a>,
    },
];


let total = 0;
const cartItems = this.props.cart

for(let cartItem of cartItems){
    total += cartItem.amount * cartItem.price
}

const data = this.props.cart;
        return (
            <>
            <Table
                columns={columns}
               
                dataSource={data}
            />
            <Row type='flex' justify='center'>

            <Statistic title='Total price' value={total} precision={2}/>
            <Button onClick={()=>{this.handleclickcheckout(total)}} style={{marginTop :16}} type='primary'>
                Check out
            </Button>
            </Row>
            
            </>
        );
    }
}

export default Cart;
