"use server";

//make the call and return the data use this inside the page.tsx
export const fetchAnimate = async () => {
  const response = await fetch("https://shikimori.one/api/animes");

  const data = await response.json();
  console.log(data.length);

  return data;
};
