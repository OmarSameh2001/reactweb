import React, { Component } from 'react'
import Child from '../Child/Child';


export default class Parent extends Component {
  state = {
    products : [
    { id: 1,
      name: 'Toshiba',
      category: 'tv',
      count: 20 },
    { id: 2,
      name: 'Sam',
      category: 'tv',
      count: 30 },
    ,,
  ],};
  render() {
    return (
        <div className='container'>
            <div className='row'>
                {this.state.products.map((product) => (
                    <Child productInfo={product} />
                ))}
                
            </div>
        </div>
      
    )
  }
}
