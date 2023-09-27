"use client";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirm = window.confirm("Are u sure ?");
    if (confirm) {
      try {
        const apiURL = process.env.NEXT_PUBLIC_API_ROUT;
        const res = await fetch(`${apiURL}/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete");
        }

        router.refresh();
        router.push("/");
      } catch (error) {
        console.log("eror", error);
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiTrash size={24} />
    </button>
  );
}
