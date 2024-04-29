export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-3">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-6  bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <span className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
            <a className="btn">link</a>
          </div>
        ))}
      </div>
    </main>
  );
}
