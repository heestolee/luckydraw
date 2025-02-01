import Capsule from "./Capsule";

const Result = ({
  results,
  capsuleColors,
}: {
  results: string[];
  capsuleColors: { [key: string]: string };
}) => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="min-w-[28rem] flex gap-6 justify-start items-center border-2 border-gray-300 rounded-lg p-6 bg-gray-100 transition-all duration-300">
        {results.map((name, index) => (
          <Capsule
            key={name}
            name={name}
            color={capsuleColors[name]}
            style={{
              animation: `appear 0.5s ease-out ${index * 0.5}s forwards`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
