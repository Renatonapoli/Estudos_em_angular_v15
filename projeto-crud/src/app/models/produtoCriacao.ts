import { Produto } from './produto';

export type ProdutoCriacao = Omit<Produto, 'id'>;
