export default function StatusLives(props: any) {
  return (
    <div>
      {props.score < props.total && `Score: ${props.score} / ${props.total}`}
      <br />
      Lives left: {props.livesLeft}
    </div>
  );
}
