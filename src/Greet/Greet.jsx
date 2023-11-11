import React, {Component} from "react";
import {Avatar} from "antd";

import "./Greet.css";

export default class Greet extends Component {
  constructor(props) {
    super(props);
    this.myemail = {
      site: "mailto:yunfzhou@zju.edu.cn",
      name: "yunfzhou@zju.edu.cn",
    };
    this.mygit = {
      site: "https://github.com/zyfZD123",
      name: "My Github"
    };
    this.mytwitter = {
      site: "https://twitter.com/yunf_zhou",
      name: "My Twitter"
    }
  }

  clickCallBack(link) {
    return () => {
      window.open(link, "_blank");
    };
  }

  render() {
    return <div className="greet">
      <div className="postcard">
        <div className="postcard-text">
          <span className="postcard-firstline">Nice to meet you! I'm Yunfan Zhou</span>
          <span className="postcard-firstline-chinese">(周云帆)</span>
        </div>
        <div className="postcard-text">
          <span className="postcard-secondline">CS Undergraduate @ Zhejiang University</span>
        </div>
        <div className="postcard-text">
          <span className="postcard-thirdline">Data Visualization | Human-Computer Interaction | Data Wrangling</span>
        </div>
        <div className="intro-contact-bar">
          <img src="/icons/mail.svg" className="intro-contact-icon"
               onClick={this.clickCallBack(this.myemail.site)}/>
          <img src="/icons/github.svg" className="intro-contact-icon"
               onClick={this.clickCallBack(this.mygit.site)}/>
          <img src="/icons/twitter.svg" className="intro-contact-icon"
               onClick={this.clickCallBack(this.mytwitter.site)}/>
        </div>
      </div>
      <div className="intro-image-wrapper">
        <Avatar src="/self.png" shape="circle" size={130} className="intro-image"></Avatar>
      </div>
    </div>
  }
}