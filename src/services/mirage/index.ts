/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Model, Registry, Server } from 'miragejs';
import { AnyFactories, Assign, ModelDefinition } from 'miragejs/-types';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer(): Server<
  Registry<
    {
      user: ModelDefinition<Assign<{}, Partial<User>>>;
    },
    AnyFactories
  >
> {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
