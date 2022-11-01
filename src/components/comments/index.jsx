import React, { Component } from "react";
import Coolbutton from "../cool_button";
export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      Publisher: "",
      Comment: "",
    };
  }

  write = (e) => {
    this.setState({
      Comment: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.Comment}</div>
        <div>Author: {this.props.Author}</div>
        <br />
        <textarea
          onChange={this.write}
          class="textarea textarea-primary px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        ></textarea>
        <Coolbutton
          buttonName="Комментоо үнэнээр бичнэ үү"
          text="Saving"
          Comment={this.state.Comment}
        />
      </div>
    );
  }
}
