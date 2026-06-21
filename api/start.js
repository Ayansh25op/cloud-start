export default async function handler(req, res) {

  const response = await fetch(
    "https://qp84be6913.execute-api.ap-south-1.amazonaws.com"
  );

  const text = await response.text();

  res.status(200).send(text);

}
