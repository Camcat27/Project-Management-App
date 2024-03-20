import React from "react";

export default function Project({ title }) {
  return (
    <div className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
      {title}
    </div>
  );
}
