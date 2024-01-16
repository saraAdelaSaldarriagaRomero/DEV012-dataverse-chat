import dataset from "../data/dataset.js";


const endpoint = "https://api.openai.com/v1/chat/completions";
export const characters = dataset.map(element => element.name);

export function openIAapi(character, mensajeInput) {
  const apiKey = localStorage.getItem("apiKey");
  // eslint-disable-next-line
  console.log(apiKey);
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:`tu eres ${character} un personaje de Mujeres que contribuyeron con la industria de la tecnologia, por lo tanto, responde colectivamente a todas las preguntas que puedas sobre sus vidas`,
      },
      { role: "user", content: mensajeInput }
    ],
  };

  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
  return result;
}

export function openIAapiIndividual(character, mensajeInput) {
  const apiKey = localStorage.getItem("apiKey");
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `tu eres ${character} un personaje de Mujeres que contribuyeron con la industria de la tecnologia, por lo tanto, responde colectivamente a todas las preguntas que puedas sobre sus vidas`,
      },
      { role: "user", content: mensajeInput }
    ],
  };

  const result = fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });
  return result;
}
