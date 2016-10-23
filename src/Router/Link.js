import React, {Component} from 'react'

export class Link extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    evt.preventDefault()
    history.pushState(null, null, this.props.to)
  }

  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
}
