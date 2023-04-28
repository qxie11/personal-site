// Components
import { Section, InfoBox } from '@components/partials';
import { Container } from '@components/partials/layout';
import { Title, Text } from '@components/typography';

// Constants
import { PACKAGES_NAME } from './constants';

// Styles
import styles from './styles.module.scss';

const ConsultPrices = () => (
  <Section>
    <Container>
      <Title middle level={2}>
        формат консультаций
      </Title>
      <ul className={styles.grid}>
        {PACKAGES_NAME.map((format) => (
          <li key={format.title}>
            <InfoBox
              boxAttributes={{
                className: styles.format,
                style: {
                  backgroundImage: `url(${format.image})`,
                },
              }}
            >
              <Title level={3}>{format.title}</Title>
              <Text>{format.desc}</Text>
              <Text tagName="strong">от 1600 руб, по договоренности</Text>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default ConsultPrices;
