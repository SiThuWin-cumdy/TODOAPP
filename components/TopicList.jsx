import Link from "next/link";
import RemoveBtn from "@/components/buttons/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
const getTopics = async () => {
  try {
    debugger;
    const apiURL = process.env.NEXT_PUBLIC_API_ROUT;
    const res = await fetch(`${apiURL}/api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Faild to get data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic", error);
  }
};
export default async function TopicList() {
  const response = await getTopics();
  const topics = response?.topics ? response.topics : [];
  return (
    <>
      {topics ? (
        topics.map((t) => (
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
        ))
      ) : (
        <div className="flex border border-slate-400 my-2 justify-between p-2 gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">No Title</h2>
            <div> NO DESCRIPTION </div>
          </div>

          <div className="flex gap-2">
            <Link>
              <HiPencilAlt size={24} />
            </Link>
            <RemoveBtn />
          </div>
        </div>
      )}
    </>
  );
}
