import { useWindowSize } from 'rooks';
import Image from 'next/image';

// Components
import { Section, InfoBox } from '@components/partials';
import { Container } from '@components/partials/layout';
import { Title, Text, ReadMore } from '@components/typography';

// Constants
import { FEEDBACK_LIST } from './constants';

// Styles
import styles from './styles.module.scss';

const ConsultFeedback = () => {
  const { innerWidth } = useWindowSize();
  const readMoreMinLength = innerWidth / 6;

  return (
    <Section>
      <Container>
        <Title level={2} middle>
          отзывы
        </Title>
        <ul>
          {FEEDBACK_LIST.map(({ feedback, name, position, photo }, i) => (
            <li className={styles.item} key={`${name}-${i}`}>
              <InfoBox
                boxAttributes={{ className: styles.box }}
                wrapperAttributes={{ className: styles.feedbackWrapper }}
              >
                <div className={styles.photo}>
                  <Image
                    width={471}
                    height={579}
                    layout="intrinsic"
                    placeholder="blur"
                    quality={90}
                    src={photo}
                    alt={name}
                  />
                </div>
                <div className={styles.content}>
                  <Title className={styles.name} level={3}>
                    {name}
                  </Title>
                  <Text className={styles.subtitle}>{position}</Text>
                  <ReadMore
                    textClassName={styles.feedback}
                    text={feedback}
                    ideal={readMoreMinLength}
                    min={100}
                    max={250}
                  />
                </div>
              </InfoBox>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default ConsultFeedback;
