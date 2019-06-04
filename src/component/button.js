import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding}px;
`;
export default class componentName extends React.Component {
  state = { padding: 30 };

  render() {
    const { onClickButton, title, backgroundColor, padding } = this.props;
    return (
      <Button
        onClick={onClickButton}
        backgroundColor={backgroundColor}
        padding={padding}
      >
        {title}
      </Button>
    );
  }
}

componentName.propTypes = {};
