import { Form, type FormSource } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import section_a1 from "./sample-input-json/session-a1-BQ17005.json";
import section_a6 from "./sample-input-json/section-a6-BQ17019.json";

interface Page {
    id: string;
    label: string;
    src?: FormSource;
}
const pages: Page[] = [
    {
        id: "front_page",
        label: "Front Page",
        // src: section_a1 as FormSource,
    },
    {
        id: "completion_notes",
        label: "Completion Notes",
        // src: section_a6 as FormSource,
    },
    {
        id: "index",
        label: "Index",
        // src: section_a6 as FormSource,
    },
    {
        id: "glossary",
        label: "Glossary",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a1",
        label: "Section A1 - Business Overview (BQ17005)",
        src: section_a1 as FormSource,
    },
    {
        id: "section a2",
        label: "Section A2 - Management and Supervision (BQ17006 - BQ17010)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section_a3",
        label: "section a3; remote booking and transfer pricing arrangements and other non-regulated business activities (bq17011 - bq17013)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a4",
        label: "Section A4 - Outsourcing (BQ17014 - BQ17014B)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a5",
        label: "Section A5 - Compliance (BQ17015 - BQ17018)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a6",
        label: "Section A6 - Internal Audit (BQ17019 - BQ17022)",
        src: section_a6 as FormSource,
    },
    {
        id: "section a7",
        label: "Section A7 - Finance and Accounting (BQ17023)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a8",
        label: "Section A8 - Handling of Client Accounts and Client Assets Protection (BQ17024 - BQ17039)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a9",
        label: "Section A9 - Risk Management (BQ17040A - BQ17055)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a10",
        label: "Section A10 - Information Technology (BQ17056 - BQ17065)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a11",
        label: "Section A11 - Complaint Handling (BQ17066 - BQ17068)",
        // src: section_a6 as FormSource,
    },
    {
        id: "section a12",
        label: "Section A12 - Anti-Money Laundering and Counter-Financing of Terrorism (BQ22A1201 - BQ22A1235)",
        // src: section_a6 as FormSource,
    },
    {
        id: "supplementary_information_bq17245a",
        label: "Supplementary Information (BQ17245A)",
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
                    <h2>{page.label}</h2>

                    <div className="py-3">
                        {page?.src && <Form src={page?.src} />}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SimpleForm;
