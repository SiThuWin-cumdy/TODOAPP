import EditTopicComponent from "@/components/EditTopicComponent";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);
    if (!res.ok) {
      throw new Error("Faild to get data");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
export default async function EditTopic({ params }) {
  const { id } = params;

  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicComponent id={id} title={title} description={description} />;
}
