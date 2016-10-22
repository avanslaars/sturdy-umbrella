import React, {Component} from 'react'

export class Match extends Component {
  render() {
    const path = document.location.pathname
    const route = path.substring(path.lastIndexOf('/'))
    const Comp = this.props.component
    return (
      this.props.pattern === route && <Comp />
    )
  }
}

Match.propTypes = {
  component: React.PropTypes.func.isRequired,
  pattern: React.PropTypes.string.isRequired
}
