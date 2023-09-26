import Link from "next/link";
import RemoveBtn from "@/components/buttons/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data ");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic ," + error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="flex border border-slate-400 my-2 justify-between p-2 gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl"> {t.title}</h2>
            <div> {t.description} </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/edittopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <RemoveBtn id={t._id} />
          </div>
        </div>
      ))}
    </>
  );
}
