const Capsule = ({
  name,
  color,
  onDelete,
  style,
}: {
  name: string;
  color?: string;
  onDelete?: (name: string) => void;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className="relative text-black font-bold text-center p-5 w-28 h-28 rounded-full flex items-center justify-center shadow-md text-lg group"
      style={{
        backgroundColor: color,
        ...style,
      }}
    >
      {name}
      {onDelete && (
        <button
          onClick={() => onDelete(name)}
          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 hidden group-hover:flex items-center justify-center"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Capsule;
