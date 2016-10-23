import React, {Component} from 'react'

export class Link extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // Access click handler from the context set by Router component
  static contextTypes = {
    linkHandler: React.PropTypes.func
  }

  handleClick(evt) {
    evt.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
}
