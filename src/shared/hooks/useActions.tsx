import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as modeActions from '@store/reducers/mode';
import * as intlActions from '@store/reducers/intl';

const actions = {
  ...modeActions,
  ...intlActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
