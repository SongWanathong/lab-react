import React, { Component } from 'react';
import { Row, Menu } from 'antd';

class Categories extends Component {
    redermenu = ()=>{
      return  this.props.categoriesList.map(x=>(
        <Menu.Item  key={x.id}>{x.name}</Menu.Item>
      ))
    }
    render() {
        return (
                <Menu>
                    {this.redermenu()}
                </Menu>
                
        );
    }
}

export default Categories;
