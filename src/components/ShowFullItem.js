import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='showItem'>
        <div>
            <img onClick={() => this.props.onShowItem(this.props.item)} src={"./img/" + this.props.item.img} alt={'Товары'} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className='butttonAdd' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem