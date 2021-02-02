import * as React from "react";
import {BASIN_MODES, BACKGROUND_MODES} from "../../constants";


interface Props{}

interface State {
  currentMode: number,
}

const DEFAULT_BASIN_MODE = 0;
const ACTIVE_BASIN_MODE_CLASS_NAME = `active_basin-item`;
const PREFEX_OF_CLASS_NAME = `modes-basin__item modes-basin__item--`;

const withActiveBasinMode = (Comment) => {

  class WithActiveBasinMode extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        currentMode: DEFAULT_BASIN_MODE,
      };

      this.handleButtonArrowNextClick = this.handleButtonArrowNextClick.bind(this);
      this.handleButtonArrowPreviousClick = this.handleButtonArrowPreviousClick.bind(this);
      this.handleBasinModesClick = this.handleBasinModesClick.bind(this);
    }

    private _getCurrentBackGround (numberOfBasinMode) {
      const type = BASIN_MODES[numberOfBasinMode].type;
      const bgModes = BACKGROUND_MODES.find((bg) => bg.type === type);

      return bgModes ? bgModes.bgClass : ``;
    }

    handleButtonArrowNextClick() {
      const {currentMode} = this.state;
      const isValidNumberMode = currentMode >= BASIN_MODES.length - 1;

      if (isValidNumberMode) {
        this.setState({currentMode: 0});
      } else {
        this.setState({currentMode: this.state.currentMode + 1});
      }
    };

    handleButtonArrowPreviousClick() {
      const {currentMode} = this.state;
      const isValidNumberMode = currentMode <= 0;

      if (isValidNumberMode) {
        this.setState({currentMode: BASIN_MODES.length - 1});
      } else {
        this.setState({currentMode: this.state.currentMode - 1});
      }
    };

    handleBasinModesClick(evt) {
      const selectedBasinClassName: string = evt.currentTarget.className;
      const isActiveBasinMode: boolean = selectedBasinClassName.includes(ACTIVE_BASIN_MODE_CLASS_NAME);
      const selectedBasinMode: string = selectedBasinClassName.substring(PREFEX_OF_CLASS_NAME.length).trim();
      const numberOfBasinMode: number = BASIN_MODES.findIndex((mode) => mode.type === selectedBasinMode);

      if (isActiveBasinMode) {
        return;
      }
      if (numberOfBasinMode === -1) {
        return;
      } else {
        const numberOfBasinMode: number = BASIN_MODES.findIndex((mode) => mode.type === selectedBasinMode);
        this.setState({currentMode: numberOfBasinMode});
      }
    }

    render() {
      const {currentMode} = this.state;
      const currentBackground: string = this._getCurrentBackGround(currentMode);
      return (
        <Comment
          currentMode = {currentMode}
          currentBackground = {currentBackground}
          activeClassName = {ACTIVE_BASIN_MODE_CLASS_NAME}
          onArrowNextClick = {this.handleButtonArrowNextClick}
          onArrowPreviousClick = {this.handleButtonArrowPreviousClick}
          onBasinModesClick = {this.handleBasinModesClick}
        />
      );
    }
  }
  return WithActiveBasinMode;
}

export default withActiveBasinMode;
