import { UilHeart, UilHeartBreak } from "@iconscout/react-unicons";

export default function StatusLives(props: any) {
  return (
    <div>
      {props.score < props.total && `Score: ${props.score} / ${props.total}`}
      <br />
      <div className="flex justify-center">
        {Array(props.livesLeft)
          .fill(0)
          .map((_, x) => (
            <UilHeart color="#FF0000" key={x} />
          ))}
        {Array(3 - props.livesLeft)
          .fill(0)
          .map((_, x) => (
            <UilHeartBreak color="#FF0000" key={x} />
          ))}
      </div>
    </div>
  );
}
