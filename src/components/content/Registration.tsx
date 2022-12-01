import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from "reactstrap";
import { SwapScreenADT } from "../content-stack/NavigationStack";
import Icon from "../items/icon";
import FormData from "../../static/FormData.json";

export default function Registration({ swapScreen }: { swapScreen: SwapScreenADT }) {
    const industryList = FormData.industries;
    const provinces = FormData.provinces;
    return (
        <>
            <div style={{ position: "absolute" }}>
                <div className="iconHover" style={{ position: "relative", top: "20px", left: "20px" }} onClick={() => swapScreen("Home")}>
                    <Icon name="arrow_back" />
                </div>
            </div>

            <Row className="justify-content-center">
                <div className="d-flex w-50 flex-column mt-5">
                    <h3>Business User Registration</h3>
                    <Form>
                        <h5>Personal Info</h5>
                        <FormGroup>
                            <Input type="text" name="name" id="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="phone" id="phone" placeholder="Phone" />
                        </FormGroup>
                        <h5 className="mt-5">Business Info</h5>
                        <FormGroup>
                            <Input type="text" name="businessName" id="businessName" placeholder="Business Name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="businessPhone" id="businessPhone" placeholder="Business Phone" />
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={8} xs={12}>
                                    <Input type="text" name="address" id="address" placeholder="Address" />
                                </Col>
                                <Col md={4} xs={12}>
                                    <Input type="text" name="city" id="city" placeholder="City" />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={6} xs={12}>
                                    <Input type="select" name="province" id="province" placeholder="Province">
                                        {provinces.map((province) => {
                                            return <option>{province.name}</option>;
                                        })}
                                    </Input>
                                </Col>
                                <Col md={6} xs={12}>
                                    <Input type="text" name="postal" id="postal" placeholder="Postal Code" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="industry">Industry</Label>
                            <Input type="select" name="industry" id="industry">
                                {industryList.map((industry) => {
                                    return <option>{industry}</option>;
                                })}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Row className="mt-2">
                                <Col md={6} xs={12}>
                                    <Input type="number" name="fte" id="fte" placeholder="# Full Time Employees" />
                                </Col>
                                <Col md={6} xs={12}>
                                    <Input type="number" name="pte" id="pte" placeholder="# Part Time Employees" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="yearOfInc" id="yearOfInc" placeholder="Year of Inception" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="revenue" id="revenue" placeholder="Approx. Annual Revenue ($)" />
                        </FormGroup>
                        <Button color="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </Row>
        </>
    );
}
