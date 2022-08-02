import React from 'react'
import img from '../../../../assets/howOrder/howOrder.png'
import classes from './howOrderImage.module.scss'

function HowOrderImage() {
  return (
    <div>
        <img className={classes.image} src={img} alt="how-order" />
    </div>
  )
}

export default HowOrderImage