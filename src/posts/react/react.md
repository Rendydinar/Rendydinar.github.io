---
postNumber: 2
title: 'React'
date: '2020-07-23'
tags:
  - react
---	

![reactjs](./close-up-code.jpg)

In this post you'll learn ReactJS

Simple Component:
``` jsx

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
```  
