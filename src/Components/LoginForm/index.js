import { Container, Col, Row } from "reactstrap";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, Label, FormGroup, CustomInput } from "reactstrap";
import JamiaKart from "../../utils/JamiaKart.jpg";

const LoginForm = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ height: "100vh" }}
    >
      <Col md="3" className="border border-secondary rounded p-4 bg-white m-3">
        <Col md="12">
          <AvForm>
            <Col md="12" className="d-flex justify-content-center">
              <img src={JamiaKart} className="w-100 pb-2 px-5" />
            </Col>
            <Row>
              <Col md="12">
                <AvField name="email" label="Email" type="email" required />
              </Col>
              <Col md="12">
                <AvField
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
              </Col>
              <FormGroup className="w-100 d-flex justify-content-center">
                <Button outline color="info">
                  Sign In
                </Button>
              </FormGroup>
            </Row>
          </AvForm>
        </Col>
      </Col>
    </div>
  );
};

export default LoginForm;
