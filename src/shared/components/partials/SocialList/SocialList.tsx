import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// Components
import { Anchor } from '@components/typography';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Constants
import { SocialLink } from '@sections/Main/HomeIntro/constants';

// Styles
import styles from './styles.module.scss';

interface Props {
  linkList: SocialLink[];
}

const SocialList: React.FC<Props> = ({ linkList }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  const links = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.from(links.current, {
      stagger: 0.2,
      delay: 1.4,
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  const addLinkToRef = (el: HTMLAnchorElement) => {
    if (el && !links.current.includes(el)) {
      links.current.push(el);
    }
  };

  return (
    <ul className={styles.socialList}>
      {linkList?.map(({ name, link, color }: SocialLink) => (
        <li key={link}>
          <Anchor
            classes={styles.socialLink}
            external
            underlineAnimation
            style={{ color }}
            target="_blank"
            href={link}
            ref={addLinkToRef}
          >
            {name}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
