import React from 'react';
import PropTypes from 'proptypes';
import classNames from 'classnames';

const Checkbox = ({
  id,
  type,
  handleClick,
  label,
  name,
  value,
  checked,
  /*
   *  Props below correspond with Bulma modifiers.
   *  wikiki.github.io/form/checkradio/
  */
  rightToLeft,
  color,
  size,
  circle,
  block,
  hasNoBorder,
  hasBackgroundColor,
  disabled,
}) => {
  // Dynamically generates checkbox className from props to comply with Bulma styling modifiers.
  const checkboxClassName = classNames('is-checkradio', {
    'is-rtl': rightToLeft,
    [`is-${color}`]: color,
    [`is-${size}`]: size,
    'is-circle': circle,
    'is-block': block,
    'has-no-border': hasNoBorder,
    'has-background-color': hasBackgroundColor,
  });

  const checkboxId = `checkbox-${id}`;

  return (
    <>
      <input
        id={checkboxId}
        type={type}
        onChange={handleClick}
        name={name}
        value={value}
        className={checkboxClassName}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={checkboxId}>
        {label}
      </label>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  handleClick: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  rightToLeft: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', '', 'medium', 'large']),
  circle: PropTypes.bool,
  block: PropTypes.bool,
  hasNoBorder: PropTypes.bool,
  hasBackgroundColor: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  handleClick: () => null,
  label: null,
  name: null,
  value: undefined,
  checked: false,
  rightToLeft: false,
  color: 'primary',
  size: '',
  circle: false,
  block: false,
  hasNoBorder: false,
  hasBackgroundColor: false,
  disabled: false,
  checked: false,
};
