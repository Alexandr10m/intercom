import * as React from "react";
import HeaderMenu from "../header-menu/header-menu";
import "./header-screen.scss";


const HeaderScreen = () => {
  return (
    <header className="main-header">
      {/* background */}
      <div className="header__containder">
        {/* centerman */}
        <HeaderMenu/>
        <section id="advantages" className="advantages">
          <button className="header__arrow button-arrow button-arrow--left" type="button"></button>

          <div className="advantages__text-wrapper">
            <p className="advantages__subject">Профессиональное проектирование, </p>
            <h1 className="advantages__title">строительство бетонных бассейнов</h1>
            <p className="advantages__desc"> любых форм и размеров</p>
            <p className="advantages__subtitle">«Под ключ» с гарантией соблюдения сроков</p>
          </div>

          <ul className="advantages_modes-basin modes-basin">
            <li className="modes-basin__item modes-basin__item--swimming active_basin-item">Плавательные бассейны <br/>для частного и коммерческого <br/>использовани</li>
            <li className="modes-basin__item modes-basin__item--massages">Гидромассажные бассейны <br/>для wellness-зон и частного <br/>использован</li>
            <li className="modes-basin__item modes-basin__item--sports">Спортивные бассейны <br/>для профессионального <br/>назначения</li>
          </ul>

          <button className="header__arrow button-arrow button-arrow--right" type="button"></button>
        </section>
        <form id="callback-Form" className="header_callback-form" name="callback" action="#" method="POST" encType="multipart/form-data" autoComplete="on">
          <p className="header__excerpt">Узнайте стоимость вашего бетонного бассейна</p>
          <div className="callback__text-wrap">
            <input id="number-phone" className="header__number-phone" type="text" name="number-phone" value="" placeholder="+38 (093) 333 33 33"></input>
          <button className="header__button" type="submit">Узнать стоимость</button>
          </div>
        </form>
      </div>
    </header>
  );
};


export default HeaderScreen;
