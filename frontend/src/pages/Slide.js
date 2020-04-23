import React, { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';

class Slide extends Component {
    state = {
        count: 0,
        searchWord: '',
        list: ['hello', 'goodbye', 'myfrind', 'kidlde', 'kitkat', 'steacjon', 'muda', 'ajarn song', 'ajansam']
    }




    handleadd = (e) => {
        let number = e.target.value

        this.setState(state => ({
            count: state.count + parseInt(number)
        }))

    }

    handleInpuChange = (e) => (
        this.setState({
            searchWord: e.target.value
        })
    )
    renderlist = () => {
       let filterlist = this.state.list.filter(list=>{
           if(this.state.searchWord == ''){
               return true
           }else{
           return list.toLowerCase().includes(this.state.searchWord.toLowerCase())
           }
       })

       return filterlist.map(list=>(
        <li>{list}</li>
      ))
    }

    render() {
        return (
            <div>

                <lebe>{this.state.count}</lebe>
                <Button value={1} onClick={this.handleadd} type="default">+</Button>
                <Button value={-1} onClick={this.handleadd} type="default">-</Button>

                <Row type='flex' justify='center'>
                    <Col span={5}>
                        <Input placeholder="serch word" value={this.state.searchWord} onChange={this.handleInpuChange} />

                        <Col>
                            {this.renderlist()}
                        </Col>


                    </Col>
                </Row>


            </div>
        );
    }
}

export default Slide;
