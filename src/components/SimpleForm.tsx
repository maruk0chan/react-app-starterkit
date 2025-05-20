import { Form } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import section_a1 from "./sample-input-json/session-a1-BQ17005.json";
import section_a6 from "./sample-input-json/section-a6-BQ17019.json";

const jsonMap = {
    section_a1,
    section_a6,
};

const SimpleForm = () => {
    const [src, setSrc] = useState(section_a1);

    return (
        <>
            <Row>
                <Col>
                    <select onChange={(e) => setSrc(jsonMap?.[e.target.value])}>
                        <option value={"section_a1"}>
                            session-a1-BQ17005.json
                        </option>
                        <option value={"section_a6"}>
                            section-a6-BQ17019.json
                        </option>
                    </select>
                    <h2>session-a1-BQ17005.json</h2>

                    <div className="py-3">
                        <Form src={src} />
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SimpleForm;
