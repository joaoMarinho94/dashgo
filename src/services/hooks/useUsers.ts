import { useQuery, UseQueryResult } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

async function getUsers(): Promise<User[]> {
  const { data: usersData } = await api.get('/users');

  return usersData.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));
}

export function useUsers(): UseQueryResult<User[]> {
  return useQuery('users', getUsers, { staleTime: 1000 * 5 });
}
