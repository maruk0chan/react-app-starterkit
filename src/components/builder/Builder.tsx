import { Form, FormBuilder, FormType } from "@formio/react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import ReactJson from "@microlink/react-json-view";
import "./Builder.css";
import section6ASchema from "../sample-input-json/section-a6-BQ17019.json";
const Builder = () => {
    const fetchedSchema = section6ASchema as FormType;
    const [schema, setSchema] = useState<FormType>(fetchedSchema);
    const onFormChange = (schema: FormType) => {
        setSchema(schema);
    };
    return (
        <>
            <FormBuilder initialForm={fetchedSchema} onChange={onFormChange} />

            <Card title="Form JSON Schema" className="my-4">
                <Card.Body>
                    <Card.Title className="text-center">
                        As JSON Schema
                    </Card.Title>
                    <ReactJson
                        src={schema}
                        name={null}
                        collapsed={true}
                    ></ReactJson>
                </Card.Body>
            </Card>
            <button
                onClick={async () => {
                    console.log(schema);
                    navigator.clipboard.writeText(JSON.stringify(schema));
                }}
            >
                console log and copy schema
            </button>

            <Card className="my-4">
                <Card.Body>
                    <Card.Title className="text-center">
                        As Rendered Form
                    </Card.Title>
                    <Form src={schema} />
                </Card.Body>
            </Card>
        </>
    );
};
export default Builder;
