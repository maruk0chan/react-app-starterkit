import { Form, type FormSource } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import section_a1 from "./sample-input-json/session-a1-BQ17005.json";
import section_a6 from "./sample-input-json/section-a6-BQ17019.json";

interface Page {
    id: string;
    label: string;
    src: FormSource;
}
const pages: Page[] = [
    {
        id: "section_a1",
        label: "session-a1-BQ17005.json",
        src: section_a1 as FormSource,
    },
    {
        id: "section_a6",
        label: "section-a6-BQ17019.json",
        src: section_a6 as FormSource,
    },
];

const SimpleForm = () => {
    const [page, setPage] = useState<Page>(null);

    return (
        <>
            <Row>
                <Col>
                    <select
                        onChange={(e) =>
                            setPage(pages.find((p) => p.id === e.target.value)!)
                        }
                    >
                        {pages.map((p) => (
                            <option value={p.id}>{p.label}</option>
                        ))}
                    </select>
                    <h2>session-a1-BQ17005.json</h2>

                    <div className="py-3">
                        {page && <Form src={page?.src} />}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SimpleForm;
