export const saveData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const apiURL = "https://pokeapi.co/api/v2/pokemon/";
