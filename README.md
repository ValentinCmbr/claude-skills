# Skills Claude Code de Valentin

Les skills et plugins Claude Code que j'utilise au quotidien. Chacun a été relu avant d'être ajouté :
pas de hook caché, pas d'appel réseau douteux.

## Installer

Dans un terminal (ou dans Claude Code en préfixant par `/`, par exemple `/plugin marketplace add ...`) :

```bash
claude plugin marketplace add ValentinCmbr/claude-skills
claude plugin install skills@valentin
```

Puis, si tu veux les plugins de sécurité :

```bash
claude plugin install owasp-security@valentin
claude plugin install differential-review@valentin
```

Et pour la barre de statut claude-hud (installée depuis le dépôt de son auteur, Claude Code n'autorise
pas les marketplaces tierces à la redistribuer sous ce nom) :

```bash
claude plugin marketplace add jarrodwatts/claude-hud
claude plugin install claude-hud@claude-hud
```

puis, dans une session : `/reload-plugins` et `/claude-hud:setup`.

Les nouvelles versions arrivent avec `claude plugin marketplace update valentin`.

## Ce qu'il y a dedans

### Plugin `skills` (33 skills)

#### Méthode

| Skill | À quoi il sert |
|---|---|
| `verification-before-completion` | Aucun « c'est fini » sans avoir lancé la commande qui le prouve |
| `verification-loop` | Vérification complète avant une PR (build, types, lint, tests, secrets, diff, cible) |
| `tdd-workflow` | Test qui échoue d'abord, puis le minimum de code |
| `diagnosing-bugs` | Boucle de diagnostic des bugs difficiles : d'abord un signal rouge fiable |
| `search-first` | Chercher une lib ou un outil existant avant de coder |
| `grilling` | Interroger un plan point par point jusqu'à un accord clair |
| `grill-me` | Raccourci manuel vers `grilling` (`/skills:grill-me`) |
| `reducing-entropy` | Viser la plus petite base de code possible (manuel seulement) |
| `coding-standards` | Conventions générales de nommage et de lisibilité |
| `git-workflow` | Branches, historique propre, merge ou rebase |
| `conventional-commit-review` | Message de commit au format Conventional Commits, d'après le diff |

#### Architecture et domaine

| Skill | À quoi il sert |
|---|---|
| `codebase-design` | Vocabulaire des modules profonds : interface, seam, profondeur |
| `improve-codebase-architecture` | Repérer les refactors qui approfondissent les modules, rapport HTML (manuel) |
| `domain-modeling` | Glossaire du domaine (`GLOSSARY.md`) et ADR |
| `error-handling` | Erreurs typées, retries, circuit breakers (TypeScript, Python, Go) |

#### Backend et outillage

| Skill | À quoi il sert |
|---|---|
| `backend-patterns` | Node, Express, routes API Next.js |
| `api-design` | Conception d'API REST |
| `prisma-patterns` | Schéma, requêtes, transactions et pièges de Prisma |
| `docker-patterns` | Dockerfile, Compose, sécurité des conteneurs |
| `vite-patterns` | Config Vite, plugins, variables d'env, build |

#### Front et design

| Skill | À quoi il sert |
|---|---|
| `react-patterns` | Composants React 18/19 |
| `react-testing` | Tests React (Testing Library, Vitest, MSW) |
| `frontend-patterns` | Structure et état côté front |
| `vercel-react-best-practices` | Performances React et Next.js (règles de Vercel) |
| `web-design-guidelines` | Relecture d'une interface selon les Web Interface Guidelines de Vercel |
| `web-perf` | Audit Core Web Vitals et Lighthouse (avec Chrome DevTools MCP) |
| `ui-ux-pro-max` | Règles UX, accessibilité, palettes, polices (demande Python 3) |
| `taste-skill` | Direction artistique pour pages vitrines et portfolios (demande Node 22+ et Chrome) |
| `archify` | Diagrammes d'architecture interactifs en HTML, tirés du code (demande Node et Chrome) |

#### Écrire et entretenir sa config Claude Code

| Skill | À quoi il sert |
|---|---|
| `writing-for-agents` | Écrire un skill, un `CLAUDE.md` ou un `AGENTS.md` |
| `config-gc` | Faire le ménage dans `~/.claude`, avec confirmation à chaque suppression |
| `skill-retro` | Noter ses skills à partir des vraies sessions (demande Python 3) |
| `revue-claudemd` | Proposer des ajouts au `CLAUDE.md` à partir des dernières conversations (manuel, demande Node) |

Les skills s'appellent `/skills:<nom>`, ou se déclenchent tout seuls quand la demande s'y prête.

### Plugins externes

- `owasp-security` : revue de sécurité OWASP Top 10:2025 et ASVS 5.0, qui trie les faux positifs.
- `differential-review` : revue de sécurité d'une PR ou d'un diff, par Trail of Bits.

Ils sont figés sur la version que j'ai relue (commit précis) : ils ne changent que quand je mets à
jour ce dépôt.

## Provenance et licences

Les skills sont des copies, avec leur licence d'origine dans chaque dossier (`LICENSE`).

| Skills | Auteur | Source | Licence |
|---|---|---|---|
| `api-design`, `backend-patterns`, `coding-standards`, `config-gc`, `conventional-commit-review`, `docker-patterns`, `error-handling`, `frontend-patterns`, `git-workflow`, `prisma-patterns`, `react-patterns`, `react-testing`, `search-first`, `tdd-workflow`, `verification-loop`, `vite-patterns` | Affaan Mustafa | [affaan-m/ECC](https://github.com/affaan-m/ECC) | MIT |
| `codebase-design`, `diagnosing-bugs`, `domain-modeling`, `grill-me`, `grilling`, `improve-codebase-architecture`, `writing-for-agents` | Matt Pocock | [mattpocock/skills](https://github.com/mattpocock/skills) | MIT |
| `reducing-entropy` | Softaworks (d'après joshuadavidthomas) | [softaworks/agent-toolkit](https://github.com/softaworks/agent-toolkit) | MIT |
| `skill-retro` | Alireza Rezvani | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | MIT |
| `web-perf` | Cloudflare | [cloudflare/skills](https://github.com/cloudflare/skills) | Apache 2.0 |
| `web-design-guidelines` | Vercel | [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) | MIT |
| `vercel-react-best-practices` | Vercel | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | MIT (déclarée dans le skill) |
| `ui-ux-pro-max` | Next Level Builder | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT |
| `taste-skill` | Leonxlnx | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| `archify` | tt-a1i | [tt-a1i/archify](https://github.com/tt-a1i/archify) | MIT |
| `verification-before-completion` | Jesse Vincent | [obra/superpowers](https://github.com/obra/superpowers) | MIT |
| `revue-claudemd` | Valentin | ce dépôt | MIT |

Modifications par rapport aux originaux :

- `ui-ux-pro-max`, `skill-retro` et `revue-claudemd` appellent leurs scripts via `${CLAUDE_SKILL_DIR}`, pour fonctionner une fois installés comme plugin.
- `grill-me` et `improve-codebase-architecture` appellent les autres skills sous leur nom de plugin (`skills:grilling`, etc.).
- `reducing-entropy` ne se déclenche qu'à la main (`disable-model-invocation`).
- `web-design-guidelines` embarque une copie figée des règles (commit `4ecfb9f`) au lieu de les télécharger à chaque appel.

Versions retenues :

- `tdd-workflow` reste sur l'ancienne version : la nouvelle exige un script ECC absent de ce dépôt.
- `archify` reste en 3.1.0 : la 3.2.0 passe sous licence Apache 2.0 et change ~7 700 lignes de code, pas encore relues.
- `taste-skill` reste sur la version relue : la 2.5.1 ajoute un hook Stop dans son frontmatter et télécharge des photos (Wikimedia Commons).
