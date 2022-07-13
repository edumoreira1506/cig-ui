import { VFC, useState, useEffect } from 'react';

import { StyledContainer, StyledStar } from './StarRating.styles';

export type StarRatingProps = {
  value?: number;
  onChangeValue?: (newValue: number) => void;
}

export const StarRating: VFC<StarRatingProps> = ({
  value,
  onChangeValue,
}: StarRatingProps) => {
  const [selectedValue, setSelectedValue] = useState(value ?? 0);

  const handleSelectValue = (newValue: number) => {
    const newSelectedValue = newValue !== selectedValue ? newValue : 0;

    onChangeValue?.(newSelectedValue);
    setSelectedValue(newSelectedValue);
  };

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  return (
    <StyledContainer>
      <StyledStar filled={selectedValue >= 1} onClick={() => handleSelectValue(1)} />
      <StyledStar filled={selectedValue >= 2} onClick={() => handleSelectValue(2)} />
      <StyledStar filled={selectedValue >= 3} onClick={() => handleSelectValue(3)} />
      <StyledStar filled={selectedValue >= 4} onClick={() => handleSelectValue(4)} />
      <StyledStar filled={selectedValue >= 5} onClick={() => handleSelectValue(5)} />
    </StyledContainer>
  );
};
