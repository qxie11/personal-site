import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import ReadMoreReact from 'read-more-react';

// Components
import { Section } from '@shared/components/partials';
import { Container } from '@shared/components/partials/layout';
import { Title, Text } from '@shared/components/typography';


// Constants
import { FEEDBACK_LIST } from './constants';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

const ConsultFeedback = () => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

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
                  <Text className={styles.feedback}>
                    <ReadMoreReact
                      text={feedback}
                      min={10}
                      ideal={200}
                      max={900}
                      readMoreText="Читать дальше..."
                    />
                  </Text>
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
