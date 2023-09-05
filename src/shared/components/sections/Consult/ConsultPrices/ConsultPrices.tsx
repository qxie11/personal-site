// Components
import { Section, InfoBox } from "shared/components/partials";
import { Container } from "shared/components/partials/layout";
import { Title, Text } from "shared/components/typography";

// Constants
import { PACKAGES_NAME } from "./constants";

// Styles
import styles from "./styles.module.scss";

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
                  backgroundImage: `url(${format.image.src})`,
                },
              }}
            >
              <Title level={3}>{format.title}</Title>
              <Text>{format.desc}</Text>
              <Text tagName="strong">{format.price} руб.</Text>
            </InfoBox>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default ConsultPrices;
