export default function StatusTime(props: any) {
  return (
    <div>
      Current Score: {props.score}
      <br />
      Number Skips: {props.skips}
      <br />
      {props.timer}
    </div>
  );
}
