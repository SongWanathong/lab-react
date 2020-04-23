import React, { Component } from 'react';
import { Row, Col, List, Button } from 'antd';
class Todo extends Component {

    renderlist = () => (
        this.props.todo.map(todo => (
            <li>{todo.text}</li>
        ))
    )

    render() {
        const { handletick, handledelete } = this.props

        return (

            <Col>

                <List
                    bordered
                    dataSource={this.props.todo}
                    renderItem={todo => (
                        <List.Item>
                            <Row type="flex" justify='space-around' style={{ width: '220px' }} >
                                <span onClick={handletick(todo.id)} style={{ padding: '5px', border: 'solid', backgroundColor: todo.ticked ? 'green' : undefined }}>   </span>
                                {todo.text}
                                <Button onClick={handledelete(todo.id)} type='danger'>X</Button>
                            </Row>
                        </List.Item>

                    )}
                />

            </Col>

        );
    }
}

export default Todo;
