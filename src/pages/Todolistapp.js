import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Createtodo from '../compoment/Createtodo';
import Todo from '../compoment/Todo';
let id=0

class Todolistapp extends Component {
    state = {
        todo: [{ text: 'gogojojo', id: 0, ticked: false }],

        input: ''
    }

    handleclickadd = () => {
        if(!this.state.input){
            return
        }
        this.setState(state=>({
        todo:state.todo.concat({text:this.state.input,ticked:false,id:id})
        }),()=>{this.setState({input:''})},id++)
    }
    handleinput = (e) => {
      this.setState({
        input:e.target.value
      })
    }

    handletick= (id)=>()=>{
       
      this.setState(state=>({
          todo:state.todo.map(state=>(
              state.id == id ?  {...state,ticked:!state.ticked}: state
          ))
      }))

    }
    handledelete = (id)=>()=>{

        this.setState(state=>(
            {
                todo:state.todo.filter(state =>(
                    id != state.id
                ))
            }
        ))

    }
    render() {
        return (
            <Row style={{ height: '50vh' }} type='flex' justify='center' align='middle'>
                <Col >
                    <Row>
                        <Createtodo
                            value={this.state.input}
                            handleinput={this.handleinput}
                            handleclickadd={this.handleclickadd}
                        />
                    </Row>
                    <Row>
                        <Todo todo={this.state.todo} handletick={this.handletick} handledelete={this.handledelete} />
                        </Row>
                </Col>
            </Row>
        );
    }
}

export default Todolistapp;
