import { useSelector } from 'react-redux';
import Image from 'next/image';
import Images from '@assets/images';
import cx from 'classnames';

// Components
import { Container } from '@partials/layout';
import { Text, Title } from '@components/typography';
import { Section, SocialList } from '@components/partials';

// Constants
import { SOCIAL_LINK_ITEMS } from '@shared/constants';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Hooks
import useTextAnime from '@shared/hooks/useTextAnime';

// Styles
import styles from './styles.module.scss';

const ConsultIntro: React.FC = () => {
  const animeArray = useTextAnime();
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <Section className={styles.section}>
      <Container>
        <div className={cx(styles.wrapper, 'd-f jc-sb gap-15')}>
          <div className={cx(styles.infoWrapper, 'f-b-50')}>
            <Title>менторство</Title>
            <Text
              ref={(text) => animeArray.current.push(text)}
              className={styles.info}
            >
              консультации по верстке и разработке сайтов с преподавателем и
              практикующим фрилансером. Исправление ошибок, полезные советы,
              удобные инструменты
            </Text>
            <SocialList linkList={SOCIAL_LINK_ITEMS} />
          </div>
          <div className="f-b-50">
            <Image
              width="789"
              height="438"
              layout="intrinsic"
              src={Images[isDarkMode ? 'consult_dark' : 'consult_light']}
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ConsultIntro;
