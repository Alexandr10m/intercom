import * as React from "react";
import HeaderMenu from "../header-menu/header-menu";
import "./header-screen.scss";
import CallbackForm from "../callback-form/callback-form";
import {BASIN_MODES, ICON_BASIN_MODES} from "../../constants";
import withPhoneNumber from "../../hoc/with-phone-number/with-phone-number"


interface Props {
  currentMode: number,
  currentBackground: string,
  activeClassName: string,
  onArrowNextClick: () => void,
  onArrowPreviousClick: () => void,
  onBasinModesClick: (evt: React.MouseEvent) => void,
}

const SHORT_DESCRIPTION_OF_BASIN = `sports`;

const CallBackForm = withPhoneNumber(CallbackForm);

const HeaderScreen = (props: Props) => {
  const {
    currentMode,
    currentBackground,
    activeClassName,
    onArrowNextClick,
    onArrowPreviousClick,
    onBasinModesClick,
  } = props;

  return (
    <header className={`main-header ${currentBackground}`}>
      <div className="header__containder">
        <HeaderMenu/>
        <section id="advantages" className="advantages">
          <button onClick={onArrowPreviousClick} className="header__arrow button-arrow button-arrow--left" type="button"></button>
          <div className="advantages__text-wrapper">
            <p className="advantages__subject">Профессиональное проектирование, </p>
            <h1 className="advantages__title">строительство бетонных бассейнов</h1>
            <p className="advantages__desc"> любых форм и размеров</p>
            <p className="advantages__subtitle">«Под ключ» с гарантией соблюдения сроков</p>
          </div>
          <ul className="advantages_modes-basin modes-basin">
            {BASIN_MODES.map(({type, title, description}, index) => {
                const isActive = currentMode === index;
                const isShortDescription = type === SHORT_DESCRIPTION_OF_BASIN;
                const activeIcon = ICON_BASIN_MODES.find((icon) => icon.type === type);
                const activeIcontClassName = activeIcon? activeIcon.iconClassName : ``;

                return (
                  <li onClick={onBasinModesClick}
                      className={`modes-basin__item modes-basin__item--${type} ${isActive ? activeClassName : ``} ${isActive ? activeIcontClassName : ``}`} key={`${type}`}>
                      <h3 className="modes-basin_title">
                        {title}
                      </h3>
                      <p className={`modes-basin_description ${isShortDescription ? `modes-basin_description--short` : ``}`}>
                        {description}
                      </p>
                  </li>
                );
            })
          }
          </ul>
          <button onClick={onArrowNextClick} className="header__arrow button-arrow button-arrow--right" type="button"></button>
        </section>
        <CallBackForm/>
      </div>
    </header>
  );
};

export default HeaderScreen;
