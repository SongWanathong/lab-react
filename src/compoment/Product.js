import React, { Component } from 'react';
import { Card, Row, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
let {Meta} = Card

class Product extends Component {
    render() {
        let {name,image,description,price} = this.props.product
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={image} style={{height:"300px"}} />}
            >
                <Meta title={name} description={description}  style={{height:'250px',overflow:'auto'}}/>
                <Row style={{margin:'10px'}} type='flex' justify='center'>
            <Text>{price} : บาท</Text>
            <Button>Add to cart</Button>
                </Row>
                
            </Card>
        );
    }
}

export default Product;
