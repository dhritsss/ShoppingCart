import React from 'react';

class CartItem extends React.Component{
    

    //yaha arrow function kyu tuje pata h
    //>>this is very crucial

    increaseQuantity=()=>{
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
        
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        })




    }

    decreaseQuantity=()=>{
        
        
        this.setState((prevState)=>{
            const {qty}=this.state;
            if(qty==0){
                return;
            }

            return {
                qty:prevState.qty-1
            }
        })




    }


    render(){
        const {title,price,qty}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>


                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}> Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img  onClick={this.increaseQuantity}   className="action-icons" alt="increase" src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg"/>
                        <img onClick={this.decreaseQuantity}  className="action-icons" alt="decrease" src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"/>
                        <img className="action-icons" alt="delete" src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"/>
                    </div>


                </div>

            </div>
        );
    }
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export  default CartItem;