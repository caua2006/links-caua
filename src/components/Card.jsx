import React from 'react'
import Foto from '/avatar-jessica.jpeg'
import Button from './Button'



const networks = ['Github', 'Frontend Mentor','Linkedln','Twitter','Instagram']

export default function Card() {
  return (
    <div >
        <img src={Foto} alt="" />
        <h2>Jessica Randall</h2>
        <h3>London, United Kingdom</h3>
        <p>Front-end developer and avis reader</p>
        {networks.map(network => <Button name={network} />) }
    </div>
  )
}
