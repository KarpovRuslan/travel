import { Form, Input, Text, Title, Wrapper } from "./NewsLetter.styled";

const Newsletter = () => {
  return (
    <Wrapper>
      <Title>Newsletter</Title>
      <Text>Subscribe to receive upcoming packages and Services</Text>
      <div className="send">
        <Form>
          <Input type="email" placeholder="type your email" required />
          <Input type="submit" value="Submit" />
        </Form>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
