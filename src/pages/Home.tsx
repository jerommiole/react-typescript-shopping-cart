import { Button, Col, Container, Image, Row } from "react-bootstrap"
import HomeImage1 from "../../public/imgs/7.png"
import HomeImage2 from "../../public/imgs/9.png"
import HomeImage3 from "../../public/imgs/1.png"

export function Home() {
    return (
        <>
            <div>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <Image src={HomeImage3} style={{
                                width: "100%",
                            }}/>
                        </Col>
                        <Col>
                            <Image src={HomeImage2} style={{
                                width: "100%",
                            }}/>
                        </Col>
                        <Col>
                            <Image src={HomeImage1} style={{
                                width: "100%",
                            }}/>
                        </Col>
                    </Row>
                    <Row>
                        <div className="pt-5">
                            <h2 className="text-light">React TypeScript</h2>
                            <h1 className="text-light">Shopping Cart</h1>
                            <br />
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}