// Components
import { Text } from "shared/components/typography";

// Styles
import styles from "./styles.module.scss";

interface Props {
  listArray: string[];
}

const List: React.FC<Props> = ({ listArray }) => (
  <ul>
    {listArray.map((item) => (
      <li key={item}>
        <Text className={styles.listItem}>{item}</Text>
      </li>
    ))}
  </ul>
);

export default List;
