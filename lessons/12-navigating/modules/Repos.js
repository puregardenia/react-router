import React from 'react'
import NavLink from './NavLink'

import { browserHistory } from 'react-router'

export default React.createClass({

  // 方法二
  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  // add this method
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    // `` 可以取变量js语句
    const path = `/repos/${userName}/${repo}`
    console.log(path)

    // 方法一(需要导入browserHistory)
    // browserHistory.push(path)

    // 方法二(需要定义上下文contextTypes)
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          {/* add this form */}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
