import { Select } from "antd";
import { useSelector } from "react-redux";
import cx from "classnames";

import { useActions } from "shared/hooks";
import intlSelectors from "store/selectors/intlSelectors";

// Constants
import { LANGUAGE_SWITCHER_DATA } from "./constants";

import styles from './styles.module.scss'

const { Option } = Select;

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const currentLng = useSelector(intlSelectors.selectCurrentLanguage);
  const { changeCurrentLng } = useActions();

  const handleChange = (val) => {
    changeCurrentLng(val);
  };

  return (
    <Select
      className={cx(styles.switcher, className)}
      value={currentLng}
      onChange={handleChange}
    >
      {LANGUAGE_SWITCHER_DATA.map(({ value, text }) => (
        <Option key={value} value={value}>
          {text}
        </Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
