export default function StatusLives(props: any) {
  return (
    <div>
      Current Score: {props.score}
      <br />
      Lives left: {props.livesLeft}
    </div>
  );
}
