import React, { Component } from 'react';
import Product from './Product';
import { Row } from 'antd';
class Products extends Component {
    renderproduct = ()=>{
       return (  this.props.products.map(x=>{
        return     <Product product={x}/>
           }))
    }
    render() {
        return (
            <Row>
                {this.renderproduct()}
            </Row>
        );
    }
}

export default Products;
