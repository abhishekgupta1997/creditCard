import React, {Component} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import chip from './images/chip.png'
import visa from './images/visa.png'


class CreditCard extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <Row className="justify-content-md-center credit">
                <Col sm={4}></Col>
                <Col sm={4} className="credit_card">
                    <div className="card_side card_side-front">
                        <Row className="credit_card-brand h-35 p-4">
                            <Col sm={3}>
                                <img src={chip} alt="chip" className="chip" />
                            </Col>
                            <Col sm={6}></Col>
                            <Col sm={3}>
                                <img src={visa} alt="visa" className="visa pe-5" />
                            </Col>
                        </Row>
                        <Row className="credit_card-number h-35 px-5">
                            <Col>
                                <div className="number fw-bold">{this.props.data.number == '' ? "**** **** **** ****" : this.props.data.number}</div>
                            </Col>
                        </Row>
                        <Row className="credit_card-details h-35">
                            <Col sm={9}>
                                <div className="holder ms-4 ps-4">
                                    <div className="f-10">Card Holder</div>
                                    <div className="f-20 fw-bold">{this.props.data.holder}</div>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="expiry me-4">
                                    <div className="f-10">Expires</div>
                                    <div className="f-20 fw-bold">{this.props.data.month}/{this.props.data.year}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="card_side card_side-back rotate180">
                        <Row>
                            <Col>
                                <div className="card-blackstrip mt-5"></div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12} className="card-cvv pe-5">CVV</Col>
                            <Col sm={12}>
                                <div className="card-whitestrip card_cvv-code mx-4">{this.props.data.cvv}</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={12}>
                                <div className="card_cvv-code">
                                    <img src={visa} alt="visa" className="visa visa_back" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        )
    }
}

export default CreditCard;
