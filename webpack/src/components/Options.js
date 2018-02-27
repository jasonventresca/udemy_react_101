import React from 'react';

import Option from './Option';


const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3
        className="widget-header__title"
      >
        Your Options
      </h3>
      <button
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {
      props.options.length === 0 &&
      <p
        className="widget widget__message"
      >
        Please add an option to get started!
      </p>
    }
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);
export default Options;
