import HackedComponent from "@/components/hacked-component";
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from "react";
import { fetchFromApi } from "./actions";

async function getSomeData() {
  const keys = {
    apiKey: "12312323",
    secret: "3243434",
  };
  // experimental_taintObjectReference("API Keys were leaked!", keys);
  experimental_taintUniqueValue("API Keys were leaked!", keys, keys.apiKey);
  return keys;
}

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
  // const movies = await getData();
  const data = await getSomeData();
  // const data = fetchFromApi();
  return (
    <div>
      <h1 className="text-5xl">Extras!</h1>
      <p>So much more to learn!</p>
    </div>
  );
}
