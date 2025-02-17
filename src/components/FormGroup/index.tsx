import { Container } from "./styles";
import { FormGroupTypes } from "./types";

function FormGroup({ children, label }: FormGroupTypes) {
  return (
    <Container>
      <label>
        {label}
        {children}
      </label>
    </Container>
  );
}

export default FormGroup;
