import React from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          {/*<li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
          <li><Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link></li>*/}

          {/* index.html 中增加 index.css */}
          {/*<li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>*/}

          {/* 使用自定义的Link 组件 */}
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>

        </ul>
        {this.props.children}
      </div>
    )
  }
})
