import { Country, Image, Text } from "../Destination.styled";

const ItemContent = ({ src, alt, text, country }) => {
  return (
    <div>
      <Image src={src} alt={alt} />
      <Text>{text}</Text>
      <Country>{country}</Country>
    </div>
  );
};

export default ItemContent;
