/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Factory, Model, Registry, Server } from 'miragejs';
import { AnyFactories, Assign, ModelDefinition } from 'miragejs/-types';
import faker from 'faker';

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

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(serverSeeds) {
      serverSeeds.createList('user', 200);
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
