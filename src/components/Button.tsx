interface Props {
  icon?: React.ReactNode;
  bar?: boolean;
  children?: string;
  onClick?: () => void;
}

function Button({ icon, bar, children, onClick }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="bg-white rounded-[0.4375rem] text-[#1b1b1b] flex gap-4 py-4 px-8 items-center font-bold">
        {icon}
        {bar && <div className="self-stretch bg-[#1b1b1b] w-[1px]" />}
        {children}
      </div>
    </button>
  );
}

export default Button;
