import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: [
          {
            key: 'all',
            name: 'Все'
          },
          {
            key: 'MJ',
            name: 'MJ'
          },
          {
            key: 'Nike',
            name: 'Найк'
          },
          {
            key: 'Fild',
            name: 'Филд'
          },
          {
            key: 'Star',
            name: 'Звезда'
          },
          {
            key: 'Adidas',
            name: 'Адидас'
          },
          {
            key: 'Jordan',
            name: 'Джордан'
          }
       ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories