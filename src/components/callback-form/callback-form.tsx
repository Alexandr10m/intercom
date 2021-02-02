import * as React from "react";
import "./callback-form.scss";


interface Propos {
  onSubmit: () => void,
  onInput: (evt: React.ChangeEvent) => void,
  buttonDisable: boolean,
  inputValue: string,
}

const CallBackForm = (props: Propos) => {
  const {
    onSubmit,
    onInput,
    buttonDisable,
    inputValue,
  } = props;

  return (
    <form id="callback-Form" className="header_callback-form" name="callback" action="#" method="POST" encType="multipart/form-data" autoComplete="on">
      <p className="header__excerpt">Узнайте стоимость вашего бетонного бассейна</p>
      <div className="callback__text-wrap">
        <input
          onChange={onInput}
          value={inputValue}
          id="number-phone"
          className="header__number-phone"
          type="text"
          name="number-phone"
          placeholder="+38 (093) 333 33 33">
          </input>
        <button
          onClick={onSubmit}
          className="header__button"
          type="submit"
          disabled={buttonDisable}>
            Узнать стоимость
            </button>
      </div>
    </form>
  );
}

export default CallBackForm;
