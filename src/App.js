import React, { Component } from 'react';
// import {Grid,Row,Col,Input,Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CreditForm from './CreditForm';
import CreditCard from './CreditCard';
import "./App.css";
import $ from 'jquery';

class App extends Component{
    
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            cardNumber: '',
            cardHolder: 'FULL NAME',
            expiryMonth: 'MM',
            expiryYear: 'YY',
            cvv: ''
        }
    }

    //function to handle changes in input fields
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleFocus(event) {
        const { name, value, type, checked } = event.target
        if (name == "cvv") {
            $(".card_side-front").addClass('rotate180');
            $(".card_side-back").removeClass('rotate180');
            $(".card_side-back").addClass('rotate0');
        } else {
            $(".card_side-front").removeClass('rotate180');
            $(".card_side-back").removeClass('rotate0');
            $(".card_side-back").addClass('rotate180');
        }

        // name == "cvv" ? this.setState({ cardflip: true }) : this.setState({ cardflip: false }) ;
        console.log(name);
        switch (name) {
            case "cardHolder":
                $('.expiry,.number').removeClass('credit_card-border p-inline5 p-inline15');
                $('.holder').addClass('credit_card-border p-inline5');
                break;
            case "cardNumber":
                $('.expiry,.holder').removeClass('credit_card-border p-inline5');
                $('.number').addClass('credit_card-border p-inline15');
                break;
            case "expiryMonth":
            case "expiryYear":
                $('.number,.holder').removeClass('credit_card-border p-inline5 p-inline15');
                $('.expiry').addClass('credit_card-border p-inline5');
                break;
            case "cvv":
                $('').addClass('');
                break;
            default:
                $('.expiry,.number,.holder').removeClass('credit_card-border p-inline5');
        }
    }

    render(){
        const item = { number: this.state.cardNumber,
            holder: this.state.cardHolder,
            month:this.state.expiryMonth,
            year: this.state.expiryYear,
            cvv:this.state.cvv
        };
        return(
            <Container>
                <CreditCard data={item}/>
                {/* Form content */}
                <Row className="justify-content-md-center form" tabIndex="1" onFocus={this.handleFocus}>
                    <Col sm={3}></Col>
                    <Col sm={6} className="form_content">
                        <Form>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="cardNumber">
                                        <Form.Label>Card Number</Form.Label>
                                        <Form.Control type="text" name="cardNumber" size="lg"
                                            value={this.state.cardNumber} onChange={this.handleChange}
                                            onFocus={this.handleFocus} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="cardHolder">
                                        <Form.Label>Card Holder</Form.Label>
                                        <Form.Control type="text" name="cardHolder" size="lg"
                                            value={this.state.cardHolder} onChange={this.handleChange}
                                            onFocus={this.handleFocus} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3" controlId="expiryMonth">
                                        <Form.Label>Expiration Date</Form.Label>
                                        <Form.Select type="text" name="expiryMonth" value={this.state.expiryMonth}
                                            onChange={this.handleChange} size="lg" onFocus={this.handleFocus} >
                                            <option>Month</option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sept</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3" controlId="expiryYear">
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Select type="text" name="expiryYear" value={this.state.expiryYear}
                                            onChange={this.handleChange} size="lg" onFocus={this.handleFocus} >
                                            <option>Year</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                            <option value="24">2024</option>
                                            <option value="25">2025</option>
                                            <option value="26">2026</option>
                                            <option value="27">2027</option>
                                            <option value="28">2028</option>
                                            <option value="29">2029</option>
                                            <option value="30">2030</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3" controlId="cvv">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="number" name="cvv" size="lg"
                                            value={this.state.cvv} onChange={this.handleChange} onFocus={this.handleFocus} />
                                        {/* <input type="checkbox" checked={this.state.cardflip} name="cardflip" className="cardflip" /> */}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <div className="d-grid">
                                    <Button variant="primary" size="lg">Submit</Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                {/* end of form content */}
            </Container>
            
        );
    }
}

export default App;