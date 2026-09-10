<p align="center">
  <img src="docs/banner.svg" alt="GraphQL Starter banner" width="100%" />
</p>

<h1 align="center">graphql-starter</h1>

<p align="center">
  <strong>EN</strong> Minimal GraphQL schema + resolver stubs<br/>
  <strong>PT</strong> Schema GraphQL mínimo + stubs de resolvers
</p>

<p align="center">
  <a href="https://github.com/manansbdb/graphql-starter/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge" alt="MIT" /></a>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20PT-3b82f6?style=for-the-badge" alt="EN PT" />
  <img src="https://img.shields.io/badge/topic-GraphQL-e10098?style=for-the-badge" alt="GraphQL" />
  <a href="#support--apoio"><img src="https://img.shields.io/badge/donate-BTC-f59e0b?style=for-the-badge" alt="Donate BTC" /></a>
</p>

---

## What it does / Para que serve

| English | Português |
|---------|-----------|
| A **minimal GraphQL schema** and resolver stubs you can wire into Apollo, Yoga, or Mercurius. | Um **schema GraphQL mínimo** e stubs de resolvers para Apollo, Yoga ou Mercurius. |
| Copy files into your API project and implement the stub functions. | Copia os ficheiros para a tua API e implementa as funções stub. |

```mermaid
flowchart LR
  A["📥 Query"] --> B["📄 schema.graphql"]
  B --> C["🧩 resolvers.js"]
  C --> D["📤 JSON response"]
  style A fill:#0ea5e9,stroke:#0369a1,color:#fff
  style B fill:#e10098,stroke:#9d174d,color:#fff
  style C fill:#7c3aed,stroke:#5b21b6,color:#fff
  style D fill:#22c55e,stroke:#15803d,color:#fff
```

---

## Install / Instalação

### 1) Clone / Clona

```bash
git clone https://github.com/manansbdb/graphql-starter.git
cd graphql-starter
```

### 2) Copy into your API / Copia para a API

```bash
mkdir -p /path/to/your-api/graphql
cp schema.graphql /path/to/your-api/graphql/
cp resolvers.js /path/to/your-api/graphql/
# then wire with your GraphQL server of choice
```

### Requirements / Requisitos

- `git`
- A GraphQL server library (Apollo Server, GraphQL Yoga, etc.)

---

## Quick start / Início rápido

```bash
git clone https://github.com/manansbdb/graphql-starter.git
cp graphql-starter/schema.graphql ./graphql/
cp graphql-starter/resolvers.js ./graphql/
```

---

## Contents / Conteúdos

| Path | Purpose / Função |
|------|------------------|
| `schema.graphql` | Minimal SDL schema |
| `resolvers.js` | Resolver stubs |
| `SUPPORT.md` | Donations / Doações |

---

## Project layout / Estrutura

```text
graphql-starter/
├── docs/banner.svg
├── schema.graphql
├── resolvers.js
├── SUPPORT.md
└── README.md
```

---

## Support / Apoio

Bitcoin donations welcome / Doações em Bitcoin bem-vindas:

```
bc1q0qfnlnxyum9u45stzxe0a7jnhtj4j0usfkqdjw
```

See [SUPPORT.md](./SUPPORT.md).

---

## License / Licença

[MIT](./LICENSE) © 2026 manansbdb
