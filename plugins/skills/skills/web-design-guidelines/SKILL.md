---
name: web-design-guidelines
description: Review UI code (HTML, CSS, React) against the Web Interface Guidelines and report findings as file:line. Use when asked to review my UI, check accessibility, audit design or UX, or check a site against best practices.
argument-hint: <file-or-pattern>
---

# Web Interface Guidelines (copie locale)

Relit des fichiers d'interface et signale les écarts aux règles de `references/guidelines.md`.

1. Fichiers à relire : ceux passés en argument ; sinon demander lesquels.
2. Lire `references/guidelines.md` en entier, puis chaque fichier.
3. Appliquer toutes les règles et le format de sortie de `references/guidelines.md` (`fichier:ligne`, groupé par fichier, `✓ pass` si rien).
4. Ne rien modifier : c'est une revue.

## Sites en français

Les règles « Typography » et « Content & Copy » sont écrites pour l'anglais. Sur un texte en français, appliquer à la place :

- Guillemets « » avec espaces insécables, pas “ ” ni " ".
- Espace insécable avant `: ; ! ?` et dans `10 Mo`, `14 h 30`.
- Majuscule au premier mot seulement dans les titres et boutons, pas de Title Case.
- Le reste (`…`, `Intl.*`, verbes d'action précis, message d'erreur avec la solution) s'applique tel quel.

## Source

Copie figée de `command.md` de [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines), commit `4ecfb9fb8d1d3b7009674869b3aaee2f904042e1` (2026-10-05), licence MIT (`LICENSE`). Contrairement au skill d'origine, rien n'est téléchargé à l'exécution. Pour mettre à jour : relire le nouveau `command.md`, puis remplacer `references/guidelines.md` et le commit ci-dessus.
