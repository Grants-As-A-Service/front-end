import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { AccountInfoADT, MainStackScreens, SwapScreenADT } from "../../types";

export default function BusinessInfo({ swapScreen }: { swapScreen: SwapScreenADT<MainStackScreens> }) {
    const [accountInfo, setAccountInfo] = useState<AccountInfoADT>(() => ({
        user: {
            name: "Jayson Dale",
            email: "jaysondale1@gmail.com",
            phone: "416-555-4444",
        },
        business: {
            name: "Kennisis Lake Marina",
            phone: "705-754-2452",
            address: "1076 Wilkinson Rd.",
            city: "Dysart et. al.",
            province: "ON",
            postalCode: "K0M1S0",
            industry: "Tourism",
            projects: [],
        },
    }));

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h3>My Business</h3>
                </Col>
            </Row>
            <Row>
                <Table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{accountInfo?.business.name}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{accountInfo?.business.phone}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{accountInfo?.business.address}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{accountInfo?.business.city}</td>
                        </tr>
                        <tr>
                            <th>Province</th>
                            <td>{accountInfo?.business.province}</td>
                        </tr>
                        <tr>
                            <th>Postal Code</th>
                            <td>{accountInfo?.business.postalCode}</td>
                        </tr>
                        <tr>
                            <th>Industry</th>
                            <td>{accountInfo?.business.industry}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
