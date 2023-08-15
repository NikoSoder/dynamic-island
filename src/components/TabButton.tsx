interface TabButtonProps {
  text: string;
  onChangeTab: (tab: string) => void;
  active: string;
}

const TabButton = ({ text, onChangeTab, active }: TabButtonProps) => {
  const getButtonStyles = (buttonText: string) =>
    active === buttonText
      ? "transition-all duration-500 rounded border border-slate-400 px-3 py-1 text-sm font-semibold bg-white"
      : "transition-all duration-300 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-semibold hover:bg-slate-50 active:bg-slate-100 active:border-slate-400 active:shadow";

  return (
    <button onClick={() => onChangeTab(text)} className={getButtonStyles(text)}>
      {text}
    </button>
  );
};

export default TabButton;
