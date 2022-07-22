import { useSelector } from 'react-redux';
import cx from 'classnames';
import Image, { ImageProps } from 'next/image';

// Components
import { Title, Text, ReadMore } from '@components/typography';

// Types
import { IReadMore } from '@shared/types';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props {
  title: string;
  titleClassName?: string;
  subtitle?: string;
  list?: string[];
  text?: string;
  readMoreSettings?: IReadMore;
  imageSettings?: ImageProps;
  wrapperClassName?: string;
  boxClassName?: string;
  boxAttributes?: React.HTMLAttributes<HTMLDivElement>;
  bottomChildren?: React.ReactNode;
}

const InfoBox: React.FC<Props> = ({
  title,
  titleClassName,
  subtitle,
  list,
  text,
  readMoreSettings,
  imageSettings,
  wrapperClassName,
  boxClassName,
  boxAttributes,
  bottomChildren,
}) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <div
      className={cx(styles.box, boxClassName, {
        [styles.darkMode]: isDarkMode,
        [styles['p-0']]: imageSettings,
      })}
      {...boxAttributes}
    >
      <div className={cx(styles.wrapper, wrapperClassName)}>
        {imageSettings && (
          <div className={styles.photo}>
            <Image {...imageSettings} />
          </div>
        )}
        <div className={cx({ [styles.content]: imageSettings })}>
          <Title className={titleClassName} level={3}>
            {title}
          </Title>
          {subtitle && <Text className={styles.subtitle}>{subtitle}</Text>}
          {list && (
            <ul>
              {list.map((item) => (
                <li key={item}>
                  <Text className={styles.listItem}>{item}</Text>
                </li>
              ))}
            </ul>
          )}
          {text && !readMoreSettings && <Text>{text}</Text>}
          {readMoreSettings && (
            <ReadMore
              textClassName={readMoreSettings.textClassName}
              text={readMoreSettings.text}
              ideal={readMoreSettings.ideal}
              min={readMoreSettings.min}
              max={readMoreSettings.max}
            />
          )}
          {bottomChildren}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
