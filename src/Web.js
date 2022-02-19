import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./Component/NavBar";
import SideBar from "./Component/SideBar";
import Content from "./Component/Content";
// import reportWebVitals from "./reportWebVitals";

function Web(props) {
    return (
        <Container style={{ marginTop: 30 }} fluid>
            <Row>
                <Col>
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <SideBar />
                    <Content />
                </Col>
            </Row>

        </Container >

    );

}

export default Web;
