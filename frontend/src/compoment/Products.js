import React, { Component } from 'react';
import Product from './Product';
import { Row, Col } from 'antd';
class Products extends Component {
    renderproduct = ()=>{
       return (  this.props.products.map(x=>
        
        <Col >
         <Product product={x} HandleClickAddToCart={this.props.HandleClickAddToCart}/>
        </Col>
           ))
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
