import React from 'react'

export default function TabButttons({children ,onSelect, isSelected}) {
  return (
    <button className={isSelected?"active":null} onClick={onSelect}>{children}</button>
  )
}
