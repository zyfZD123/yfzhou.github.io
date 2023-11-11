import React, {Component} from "react";
import { Menu, Anchor } from "antd";

import "./Nav.css"

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "About",
      menuItem: [
        {
          // label: <span>About</span>,
          label: "About",
          key: 'About',
          // href: "#about",
          // title: 'About',
          className: "nav-menu-li" //Maybe only set the first element's className it will work
        },
        {
          // label: <span>Publication</span>,
          label: "Publication",
          key: 'Publication',
          // href: "#publication",
          // title: 'Publication',
          className: "nav-menu-li"
        },
        {
          // label: <span>CV</span>,
          label: "CV",
          key: 'CV',
          // href: "#cv",
          // title: 'CV',
          className: "nav-menu-li"
        },
      ]
    };
    this.defaultItem = "About";
  }

  get displayItems() {
    //because "float" style will reverse the items
    return this.state.menuItem.slice();
  }

  onNavSelect(e) {
    const {key} = e;
    console.log(e);
  }

  render() {
    return <div className="nav">
      <div className="nav-edge1"></div>
      <div className="nav-edge2"></div>
      <div className="nav-menu-wrapper">
        <div className="nav-myname-wrapper">
          <div className="nav-myname">Yunfan Zhou</div>
        </div>
        {/* <Anchor items={this.displayItems} direction="horizontal" className="nav-menu-anchor"/> */}
        <Menu items={this.displayItems} mode="horizontal" className="nav-menu" defaultSelectedKeys={[this.defaultItem]} onSelect={this.onNavSelect} />
      </div>
      
    </div>
  }
}