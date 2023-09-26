"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicComponent({ id, title, description }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });
      if (!res.ok) throw new Error("Failed to update");
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          placeholder="Topic Title "
          className="border border-slate-500  px-3 py-4"
          type="text"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          placeholder="Topic Description "
          className="border border-slate-500  px-3 py-4"
          type="text"
        />

        <button
          type="submit"
          className="bg-green-600 text-white font-bold p-3 w-fit"
        >
          Edit Topic
        </button>
      </form>
    </>
  );
}
