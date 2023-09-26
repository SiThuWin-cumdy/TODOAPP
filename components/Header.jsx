import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div className="flex justify-between items-center px-5 py-10 bg-slate-800">
        <Link className="text-white font-bold" href={"/"}>
          MyApp
        </Link>
        <Link className="bg-white p-2" href={"/addtopic"}>
          AddTopic
        </Link>
      </div>

      <div> </div>
    </nav>
  );
}
