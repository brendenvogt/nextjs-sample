import { getData } from "./api/hello";

function Hello({ greetings, greetings2 }) {
  return (
    <div>
      <h1>Hello1</h1>
      <ul>
        {greetings.map((greeting) => (
          <li key={greeting.title}>{greeting.title}</li>
        ))}
      </ul>
      <h1>Hello2</h1>
      <ul>
        {greetings2.map((greeting) => (
          <li key={greeting.title}>{greeting.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ params }) {
    console.log(params)
  // Fetch from api internal method
  const greetings = await getData();

  // Fetch from actual api. this would be external
  const hello2Json = await fetch("http://localhost:3000/api/hello2");
  const greetings2 = await hello2Json.json();

  return {
    props: {
      greetings,
      greetings2,
    },
  };
}

export default Hello;
