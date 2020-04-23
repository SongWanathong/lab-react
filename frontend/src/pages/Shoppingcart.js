import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Categories from '../compoment/Categories';
import Products from '../compoment/Products';
import Cart from '../compoment/Cart';
import { uniqueId } from 'lodash';
import Axios from 'axios';
class Shoppingcart extends Component {

    state = {
        categoriesList: [],
        productsList: [],
        cart: [],
        selectedCategoriesId: null,
    }

    componentDidMount =async ()=>{
     const resultproductsList =  await Axios.get('http://localhost:8080/product')
     const resultcategoriesList =  await Axios.get('http://localhost:8080/product-category')

     this.setState({
        categoriesList:resultcategoriesList.data,
        productsList:resultproductsList.data,
        selectedCategoriesId:resultcategoriesList.data[0].id
     })

      
    }

    fillterproduct= ()=>{
     let id =this.state.selectedCategoriesId
       if(id ==null){
         return []
       }else{
         return this.state.productsList.filter(produc=>produc.ProductCategoryId == id)
       }


    }

    handleCategoriesId = (id)=>()=>{
     console.log(id)
     this.setState({selectedCategoriesId:id})
    }

    HandleClickAddToCart= (product)=>{
        if(this.state.cart.find(cartItem =>cartItem.id === product.id)){
            this.setState({
                cart:this.state.cart.map(cartItem=>
                    cartItem.id === product.id ? {...cartItem,amount:cartItem.amount+1}:cartItem
                    )
            })

        }else{
            this.setState({
                cart:[...this.state.cart,{uid:uniqueId(),...product,amount:1}]
            })
        }
    }

    handlecartdelete =(id)=>()=>{
        this.setState({
            cart:this.state.cart.filter(x=>x.id!=id)
        })
    }

    handlecartdeleteallproduct =()=>{
        console.log('cartgogo')
        this.setState({
            cart:[]
        })
    }
    render() {
        return (
            <Row>
                <Col span={5}>
                  <Categories handleCategoriesId={this.handleCategoriesId} categoriesList={this.state.categoriesList}/>
                </Col>
                <Col span={12}>
                  <Products  products={this.fillterproduct()} 
                  HandleClickAddToCart={this.HandleClickAddToCart}
                  />
                </Col>
                <Col span={6}>
                  <Cart cart={this.state.cart}
                   handlecartdelete={this.handlecartdelete}
                   handlecartdeleteallproduct={this.handlecartdeleteallproduct}
                   />
                </Col>
            </Row>
        );
    }
}

export default Shoppingcart;
