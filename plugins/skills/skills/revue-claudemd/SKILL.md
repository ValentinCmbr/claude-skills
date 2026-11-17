---
name: revue-claudemd
description: Relit les dernieres conversations d'un projet pour proposer des ameliorations du CLAUDE.md global et de celui du projet. A lancer a la main.
disable-model-invocation: true
---

# Revue des CLAUDE.md a partir des conversations

But : trouver ce que l'utilisateur repete a Claude sans l'avoir ecrit, les regles ecrites mais non suivies, et ce qui est devenu inutile.

## 1. Extraire les conversations

```bash
node "${CLAUDE_SKILL_DIR}/scripts/extraire.js" "<dossier du projet>" 20
```

Le script ignore la conversation en cours et les sous-agents, retire les rappels systeme, et ecrit un `.txt` par conversation dans un dossier temporaire dont il affiche le chemin et les tailles. S'il ne trouve aucune conversation, s'arreter et le dire.

## 2. Analyser avec des sous-agents en parallele

Repartir les fichiers par taille : 1 a 2 fichiers par agent au-dessus de 100 Ko, 3 a 5 entre 10 et 100 Ko, 5 a 10 en dessous. Chaque agent (type `Explore`, lecture seule) recoit :

```
Lis :
1. Le CLAUDE.md global : ~/.claude/CLAUDE.md
2. Le CLAUDE.md du projet : <projet>/CLAUDE.md (et AGENTS.md s'il existe)
3. Ces conversations : <liste de fichiers>

Compare les conversations aux deux CLAUDE.md et releve, avec une citation courte de la conversation a chaque fois :
- les regles ecrites que Claude n'a pas suivies ;
- les consignes ou corrections que l'utilisateur a donnees plusieurs fois et qui ne sont ecrites nulle part (preciser : propre au projet, ou valable partout) ;
- les regles qui semblent perimees ou jamais utiles.
Reponds en puces, sans rien inventer : ce qui n'apparait pas dans les conversations n'est pas une trouvaille.
```

## 3. Rendre le bilan

Fusionner les reponses, retirer les doublons, et presenter quatre sections :

1. **Regles non suivies** : a reformuler ou renforcer.
2. **A ajouter au CLAUDE.md du projet**.
3. **A ajouter au CLAUDE.md global**.
4. **Peut-etre perime**.

Ne garder qu'une trouvaille vue au moins deux fois, ou une fois avec une correction explicite de l'utilisateur. Ne rien modifier : demander quelles propositions rediger. Un ajout reprend le style du fichier vise (court, en francais).
