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
