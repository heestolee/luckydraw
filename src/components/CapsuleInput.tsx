"use client";

import { useState } from "react";

const CapsuleInput = ({ onAdd }: { onAdd: (name: string) => void }) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={name}
        className="border p-2"
        placeholder="이름 입력 후 Enter"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        추가
      </button>
    </div>
  );
};

export default CapsuleInput;
