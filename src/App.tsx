import * as React from "react";
import "./styles.css";
import data from "./sampledata";

interface DataSource {}
interface componentProps {
  config?: any;
  data?: DataSource;
  events?: any;
}

class FxPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <body />;
  }
}
class FxCard extends React.Component {
  render() {
    return <div style={{ backgroundColor: "#EFEFEF" }} />;
  }
}

class FxButton extends React.Component {
  data: any = "test";

  render() {
    return (
      <p>
        <button style={{ backgroundColor: "#FF0055" }}>
          {this.props.children}
        </button>
      </p>
    );
  }
}

export default function App() {
  const test: any = data;
  return (
    <div className="App">
      <h1>Heading - {test.test}</h1>
      <FxButton>MY BUTTON</FxButton>
    </div>
  );
}
