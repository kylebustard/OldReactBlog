import React from "react"
import { hot } from "react-hot-loader"

export default class extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div onClick={this.climb.bind(this)}>
         <h1>Count: {this.state.count}</h1>
      </div>
    )
  }
}
