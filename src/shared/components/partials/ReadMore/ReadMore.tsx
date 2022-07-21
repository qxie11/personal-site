import { useState, useMemo } from 'react';

// Components
import { Text } from '@components/typography';

// Types
import { IReadMore } from '@shared/types';

// Utils
import { parseReadMoreText } from '@shared/utils';

const ReadMore = ({ text, min, max, ideal, textClassName }: IReadMore) => {
  const [isOpen, setIsOpen] = useState(false);
  const parsedText = useMemo(
    () => parseReadMoreText(text, min, max, ideal, isOpen),
    [text, min, isOpen]
  );

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Text className={textClassName} onClick={isOpen ? toggleIsOpen : undefined}>
      {parsedText}
      {!isOpen && (
        <>
          <br />
          <span onClick={toggleIsOpen}>Читать дальше...</span>
        </>
      )}
    </Text>
  );
};

export default ReadMore;
