export const saveData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const pokemonApiURL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonGenerations = (gen: number) => {
  switch (gen) {
    case 1:
      return { start: 1, finish: 151 };
    case 2:
      return { start: 152, finish: 251 };
    case 3:
      return { start: 252, finish: 386 };
    case 4:
      return { start: 387, finish: 493 };
    case 5:
      return { start: 494, finish: 649 };
    case 6:
      return { start: 650, finish: 721 };
    case 7:
      return { start: 722, finish: 809 };
    case 8:
      return { start: 810, finish: 905 };
    case 9:
      return { start: 906, finish: 1008 };
    default:
      return { start: 1, finish: 1008 };
  }
};
