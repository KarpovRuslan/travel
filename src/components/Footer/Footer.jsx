import {
  Contact,
  Main,
  Wrapper,
  SocialLinks,
  ItemPage,
  List,
  ListTitle,
  Text,
} from "./Footer.styled";

const Footer = () => {
  const listItems = [
    {
      title: "Quick links",
      items: ["About us", "Terms and conditions", "Help", "Tour"],
    },
    {
      title: "Support",
      items: ["About us", "Terms and conditions", "Help", "Tour"],
    },
    {
      title: "Contact info",
      items: ["Line1", "Line2", "Telephone number", "email"],
    },
  ];

  const socialMedia = ["facebook", "instagram-alt", "twitter", "linkedin"];

  return (
    <Contact id="contact">
      <Wrapper>
        <Main>
          {listItems.map((list, index) => (
            <List key={index}>
              <ListTitle>{list.title}</ListTitle>
              <ul>
                {list.items.map((item, idx) => (
                  <li key={idx}>
                    <ItemPage>{item}</ItemPage>
                  </li>
                ))}
              </ul>
            </List>
          ))}
          <div className="list">
            <ListTitle>Connect</ListTitle>
            <div className="social">
              {socialMedia.map((social, index) => (
                <SocialLinks key={index} href="">
                  <i className={`bx bxl-${social}`}></i>
                </SocialLinks>
              ))}
            </div>
          </div>
        </Main>
      </Wrapper>

      <Text>Copyright @2023 all rights reserved | made by R. Karpov</Text>
    </Contact>
  );
};

export default Footer;
