import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';
import modeSelectors from '@store/selectors/modeSelectors';
import styles from './styles.module.scss';

const { Title: AntdTitle } = Typography;

interface Props extends TitleProps, HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  classes?: string | string[];
  light?: boolean;
  small?: boolean;
  middle?: boolean;
  onClick?: (
    e?: React.MouseEvent<HTMLHeadingElement, MouseEvent> | undefined
  ) => void;
}

const Title: React.FC<Props> = ({
  children,
  classes,
  light,
  small,
  middle,
  ...rest
}) => {
  const isDarkMode: boolean = useSelector(modeSelectors.selectCurrentTheme);

  return (
    <AntdTitle
      className={cx(
        {
          [styles.title]: !light && !small,
          [styles.titleLight]: isDarkMode,
          [styles.titleSmall]: small,
          [styles.titleMiddle]: middle,
        },
        classes
      )}
      {...rest}
    >
      {children}
    </AntdTitle>
  );
};

export default Title;
