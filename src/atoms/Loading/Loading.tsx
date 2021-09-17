import { StyledLoading } from './Loading.styles';

export interface LoadingProps {
  color?: string;
}

export default function Loading({ color = 'black' }: LoadingProps) {
  return (
    <StyledLoading className="loading" color={color}>
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
