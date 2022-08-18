import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as modeActions from '@store/reducers/mode';

const actions = {
  ...modeActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
