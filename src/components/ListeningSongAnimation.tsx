interface ListeningSongAnimation {
  pause: boolean;
  height: number;
}

const ListeningSongAnimation = ({ pause, height }: ListeningSongAnimation) => {
  return (
    <div
      style={{ animationPlayState: !pause ? "running" : "paused" }}
      className={`listening-bar-animation h-${height} w-[1px] bg-gradient-to-b from-yellow-600 to-yellow-900`}
    ></div>
  );
};

export default ListeningSongAnimation;
