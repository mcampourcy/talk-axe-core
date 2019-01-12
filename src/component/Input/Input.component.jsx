import React, { Fragment } from 'react'
import { func, string } from 'prop-types'

import './Input.css'

Input.propTypes = {
  label: string,
  name: string.isRequired,
  onChange: func,
  type: string.isRequired,
  value: string.isRequired,
}

export function Input ({ label, name, onChange, type, value }) {
  return (
    <Fragment>
      {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
        />
    </Fragment>
  )
}