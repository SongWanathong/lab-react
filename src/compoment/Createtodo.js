import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'antd';

class Createtodo extends Component {
    
    render() {
    const{value,handleinput,handleclickadd} =this.props
        return (
            <Row>
                <Col>
                <Input placeholder="Basic usage" onChange={handleinput} value={value} />
                </Col>
                <Col>
                <Button type="default" onClick={handleclickadd}>Add todo</Button>
                </Col>
            </Row>
        );
    }
}

export default Createtodo;
