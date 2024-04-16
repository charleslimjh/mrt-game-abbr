import { PiHeart, PiHeartBreak } from "react-icons/pi";

export default function StatusLives(props: any) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-right">Score:</div>
        <div className="pl-2.5 text-left">{`${props.score} / ${props.total}`}</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-right">Lives:</div>
        <div className="pl-2.5 pt-1.5 flex">
          {Array(props.livesLeft)
            .fill(0)
            .map((_, x) => (
              <PiHeart key={x} color="red" />
            ))}
          {Array(props.maxLives - props.livesLeft)
            .fill(0)
            .map((_, x) => (
              <PiHeartBreak key={x} color="red" />
            ))}
        </div>
      </div>
    </div>
  );
}
