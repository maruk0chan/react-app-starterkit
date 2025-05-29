import { pages, type Page } from "@/components/constants/pages";
import { Form } from "@formio/react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const SimpleForm = () => {
    const [page, setPage] = useState<Page | null>(null);

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
