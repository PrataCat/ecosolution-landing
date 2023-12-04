import { Container } from "../../App.styled";
import { ElectrSpan, ElectrText, ElectrTitle } from "./Electricity.styled";

const Electricity = () => {
  return (
    <Container id="electricity">
      <ElectrTitle>Electricity we produced for all time</ElectrTitle>
      <ElectrText>
        1.134.147.814
        <ElectrSpan>kWh</ElectrSpan>
      </ElectrText>
    </Container>
  );
};

export default Electricity;
