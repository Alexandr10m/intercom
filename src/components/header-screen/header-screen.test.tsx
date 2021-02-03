import * as React from "react";
import * as renderer from "react-test-renderer";
import HeaderScreen from "./header-screen";


describe(`HeaderScreen Snapshots`, () => {
  it(`should render correct`, () => {
    const tree = renderer
      .create(
        <HeaderScreen
          currentMode = {0}
          currentBackground = {`bg`}
          activeClassName = {`active`}
          onArrowNextClick = {() => {}}
          onArrowPreviousClick = {() => {}}
          onBasinModesClick = {() => {}}
        />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
  });
});

