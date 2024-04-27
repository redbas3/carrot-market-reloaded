export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 w-full rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-3 *:outline-none has-[.peer]:bg-green-100 has-[:invalid]:bg-red-100">
        <input
          className="w-full rounded-full bg-gray-200 pl-5 py-2 ring ring-transparent focus:ring-orange-500 focus-ring-offset-2 transition-shadow invalid:focus:ring-red-500 peer"
          type="text"
          placeholder="Email address"
          required
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button className="bg-black text-white px-5 py-2 rounded-full active:scale-90 transition-transform font-medium focus:scale-90 md:px-1">
          Log in
        </button>
      </div>
    </main>
  );
}
