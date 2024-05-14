"use server";

//make the call and return the data use this inside the page.tsx
export const fetchAnimate = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();
  console.log(data.length);

  return data;
};
