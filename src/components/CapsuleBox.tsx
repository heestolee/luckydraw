import Capsule from "./Capsule";

const CapsuleBox = ({
  capsules,
  isShuffling,
  hasDrawn,
  capsuleColors,
  onDelete,
  onReset,
  onFullReset,
}: {
  capsules: string[];
  isShuffling: boolean;
  hasDrawn: boolean;
  capsuleColors: { [key: string]: string };
  onDelete: (name: string) => void;
  onReset: () => void;
  onFullReset: () => void;
}) => {
  return (
    <div
      className={`relative w-[50%] h-[50%] border-4 border-pink-500 flex flex-wrap justify-center items-center gap-4 p-8 rounded-lg overflow-hidden transition-all duration-700 
        ${isShuffling ? "animate-shake bg-pink-500" : "bg-white"}`}
    >
      <div className="absolute top-2 left-4 text-gray-700 font-semibold">
        캡슐 개수: {capsules.length}
      </div>
      <div className="absolute top-2 right-4 flex gap-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
          onClick={onReset}
        >
          결과 리셋
        </button>
        <button
          className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700 transition"
          onClick={onFullReset}
        >
          초기화
        </button>
      </div>

      {isShuffling && (
        <div className="absolute inset-0 bg-amber-200 z-10"></div>
      )}

      {!hasDrawn &&
        capsules.map((name) => (
          <Capsule
            key={name}
            name={name}
            color={capsuleColors[name]}
            onDelete={() => onDelete(name)}
          />
        ))}
    </div>
  );
};

export default CapsuleBox;
