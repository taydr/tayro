import React from "react"
class Button extends React.Component {
  render() {
    const { url, children } = this.props
    let buttonClass = {
      margin: 6,
      padding: 8,
      color: "black",
      backgroundColor: "#FFFFFF",
      WebkitBoxShadow: "0px 2px black",
      border: "1px solid black",
      textDecoration: "none",
      borderRadius: "6px",
    }

    return (
      <a href={url} style={buttonClass}>
        {children}
        {console.log(url)}
      </a>
    )
  }
}

export default Button
