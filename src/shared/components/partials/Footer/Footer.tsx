// Components
import { NavDesktop, Section } from "shared/components/partials";
import { Container } from "shared/components/partials/layout";
import { Title, Anchor } from "shared/components/typography";

// Styles
import styles from "./styles.module.scss";

const Footer: React.FC = () => (
  <Section tagName="footer">
    <Container>
      <Title level={2} middle>
        Сотрудничество
      </Title>
      <Anchor
        className={styles.link}
        underline
        target="_blank"
        href="mailto:ponamarevevgeniy11@gmail.com"
      >
        ponamarevevgeniy11@gmail.com
      </Anchor>
      <br />
      <Anchor
        className={styles.link}
        underline
        target="_blank"
        href="https://t.me/frontendmentor1"
      >
        Telegram: @frontendmentor1
      </Anchor>
      <br />
      <Anchor
        className={styles.link}
        underline
        target="_blank"
        href="https://www.upwork.com/freelancers/evgeniyponomarevfreelancce"
      >
        Upwork: @evgeniyponomarevfreelancce
      </Anchor>
      <NavDesktop />
    </Container>
  </Section>
);

export default Footer;
