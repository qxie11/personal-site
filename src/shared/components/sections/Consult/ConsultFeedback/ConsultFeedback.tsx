import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'rooks';

// Components
import { Section, ReadMore } from '@components/partials';
import { Container } from '@components/partials/layout';
import { Title, Text } from '@components/typography';

// Constants
import { FEEDBACK_LIST } from './constants';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

const ConsultFeedback = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);
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
              <div
                className={cx(styles.feedbackWrapper, {
                  [styles.darkBg]: isDarkMode,
                })}
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
                  <Title className={styles.name} level={3} middle>
                    {name}
                  </Title>
                  <Text className={styles.position}>{position}</Text>
                  <ReadMore
                    className={styles.feedback}
                    text={feedback}
                    min={readMoreMinLength}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default ConsultFeedback;
