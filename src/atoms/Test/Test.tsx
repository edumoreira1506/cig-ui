interface TestProps {
  showText?: boolean;
  onClick?: () => void;
}

export default function Test({ showText, onClick }: TestProps) {
  return (
    <>
      <h1 onClick={onClick}>I am the test component!</h1>
      <>{showText && <h2>Additional text!</h2>}</>
    </>
  );
}
