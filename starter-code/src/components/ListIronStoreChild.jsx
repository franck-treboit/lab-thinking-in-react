import React, { Component } from "react";


export default class ListIronStoreChild extends Component {
   state = {
       name: this.props.name,
       price: this.props.price,
       key: this.props.key,
       stocked: this.props.stocked
   };


  render() {
      console.log("ccccc",this.props);

          if (this.state.stocked) {
              return (
                  <tr className="white">
                      <td>{this.state.name}</td>
                      <td>{this.state.price}</td>
                      <td>{this.state.key}</td>
                  </tr>
              )
          } else {
              if ( this.props.stock ) {
                  return (" ")
              }  else {
                  return (
                      <tr className="red">
                          <td>{this.state.name}</td>
                          <td>{this.state.price}</td>
                          <td>{this.state.key}</td>
                      </tr>
                  )
              }
          }


  }  
}