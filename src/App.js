import React from "react";
import _ from "lodash";
import styled from "styled-components";
import "./App.css";
import Card from "./component/card";
import Button from "./component/button";
//components
const xx = [
  { title: "1", subtitle: "123", color: "blue" },
  { title: "2", subtitle: "123", color: "peachpuff" },
  { title: "3", subtitle: "123", color: "blue" },
  { title: "4", subtitle: "123", color: "peachpuff" },
  { title: "5", subtitle: "123", color: "green" },
  { title: "6", subtitle: "123", color: "blue" },
  { title: "7", subtitle: "123", color: "peachpuff" },
  { title: "8", subtitle: "123", color: "green" },
  { title: "9", subtitle: "123", color: "blue" },
  { title: "10", subtitle: "123", color: "peachpuff" },
  { title: "11", subtitle: "123", color: "green" },
  { title: "12", subtitle: "123", color: "blue" },
  { title: "13", subtitle: "123", color: "peachpuff" },
  { title: "14", subtitle: "123", color: "green" },
  { title: "15", subtitle: "123", color: "blue" },
  { title: "16", subtitle: "123", color: "peachpuff" },
  { title: "17", subtitle: "123", color: "green" },
  { title: "18", subtitle: "123", color: "blue" },
  { title: "19", subtitle: "123", color: "peachpuff" },
  { title: "20", subtitle: "123", color: "green" },
  { title: "21", subtitle: "123", color: "blue" },
  { title: "22", subtitle: "123", color: "peachpuff" },
  { title: "23", subtitle: "123", color: "green" },
  { title: "24", subtitle: "123", color: "blue" },
  { title: "25", subtitle: "123", color: "peachpuff" },
  { title: "26", subtitle: "123", color: "green" },
  { title: "27", subtitle: "123", color: "blue" },
  { title: "28", subtitle: "123", color: "peachpuff" },
  { title: "29", subtitle: "123", color: "green" },
  { title: "30", subtitle: "123", color: "blue" },
  { title: "31", subtitle: "123", color: "peachpuff" },
  { title: "32", subtitle: "123", color: "green" }
];
const AppContainer = styled.div`
  width: 1000px;
  heigh: 1200px;
  display: flex;
  flex-wrap: wrap;
`;
const Buttonholder = styled.div`
  display: flex;
`;
//class
class App extends React.Component {
  state = { taaitle: "boy dd" };
  renderDiv = () => {
    console.log("renderDiv");
    const { taaitle } = this.state;
    const myDiv = _.map(xx, item => {
      console.log(item);
      const title = _.get(item, "title", "OK");
      const color = _.get(item, "color", "orange");
      const subtitle = _.get(item, "subtitle", "222");

      return <Card title={title} color={color} subtitle={subtitle} />;
    });
    return myDiv;
  };

  handleClickButton = () => {
    console.log("go");
  };
  //renderfile
  render() {
    console.log("app >>>> ");
    return (
      <div>
        <AppContainer>{this.renderDiv()}</AppContainer>
        <Buttonholder>
          <Button
            title="Go"
            padding={70}
            backgroundColor="blue"
            onClickButton={() => this.handleClickButton()}
          />
        </Buttonholder>
      </div>
    );
  }
}

export default App;
//`````
