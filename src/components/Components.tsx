import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Builder from "./builder/Builder";
import CustomBuilder from "./CustomBuilder";
import PDFForm from "./PDFForm";
import Renderer from "./Renderer";
import SimpleForm from "./SimpleForm";
import WizardForm from "./WizardForm";
import MarcoFormBuilder from "@/components/builder/MarcoFormBuilder";
import PeterFormBuilder from "@/components/builder/PeterFormBuilder";

const Components = () => {
    return (
        <Container className="pt-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey={"builder"}>
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="builder">
                                    Default Form Builder
                                </Nav.Link>
                                <Nav.Link eventKey="builder-peter">
                                    Peter Form Builder
                                </Nav.Link>
                                <Nav.Link eventKey="builder-marco">
                                    Marco Form Builder
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="renderer">
                                    Form Renderer
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="simple">
                                    Simple Form
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="wizard">
                                    Wizard Form
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="multilang">
                                    Multi-language
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pdf">PDF Form</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10} style={{ borderLeft: "1px solid #eaeaea" }}>
                        <Tab.Content>
                            <Tab.Pane eventKey="renderer">
                                <Renderer />
                            </Tab.Pane>
                            <Tab.Pane eventKey="builder">
                                <Builder />
                            </Tab.Pane>
                            <Tab.Pane eventKey="builder-peter">
                                <PeterFormBuilder />
                            </Tab.Pane>
                            <Tab.Pane eventKey="builder-marco">
                                <MarcoFormBuilder />
                            </Tab.Pane>
                            <Tab.Pane eventKey="simple">
                                <SimpleForm />
                            </Tab.Pane>
                            <Tab.Pane eventKey="wizard">
                                <WizardForm />
                            </Tab.Pane>
                            <Tab.Pane eventKey="pdf">
                                <PDFForm />
                            </Tab.Pane>
                            <Tab.Pane eventKey="multilang">
                                <CustomBuilder />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Components;
