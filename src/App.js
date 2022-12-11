import React from "react";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [
        {
          id:1,
          title:'Чернобелые кросы',
          img: 'black-white-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'MJ',
          price: '100.00'
        },
        {
          id:2,
          title:'Космо кросы',
          img: 'cosmo-snikets.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Nike',
          price: '150.00'
        },
        {
          id:3,
          title:'Филды',
          img: 'fild-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Fild',
          price: '99.00'
        },
        {
          id:4,
          title:'Фреши',
          img: 'fresh-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Nike',
          price: '250.00'
        },
        {
          id:5,
          title:'Красные найки',
          img: 'nike-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Nike',
          price: '200.00'
        },
        {
          id:6,
          title:'Ретро',
          img: 'old-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Star',
          price: '70.00'
        },
        {
          id:7,
          title:'Красные кросы',
          img: 'red-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Adidas',
          price: '150.00'
        },
        {
          id:8,
          title:'Спортивные',
          img: 'sport-snikets.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Jordan',
          price: '200.00'
        },
        {
          id:9,
          title:'Рванье',
          img: 'white-purple-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Jordan',
          price: '120.00'
        },
        {
          id:10,
          title:'Желтые спортивки',
          img: 'yellow-sniket.jpg',
          desc: 'lorasdasd asdas dasdas dasdasdasdasd a asdasdas d',
          category: 'Adidas',
          price: '90.00'
        },
       ],
       orders: [],
       currentItem: [],
       showFullItem: false,
       fullItem: {}
    }
    this.state.currentItem = this.state.items
    this.addToOrders = this.addToOrders.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        {<Card onShowItem={this.onShowItem} items={this.state.currentItem} onAdd={this.addToOrders} />}
        <Footer />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrders} item={this.state.fullItem} />}
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItem: this.state.items})
      return
    }
    this.setState({
      currentItem: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrders(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray) {
    this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;