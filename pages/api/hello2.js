
  export default async function handler(req, res) {
    const data = [
        {"title":"Hello"},
        {"title":"Hola"},
        {"title":"Buenos Dias"}
      ]
    res.status(200).json(data);
  }
  