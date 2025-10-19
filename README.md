# 🎛️ Strudel Live - Claude AI Music Generator

Interface de génération musicale en temps réel utilisant **Claude AI** pour générer du code **Strudel** (live coding audio).

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎵 Qu'est-ce que c'est ?

Une application web minimaliste qui permet de créer de la musique électronique **en temps réel** en décrivant ce que vous voulez en langage naturel à Claude AI. Le code Strudel généré est automatiquement chargé dans l'éditeur et joué instantanément.

**Caractéristiques :**
- ✨ Génération de musique par IA (Claude)
- 🎹 Interface Strudel embarquée
- 🔄 Mise à jour automatique en temps réel
- 📱 Design responsive (mobile, tablette, desktop)
- 🚀 Ultra-léger (HTML/JS vanilla, aucune dépendance)

## 🚀 Installation & Utilisation

### Prérequis

- Un serveur web local (Python, Node.js, ou autre)
- Un navigateur moderne

### Lancement rapide

1. **Cloner le projet**
```bash
git clone <url-du-repo>
cd "app ia algorave"
```

2. **Démarrer un serveur local**

Avec Python :
```bash
python3 -m http.server 8000
```

Avec Node.js :
```bash
npx serve
```

3. **Ouvrir dans le navigateur**
```
http://localhost:8000
```

4. **Utiliser l'interface**
   - Cliquez sur **PLAY ▶** dans l'éditeur Strudel
   - Demandez à Claude de générer de la musique dans Claude Code
   - La musique se met à jour automatiquement !

## 🎹 Comment générer de la musique

### Dans Claude Code

Demandez simplement à Claude de générer de la musique :

```
"génère un beat techno rapide"
"ajoute une ligne de basse acide"
"crée une mélodie ambient"
"beat breakbeat jungle avec bass"
"pattern minimal house"
```

Claude va :
1. Générer le code Strudel approprié
2. L'écrire dans `pattern.js`
3. L'interface détecte le changement (toutes les 0.5s)
4. Le code est chargé automatiquement dans Strudel
5. La musique change en temps réel !

### Exemples de prompts

```
"Un beat minimal avec un kick sur chaque temps"
→ s("bd ~ bd ~")

"Beat breakbeat jungle avec bass et mélodie"
→ stack(
    s("bd*2 ~ bd ~ bd ~ ~ ~"),
    s("~ sn ~ sn"),
    s("[hh hh]*8"),
    note("c2 c2 g1 c2").s("sawtooth"),
    note("e4 g4 e4 c4").s("square")
  )

"Ligne de basse acide"
→ note("c2 c3 c2 g2").s("sawtooth").lpf(sine.range(200,1200)).resonance(10)
```

## 📁 Structure du projet

```
app ia algorave/
├── index.html          # Interface principale (responsive)
├── pattern.js          # Code Strudel généré par Claude
├── README.md           # Documentation
├── .gitignore          # Fichiers Git à ignorer
└── .claude/
    └── commands/
        └── beat.md     # Commande Claude (optionnelle)
```

## 🎓 Syntaxe Strudel (référence rapide)

```javascript
// Samples (batteries)
s("bd sd hh")           // kick, snare, hihat

// Notes
note("c3 e3 g3").s("piano")

// Empilage (layers)
stack(
  s("bd*4"),            // kick 4 fois
  s("hh*8")             // hihat 8 fois
)

// Effets
.lpf(800)               // lowpass filter
.room(0.5)              // reverb
.gain(0.8)              // volume
.delay(0.3)             // delay

// Modulation
sine.range(200, 2000)   // oscille entre 200 et 2000
.fast(2)                // 2x plus rapide
```

[Documentation complète Strudel](https://strudel.cc)

## 🛠️ Architecture technique

### Workflow

1. **Claude génère** le code Strudel basé sur votre prompt
2. **Code écrit** dans `pattern.js` entre les marqueurs `/* PATTERN_START */` et `/* PATTERN_END */`
3. **Surveillance** : JavaScript vérifie `pattern.js` toutes les 500ms
4. **Détection** : Si le code change, il est encodé en base64
5. **Mise à jour** : L'iframe Strudel est rechargée avec le nouveau code dans l'URL (`#<code-base64>`)
6. **Lecture** : Le son est mis à jour automatiquement

### Pourquoi cette approche ?

- ✅ **Simple** : Pas de backend complexe nécessaire
- ✅ **Fiable** : Utilise l'éditeur Strudel officiel
- ✅ **Léger** : HTML/JS vanilla uniquement
- ✅ **Temps réel** : Polling rapide (500ms)

## 📱 Responsive Design

L'interface s'adapte automatiquement :

- **Desktop** (> 1024px) : Barre horizontale
- **Tablette** (769-1024px) : Tailles intermédiaires
- **Mobile** (< 768px) : Barre verticale
- **Petit mobile** (< 480px) : Ultra-compact

## 🐛 Troubleshooting

**"Le pattern ne se met pas à jour"**
- Vérifiez que le serveur local est bien lancé
- Regardez la console du navigateur (F12)
- Vérifiez que `pattern.js` contient bien les marqueurs

**"Pas de son"**
- Cliquez sur PLAY ▶ dans l'éditeur Strudel
- Vérifiez le volume de votre système
- Certains navigateurs bloquent l'audio avant interaction utilisateur

**"L'iframe ne charge pas"**
- Vérifiez votre connexion internet (Strudel.cc est chargé en ligne)
- Essayez de recharger la page (Ctrl+R)

## 🎨 Personnalisation

### Modifier le style

Éditez les CSS dans `index.html` (lignes 6-119) :
- Couleurs : `#00ff41` (vert), `#00ffff` (cyan)
- Animations : `@keyframes pulse`
- Layout : `.controls`, `#strudel-iframe`

### Changer la fréquence de mise à jour

Dans `index.html` ligne 91 :
```javascript
setInterval(checkUpdates, 500); // 500ms = 0.5 secondes
```

## 🚀 Améliorations futures

- [ ] Mode multi-pistes
- [ ] Presets de styles musicaux
- [ ] Export audio WAV/MP3
- [ ] Historique des patterns
- [ ] Partage via URL
- [ ] Visualisation audio temps réel

## 📄 Licence

MIT License - Utilisez librement !

## 🙏 Crédits

- [Strudel](https://strudel.cc) - Live coding audio pour le web
- [Claude AI](https://anthropic.com) - Génération de code musical
- Inspiré par la culture **Algorave** et **TidalCycles**

---

**Fait avec 💚 pour la scène live coding**

🎵 Happy jamming!
