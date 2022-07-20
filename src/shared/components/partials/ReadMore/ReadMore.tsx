import { useState, useMemo } from 'react';

// Components
import { Text } from '@components/typography';

// Utils
import { parseReadMoreText } from '@shared/utils';

interface Props {
  text: string;
  min: number;
  className?: string;
}

const ReadMore = ({ text, min, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const parsedText = useMemo(
    () => parseReadMoreText(text, min, isOpen),
    [text, min, isOpen]
  );

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Text className={className} onClick={isOpen ? toggleIsOpen : undefined}>
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
