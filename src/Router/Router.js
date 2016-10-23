import React, {Component} from 'react'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  constructor() {
    super()
    this.state = {
      route: getCurrentPath()
    }
    this.handleLink = this.handleLink.bind(this)
  }

  // Specify context types to be exposed
  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  // Provide values for exposed context values
  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLink
    }
  }

  handleLink(route) {
    this.setState({route})
    history.pushState(null, null, route)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
