import styled from "styled-components"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <Navigation>
        <span>HEALTH +</span>
        <ul>
            <li><Link to="/" style={{textDecoration: "none", color: "white"}}>Home</Link></li>
            <li><Link to="/services" style={{textDecoration: "none", color: "white"}}>Services</Link></li>
            <li><Link to="/about" style={{textDecoration: "none", color: "white"}}>About Us</Link></li>
            <li>Contact Us</li>
            <li>Join Our Community</li>
        </ul>
    </Navigation>
  )
}

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    background-color: teal;
    padding: 0;
    margin: 0;

    span {
        font-weight: bold;
        padding: 20px 10px;
        font-size: 18px;
        letter-spacing: 4px;
        color: white;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        display: flex;
         li {
            padding-top: 4px;
            padding-left: 20px;
            padding-right: 20px;
            font-weight: 600;
            cursor: pointer;
            font-size: 18px;
            color: white;

         }
    }
`

export default Navbar