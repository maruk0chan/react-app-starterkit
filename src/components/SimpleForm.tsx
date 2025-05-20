import { Form, type FormSource } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import section_a1 from "@/components/sample-input-json/session-a1-BQ17005.json";
import section_a6 from "@/components/sample-input-json/section-a6-BQ17019.json";
import completion_notes from "@/components/sample-input-json/completion_notes.json";

interface Page {
    id: string;
    label: string;
    verify: boolean;
    src?: FormSource;
}
const pages: Page[] = [
    {
        id: "front_page",
        label: "Front Page",
        verify: false,
        // src: section_a1 as FormSource,
    },
    {
        id: "completion_notes",
        label: "Completion Notes",
        verify: false,
        src: completion_notes as FormSource,
    },
    {
        id: "index",
        label: "Index",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "glossary",
        label: "Glossary",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a1",
        label: "Section A1 - Business Overview (BQ17005)",
        verify: false,
        src: section_a1 as FormSource,
    },
    {
        id: "section a2",
        label: "Section A2 - Management and Supervision (BQ17006 - BQ17010)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section_a3",
        label: "section A3 - remote booking and transfer pricing arrangements and other non-regulated business activities (bq17011 - bq17013)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a4",
        label: "Section A4 - Outsourcing (BQ17014 - BQ17014B)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a5",
        label: "Section A5 - Compliance (BQ17015 - BQ17018)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a6",
        label: "Section A6 - Internal Audit (BQ17019 - BQ17022)",
        verify: false,
        src: section_a6 as FormSource,
    },
    {
        id: "section a7",
        label: "Section A7 - Finance and Accounting (BQ17023)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a8",
        label: "Section A8 - Handling of Client Accounts and Client Assets Protection (BQ17024 - BQ17039)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a9",
        label: "Section A9 - Risk Management (BQ17040A - BQ17055)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a10",
        label: "Section A10 - Information Technology (BQ17056 - BQ17065)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a11",
        label: "Section A11 - Complaint Handling (BQ17066 - BQ17068)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "section a12",
        label: "Section A12 - Anti-Money Laundering and Counter-Financing of Terrorism (BQ22A1201 - BQ22A1235)",
        verify: false,
        // src: section_a6 as FormSource,
    },
    {
        id: "supplementary_information_bq17245a",
        label: "Supplementary Information (BQ17245A)",
        verify: false,
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
                            <option value={p.id}>
                                {!p?.src && "(.json not ready)"}{" "}
                                {p?.verify ? "✔" : "✗"} {p?.label}
                            </option>
                        ))}
                    </select>
                    <h4>{page?.label}</h4>

                    <div className="py-3">
                        {page?.src && <Form src={page?.src} />}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default SimpleForm;
