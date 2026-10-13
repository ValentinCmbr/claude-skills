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

### Plugin `skills` (15 skills)

| Skill | À quoi il sert |
|---|---|
| `verification-before-completion` | Aucun « c'est fini » sans avoir lancé la commande qui le prouve |
| `verification-loop` | Vérification complète en 6 phases avant une PR (build, types, lint, tests, secrets, diff) |
| `tdd-workflow` | Test qui échoue d'abord, puis le minimum de code |
| `search-first` | Chercher une lib ou un outil existant avant de coder |
| `coding-standards` | Conventions générales de nommage et de lisibilité |
| `git-workflow` | Branches, historique propre, merge ou rebase |
| `backend-patterns` | Node, Express, routes API Next.js |
| `api-design` | Conception d'API REST |
| `react-patterns` | Composants React 18/19 |
| `react-testing` | Tests React (Testing Library, Vitest, MSW) |
| `frontend-patterns` | Structure et état côté front |
| `vercel-react-best-practices` | Performances React et Next.js (règles de Vercel) |
| `ui-ux-pro-max` | Règles UX, accessibilité, palettes, polices (demande Python 3) |
| `taste-skill` | Direction artistique pour pages vitrines et portfolios (demande Node 22+ et Chrome) |
| `archify` | Diagrammes d'architecture interactifs en HTML, tirés du code (demande Node et Chrome) |

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
| `api-design`, `backend-patterns`, `coding-standards`, `frontend-patterns`, `git-workflow`, `react-patterns`, `react-testing`, `search-first`, `tdd-workflow`, `verification-loop` | Affaan Mustafa | [affaan-m/ECC](https://github.com/affaan-m/ECC) | MIT |
| `vercel-react-best-practices` | Vercel | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | MIT (déclarée dans le skill) |
| `ui-ux-pro-max` | Next Level Builder | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT |
| `taste-skill` | Leonxlnx | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| `archify` | tt-a1i | [tt-a1i/archify](https://github.com/tt-a1i/archify) | MIT |
| `verification-before-completion` | Jesse Vincent | [obra/superpowers](https://github.com/obra/superpowers) | MIT |

Seule modification : `ui-ux-pro-max` appelle son script via `${CLAUDE_SKILL_DIR}`, pour fonctionner
une fois installé comme plugin.
