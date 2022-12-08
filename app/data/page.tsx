interface User {
  id: string;
  name: string;
}

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: Array<User> = await response.json();

  return users;
}

export default async function DataPage() {
  console.log("fetching data...", new Date().getTime());

  const users = await getUsers();

  return (
    <>
      <div>Time: {new Date().getTime()}</div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}
