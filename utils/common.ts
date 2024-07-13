export const MAX_IMAGE_SIZE = 6;

export const getBase64FromFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      } else {
        reject(new Error("Error converting file to base64"));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};
