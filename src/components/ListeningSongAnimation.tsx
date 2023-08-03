interface ListeningSongAnimation {
  pause: boolean;
  height: number;
}

const ListeningSongAnimation = ({ pause, height }: ListeningSongAnimation) => {
  return (
    <div
      style={{
        animationPlayState: !pause ? "running" : "paused",
        height: `${height}px`,
      }}
      className={`${
        height % 2 === 0
          ? "listening-bar-animation"
          : "listening-bar-animation-second"
      } w-[1px] bg-gradient-to-b from-yellow-600 to-yellow-900`}
    ></div>
  );
};

export default ListeningSongAnimation;
