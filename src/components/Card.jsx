import React from 'react'
import Foto from '/avatar-jessica.jpeg'
import Button from './Button'
import { CardContainer, CardImg, Cardh2, Cardh3, CardP } from '../styles/Card.styles'




const networks = ['Github', 'Frontend Mentor','Linkedln','Twitter','Instagram']

export default function Card() {
  return (
    <CardContainer>
        <CardImg src={Foto} alt="" />
        <Cardh2>Jessica Randall</Cardh2>
        <Cardh3>London, United Kingdom</Cardh3>
        <CardP>"Front-end developer and avis reader"</CardP>
        {networks.map(network => <Button name={network} />) }
    </CardContainer>
  )
}
