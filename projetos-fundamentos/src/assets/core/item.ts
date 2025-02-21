export interface Item {
  nome?: string;
  conteudo?: string;
}

export const items: Item[] = [
  { nome: 'Limpar a casa', conteudo: 'Varrer, passar pano, etc..' },
  {
    nome: 'Estudar',
    conteudo: 'Angular, typescript, orientação a objetos, etc...',
  },
];
