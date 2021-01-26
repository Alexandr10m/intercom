import * as React from "react";
import * as render from "react-test-renderer";
import App from "./app";

describe(`Snapshot of App`, () => {
  it(`AppComponent shoul render h1`, () => {
    const tree = render
      .create(<App/>)
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
});
