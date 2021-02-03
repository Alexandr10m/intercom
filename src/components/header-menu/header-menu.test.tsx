import * as React from "react";
import * as renderer from "react-test-renderer";
import HeaderMenu from "./header-menu";


describe(`HeaderMenu Snapshots`, () => {
  it(`shoult render correctly`, () => {
    const tree = renderer
      .create(<HeaderMenu/>)
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
});
