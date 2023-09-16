type Image = {
  url: string;
};

const baseUrl = 'https://api.thecatapi.com';

export const getCatImage = async (): Promise<Image> => {
  const res = await fetch(`${baseUrl}/v1/images/search`);
  const catData = await res.json();
  const catImage = catData[0];
  return catImage;
};
