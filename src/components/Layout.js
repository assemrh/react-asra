import React from 'react'
import {Nav} from 'react-bootstrap'
import {  ImHome } from "react-icons/im";

let Temp = function(_name) {
  this.name = _name;
  //this.key = _key;
  //this.eventKey = _eventKey;
}
let NavItems = [
  new Temp('Home'),
  new Temp('Dashboard'),
  new Temp('Products'),
  new Temp('Customers')
]

function navItem(item) {
  return (
    <Nav.Item as="li" key={`${item.name}`}>
                        
    <Nav.Link className="text-white" eventKey={`${item.name}`} href={`${item.name}`} >

    <ImHome />
    <span>
      {item.name}
    </span>
      </Nav.Link>
  </Nav.Item>
  )
}

export default function Layout() {
    return (
        <>
            <header className="app-header shadow-dark p-3 text-white bg-dark" style={{width: "280px"}}>

                <Nav className="nav-pills flex-column mb-auto" as="ul">
                {NavItems.map((item) => (
                      navItem(item)
                    ))}
                    </Nav>

              </header>
        </>
    )
}
