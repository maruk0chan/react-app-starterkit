import { pages } from "@/components/constants/pages";
import { Form, type FormType } from "@formio/react";
import { Col, Row } from "react-bootstrap";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const createStep = (key, title, components) => {
    return {
        key,
        title,
        components,
        input: false,
        type: "panel",
        tableView: false,
        label: "Panel",
        id: "euwmfa",
        placeholder: "",
        prefix: "",
        customClass: "",
        suffix: "",
        multiple: false,
        defaultValue: null,
        protected: false,
        unique: false,
        persistent: false,
        hidden: false,
        clearOnHide: false,
        refreshOn: "",
        redrawOn: "",
        modalEdit: false,
        dataGridLabel: false,
        labelPosition: "top",
        description: "",
        errorLabel: "",
        tooltip: "",
        hideLabel: false,
        tabindex: "",
        disabled: false,
        autofocus: false,
        dbIndex: false,
        customDefaultValue: "",
        calculateValue: "",
        calculateServer: false,
        widget: null,
        attributes: {},
        validateOn: "change",
        validate: {
            required: false,
            custom: "",
            customPrivate: false,
            strictDateValidation: false,
            multiple: false,
            unique: false,
        },
        conditional: { show: null, when: null, eq: "" },
        overlay: {
            style: "",
            left: "",
            top: "",
            width: "",
            height: "",
        },
        allowCalculateOverride: false,
        encrypted: false,
        showCharCount: false,
        showWordCount: false,
        properties: {},
        allowMultipleMasks: false,
        addons: [],
        tree: false,
        lazyLoad: false,
        theme: "default",
        breadcrumb: "default",
    };
};

const stepsComponents = pages.map((p) => {
    return createStep(p.id, p.label, p.src?.components);
});

const WizardComponent = (stepsComponents): FormType => {
    return {
        _id: "578f930ef1912f8000459a50",
        machineName: "examples:wizard",
        modified: "2024-09-19T20:33:36.892Z",
        title: "Wizard",
        display: "wizard",
        type: "form",
        name: "wizard",
        path: "wizard",
        project: "5692b91fd1028f01000407e3",
        created: "2016-07-20T15:04:46.906Z",
        components: [
            ...stepsComponents,
            {
                type: "button",
                disableOnInvalid: true,
                key: "submit",
                tableView: false,
                label: "Submit",
                input: true,
            },
        ],
        owner: "55673dc04f0405dd28205bb7",
        submissionAccess: [
            { type: "create_own", roles: ["5692b920d1028f01000407e6"] },
            { type: "create_all", roles: [] },
            { type: "read_own", roles: [] },
            { type: "read_all", roles: ["5692b920d1028f01000407e6"] },
            { type: "update_own", roles: [] },
            { type: "update_all", roles: [] },
            { type: "delete_own", roles: [] },
            { type: "delete_all", roles: [] },
            { type: "team_read", roles: [] },
            { type: "team_write", roles: [] },
            { type: "team_admin", roles: [] },
        ],
        access: [
            { type: "create_own", roles: [] },
            { type: "create_all", roles: [] },
            { type: "read_own", roles: [] },
            {
                type: "read_all",
                roles: [
                    "5692b920d1028f01000407e4",
                    "5692b920d1028f01000407e5",
                    "5692b920d1028f01000407e6",
                    "6556376d043f6ce752e40641",
                    "000000000000000000000000",
                ],
            },
            { type: "update_own", roles: [] },
            { type: "update_all", roles: [] },
            { type: "delete_own", roles: [] },
            { type: "delete_all", roles: [] },
            { type: "team_read", roles: [] },
            { type: "team_write", roles: [] },
            { type: "team_admin", roles: [] },
        ],
        tags: ["common"],
        settings: {
            hideTitle: false,
        },
        revisions: "",
        _vid: 0,
        controller: "",
        properties: {},
        fieldMatchAccess: {
            read: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            write: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            create: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            admin: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            delete: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            update: [
                {
                    formFieldPath: "",
                    value: "",
                    operator: "$eq",
                    valueType: "string",
                    roles: [],
                },
            ],
            _id: "66ec8aa04c84bfbb85c8de4f",
        },
        submissionRevisions: "",
    };
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
                        <Form src={WizardComponent(stepsComponents)} />
                        {/* <Form src={"https://examples.form.io/wizard"} /> */}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default WizardForm;
