import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  )
}
export default Footer