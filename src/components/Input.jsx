import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export default function Input({
  id = uuidv4(),
  type,
  placeholder,
  data,
  handleChange,
  setter,
  custom = '',
}) {
  const [inputValue, setInputValue] = useState('')
  return (
    <input
      className={`w-full text-xl py-2 px-4 rounded-lg ${custom}`}
      type={type}
      id={id}
      placeholder={placeholder}
      value={data === undefined ? inputValue : data}
      onChange={(e) => {
        handleChange(e, setter === undefined ? setInputValue : setter)
      }}
    />
  )
}