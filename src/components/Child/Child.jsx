import React, { Component } from 'react'


export default class Child extends Component {
  render() {
    let {name, category, count} = this.props.productInfo;
    return (
        <div className='col-md-4'>
            <div>
            <h1>{name}</h1>
            <h4>{category}</h4>
            <h5>{count}</h5>
            </div>
        </div>


    ) 

  }
}
