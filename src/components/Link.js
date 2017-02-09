/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";


export default class Link extends Component {
  render() {
    const {url} = this.props.contentState.getEntity(this.props.entityKey).getData();
    return (
      <a className="editor__link" href={url} title={url}>
        {this.props.children}
      </a>
    );
  }
}
