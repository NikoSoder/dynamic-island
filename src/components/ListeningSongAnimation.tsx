interface ListeningSongAnimation {
  pause: boolean;
  height: number;
}

const ListeningSongAnimation = ({ pause, height }: ListeningSongAnimation) => {
  return (
    <div
      style={{
        animationPlayState: !pause ? "running" : "paused",
        height: pause ? "3px" : `${height}px`,
      }}
      className={`${
        height % 2 === 0
          ? "animate-listeningBarLong"
          : "animate-listeningBarShort"
      } w-[1px] bg-gradient-to-b from-yellow-600 to-yellow-900 transition-all duration-500`}
    ></div>
  );
};

export default ListeningSongAnimation;
