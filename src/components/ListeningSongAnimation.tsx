// TODO: move animations to own component and map through them

const ListeningSongAnimation = ({ pause }: { pause: boolean }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-2 w-[1px] bg-yellow-600"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-4 w-[1px] bg-yellow-700"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-5 w-[1px] bg-yellow-600"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-6 w-[1px] bg-yellow-600"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-5 w-[1px] bg-yellow-600"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-4 w-[1px] bg-yellow-700"
      ></div>
      <div
        style={{ animationPlayState: !pause ? "running" : "paused" }}
        className="listening-bar-animation h-2 w-[1px] bg-yellow-600"
      ></div>
    </div>
  );
};

export default ListeningSongAnimation;
