import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import CallBackForm from "./callback-form";

configure({adapter: new Adapter()});

describe(`CallBackForm E2E tests`, () => {
  it(`should call function afteer click on button - Узнать Стоимость`, () => {
    const onSubmit = jest.fn();
    const CallBackFormComponent = shallow(
      <CallBackForm
        onSubmit = {onSubmit}
        onInput = {() => {}}
        buttonDisable = {false}
        inputValue = {``}
      />
    );

    const callbackForm = CallBackFormComponent.find(`button.header__button`);
    callbackForm.simulate(`click`);

    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
