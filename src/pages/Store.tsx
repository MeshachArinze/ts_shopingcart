import React from 'react'
import { Col, Row} from "react-bootstrap";
import storeItems from "../data/items.json"

export function Store() {
  return (
    <><h1>
        Store
      </h1><Row>{storeItems.map(item => (
        <Col>{JSON.stringify(console.log(item))}</Col>
      ))}</Row></>
  )
}
