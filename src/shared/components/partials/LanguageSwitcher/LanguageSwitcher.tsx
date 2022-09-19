import { useActions } from '@shared/hooks';
import intlSelectors from '@store/selectors/intlSelectors';
import { Select } from 'antd';
import { useSelector } from 'react-redux';

// Constants
import { LANGUAGE_SWITCHER_DATA } from './constants';

const { Option } = Select;

const LanguageSwitcher = () => {
    const currentLng = useSelector(intlSelectors.selectCurrentLanguage);
    const {changeCurrentLng} = useActions();
  const handleChange = (val) => {
    changeCurrentLng(val)
  };

  return (
    <Select value={currentLng} onChange={handleChange}>
      {LANGUAGE_SWITCHER_DATA.map(({ value, text }) => (
        <Option key={value} value={value}>{text}</Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
