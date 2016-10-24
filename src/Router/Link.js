import React, {Component} from 'react'

export class Link extends Component {
  // Access click handler from the context set by Router component
  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  static propTypes = {
    to: React.PropTypes.string.isRequired
  }

  handleClick = (evt) => {
    evt.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return <a href="#" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
  }
}
