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
              title={format.title}
              text={format.desc}
              boxClassName={styles.format}
              boxAttributes={{
                style: {
                  backgroundImage: `url(${format.image})`,
                },
              }}
              bottomChildren={
                <Text tagName="strong">{format.price} руб.</Text>
              }
            />
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default ConsultPrices;
