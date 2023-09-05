import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FormattedMessage } from "react-intl";

// Components
import { Section, SocialList } from "shared/components/partials";
import { Container } from "shared/components/partials/layout";
import { Title, Text } from "shared/components/typography";

// Constants
import { SOCIAL_LINK_ITEMS } from "shared/constants";

// Styles
import styles from "./styles.module.scss";

const HomeIntro: React.FC = () => {
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    gsap.from(container.current, {
      delay: 0.5,
      y: -50,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <Section className={styles.section} darkModeClass={styles.darkBg}>
      <Container ref={container}>
        <Title className={styles.title}>
          <span className={styles.titleSpan}>
            <FormattedMessage id="MAIN_PAGE.GREETINGS" />
          </span>
          <br />
          <FormattedMessage id="MAIN_PAGE.POSITION" />
        </Title>
        <Text className={styles.subtitle}>
          разрабатываю веб-сайты более четырех лет, за плечами большой опыт в
          разработке, а также в обучении верстке сайтов.
        </Text>
        <SocialList linkList={SOCIAL_LINK_ITEMS} />
      </Container>
    </Section>
  );
};

export default HomeIntro;
