async function getData() {
  const data = await fetch(
    "https://nomad-movies.nomadcoders.workers.dev/movies"
  );
}

export default async function Extras({
  params,
}: {
  params: { potato: string[] };
}) {
  const movies = await getData();
  return (
    <div>
      <h1 className="text-5xl font-rubik">Extras!</h1>
      <p>So much more to learn!</p>
    </div>
  );
}
