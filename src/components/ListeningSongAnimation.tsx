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
      className={`listening-bar-animation w-[1px] bg-gradient-to-b from-yellow-600 to-yellow-900`}
    ></div>
  );
};

export default ListeningSongAnimation;
