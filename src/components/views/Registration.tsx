import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from "reactstrap";
import { AccountInfoADT, BusinessADT, MainStackScreens, SwapScreenADT, UserADT } from "../../types";
import Icon from "../items/icon";
import FormData from "../../static/FormData.json";
import { useState } from "react";
import { createAccount } from "../../network/Querys";
import Cookies from "universal-cookie";

export default function Registration({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const industryList = FormData.industries;
    const provinces = FormData.provinces;
    const cookies = new Cookies();

    const [registerFeild, setRegisterFeild] = useState<AccountInfoADT>({
        user: {} as UserADT,
        business: {} as BusinessADT
    });

    const setUserData = (data: string, key: keyof AccountInfoADT["user"]) => {
        setRegisterFeild((oldRegisterField) => {
            oldRegisterField["user"][key] = data;
            return oldRegisterField;
        })
    }

    const setBusinessData = (data: any, key: keyof AccountInfoADT["business"]) => {
        setRegisterFeild((oldRegisterField) => {
            oldRegisterField["business"][key] = data;
            return oldRegisterField;
        })
    }

    const register = () => {
        createAccount({ ...registerFeild })
            .then((res) => {
                const parsed = JSON.parse(res);
                cookies.set("auth", parsed);
                swapScreen("Home");
            })
    };

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
                            <Input
                                onChange={(e) => {
                                    setUserData(e.target.value, "name");
                                }}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                onChange={(e) => {
                                    setUserData(e.target.value, "email");
                                }}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                onChange={(e) => {
                                    setUserData(e.target.value, "phone"); 
                                }}
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                            />
                        </FormGroup>
                        <h5 className="mt-5">Business Info</h5>
                        <FormGroup>
                            <Input
                                onChange={(e) => {
                                    setBusinessData(e.target.value, "name"); 
                                }}
                                type="text"
                                name="businessName"
                                id="businessName" 
                                placeholder="Business Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                onChange={(e) => {
                                    setBusinessData(e.target.value, "phone"); 
                                }}
                                type="text" 
                                name="businessPhone" 
                                id="businessPhone" 
                                placeholder="Business Phone" 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={8} xs={12}>
                                    <Input 
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "address"); 
                                        }}
                                        type="text" 
                                        name="address" 
                                        id="address" 
                                        placeholder="Address" 
                                    />
                                </Col>
                                <Col md={4} xs={12}>
                                    <Input 
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "city"); 
                                        }}
                                        type="text" 
                                        name="city" 
                                        id="city" 
                                        placeholder="City" 
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={6} xs={12}>
                                    <Input 
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "province"); 
                                        }}
                                        type="select" 
                                        name="province" 
                                        id="province" 
                                        placeholder="Province">
                                        {provinces.map((province) => {
                                            return <option>{province.name}</option>;
                                        })}
                                    </Input>
                                </Col>
                                <Col md={6} xs={12}>
                                    <Input 
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "postalCode"); 
                                        }}
                                        type="text" 
                                        name="postal" 
                                        id="postal" 
                                        placeholder="Postal Code" 
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="industry">Industry</Label>
                            <Input 
                                onChange={(e) => {
                                    setBusinessData(e.target.value, "industry"); 
                                }}
                                type="select" 
                                name="industry" 
                                id="industry"
                            >
                                {industryList.map((industry) => {
                                    return <option>{industry}</option>;
                                })}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Row className="mt-2">
                                <Col md={6} xs={12}>
                                    <Input
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "fte"); 
                                        }}
                                        type="number"
                                        name="fte"
                                        id="fte"
                                        placeholder="# Full Time Employees"
                                    />
                                </Col>
                                <Col md={6} xs={12}>
                                    <Input
                                        onChange={(e) => {
                                            setBusinessData(e.target.value, "pte"); 
                                        }}
                                        type="number"
                                        name="pte"
                                        id="pte"
                                        placeholder="# Part Time Employees"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                onChange={(e) => {
                                    setBusinessData(e.target.value, "yearOfInception"); 
                                }}
                                type="number"
                                name="yearOfInc" 
                                id="yearOfInc" 
                                placeholder="Year of Inception"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                onChange={(e) => {
                                    setBusinessData(e.target.value, "annualRevenue"); 
                                }}
                                type="number" 
                                name="revenue" 
                                id="revenue" 
                                placeholder="Approx. Annual Revenue ($)" 
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => register()}>
                            Register
                        </Button>
                    </Form>
                </div>
            </Row>
        </>
    );
}
