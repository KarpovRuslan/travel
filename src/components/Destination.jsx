import { nanoid } from "nanoid";
import dest1 from "../assets/img/dest1.jpeg";
import dest2 from "../assets/img/dest2.webp";
import dest3 from "../assets/img/dest3.jpeg";
import dest4 from "../assets/img/dest4.jpeg";

import {
  DestinationContent,
  ItemContent,
  Image,
  Text,
  Country,
  Wrapper,
  Title,
} from "./Destination.styled";

const Destination = () => {
  const destinations = [
    {
      src: dest1,
      alt: "Lush Landscapes – Barbados",
      text: "Lush Landscapes",
      country: "Barbados",
    },
    {
      src: dest2,
      alt: "Netherlands, Amsterdam",
      text: "Amsterdam",
      country: "Netherlands",
    },
    {
      src: dest3,
      alt: "Santorini, Greece",
      text: "Santorini",
      country: "Greece",
    },
    {
      src: dest4,
      alt: "Bukovel Ukraine",
      text: "Bukovel",
      country: "Ukraine",
    },
  ];
  return (
    <Wrapper id="destination">
      <Title>
        Our most popular
        <br />
        Destination
      </Title>
      <DestinationContent>
        {destinations.map((dest) => (
          <ItemContent key={nanoid()}>
            <Image src={dest.src} alt={dest.alt} />
            <Text>{dest.text}</Text>
            <Country>{dest.country}</Country>
          </ItemContent>
        ))}
      </DestinationContent>
    </Wrapper>
  );
};

export default Destination;
