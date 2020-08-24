import React from "react"
class Button extends React.Component {
  render() {
    const buttonClass = {
      margin: 6,
      padding: 6,
      color: "black",
      backgroundColor: "#FFFFFF",
      WebkitBoxShadow: "0px 2px black",
      border: "1px solid black",
      textDecoration: "none",
    }
    const { url, children } = this.props
    return (
      <a href={url} style={buttonClass}>
        {children}
      </a>
    )
  }
}

export default Button
