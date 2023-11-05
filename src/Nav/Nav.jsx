import React, {Component} from "react";
import { Menu } from "antd";

import "./Nav.css"

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "About",
      menuItem: [
        {
          label: 'About',
          key: 'About',
          className: "nav-menu-li" //Maybe only set the first element's className it will work
        },
        {
          label: 'Publication',
          key: 'Publication',
          className: "nav-menu-li"
        },
        {
          label: 'CV',
          key: 'CV',
          className: "nav-menu-li"
        },
      ]
    };
  }

  get displayItems() {
    //because "float" style will reverse the items
    return this.state.menuItem.slice().reverse();
  }

  render() {
    return <div className="nav">
      <div className="nav-edge1"></div>
      <div className="nav-edge2"></div>
      <div className="nav-menu-wrapper">
        <div className="nav-myname-wrapper">
          <div className="nav-myname">Yunfan Zhou</div>
        </div>
        <div className="nav-menu-wrapper-vertical">
          <Menu items={this.displayItems} selectedKeys={[this.state.currentItem]} mode="horizontal" className="nav-menu"></Menu>
        </div>
      </div>
      
    </div>
  }
}