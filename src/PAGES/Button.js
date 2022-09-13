import React from 'react'

const Button = ({title, customClass, onClick}) => {
  return (
    <div><button onClick={onClick} className={`bg-[#0086b0] rounded-[8px] h-[33px] w-[132px] ${customClass}`}>
      {title}</button></div>
  )
}

export default Button