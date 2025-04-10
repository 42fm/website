interface Props {
  icon?: React.ReactNode;
  bar?: boolean;
  children?: string;
  onClick?: () => void;
}

function Button({ icon, bar, children, onClick }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="flex items-center gap-4 rounded-[0.4375rem] bg-white px-5 py-3 font-bold text-[#1b1b1b] md:px-8 md:py-4">
        {icon}
        {bar && <div className="w-[1px] self-stretch bg-[#1b1b1b]" />}
        {children}
      </div>
    </button>
  );
}

export default Button;
