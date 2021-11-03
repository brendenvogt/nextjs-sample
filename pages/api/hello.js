// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getData() {
  return [
    {"title":"Hello"},
    {"title":"Hola"},
    {"title":"Buenos Dias"}
  ]
}

export default async function handler(req, res) {
  const data = await getData();
  res.status(200).json(data);
}
