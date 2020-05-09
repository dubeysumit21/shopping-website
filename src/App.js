import React from 'react';
import './App.css';
import SizeChart from './components/SizeChart/index';
import IndividualItem from './components/IndividualItem/index';
import SortButton from './components/SortButton/index';
import Cart from './components/Cart/index';
import CartOpenButton from './components/CartOpenButton';

class App extends React.Component {

  state = {
    itemArray : [
      {id : '1', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg', name:'Cat Tee Black T-Shirt', price: '799', size: ['XS', 'S', 'ML'], quantity : 1, display: true, heartSelected: false},
      {id : '2', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg', name:'Dark Thug Blue-Navy T-Shirt', price: '899', size: ['XS', 'XXL', 'L'], quantity : 1, display: true, heartSelected: false}, 
      {id : '3', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg', name:'Sphynx Tie Dye Wine T-Shirt', price: '799', size: ['M', 'S', 'XL'], quantity : 1, display: true, heartSelected: false},
      {id : '4', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg', name:'Skuul', price: '799', size: ['XS', 'S', 'XXL'], quantity : 1, display: true, heartSelected: false}, 
      {id : '5', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg', name:'Wine Skul T-Shirt', price: '799', size: ['XS', 'XL', 'ML'], quantity : 1, display: true, heartSelected: false}, 
      {id : '6', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg', name:'Cat Tee Black T-Shirt', price: '1099', size: ['S', 'M', 'L'], quantity : 1, display: true, heartSelected: false}, 
      {id : '7', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg', name:'Sphynx Tie Dye Grey T-Shirt', price: '1299', size: ['XS', 'S', 'ML'], quantity : 1, display: true, heartSelected: false}, 
      {id : '8', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg', name:'Danger Knife Grey', price: '899', size: ['S', 'M', 'L'], quantity : 1, display: true, heartSelected: false}, 
      {id : '9', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg', name:'White DGK Script Tee', price: '999', size: ['XS', 'XXL', 'ML'], quantity : 1, display: true, heartSelected: false}, 
      {id : '10', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg', name:'Born On The Streets', price: '999', size: ['XS', 'S', 'M'], quantity : 1, display: true, heartSelected: false}, 
      {id : '11', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg', name:'Tso 3D Short Sleeve T-Shirt A', price: '999', size: ['XS', 'XXL', 'L'], quantity : 1, display: true, heartSelected: false}, 
      {id : '12', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg', name:'Man Tie Dye Cinza Grey T-Shirt', price: '999', size: ['S', 'M', 'L'], quantity : 1, display: true, heartSelected: false}, 
      {id : '13', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg', name:'Crazy Monkey Black T-Shirt', price: '999', size: ['XS', 'M', 'ML'], quantity : 1, display: true, heartSelected: false}, 
      {id : '14', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg', name:'Tso 3D Black T-Shirt', price: '899', size: ['L', 'S', 'XXL'], quantity : 1, display: true, heartSelected: false}, 
      {id : '15', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg', name:'Crazy Monkey Grey', price: '799', size: ['XS', 'M', 'ML'], quantity : 1, display: true, heartSelected: false}, 
      {id : '16', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg', name:'On The Streets Black T-Shirt', price: '799', size: ['XXL', 'S', 'ML'], quantity : 1, display: true, heartSelected: false}],
    tempItemArray : [
      {id : '1', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg', name:'Cat Tee Black T-Shirt', price: '799', size: ['XS', 'S', 'ML'], quantity : 0, display: true, heartSelected: false},
      {id : '2', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg', name:'Dark Thug Blue-Navy T-Shirt', price: '899', size: ['XS', 'XXL', 'L'], quantity : 0, display: true, heartSelected: false}, 
      {id : '3', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg', name:'Sphynx Tie Dye Wine T-Shirt', price: '799', size: ['M', 'S', 'XL'], quantity : 0,display: true, heartSelected: false},
      {id : '4', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg', name:'Skuul', price: '799', size: ['XS', 'S', 'XXL'], quantity : 0, display: true, heartSelected: false}, 
      {id : '5', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg', name:'Wine Skul T-Shirt', price: '799', size: ['XS', 'XL', 'ML'], quantity : 0, display: true, heartSelected: false}, 
      {id : '6', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg', name:'Cat Tee Black T-Shirt', price: '1099', size: ['S', 'M', 'L'], quantity : 0, display: true, heartSelected: false}, 
      {id : '7', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg', name:'Sphynx Tie Dye Grey T-Shirt', price: '1299', size: ['XS', 'S', 'ML'], quantity : 0, display: true, heartSelected: false}, 
      {id : '8', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg', name:'Danger Knife Grey', price: '899', size: ['S', 'M', 'L'], quantity : 0, display: true, heartSelected: false}, 
      {id : '9', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg', name:'White DGK Script Tee', price: '999', size: ['XS', 'XXL', 'ML'], quantity : 0, display: true, heartSelected: false}, 
      {id : '10', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg', name:'Born On The Streets', price: '999', size: ['XS', 'S', 'M'], quantity : 0,display: true, heartSelected: false}, 
      {id : '11', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg', name:'Tso 3D Short Sleeve T-Shirt A', price: '999', size: ['XS', 'XXL', 'L'], quantity : 0, display: true, heartSelected: false}, 
      {id : '12', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg', name:'Man Tie Dye Cinza Grey T-Shirt', price: '999', size: ['S', 'M', 'L'], quantity : 0, display: true, heartSelected: false}, 
      {id : '13', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg', name:'Crazy Monkey Black T-Shirt', price: '999', size: ['XS', 'M', 'ML'], quantity : 0, display: true, heartSelected: false}, 
      {id : '14', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg', name:'Tso 3D Black T-Shirt', price: '899', size: ['L', 'S', 'XXL'], quantity : 0, display: true, heartSelected: false}, 
      {id : '15', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg', name:'Crazy Monkey Grey', price: '799', size: ['XS', 'M', 'ML'], quantity : 0, display: true, heartSelected: false}, 
      {id : '16', img : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg', name:'On The Streets Black T-Shirt', price: '799', size: ['XXL', 'S', 'ML'], quantity : 0, display: true, heartSelected: false}
    ],
    cartButton : false,
    itemsInCart : [],
  }

  selectedItemHandler = (props) => {
    const newArr = this.state.itemArray.filter((x) => {
      const arr = x.size;
      for(let i = 0; i<arr.length; i++){
        if(arr[i] === props){
          return true;
        }
      }
      return null;
    });
    this.setState({tempItemArray : newArr});
  }

  increaseItemHandler = (props) => {
  const newArr = [...this.state.tempItemArray];
  newArr[props].quantity ++;
  this.setState({tempItemArray : newArr});
  } 

  addItemInCartHandler = (props) => {
    this.setState((prevState) => {
      return(prevState.itemsInCart.push(props))
    });
  }

  sortHandler = (props) => {
    const newArr = [...this.state.tempItemArray];
    if(props === 'Low to High'){
      newArr.sort(function(a, b) {
        return (Number(a.price) - Number(b.price)) 
      });
    }
    else{
       newArr.sort(function(a, b) {
        return (Number(b.price) - Number(a.price)) 
      });
    }
    
    this.setState({tempItemArray : newArr})
  }

  decreaseQuantityHandler = (props) => {
    const newArr = [...this.state.tempItemArray];
    for(let i=0; i<newArr.length; i++){
      if((newArr[i].id === props) && (newArr[i].quantity>0)){
        newArr[i].quantity--;
      }
    }
    this.setState({tempItemArray : newArr});
  }

  removeItemHandler = (props) => {
    for(let i=0; i<this.state.itemsInCart.length; i++){
      if((this.state.itemsInCart[i].id === props) && (this.state.itemsInCart[i].quantity === 0)){
        this.setState((prevState) => {
          return(prevState.itemsInCart.splice(i, 1))
        });
      }
    }
  }

  openCartBoxHandler = () => {
    this.setState((prevState) => {
      return({cartButton : !prevState.cartButton})
    });
  }

  closeCartHandler = () => {
    this.setState((prevState) => {
      return({cartButton : !prevState.cartButton})
    });
  }

  gallerySetter = id => {
    const newArr = [ ...this.state.tempItemArray ];
    const setArray = newArr.map(x => {
      if (x.id === id) {
        return {
          ...x,
          display: false,
        };
      } else {
        return {
          ...x,
          display: true,
        }
      }
    });
    this.setState({ tempItemArray: [...setArray] });
  }

  itemSetter = id => {
    const newArr = [ ...this.state.tempItemArray ];
    const setArray = newArr.map(x => {
      if (x.id === id) {
        return {
          ...x,
          display: true,
        };
      } else {
        return {
          ...x,
          display: true,
        }
      }
    });
    this.setState({ tempItemArray: [...setArray] });
  }

  heartChangeHandler = id => {
    console.info('id', id);
    const newArr = [ ...this.state.tempItemArray ];
    const setArray = newArr.map(x => {
      const heartSelected = x.heartSelected;
      if(x.id === id) {
        return {
          ...x,
          heartSelected: !heartSelected,
        };
      } else {
        return {
          ...x
        };
      }
    });
    this.setState({ tempItemArray: [...setArray] });
  } 

  render(){
    const { cartButton } = this.state;
    const sizeArray = [{id : 'XS'},{id : 'S'},{id : 'M'},{id : 'ML'},{id : 'L'},{id : 'XL'},{id : 'XXL'}];
    const sizes = sizeArray.map((x) => <SizeChart item={x.id} clicked={() => this.selectedItemHandler(x.id)}/>);
    const items = this.state.tempItemArray.map((x, index) => <IndividualItem itemSetter={this.itemSetter} heartSelected={x.heartSelected} heartChangeHandler={this.heartChangeHandler} gallerySetter={this.gallerySetter} display={x.display} id={x.id} item={x.img} name={x.name} price={x.price} size={x.size} clicked1={() => {
        this.increaseItemHandler(index) 
        this.addItemInCartHandler(x)
      }}
    />);
    const sortItems = [{id : 'Popularity'}, {id : 'Low to High'}, {id : 'High to Low'}];
    const sortButtons = sortItems.map((x) => <SortButton item={x.id} clicked={() => this.sortHandler(x.id)}/>);
    return(
      <div>
          { cartButton ? <Cart closeCart={this.closeCartHandler} clicked={this.state.cartButton} cartItem={this.state.itemsInCart} click2={(props) => {
              this.decreaseQuantityHandler(props)
              this.removeItemHandler(props)}}
          /> : null }
          <header style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#012323'}}>
              <CartOpenButton itemCount={this.state.itemsInCart.length} clicked={this.openCartBoxHandler}/>
          </header>
          <div class="main">
            <div class="left">
              <p class = "left-p">Filter By Sizes:</p>
              <hr></hr>
              <div class="size-container">{sizes}</div>
              <p class="left-p">Order Items By: </p>
              <hr></hr>
              {sortButtons}
            </div>
            <div class="right">
              <div class="item-container">{items}</div>
            </div>
          </div>
      </div>
    );
  }
}


export default App;
