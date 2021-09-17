import { StyledLoading } from './Loading.styles';

export interface LoadingProps {
  color?: string;
}

export default function Loading({ color = 'black' }: LoadingProps) {
  return (
    <StyledLoading data-testid="loading" className="loading" color={color}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </StyledLoading>
  );
}
