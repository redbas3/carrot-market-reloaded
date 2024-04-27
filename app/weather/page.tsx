export default function Weather() {
  return (
    <div className="grid h-screen w-full grid-cols-3 items-stretch gap-10 bg-pink-100 py-20 px-5">
      <div className="bg-white py-12 px-5">
        <h2 className="mb-10 text-5xl font-extrabold">Weather</h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between rounded-xl border-2 border-b-4 border-black px-5 py-5">
            <div>
              <h5 className="-mb-1 text-2xl font-bold">Casius</h5>
              <h6 className="text-sm font-semibold">Mars</h6>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-3 h-14 w-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h5 className="text-5xl font-bold">85°</h5>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border-2 border-b-4 border-black bg-amber-500 px-5 py-5">
            <div>
              <h5 className="-mb-1 text-2xl font-bold">Casius</h5>
              <h6 className="text-sm font-semibold">Mars</h6>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-3 h-14 w-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h5 className="text-5xl font-bold">85°</h5>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border-2 border-b-4 border-black bg-teal-500 px-5 py-5">
            <div>
              <h5 className="-mb-1 text-2xl font-bold">Casius</h5>
              <h6 className="text-sm font-semibold">Mars</h6>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-3 h-14 w-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h5 className="text-5xl font-bold">85°</h5>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl border-2 border-b-4 border-black bg-red-500 px-5 py-5 text-white">
            <div>
              <h5 className="-mb-1 text-2xl font-bold">Casius</h5>
              <h6 className="text-sm font-semibold">Mars</h6>
            </div>
            <div className="flex items-center">
              <svg
                className="mr-3 h-14 w-14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
              <h5 className="text-5xl font-bold">85°</h5>
            </div>
          </div>
        </div>
        <div className="mt-20 flex w-full justify-center">
          <div className="items-center justify-center rounded-full border border-b-4 border-black p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-full bg-white py-12 px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-b-4 border-black p-1">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="mt-5 mb-10 flex flex-col items-center">
          <h4 className="mb-2 font-extrabold uppercase text-gray-500">
            Simple Tag
          </h4>
          <h2 className="text-center text-4xl font-extrabold">
            Work with best designers
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded-2xl border-2 border-black bg-amber-400 py-16 text-white">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-2xl border-2 border-black bg-teal-400 py-16 text-white">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-2xl border-2 border-black bg-pink-400 py-16 text-white">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-2xl border-2 border-black bg-red-500 py-16 text-white">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <button className="mt-12 w-full rounded-2xl bg-blue-600 py-3 text-xl font-extrabold text-white">
          Let's get it done
        </button>
      </div>
      <div className="bg-amber-400 py-12 px-5">
        <div className="mb-10 grid grid-cols-3 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-b-4 border-black bg-white p-1">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </div>
          <h2 className="text-center text-2xl font-extrabold">Friends</h2>
        </div>
        <div className="relative mb-8 flex items-center">
          <input
            placeholder="Search with love ..."
            className="w-full rounded-2xl border-2 border-b-4 border-black bg-white py-3 px-5 placeholder:text-xl placeholder:text-gray-800"
          />
          <div className="absolute right-5">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between rounded-md border-2 border-black bg-white py-2 px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-red-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div>
                  <h5 className="-mb-1 text-xl font-bold">Bill Rizer</h5>
                  <h6 className="text-sm text-gray-500">Planet Designer</h6>
                </div>
              </div>
            </div>
            <button className="rounded-xl border-2 border-b-4 border-black bg-amber-400 px-3 py-[7px] text-xs font-bold">
              Invite
            </button>
          </div>
          <div className="flex items-center justify-between rounded-md border-2 border-black bg-white py-2 px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-teal-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div>
                  <h5 className="-mb-1 text-xl font-bold">Genbey Yagy</h5>
                  <h6 className="text-sm text-gray-500">Planet Designer</h6>
                </div>
              </div>
            </div>
            <button className="rounded-xl border-2 border-b-4 border-black bg-amber-400 px-3 py-[7px] text-xs font-bold">
              Invite
            </button>
          </div>
          <div className="flex items-center justify-between rounded-md border-2 border-black bg-white py-2 px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-red-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div>
                  <h5 className="-mb-1 text-xl font-bold">Lancey Neo</h5>
                  <h6 className="text-sm text-gray-500">Rouge Corp</h6>
                </div>
              </div>
            </div>
            <button className="rounded-xl border-2 border-b-4 border-black bg-black px-3 py-[7px] text-xs font-bold text-white">
              Invited
            </button>
          </div>
          <div className="flex items-center justify-between rounded-md border-2 border-black bg-white py-2 px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-amber-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div>
                  <h5 className="-mb-1 text-xl font-bold">니꼬</h5>
                  <h6 className="text-sm text-gray-500">Nomad Coders</h6>
                </div>
              </div>
            </div>
            <button className="rounded-xl border-2 border-b-4 border-black bg-amber-400 px-3 py-[7px] text-xs font-bold">
              Invite
            </button>
          </div>
          <div className="flex items-center justify-between rounded-md border-2 border-black bg-white py-2 px-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-pink-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <div>
                  <h5 className="-mb-1 text-xl font-bold">Konami</h5>
                  <h6 className="text-sm text-gray-500">Xenon Creator</h6>
                </div>
              </div>
            </div>
            <button className="rounded-xl border-2 border-b-4 border-black bg-amber-400 px-3 py-[7px] text-xs font-bold">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
