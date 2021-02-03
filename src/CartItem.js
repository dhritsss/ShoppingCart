import React from 'react';

class CartItem extends React.Component{
    



    render(){
        const {title,price,qty,img}=this.props.product;
        const {product,increaseQuantity,decreaseQuantity,deleteProduct}=this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img}/>


                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}> Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img  onClick={()=>{increaseQuantity(product)}}   className="action-icons" alt="increase" src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg"/>
                        <img onClick={()=>{decreaseQuantity(product)}}  className="action-icons" alt="decrease" src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"/>
                        <img onClick={()=>{deleteProduct(product.id)}}   className="action-icons" alt="delete" src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"/>
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