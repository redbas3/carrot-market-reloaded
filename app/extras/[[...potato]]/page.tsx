export default function Extras({ params }: { params: { potato: string[] } }) {
  console.log(params);
  return (
    <div>
      <h1 className="text-5xl font-rubik">Extras!</h1>
      <p>So much more to learn!</p>
    </div>
  );
}
