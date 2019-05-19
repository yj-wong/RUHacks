import React from 'react';
import { Container,  Row, Col, Button } from 'react-bootstrap';

import bg from '../Images/home/bg.jpg';
import research from '../Images/home/research.jpg';
import recycle from '../Images/home/recycle.jpg';

const bgStyle = {
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const left = {
    textAlign: 'left'
}

const right = {
    textAlign: 'right'
}

const pStyle = {
    color: 'grey'
}

class Home extends React.Component {
    render() {
        return(
            <>
            <img style={bgStyle} src={bg} alt="" />
            <br />
            <Container>
                <Row>
                    <Col style={left}>
                        <h2>
                            Going Green:
                            <br />
                            The Science and Business
                        </h2>
                        <br />
                        <p style={pStyle}>
                            Get to know the latest solutions to environment issues!
                            <br />
                            Learn about the scientific effort put into researches and support the dedicated startups and small businesses.
                        </p>
                        <br />
                        <Button variant="outline-info" href="feature">Find Out</Button>
                    </Col>
                    <Col>
                        <img src={research} alt="" width="100%"/>
                    </Col>
                </Row>
            <br />
            <br />
                <Row>
                    <Col>
                        <h2>Sustainable. Mimalist. Zero Waste</h2>
                        <br/>
                        <p style={pStyle}> 
                            While disposable, plastic products are commonplace due to convenience, 
                            we encourage the use of alternative, sustainable products that are reusable.
                            Sell and shop all kinds of products here and live a green lifestyle!
                        </p>
                        <br/>
                        <Button variant="outline-info" size="lg" href="/products">Shop</Button>
                    </Col>
                </Row>
            <br />
            <br />
                <Row>
                    <Col>
                        <img src={recycle} alt="" width="100%"/>
                    </Col>
                    <Col style={right}>
                        <h2>One Man's Trash, Another's Treasure</h2>
                        <br/>
                        <p style={pStyle}>
                            Request and donate your unwanted/recycable materials on this website.
                            From used electronics, old fabrics, to food waste, there are many ways to reuse, recycle, and even upcycle old stuff.
                        </p>
                        <br/>
                        <Button variant="outline-info" href="">Find Out</Button>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            </>
        )
    }
}

export default Home;