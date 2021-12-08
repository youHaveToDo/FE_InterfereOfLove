import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    flex,
    right,
    marginTop,
    space,
    center,
    wrap,
    between,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    flex: flex,
    right: right,
    marginTop: marginTop,
    space: space,
    center: center,
    wrap: wrap,
    between: between,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  flex: false,
  right: false,
  marginTop: false,
  space: false,
  center: false,
  wrap: false,
  between: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.wrap ? `flex-wrap: wrap;` : "")}
  ${(props) => (props.between ? `justify-content: space-between;` : "")}
  ${(props) => (props.space ? `justify-content: space-evenly;` : "")}
  ${(props) => (props.center ? `justify-content: center;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.flex ? `display: flex;` : "")}
  ${(props) => (props.right ? `justify-content: flex-end;` : "")}
  ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
`;

export default Grid;