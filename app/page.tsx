export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm flex flex-col gap-3">
        <input
          className="w-full rounded-full bg-gray-200 pl-5 py-2 outline-none ring ring-transparent focus:ring-orange-500 focus-ring-offset-2 transition-shadow"
          type="text"
          placeholder="Searh here..."
        />
        <button className="bg-black text-white px-5 py-2 rounded-full active:scale-90 transition-transform font-medium focus:scale-90 outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
