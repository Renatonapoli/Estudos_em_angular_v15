export interface Pokemon {
  nome: string;
  url: string;
}

export interface ApiPokemonInterface {
  results: {
    name: string;
    url: string;
  }[];
}
