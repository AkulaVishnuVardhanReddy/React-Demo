import React from 'react'
import ReactDOM from 'react-dom/client'

const element=ReactDOM.createRoot(document.getElementById("element"));
const head1=React.createElement("h4",{id:"head1",key:"h1"},"Heading 1");
console.log(head1);
const head2=React.createElement("h4",{id:"head2",key:"h2"},"Heading 2");
const container=React.createElement("div",{id:"container",hello:"hfudbfu"},[head1,head2]);
element.render(container);