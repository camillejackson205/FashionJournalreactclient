
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, Button, Row, Col } from 'reactstrap';
// (FashionJournal.weather)
// (FashionJournal.occassion)
// (FashionJournal.mood)

// if (FashionJournal.weather === "summer") {
//     return (<Card>
//         <CardImg id="fashioage" src="https://images.unsplash.com/photo-1502898746234-cdef14a6eec4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67955fc9334a02344830adae8c0aeae6&auto=format&fit=crop&w=634&q=80" />
//         <CardTitle>{FashionJournal.mood}</CardTitle>
//     </Card>)
// }
const FashionJournalCards = (props) => {
    console.log(props)
    return (
        props.FashionJournal.map((fashionjournal, id) => {

            if (fashionjournal.weather == "winter") {
                if (fashionjournal.occassion == "fancy") {
                    if (fashionjournal.mood == "frusterated") {
                        return (

                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardImg id="fashionImage" top width="100%" src="https://i.pinimg.com/564x/b6/62/62/b66262334d77fc12649e6e54f5043e85.jpg" alt="Card image cap"  />
                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                        <CardText>{fashionjournal.mood}</CardText>
                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">add to fashion journal!</Button>
                                        
                                    </Card>
                                </Col>
                            </Row>


                        )
                    } else if (fashionjournal.weather == "winter") {
                        if (fashionjournal.occassion == "fancy") {
                            if (fashionjournal.mood == "happy") {
                                return(
                                <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardImg id="fashionImage" top width="100%" src="https://www.pinterest.com/pin/20266267057058111/" alt="Card image cap" />
                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                        <CardText>{fashionjournal.mood}</CardText>
                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>

                                    </Card>
                                </Col>
                            </Row>
                                )
                            } else if (fashionjournal.weather == "winter") {
                                if (fashionjournal.occassion == "fancy") {
                                    if (fashionjournal.mood == "tired") {
                                        return(
                                        <Row>
                                        <Col sm="6">
                                            <Card body>
                                                <CardImg id="fashionImage" top width="100%" src="https://i.pinimg.com/564x/ca/48/31/ca48317b405485182ea6db594ac70789.jpg " alt="Card image cap" />
                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                <CardText>{fashionjournal.mood}</CardText>
                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
        
                                            </Card>
                                        </Col>
                                    </Row>
                                        )
                                    } else if (fashionjournal.weather == "summer") {
                                        if (fashionjournal.occassion == "fancy") {
                                            if (fashionjournal.mood == "frusterated") {
                                                return(
                                                <Row>
                                                <Col sm="6">
                                                    <Card body>
                                                        <CardImg id="fashionImage" top width="100%" src=" https://i.pinimg.com/564x/9e/4b/df/9e4bdfb3a980801d1b48adb853f57dbd.jpg" alt="Card image cap" />
                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                        <CardText>{fashionjournal.mood}</CardText>
                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                
                                                    </Card>
                                                </Col>
                                            </Row>
                                                )
                                            } else if (fashionjournal.weather == "summer") {
                                                if (fashionjournal.occassion == "fancy") {
                                                    if (fashionjournal.mood == "happy") {
                                                        return(
                                                        <Row>
                                                        <Col sm="6">
                                                            <Card body>
                                                                <CardImg id="fashionImage" top width="100%" src="https://i.pinimg.com/564x/98/1e/44/981e44e54def4c73f02b70ab973da5e3.jpg " alt="Card image cap" />
                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                        
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                        )
                                                    } else if (fashionjournal.weather == "summer") {
                                                        if (fashionjournal.occassion == "fancy") {
                                                            if (fashionjournal.mood == "tired") {
                                                                return(
                                                                <Row>
                                                                <Col sm="6">
                                                                    <Card body>
                                                                        <CardImg id="fashionImage" top width="100%" src=" https://i.pinimg.com/564x/90/cf/cd/90cfcdd8ca5a03883a60b4da32c0595d.jpg" alt="Card image cap" />
                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">add to fashion journal.</Button>
                                
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                                )
                                                            } else if (fashionjournal.weather == "fall") {
                                                                if (fashionjournal.occassion == "fancy") {
                                                                    if (fashionjournal.mood == "frusterated") {
                                                                        return(
                                                                        <Row>
                                                                        <Col sm="6">
                                                                            <Card body>
                                                                                <CardImg id="fashionImage" top width="100%" src="https://i.pinimg.com/564x/78/55/d7/7855d762fc0320d85252c49fed0ed6b8.jpg  " alt="Card image cap" />
                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                        
                                                                            </Card>
                                                                        </Col>
                                                                    </Row>
                                                                        )
                                                                    } else if (fashionjournal.weather == "fall") {
                                                                        if (fashionjournal.occassion == "fancy") {
                                                                            if (fashionjournal.mood == "happy") {
                                                                                return(
                                                                                <Row>
                                                                                <Col sm="6">
                                                                                    <Card body>
                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                
                                                                                    </Card>
                                                                                </Col>
                                                                            </Row>
                                                                                )
                                                                            } else if (fashionjournal.weather == "fall") {
                                                                                if (fashionjournal.occassion == "fancy") {
                                                                                    if (fashionjournal.mood == "tired") {
                                                                                        return(
                                                                                        <Row>
                                                                                        <Col sm="6">
                                                                                            <Card body>
                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                        
                                                                                            </Card>
                                                                                        </Col>
                                                                                    </Row>
                                                                                        )
                                                                                    } else if (fashionjournal.weather == "winter") {
                                                                                        if (fashionjournal.occassion == "casual") {
                                                                                            if (fashionjournal.mood == "frusterated") {
                                                                                                return(
                                                                                                <Row>
                                                                                                <Col sm="6">
                                                                                                    <Card body>
                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                
                                                                                                    </Card>
                                                                                                </Col>
                                                                                            </Row>
                                                                                                )
                                                                                            } else if (fashionjournal.weather == "winter") {
                                                                                                if (fashionjournal.occassion == "casual") {
                                                                                                    if (fashionjournal.mood == "happy") {
                                                                                                        return(
                                                                                                        <Row>
                                                                                                        <Col sm="6">
                                                                                                            <Card body>
                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                        
                                                                                                            </Card>
                                                                                                        </Col>
                                                                                                    </Row>
                                                                                                        )
                                                                                                    } else if (fashionjournal.weather == "winter") {
                                                                                                        if (fashionjournal.occassion == "casual") {
                                                                                                            if (fashionjournal.mood == "tired") {
                                                                                                                return(
                                                                                                                <Row>
                                                                                                                <Col sm="6">
                                                                                                                    <Card body>
                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                
                                                                                                                    </Card>
                                                                                                                </Col>
                                                                                                            </Row>
                                                                                                                )
                                                                                                            } else if (fashionjournal.weather == "summer") {
                                                                                                                if (fashionjournal.occassion == "casual") {
                                                                                                                    if (fashionjournal.mood == "frusterated") {
                                                                                                                        return(
                                                                                                                        <Row>
                                                                                                                        <Col sm="6">
                                                                                                                            <Card body>
                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                        
                                                                                                                            </Card>
                                                                                                                        </Col>
                                                                                                                    </Row>
                                                                                                                        )
                                                                                                                       
                                                                                                                    } else if (fashionjournal.weather == "summer") {
                                                                                                                        if (fashionjournal.occassion == "casual") {
                                                                                                                            if (fashionjournal.mood == "happy") {
                                                                                                                                return(
                                                                                                                                <Row>
                                                                                                                                <Col sm="6">
                                                                                                                                    <Card body>
                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                
                                                                                                                                    </Card>
                                                                                                                                </Col>
                                                                                                                            </Row>
                                                                                                                                )
                                                                                                                            } else if (fashionjournal.weather == "summer") {
                                                                                                                                if (fashionjournal.occassion == "casual") {
                                                                                                                                    if (fashionjournal.mood == "tired") {
                                                                                                                                        return(
                                                                                                                                        <Row>
                                                                                                                                        <Col sm="6">
                                                                                                                                            <Card body>
                                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                        
                                                                                                                                            </Card>
                                                                                                                                        </Col>
                                                                                                                                    </Row>
                                                                                                                                        )
                                                                                                                                    } else if (fashionjournal.weather == "fall") {
                                                                                                                                        if (fashionjournal.occassion == "casual") {
                                                                                                                                            if (fashionjournal.mood == "frusterated") {
                                                                                                                                                return(
                                                                                                                                                <Row>
                                                                                                                                                <Col sm="6">
                                                                                                                                                    <Card body>
                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                
                                                                                                                                                    </Card>
                                                                                                                                                </Col>
                                                                                                                                            </Row>
                                                                                                                                                )
                                                                                                                                            } else if (fashionjournal.weather == "fall") {
                                                                                                                                                if (fashionjournal.occassion == "casual") {
                                                                                                                                                    if (fashionjournal.mood == "happy") {
                                                                                                                                                        return(
                                                                                                                                                        <Row>
                                                                                                                                                        <Col sm="6">
                                                                                                                                                            <Card body>
                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src="" alt="Card image cap" />
                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                        
                                                                                                                                                            </Card>
                                                                                                                                                        </Col>
                                                                                                                                                    </Row>
                                                                                                                                                        )
                                                                                                                                                    } else if (fashionjournal.weather == "fall") {
                                                                                                                                                        if (fashionjournal.occassion == "casual") {
                                                                                                                                                            if (fashionjournal.mood == "tired") {
                                                                                                                                                                return(
                                                                                                                                                                <Row>
                                                                                                                                                                <Col sm="6">
                                                                                                                                                                    <Card body>
                                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                
                                                                                                                                                                    </Card>
                                                                                                                                                                </Col>
                                                                                                                                                            </Row>
                                                                                                                                                                )
                                                                                                                                                            } else if (fashionjournal.weather == "winter") {
                                                                                                                                                                if (fashionjournal.occassion == "business") {
                                                                                                                                                                    if (fashionjournal.mood == "frusterated") {
                                                                                                                                                                        return(
                                                                                                                                                                        <Row>
                                                                                                                                                                        <Col sm="6">
                                                                                                                                                                            <Card body>
                                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                        
                                                                                                                                                                            </Card>
                                                                                                                                                                        </Col>
                                                                                                                                                                    </Row>
                                                                                                                                                                        )
                                                                                                                                                                    } else if (fashionjournal.weather == "winter") {
                                                                                                                                                                        if (fashionjournal.occassion == "business") {
                                                                                                                                                                            if (fashionjournal.mood == "happy") {
                                                                                                                                                                                return(
                                                                                                                                                                                <Row>
                                                                                                                                                                                <Col sm="6">
                                                                                                                                                                                    <Card body>
                                                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                
                                                                                                                                                                                    </Card>
                                                                                                                                                                                </Col>
                                                                                                                                                                            </Row>
                                                                                                                                                                                )
                                                                                                                                                                            } else if (fashionjournal.weather == "winter") {
                                                                                                                                                                                if (fashionjournal.occassion == "business") {
                                                                                                                                                                                    if (fashionjournal.mood == "tired") {
                                                                                                                                                                                        return(
                                                                                                                                                                                        <Row>
                                                                                                                                                                                        <Col sm="6">
                                                                                                                                                                                            <Card body>
                                                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                        
                                                                                                                                                                                            </Card>
                                                                                                                                                                                        </Col>
                                                                                                                                                                                    </Row>
                                                                                                                                                                                        )
                                                                                                                                                                                    } else if (fashionjournal.weather == "summer") {
                                                                                                                                                                                        if (fashionjournal.occassion == "business") {
                                                                                                                                                                                            if (fashionjournal.mood == "frusterated") {
                                                                                                                                                                                                return(
                                                                                                                                                                                                <Row>
                                                                                                                                                                                                <Col sm="6">
                                                                                                                                                                                                    <Card body>
                                                                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                
                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                </Col>
                                                                                                                                                                                            </Row>
                                                                                                                                                                                                )
                                                                                                                                                                                            } else if (fashionjournal.weather == "summer") {
                                                                                                                                                                                                if (fashionjournal.occassion == "business") {
                                                                                                                                                                                                    if (fashionjournal.mood == "happy") {
                                                                                                                                                                                                        return(
                                                                                                                                                                                                        <Row>
                                                                                                                                                                                                        <Col sm="6">
                                                                                                                                                                                                            <Card body>
                                                                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                        
                                                                                                                                                                                                            </Card>
                                                                                                                                                                                                        </Col>
                                                                                                                                                                                                    </Row>
                                                                                                                                                                                                        )
                                                                                                                                                                                                    } else if (fashionjournal.weather == "summer") {
                                                                                                                                                                                                        if (fashionjournal.occassion == "business") {
                                                                                                                                                                                                            if (fashionjournal.mood == "tired") {
                                                                                                                                                                                                                return(
                                                                                                                                                                                                                <Row>
                                                                                                                                                                                                                <Col sm="6">
                                                                                                                                                                                                                    <Card body>
                                                                                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src=" " alt="Card image cap" />
                                                                                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                                
                                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                                </Col>
                                                                                                                                                                                                            </Row>
                                                                                                                                                                                                                )
                                                                                                                                                                                                            } else if (fashionjournal.weather == "fall") {
                                                                                                                                                                                                                if (fashionjournal.occassion == "business") {
                                                                                                                                                                                                                    if (fashionjournal.mood == "frusterated") {
                                                                                                                                                                                                                        return(
                                                                                                                                                                                                                        <Row>
                                                                                                                                                                                                                        <Col sm="6">
                                                                                                                                                                                                                            <Card body>
                                                                                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src=" "  />
                                                                                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                                        
                                                                                                                                                                                                                            </Card>
                                                                                                                                                                                                                        </Col>
                                                                                                                                                                                                                    </Row>
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                    } else if (fashionjournal.weather == "fall") {
                                                                                                                                                                                                                        if (fashionjournal.occassion == "business") {
                                                                                                                                                                                                                            if (fashionjournal.mood == "happy") {
                                                                                                                                                                                                                                return(
                                                                                                                                                                                                                                <Row>
                                                                                                                                                                                                                                <Col sm="6">
                                                                                                                                                                                                                                    <Card body>
                                                                                                                                                                                                                                        <CardImg id="fashionImage" top width="100%" src="https://images.unsplash.com/photo-1502898746234-cdef14a6eec4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67955fc9334a02344830adae8c0aeae6&auto=format&fit=crop&w=634&q=80 " alt="Card image cap" />
                                                                                                                                                                                                                                        <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                                                        <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                                                        <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                                                        <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                                                        <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                                                
                                                                                                                                                                                                                                    </Card>
                                                                                                                                                                                                                                </Col>
                                                                                                                                                                                                                            </Row>
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                            } else if (fashionjournal.weather == "fall") {
                                                                                                                                                                                                                                if (fashionjournal.occassion == "business") {
                                                                                                                                                                                                                                    if (fashionjournal.mood == "tired") {
                                                                                                                                                                                                                                        return(
                                                                                                                                                                                                                                        <Row>
                                                                                                                                                                                                                                        <Col sm="6">
                                                                                                                                                                                                                                            <Card body>
                                                                                                                                                                                                                                                <CardImg id="fashionImage" top width="100%" src="" alt="Card image cap" />
                                                                                                                                                                                                                                                <CardTitle>{fashionjournal.weather}</CardTitle>
                                                                                                                                                                                                                                                <CardSubtitle>{fashionjournal.occassion}</CardSubtitle>
                                                                                                                                                                                                                                                <CardText>{fashionjournal.mood}</CardText>
                                                                                                                                                                                                                                                <Button id={fashionjournal.id} onClick={props.delete} color="danger">Delete</Button>
                                                                                                                                                                                                                                                <Button id={fashionjournal.id} onSubmit={this.handleSubmit} color="grey">submit</Button>
                                                                                                                                                                                                        
                                                                                                                                                                                                                                            </Card>
                                                                                                                                                                                                                                        </Col>
                                                                                                                                                                                                                                    </Row>
                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }


        })
    )
};
export default FashionJournalCards;
