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
        className={styles.vkLink}
        target="_blank"
        href="https://vk.com/evgeniy_vronskiy"
      >
        vk.com/evgeniy_vronskiy
      </Anchor>
      <Nav withoutToggleTheme notConvertIntoToggleMenu />
    </Container>
  </Section>
);

export default Footer;
