# 🎛️ Strudel Live - Generador Musical con IA Claude

Interfaz de generación musical en tiempo real usando **Claude AI** para generar código **Strudel** (live coding de audio).

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

**🌍 Idiomas:** [Français](README.md) | [English](README.en.md) | **Español**

## 🎵 ¿Qué es esto?

Una aplicación web minimalista que te permite crear música electrónica **en tiempo real** describiendo lo que quieres en lenguaje natural a Claude AI. El código Strudel generado se carga automáticamente en el editor y se reproduce al instante.

**Características:**
- ✨ Generación de música por IA (Claude)
- 🎹 Interfaz Strudel integrada completa
- 🔄 Actualización automática en tiempo real
- ✏️ Edición directa en Strudel
- 📱 Diseño responsive (móvil, tableta, escritorio)
- 🚀 Ultra-ligero (HTML/JS vanilla, sin dependencias)

## 🚀 Instalación y Uso

### Requisitos Previos

- Un servidor web local (Python, Node.js, u otro)
- Un navegador moderno

### Inicio Rápido

1. **Clonar el proyecto**
```bash
git clone https://github.com/MaxFmr/strudel-ai-live.git
cd strudel-ai-live
```

2. **Iniciar un servidor local**

Con Python:
```bash
python3 -m http.server 8000
```

Con Node.js:
```bash
npx serve
```

3. **Abrir en el navegador**
```
http://localhost:8000
```

4. **Usar la interfaz**
   - Haz clic en **PLAY ▶** en el editor Strudel
   - Pide a Claude que genere música en Claude Code
   - O edita el código directamente en la interfaz Strudel
   - ¡La música se actualiza automáticamente!

## 🎹 Cómo Generar Música

### Con Claude Code

**Requisitos:** [Claude Code](https://claude.com/claude-code) - Editor de código AI de Anthropic

#### 1. Instalación de Claude Code

Si aún no tienes Claude Code:

1. Visita [claude.com/claude-code](https://claude.com/claude-code)
2. Descarga la aplicación para tu SO (Mac/Windows/Linux)
3. Instala e inicia Claude Code
4. Inicia sesión con tu cuenta de Anthropic

#### 2. Abrir Proyecto en Claude Code

```bash
# Desde la terminal en Claude Code
cd "ruta/a/strudel-ai-live"
```

O usa **File > Open Folder** y selecciona la carpeta del proyecto.

#### 3. Uso - Método Simple

Una vez que el servidor local esté ejecutándose y la interfaz abierta en tu navegador:

**En Claude Code, simplemente escribe tus prompts musicales:**

```
genera un beat techno rápido
```

```
añade una línea de bajo ácido
```

```
crea melodía ambient con reverb
```

```
beat breakbeat jungle con bajo y melodía repetitiva
```

Claude **automáticamente**:
1. ✨ Comprenderá tu solicitud musical
2. 🎵 Generará código Strudel apropiado
3. 💾 Lo escribirá en `pattern.js`
4. 🔄 La interfaz detectará el cambio (cada 0.5s)
5. 🎶 ¡El código se carga en Strudel y se reproduce al instante!

### Edición Directa en Strudel

También puedes modificar el código **directamente en la interfaz Strudel**:
- Haz clic en el editor Strudel
- Modifica el código como desees
- Haz clic en PLAY para escuchar los cambios

**Nota:** Las modificaciones en Strudel no se guardan en `pattern.js`. Para guardar tus patrones, pide a Claude que los genere.

### Flujo de Trabajo Completo

```
┌─────────────────┐
│  Claude Code    │
│  "genera un     │
│   beat techno"  │
└────────┬────────┘
         │
         ▼
    Genera código
    Strudel
         │
         ▼
┌────────────────┐
│  pattern.js    │
│  s("bd*4")     │
└────────┬───────┘
         │
         ▼
    Detección
    (500ms)
         │
         ▼
┌────────────────┐
│  Interfaz      │
│  Strudel.cc    │
│  ▶️ ¡Música!   │
└────────────────┘
```

### Ejemplos de Prompts

```
"Un beat minimal con kick en cada tiempo"
→ s("bd ~ bd ~")

"Beat breakbeat jungle con bajo y melodía"
→ stack(
    s("bd*2 ~ bd ~ bd ~ ~ ~"),
    s("~ sn ~ sn"),
    s("[hh hh]*8"),
    note("c2 c2 g1 c2").s("sawtooth"),
    note("e4 g4 e4 c4").s("square")
  )

"Línea de bajo ácido"
→ note("c2 c3 c2 g2").s("sawtooth").lpf(sine.range(200,1200)).resonance(10)
```

## 📁 Estructura del Proyecto

```
strudel-ai-live/
├── index.html          # Interfaz principal (responsive)
├── pattern.js          # Código Strudel generado por Claude
├── README.md           # Documentación en francés
├── README.en.md        # Documentación en inglés
├── README.es.md        # Documentación en español
├── .gitignore          # Archivos ignorados por Git
└── .claude/
    └── commands/
        └── beat.md     # Comando slash de Claude (opcional)
```

### Archivos Principales

- **`index.html`** : Interfaz web con Strudel integrado
  - Diseño responsive (móvil/tableta/escritorio)
  - Monitoreo automático de `pattern.js`
  - Editor Strudel completo y funcional
  - Botón flotante hacia documentación

- **`pattern.js`** : Archivo de patrón activo
  - Contiene código Strudel entre `/* PATTERN_START */` y `/* PATTERN_END */`
  - Modificado automáticamente por Claude Code
  - Monitoreado cada 500ms por la interfaz

- **`.claude/commands/beat.md`** : Comando slash opcional
  - Permite usar `/beat <prompt>` en Claude Code
  - Requiere reinicio de Claude Code para cargar
  - Alternativa: usar prompts naturales directamente

## 🎓 Sintaxis de Strudel (Referencia Rápida)

```javascript
// Samples (batería)
s("bd sd hh")           // bombo, caja, hi-hat

// Notas
note("c3 e3 g3").s("piano")

// Apilamiento (capas)
stack(
  s("bd*4"),            // bombo 4 veces
  s("hh*8")             // hi-hat 8 veces
)

// Efectos
.lpf(800)               // filtro paso bajo
.room(0.5)              // reverb
.gain(0.8)              // volumen
.delay(0.3)             // delay

// Modulación
sine.range(200, 2000)   // oscila entre 200 y 2000
.fast(2)                // 2x más rápido
```

[Documentación Completa de Strudel](https://strudel.cc)

## 🛠️ Arquitectura Técnica

### Flujo de Trabajo

1. **Claude genera** código Strudel basado en tu prompt
2. **Código escrito** en `pattern.js` entre marcadores `/* PATTERN_START */` y `/* PATTERN_END */`
3. **Monitoreo**: JavaScript verifica `pattern.js` cada 500ms
4. **Detección**: Si el código cambia, se codifica en base64
5. **Actualización**: El iframe de Strudel se recarga con nuevo código en URL (`#<code-base64>`)
6. **Reproducción**: El sonido se actualiza automáticamente

### ¿Por qué este enfoque?

- ✅ **Simple**: No necesita backend complejo
- ✅ **Confiable**: Usa editor Strudel oficial
- ✅ **Ligero**: Solo HTML/JS vanilla
- ✅ **Tiempo real**: Polling rápido (500ms)

## 📱 Diseño Responsive

La interfaz se adapta automáticamente:

- **Escritorio** (> 1024px): Barra horizontal
- **Tableta** (769-1024px): Tamaños intermedios
- **Móvil** (< 768px): Barra vertical, texto más grande
- **Móvil pequeño** (< 480px): Ultra-compacto

## 🐛 Solución de Problemas

### Problemas de Interfaz

**"El patrón no se actualiza"**
- ✅ Verifica que el servidor local esté ejecutándose (`python3 -m http.server 8000`)
- ✅ Revisa la consola del navegador (F12) para errores
- ✅ Verifica que `pattern.js` contenga marcadores `/* PATTERN_START */` y `/* PATTERN_END */`
- ✅ El estado en la parte superior debería mostrar "🎶 Actualizado: [hora]"

**"Sin sonido"**
- ✅ Haz clic en **PLAY ▶** en el editor Strudel (arriba a la izquierda)
- ✅ Verifica el volumen del sistema
- ✅ Algunos navegadores bloquean el audio antes de la interacción del usuario
- ✅ Prueba con patrón simple: `s("bd sd")`

**"El iframe no carga"**
- ✅ Verifica la conexión a internet (Strudel.cc carga en línea)
- ✅ Intenta recargar la página (Ctrl+R o Cmd+R)
- ✅ Desactiva temporalmente bloqueadores de anuncios/contenido

### Problemas con Claude Code

**"Claude no genera código"**
- ✅ Asegúrate de que la carpeta del proyecto esté abierta en Claude Code
- ✅ Sé explícito: "genera un beat techno" en lugar de "haz música"
- ✅ Claude debería responder con código generado y confirmar escritura en `pattern.js`

**"El comando /beat no funciona"**
- ✅ Reinicia Claude Code para cargar comandos personalizados
- ✅ Alternativa: usa prompts naturales (recomendado)

**"Error de sintaxis de Strudel"**
- ✅ Revisa la consola de Strudel para errores
- ✅ Pide a Claude que corrija: "corrige el error en el patrón"
- ✅ Usa patrón básico para resetear: `s("bd sd")`

## 🎨 Personalización

### Modificar Estilo

Edita CSS en `index.html` (líneas 7-260):
- Colores: `#00ff41` (verde), `#00ffff` (cian)
- Animaciones: `@keyframes pulse`
- Layout: `.controls`, `#strudel-iframe`

### Cambiar Frecuencia de Actualización

En `index.html` línea ~360:
```javascript
setInterval(checkUpdates, 500); // 500ms = 0.5 segundos
```

## 🚀 Mejoras Futuras

- [ ] Modo multi-pista
- [ ] Presets de estilos musicales
- [ ] Exportación de audio WAV/MP3
- [ ] Historial de patrones
- [ ] Compartir por URL
- [ ] Visualización de audio en tiempo real

## 📄 Licencia

Licencia MIT - ¡Úsalo libremente!

## 🙏 Créditos

- [Strudel](https://strudel.cc) - Live coding de audio para la web
- [Claude AI](https://anthropic.com) - Generación de código musical
- Inspirado por la cultura **Algorave** y **TidalCycles**

---

**Hecho con 💚 para la escena de live coding**

🎵 ¡Happy jamming!
