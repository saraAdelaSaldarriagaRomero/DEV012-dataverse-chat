// Import the functions to be tested
import { openIAapi, openIAapiIndividual } from "../src/lib/chatApi";



// Mockear la función fetch
jest.mock("node-fetch",()=>jest.fn());

describe("openIAapi", () => {
  it("debería realizar una llamada fetch con los parámetros correctos", async () => {
    // Arrange
    localStorage.setItem("apiKey", "testApiKey");
    const character = "TestCharacter";
    const mensajeInput = "Test message";

    // Configurar el mock de fetch
    // require("node-fetch").mockReturnValueOnce(
    //   Promise.resolve({
    //     json: () => Promise.resolve({ result: "fake result" }),
    //   })
    // );

    const mockfetch = jest.fn(()=>Promise.resolve({result: "fake result"}))
    // eslint-disable-next-line
    global.fetch = mockfetch

    // Act
    const result = await openIAapi(character, mensajeInput);

    // Assert
    expect(mockfetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer testApiKey",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `tu eres ${character} un personaje de Mujeres que contribuyeron con la industria de la tecnologia, por lo tanto, responde colectivamente a todas las preguntas que puedas sobre sus vidas`,
            },
            { role: "user", content: mensajeInput },
          ],
        }),
      }
    );

    // Verificar que la función devuelve el resultado esperado
    expect(result).toEqual({ result: "fake result" });
  });
});

describe("openIAapiIndividual", () => {
  it("debería realizar una llamada fetch con los parámetros correctos", async () => {
    // Arrange
    localStorage.setItem("apiKey", "testApiKey");
    const character = "TestCharacter";
    const mensajeInput = "Test message";

    // Configurar el mock de fetch
    require("node-fetch").mockReturnValueOnce(
      Promise.resolve({
        json: () => Promise.resolve({ result: "fake result" }),
      })
    );

    // Act
    const result = await openIAapiIndividual(character, mensajeInput);

    // Assert
    expect(fetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer testApiKey",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `tu eres ${character} un personaje de Mujeres que contribuyeron con la industria de la tecnologia, por lo tanto, responde colectivamente a todas las preguntas que puedas sobre sus vidas`,
            },
            { role: "user", content: mensajeInput },
          ],
        }),
      }
    );

    // Verificar que la función devuelve el resultado esperado
    expect(result).toEqual({ result: "fake result" });
  });
});

