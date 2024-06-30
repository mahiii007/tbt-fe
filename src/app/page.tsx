import Feed from "@/components/Feed";

export default function Home() {
  return (
    <div className="flex w-full scroll-height">
      <div className="w-[70%] mr-2 ">
        <Feed />
      </div>

      <div className="w-[30%] flex flex-col">
        <div className="bg-white p-1 mb-2 min-h-96 rounded-md">news</div>
        <div className="bg-white p-1 mb-2  min-h-96 rounded-md">tags</div>
      </div>
    </div>
  );
}
