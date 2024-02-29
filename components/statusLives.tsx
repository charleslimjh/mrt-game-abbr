export default function StatusLives(props: any) {
  return (
    <div>
      {props.score < props.total && `Score: ${props.score} / ${props.total}`}
      <br />
      <div className="flex justify-center">Lives: {props.livesLeft}</div>
    </div>
  );
}
