"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title && !description) {
      alert("Title and description are required");
      return;
    }
    try {
      const apiURL = "https://todoapp-rosy-nine.vercel.app";
      const res = await fetch(`${apiURL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error("Failed to create new topic");
      }
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic Title "
          className="border border-slate-500  px-3 py-4"
          type="text"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Topic Description "
          className="border border-slate-500  px-3 py-4"
          type="text"
        />

        <button
          type="submit"
          className="bg-green-600 text-white font-bold p-3 w-fit"
        >
          Add Topic
        </button>
      </form>
    </>
  );
}
