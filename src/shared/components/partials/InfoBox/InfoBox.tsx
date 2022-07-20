import { useSelector } from 'react-redux';
import cx from 'classnames';

// Components
import { Title, Text } from '@components/typography';

// Selectors
import modeSelectors from '@store/selectors/modeSelectors';

// Styles
import styles from './styles.module.scss';

interface Props {
  title: string;
  list?: string[];
  text?: string;
}

const InfoBox: React.FC<Props> = ({ title, list, text }) => {
  const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <div className={cx(styles.box, { [styles.darkMode]: isDarkMode })}>
      <div className={styles.wrapper}>
        <Title level={3}>{title}</Title>
        {list && (
          <ul>
            {list.map((item) => (
              <li key={item}>
                <Text className={styles.listItem}>{item}</Text>
              </li>
            ))}
          </ul>
        )}
        {text && <Text>{text}</Text>}
      </div>
    </div>
  );
};

export default InfoBox;
