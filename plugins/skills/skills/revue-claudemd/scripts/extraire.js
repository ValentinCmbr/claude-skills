#!/usr/bin/env node
// Extrait le texte (humain + assistant) des dernieres conversations d'un projet
// vers un dossier temporaire, pour que des sous-agents puissent les lire.
// Usage : node extraire.js [dossier-projet] [nombre=20]
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const projet = path.resolve(process.argv[2] || process.cwd())
const nombre = Number(process.argv[3] || 20)
const racine = path.join(os.homedir(), '.claude', 'projects')

// Claude Code nomme le dossier d'un projet en remplacant tout caractere non alphanumerique par "-".
// La casse de la lettre de lecteur varie (C-- ou c--) : comparaison sans casse.
const nomAttendu = projet.replace(/[^A-Za-z0-9]/g, '-').toLowerCase()
const dossier = fs.readdirSync(racine).find(d => d.toLowerCase() === nomAttendu)
if (!dossier) {
  console.error(`Aucune conversation trouvee pour ${projet} (attendu : ${nomAttendu} dans ${racine})`)
  process.exit(1)
}

const fichiers = fs.readdirSync(path.join(racine, dossier))
  .filter(f => f.endsWith('.jsonl'))
  .map(f => ({ f, p: path.join(racine, dossier, f), t: fs.statSync(path.join(racine, dossier, f)).mtimeMs }))
  .sort((a, b) => b.t - a.t)
  .slice(1, nombre + 1) // le plus recent est la conversation en cours : on l'ignore
if (!fichiers.length) {
  console.error(`Aucune conversation passee dans ${path.join(racine, dossier)}`)
  process.exit(1)
}

function texte(contenu) {
  if (typeof contenu === 'string') return contenu
  if (!Array.isArray(contenu)) return ''
  return contenu.filter(b => b.type === 'text').map(b => b.text).join('\n')
}

// Les rappels injectes par le systeme ne sont pas des paroles de l'utilisateur.
const nettoyer = t => t.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, '').trim()

const sortie = path.join(os.tmpdir(), `revue-claudemd-${Date.now()}`)
fs.mkdirSync(sortie)

for (const { f, p } of fichiers) {
  const lignes = []
  for (const brut of fs.readFileSync(p, 'utf8').split('\n')) {
    if (!brut) continue
    let e
    try { e = JSON.parse(brut) } catch { continue } // ligne tronquee : ignoree
    if (e.isSidechain) continue // sous-agents : hors sujet
    if (e.type === 'user') {
      const t = nettoyer(texte(e.message?.content))
      if (t) lignes.push(`UTILISATEUR : ${t}`)
    } else if (e.type === 'assistant') {
      const t = texte(e.message?.content).trim()
      if (t) lignes.push(`ASSISTANT : ${t}`)
    }
  }
  if (lignes.length) fs.writeFileSync(path.join(sortie, f.replace(/\.jsonl$/, '.txt')), lignes.join('\n\n'))
}

console.log(`Dossier : ${sortie}`)
for (const f of fs.readdirSync(sortie)) {
  console.log(`${Math.round(fs.statSync(path.join(sortie, f)).size / 1024)} Ko\t${f}`)
}
