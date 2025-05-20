import { Form, FormBuilder, FormType } from "@formio/react";
// import ReactJson from "@microlink/react-json-view";
import { useState } from "react";
// import section6ASchema from "../sample-input-json/section-a6-BQ17019.json";
import wizardSchema from "../sample-input-json/wizard.json";
import "./Builder.css";

// * client existing form example https://wings.sfc.hk/brmq-v3/?type=LC

const MarcoFormBuilder = () => {
    // const fetchedSchema = section6ASchema as FormType;
    const fetchedSchema = wizardSchema as unknown as FormType;
    const defaultSchema = fetchedSchema;
    const [schema, setSchema] = useState<FormType>(defaultSchema);
    const onFormChange = (schema: FormType) => {
        setSchema(schema);
    };
    return (
        <>
            <FormBuilder initialForm={defaultSchema} onChange={onFormChange} />

            {/* <Card title="Form JSON Schema" className="my-4">
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
            </Card> */}
            <button
                onClick={async () => {
                    console.log(schema);
                    navigator.clipboard.writeText(JSON.stringify(schema));
                }}
            >
                console log and copy schema
            </button>

            {/* <Card className="my-4 render-form">
                <Card.Body>
                    <Card.Title className="text-center">
                        As Rendered Form
                    </Card.Title> */}
            <Form src={schema} />
            {/* </Card.Body>
            </Card> */}
        </>
    );
};
export default MarcoFormBuilder;
