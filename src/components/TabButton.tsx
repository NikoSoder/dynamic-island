interface TabButtonProps {
  text: string;
  onChangeTab: (tab: string) => void;
  active: string;
}

const TabButton = ({ text, onChangeTab, active }: TabButtonProps) => {
  const getButtonClass = (buttonType: string) =>
    active === buttonType
      ? "button-hover text-sm font-semibold active"
      : "button-hover text-sm font-semibold";

  return (
    <button onClick={() => onChangeTab(text)} className={getButtonClass(text)}>
      {text}
    </button>
  );
};

export default TabButton;
