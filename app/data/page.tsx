import Link from "next/link";

interface WorldTimeAPI {
  unixtime: number;
}

async function getTime() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London",
    { cache: "no-store" }
  );
  const time: WorldTimeAPI = await response.json();
  return time;
}

export default async function DataPage() {
  const time = await getTime();

  return (
    <>
      <h1>Unix time: {time.unixtime}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
