import { pages } from "@/components/constants/pages";
import { Form } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import wizard_sample from "@/components/sample-input-json/wizard-sample.json";

const createStep = (key, title, components) => {
    return {
        key,
        title,
        components,
        input: false,
        theme: "primary",
        type: "panel",
    };
};

const StepsComponent = pages.map((p) =>
    createStep(p.id, p.label, p.src?.components),
);

const WizardComponent = {
    _id: "5683335f0dfe9f01006c498b",
    machineName: "wizard:wizard",
    modified: "2016-01-12T02:00:14.151Z",
    title: "Wizard",
    type: "form",
    name: "wizard",
    path: "wizard",
    project: "557e303a13dbd70e77bb6474",
    created: "2015-12-30T01:29:03.833Z",
    components: StepsComponent,
    owner: "553dbfc08d22d5cb1a7024f2",
    submissionAccess: [
        { type: "create_all", roles: [] },
        { type: "read_all", roles: [] },
        { type: "update_all", roles: [] },
        { type: "delete_all", roles: [] },
        { type: "create_own", roles: ["55cd5c3ca51a96bef99ef5ac"] },
        { type: "read_own", roles: [] },
        { type: "update_own", roles: [] },
        { type: "delete_own", roles: [] },
    ],
    access: [
        {
            type: "read_all",
            roles: [
                "55cd5c3ca51a96bef99ef5aa",
                "55cd5c3ca51a96bef99ef5ab",
                "55cd5c3ca51a96bef99ef5ac",
            ],
        },
    ],
    plan: "archived",
};

const WizardForm = () => {
    return (
        <>
            <Row>
                <Col>
                    <h2>Wizard Forms</h2>
                    <p>
                        Form.io provides a way to build multi-page forms and
                        easily embed them within your application using the
                        following code.
                    </p>
                    <CopyBlock
                        text={`<Form src={'https://examples.form.io/wizard'} />`}
                        theme={atomOneLight}
                        language="jsx"
                        codeBlock={true}
                        showLineNumbers={false}
                    />
                    <div className="py-3">
                        <Form src={wizard_sample ?? WizardComponent} />
                        {/* <Form src={"https://examples.form.io/wizard"} /> */}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default WizardForm;
