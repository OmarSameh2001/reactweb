import React from 'react'
import Star from '../Star/Star'

export default function Portofolio() {
  return (
    <h2 className="text-center bg-white" style={{paddingTop:'70px', color:'#2c3e50'}}>
        <h1 style={{fontSize: '45px', fontWeight: "bolder"}}>Portofolio Component</h1>
        <Star color="#2c3e50"/>
        <div className='row mx-auto'>
          <div className='col-md-4 pb-4'>
            <img src={require('../../assets/images/wood.png')} alt="" style={{width:'330px'}}/>
          </div>
          
          <div className='col-md-4'><img src={require('../../assets/images/cake.png')} alt="" style={{width:'330px'}}/></div>
             
          <div className='col-md-4'>
             <img src={require('../../assets/images/circus.png')} alt="" style={{width:'330px'}}/>
          </div>
        </div>
        <div className='row mx-auto'>
          <div className='col-md-4'>
            <img src={require('../../assets/images/wood.png')} alt="" style={{width:'330px'}}/>
          </div>
          
          <div className='col-md-4'>
          <img src={require('../../assets/images/cake.png')} alt="" style={{width:'330px'}}/>
          </div>
             
          <div className='col-md-4'>
             <img src={require('../../assets/images/circus.png')} alt="" style={{width:'330px'}}/>
          </div>
        </div>
    </h2>
  )
}
