import * as React from "react";
import * as renderer from "react-test-renderer";
import CallBackForm from "./callback-form";


describe(`CallBackForm Snapshots`, () => {
  it(`should render correct`, () => {
    const tree = renderer
      .create(
        <CallBackForm
          onSubmit = {() => {}}
          onInput = {() => {}}
          buttonDisable = {true}
          inputValue = {`2`}
        />
        )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

