import React from "react"
import Layout from "../components/layout"
import Button from "../components/biobutton"

class ZoomPage extends React.Component {
  render() {
    return (
      <Layout style={{ position: "relative" }} location={this.props.location}>
        <h1>Taylor's Zoom Room</h1>
        <p>
          passcode: <strong>tayro</strong>
        </p>
        <Button url="https://us04web.zoom.us/j/5258465753?pwd=OXhYcHRaajNDVnNJaCswM3FJek9YZz09">
          Enter Room
        </Button>
      </Layout>
    )
  }
}

export default ZoomPage
