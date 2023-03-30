import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>&copy; IDA TECHNOLOGY - 2023</FooterSection>
  )
}

const FooterSection = styled.footer`
    text-align: center;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: teal;
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 20px;
`

export default Footer