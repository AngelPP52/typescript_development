import * as React from 'react';
import * as ReactDom from 'react-dom';


const root = document.getElementById("root");
const props = {className: "title"};
const element = React.createElement("div", props, "hello");

ReactDom.render(element, root);