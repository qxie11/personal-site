// Components
import { Nav, Section } from '@components/partials';
import { Container } from '@partials/layout';
import { Title, Anchor } from '@shared/components/typography';

// Styles
import styles from './styles.module.scss';

const Footer: React.FC = () => (
  <Section tagName="footer">
    <Container>
      <Title level={2} middle>
        Сотрудничество
      </Title>
      <Anchor
        className={styles.tmeLink}
        target="_blank"
        href="mailto:ponamarevevgeniy11@gmail.com"
      >      
        ponamarevevgeniy11@gmail.com
      </Anchor>
      <Nav withoutToggleTheme notConvertIntoToggleMenu />
    </Container>
  </Section>
);

export default Footer;
