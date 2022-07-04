import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';
import modeSelectors from '@store/selectors/modeSelectors';
import styles from './styles.module.scss';

const { Title: AntdTitle } = Typography;

interface Props extends TitleProps, HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  small?: boolean;
  middle?: boolean;
  fixedColor?: 'dark' | 'light';
  onClick?: (
    e?: React.MouseEvent<HTMLHeadingElement, MouseEvent> | undefined
  ) => void;
  ref?: ForwardedRef<HTMLHeadingElement>;
}

const Title: React.FC<Props> = forwardRef(
  ({ children, className, light, small, middle, fixedColor, ...rest }, ref) => {
    const isDarkMode = useSelector(modeSelectors.selectCurrentTheme);

    return (
      <AntdTitle
        className={cx(
          {
            [styles.title]: !light && !small,
            [styles.titleLight]:
              (isDarkMode || fixedColor === 'light') && fixedColor !== 'dark',
            [styles.titleSmall]: small,
            [styles.titleMiddle]: middle,
          },
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </AntdTitle>
    );
  }
);

export default Title;
