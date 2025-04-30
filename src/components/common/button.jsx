import React from 'react'

const Buton = ({title, btn_class}) => {
  return (
   <>
   <button className={`button ${btn_class}`}>
    {title}
   </button>
   </>
  )
}

export default Buton