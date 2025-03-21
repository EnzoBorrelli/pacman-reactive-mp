interface iMazePart {
  rotation: string;
  size: number;
  type: string;
  isFlip?: boolean;
}

export default function MazePart({ rotation, size, type, isFlip }: iMazePart) {
  let flip = isFlip ? "scale-x-[-1]" : "";
  let mazePart = `/assets/sprites/map/${type}.png`;

  let _rotation: string;

  switch (rotation) {
    case "left":
      _rotation = "";
      break;
    case "up":
      _rotation = "rotate-90";
      break;
    case "right":
      _rotation = "rotate-180";
      break;
    case "down":
      _rotation = "-rotate-90";
      break;

    default:
      _rotation = "";
      break;
  }
  return (
    <div className={`${_rotation} ${flip}`}>
      <img style={{ width: size, height: size }} src={mazePart} alt="tile" />
    </div>
  );
}
