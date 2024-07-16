export function getFinalScore(response: string): number | null {
  const searchString = "final_score:";
  const startIndex = response.indexOf(searchString);

  if (startIndex !== -1) {
    const scoreStartIndex = startIndex + searchString.length;

    if (scoreStartIndex + 3 <= response.length) {
      return Number(response.substring(scoreStartIndex, scoreStartIndex + 3));
    }
  }

  return null;
}

export function removeFinalScoreFromResponse(response: string): string {
  const keyword = "final_score";
  const index = response.indexOf(keyword);

  if (index !== -1) {
    return response.substring(0, index);
  }

  return response;
}

export const prompt = `Lee los ingredientes o tabla nutricional de este producto envasado y dime si es saludable o no y una breve explicacion, esta explicacion debe tener como maximo 120 palabras y debe estar separada por parrafos claros. Separa los parrafos con el caracter "\n"
En caso de no ser saludable dame algunas alernativas.

Y por ultimo dame una puntuacion del 1 (no saludable) al 10 (muy saludable). Esta puntuacion damela al final, la puntuacion debe estar escrita posteriormente de la palabra "final_score:"

Si la imagen es de un producto envasado pero no puedes leerla, ya sea por mala calidad de la imagen o porque no tenga los ingredientes o tabla nutricional dimelo en la respuesta y no me des una puntuacion.

Si la imagen no es de un producto envasado dimelo en la respuesta y no me des una puntuacion.

Responde siempre en español.`;

export const HELATHY_BAR_COLORS: any = {
  0: "#eb4138",
  1: "#eb4138",
  2: "#eb4138",
  3: "#eb4138",
  4: "#edc939",
  5: "#edc939",
  6: "#edc939",
  7: "#8aeb3f",
  8: "#8aeb3f",
  9: "#8aeb3f",
  10: "#8aeb3f",
};
