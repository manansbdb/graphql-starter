/**
 * Resolver stubs / Stubs de resolvers
 * EN: Replace in-memory store with your data layer.
 * PT: Substitua o store em memória pela sua data layer.
 */
const users = new Map();

const resolvers = {
  Query: {
    health: () => "ok",
    user: (_parent, { id }) => users.get(id) || null,
    users: () => Array.from(users.values()),
  },
  Mutation: {
    createUser: (_parent, { email, displayName }) => {
      const id = String(users.size + 1);
      const user = { id, email, displayName };
      users.set(id, user);
      return user;
    },
  },
};

module.exports = { resolvers };
