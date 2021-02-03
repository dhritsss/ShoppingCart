import React from "react";
import Cart from './cart';
import Navbar from './navbar';



class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
                price: 999,
                title : 'Watch',
                qty : 1,
                img : 'https://images-na.ssl-images-amazon.com/images/I/81NFm2SyeHL._UY550_.jpg',
                id : 1
                
  
            },
            {
                price: 39999,
                title : 'Mobile Phone',
                qty : 1,
                img : 'https://cnet4.cbsistatic.com/img/YQlXeeHCk-e--zjAOA19Cc-ISPs=/940x0/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg',
                id : 2
  
  
            },
            {
                price: 28000,
                title : 'Laptop',
                qty : 1,
                img : 'https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg',
                id : 3
            }
        ]
    }
  }
  
  
  //yaha arrow function kyu tuje pata h
  //>>this is very crucial
  
  increaseQuantity=(product)=>{
    //Conept of batching is imp here and also note that setSate work both async and sync(in promises)
    //they can be handled or called in 2 ways (callback and the 1st one)
    //this.state.prop="xyz"  --> will not cause rendering
  
    // this.state.qty+=1;    //this wont change the display stuff
    // console.log('this',this.state);
  
    // *************setState form 1 *************
  
    // this.setState({   //this work
    //     qty:this.state.qty+1
    // });
    // *************setState form 2 *************
    //note it act async here
    //learn about batching once 
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
  
  
    this.setState((prevState)=>{
        return {
            products
        }
    })
  
  
  
  
  }
  
  decreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
  
    if(products[index].qty==0){
        return;
    }
    products[index].qty-=1;
  
    
    this.setState((prevState)=>{
       return {products};
    })
  
  
  
  
  }
  
  deleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!=id);
  
    this.setState({
        products:items
    })
  
  }

  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;

    })
    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;

    let cartTotal=0;
    products.map((product)=>{
      cartTotal+=product.qty*product.price;
    })
    return cartTotal;
  }

  render(){
    const{products}=this.state;

  return (
    <div className="App">
    <Navbar count={this.getCartCount()}/>
    <Cart
      products={products} 
      increaseQuantity={this.increaseQuantity}
      decreaseQuantity={this.decreaseQuantity}
      deleteProduct={this.deleteProduct}
    /> 
    <div style={{padding:10,fontSize:20}}>Total :: {this.getCartTotal()}</div>
      
    </div>
  );
  }
}

export default App;
