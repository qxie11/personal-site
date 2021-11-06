import gsap from 'gsap';
import { useEffect, useRef } from 'react';

// Components
import { Anchor } from '@components/typography';

// Constants
import { SocialLink } from '@shared/types';

// Styles
import styles from './styles.module.scss';

interface Props {
  linkList: SocialLink[];
}

const SocialList: React.FC<Props> = ({ linkList }) => {
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
