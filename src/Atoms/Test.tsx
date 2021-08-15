interface TestProps {
  showText?: boolean;
}

export default function Test({ showText }: TestProps) {
  return (
    <>
    <h1>I am the test component!</h1>
    <>{showText && <h2>Additional text!</h2>}</>
    </>
  )
}
