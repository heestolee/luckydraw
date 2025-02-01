"use client";
import { useState } from "react";
import CapsuleInput from "@/components/CapsuleInput";
import CapsuleBox from "@/components/CapsuleBox";
import Result from "@/components/Result";
import Image from "next/image";

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Page() {
  const [capsules, setCapsules] = useState<string[]>([]);
  const [capsuleColors, setCapsuleColors] = useState<{ [key: string]: string }>(
    {}
  );
  const [droppedCapsules, setDroppedCapsules] = useState<string[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70;
    const lightness = Math.floor(Math.random() * 15) + 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const handleAddCapsule = (name: string) => {
    if (!capsules.includes(name)) {
      setCapsules([...capsules, name]);
      setCapsuleColors((prevColors) => ({
        ...prevColors,
        [name]: getRandomColor(),
      }));
    }
  };

  const handleDeleteCapsule = (name: string) => {
    setCapsules(capsules.filter((capsule) => capsule !== name));
    setCapsuleColors((prevColors) => {
      const newColors = { ...prevColors };
      delete newColors[name];
      return newColors;
    });
  };

  const handleReset = () => {
    setDroppedCapsules([]);
    setIsShuffling(false);
    setHasDrawn(false);
  };

  const handleFullReset = () => {
    setCapsules([]);
    setDroppedCapsules([]);
    setCapsuleColors({});
    setIsShuffling(false);
    setHasDrawn(false);
  };

  const handleDraw = () => {
    handleReset();
    if (capsules.length === 0) return alert("캡슐을 추가하세요!");

    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = shuffleArray(capsules);
      setDroppedCapsules(shuffled);
      setIsShuffling(false);
      setHasDrawn(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 h-screen bg-gray-50">
      <div className="flex flex-row items-center gap-6 p-10 bg-gray-100">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
        <CapsuleInput onAdd={handleAddCapsule} />
        <button
          className="bg-green-500 text-white px-5 py-3 rounded-md text-base hover:bg-green-600 transition"
          onClick={handleDraw}
        >
          🎰 뽑기 시작!
        </button>
      </div>

      <CapsuleBox
        capsules={capsules}
        isShuffling={isShuffling}
        onDelete={handleDeleteCapsule}
        capsuleColors={capsuleColors}
        hasDrawn={hasDrawn}
        onReset={handleReset}
        onFullReset={handleFullReset}
      />

      {hasDrawn && (
        <Result results={droppedCapsules} capsuleColors={capsuleColors} />
      )}
    </div>
  );
}
