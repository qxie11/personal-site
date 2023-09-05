import Image from "next/image";

// Components
import { Text, Title } from "shared/components/typography";
import { Section } from "shared/components/partials";
import { Container } from "shared/components/partials/layout";

// Constants
import { WHY_ME_LIST } from "./constants";

// Styles
import styles from "./styles.module.scss";

const WhyMe = () => (
  <Section className={styles.section}>
    <Container>
      <Title middle level={2}>
        почему я?
      </Title>
    </Container>
    <ul className={styles.wrapper}>
      {WHY_ME_LIST.map(({ icon, title, text }, i) => (
        <li key={`${title}-${i}`} className={styles.item}>
          <Image className={styles.icon} src={icon} alt={title} />
          <Title middle level={3} fixedColor="light">
            {title}
          </Title>
          <Text className={styles.text} fixedColor="light">
            {text}
          </Text>
        </li>
      ))}
    </ul>
  </Section>
);

export default WhyMe;
