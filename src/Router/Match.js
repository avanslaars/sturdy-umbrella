import React, {Component} from 'react'

export class Match extends Component {
  // Access route from the context set by Router component
  static contextTypes = {
    route: React.PropTypes.string
  }

  render() {
    const Comp = this.props.component
    return (
      this.props.pattern === this.context.route && <Comp />
    )
  }
}


Match.propTypes = {
  component: React.PropTypes.func.isRequired,
  pattern: React.PropTypes.string.isRequired
}
