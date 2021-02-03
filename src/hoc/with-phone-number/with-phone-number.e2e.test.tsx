import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import withPhoneNumber from "./with-phone-number";


configure({adapter: new Adapter()});

const MockComponent = <form></form>;
const MockComponentWrapped = withPhoneNumber(MockComponent);

describe(`withPhoneNumber E2E tests`, () => {
  it(`should change property of state - value and disable button`, () => {
    const evtMock = {
      target: {
        value: `+38`,
      }
    };

    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().onInput(evtMock);
    expect(wrapper.state(`value`)).toEqual(`+38`);
    expect(wrapper.state(`buttonDisable`)).toEqual(true);
  });

  it(`should change property of state - value and turn on button`, () => {
    const evtMock = {
      target: {
        value: `+380679999999`
      }
    };

    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().onInput(evtMock);
    expect(wrapper.state(`value`)).toEqual(`+380679999999`);
    expect(wrapper.state(`buttonDisable`)).toEqual(false);
  });

  it(`should reset property value of state`, () => {
    const preventDefaultMock = jest.fn();
    const evtMock = {
      target: {
        preventDefault: preventDefaultMock,
      }
    };

    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.state.value = `+380679999999`;
    wrapper.state.buttonDisable = false;
    wrapper.props().onSubmit(evtMock);

    expect(wrapper.state(`value`)).toEqual(``);
    expect(wrapper.state(`buttonDisable`)).toEqual(true);
    expect(wrapper.mock.calls.length).toEqual(1);
  })
});
