import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import withActiveBasinMode from "./with-active-basin-mode";


configure({adapter: new Adapter()});

const MockComponent = () => <form></form>;
const MockComponentWrapped = withActiveBasinMode(MockComponent);

describe(`withActiveBasinMode E2E tests`, () => {
  it(`should increment property currentMode - basin mode`, () => {
    const wrapper = shallow(
      <MockComponentWrapped/>
    );

    wrapper.props().onArrowNextClick();
    expect(wrapper.state(`currentMode`)).toEqual(1);
  });

  it(`should decriment property currentMode to the end of basinModes.length`, () => {
    const wrapper = shallow(
      <MockComponentWrapped/>
    );

    wrapper.props().onArrowPreviousClick();
    expect(wrapper.state(`currentMode`)).toEqual(2);
  });

  it(`should change property currentMode to selected`, () => {
    const evtMock = {
      currentTarget: {
        className: `modes-basin__item modes-basin__item--sports`
      }
    };

    const wrapper = shallow(
      <MockComponentWrapped/>
    );

    wrapper.props().onBasinModesClick(evtMock);
    expect(wrapper.state(`currentMode`)).toEqual(2);
  });

  it(`should not change property of state currentMode to selected`, () => {
    const evtMock = {
      currentTarget: {
        className: `modes-basin__item modes-basin__item--swimming`
      }
    };

    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().onBasinModesClick(evtMock);
    expect(wrapper.state(`currentMode`)).toEqual(0);
  });
});
