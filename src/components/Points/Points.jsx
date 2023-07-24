import trip1 from "../../assets/img/trip2.png";
import trip2 from "../../assets/img/trip3.png";
import trip3 from "../../assets/img/trip4.png";
import {
  Container,
  Title,
  ItemsRow,
  Box,
  BoxInnerTextHeader,
  BoxInnerTextSecond,
  BoxImg,
} from "./Points.styled";

const Points = () => {
  const places = [
    { image: trip1, opportunity: "Best meal", count: "150 places" },
    { image: trip2, opportunity: "Air Trip", count: "120 places" },
    { image: trip3, opportunity: "Summer trip", count: "130 places" },
    { image: trip2, opportunity: "Winter Trip", count: "80 places" },
  ];
  return (
    <Container>
      <Title>Start your vacation with us</Title>
      <ItemsRow>
        {places.map((i) => (
          <Box>
            <div className="container-img">
              <BoxImg src={i.image} alt="" />
            </div>
            <BoxInnerTextHeader>{i.opportunity}</BoxInnerTextHeader>
            <BoxInnerTextSecond>{i.count}</BoxInnerTextSecond>
          </Box>
        ))}
      </ItemsRow>
    </Container>
  );
};
export default Points;
