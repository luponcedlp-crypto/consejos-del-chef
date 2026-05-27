# Consejos del Chef · Oregon Foods

Implementación del Design System de **Oregon Foods · Consejos del Chef** — la sub-marca editorial de tips y recetas de [Oregon Foods](https://www.oregonfoods.pe/).

## Cómo abrir

### Opción A — Sin servidor (abrir directo)
Abre `index.html` en cualquier navegador moderno. Los componentes React se cargan vía CDN (requiere internet para las fuentes y React).

### Opción B — Con servidor local (recomendado)
Si tienes Node.js instalado:
```bash
npx serve .
```
Luego abre http://localhost:3000

## Estructura

```
consejos-del-chef/
├── index.html          ← Página principal con todos los componentes inline
├── css/
│   ├── tokens.css      ← Design tokens: colores, tipografía, espaciado, radios
│   └── kit.css         ← Estilos de componentes (importa tokens.css)
├── assets/             ← Logos y fotos (vacío — ver pendientes)
└── README.md
```

## Componentes

Todos los componentes viven en `index.html` dentro de `<script type="text/babel">`. Para modificar:

| Componente      | Qué hace                                               |
|-----------------|--------------------------------------------------------|
| `Nav`           | Navegación sticky verde con logo y links               |
| `HeroOpener`    | Hero full-bleed con foto de fondo + texto superpuesto  |
| `TipCard`       | Tarjeta con numeral grande (firma visual del sub-brand) |
| `RecipeCard`    | Tarjeta de receta con foto, tiempo y dificultad        |
| `ProductRail`   | Grid de productos con precio en soles                  |
| `ChefQuote`     | Cita de chef sobre fondo verde                         |
| `Footer`        | Pie de página verde oscuro con sitemap                 |

## Personalización

### Cambiar colores
Edita `css/tokens.css` → sección `COLORS`. Los principales:
- `--of-green-800: #154a2c` → verde primario de botones y nav
- `--of-sear-500: #c14b1f`  → acento sear/brasa para tags y CTAs
- `--of-paper: #f5efe3`     → fondo crema (papel de carnicería)

### Cambiar contenido
En `index.html`, la función `App()` define los arrays de datos:
- `consejos[]` → tarjetas TipCard
- `recetas[]`  → tarjetas RecipeCard
- `productos[]` → cartas de producto

### Agregar fotografías reales
1. Coloca las fotos en `assets/`
2. En `.cdc-hero__photo` (kit.css línea ~80), agrega:
   ```css
   background-image: url('../assets/hero-parrilla.jpg');
   background-size: cover;
   ```
3. Para RecipeCard, pasa `imgSrc="assets/bife.jpg"` como prop

## Pendientes de producción

- [ ] Logo local: descarga `logo.png` desde oregonfoods.pe → `assets/logo.png`, luego actualiza el `src` del `<img>` en `Nav` y `Footer`
- [ ] Fotografías de carnes (el archivo `fotos carnes consejos del chef.docx`)
- [ ] Tipografía oficial: si Oregon Foods tiene fuentes propias, colócalas en `fonts/` y actualiza el `@import` en `tokens.css`
- [ ] Backend: actualmente todo es estático; conectar a CMS o API según necesidad

## Paleta de colores

| Token                | Valor     | Uso                              |
|----------------------|-----------|----------------------------------|
| `--of-green-800`     | `#154a2c` | Verde primario (logo, botones, nav) |
| `--of-green-900`     | `#0e3320` | Verde profundo (headlines, footer)  |
| `--of-sear-500`      | `#c14b1f` | Acento brasa (tags, CTA accent)     |
| `--of-paper`         | `#f5efe3` | Fondo crema (superficies editoriales) |
| `--of-cream`         | `#faf6ec` | Fondo elevado (cards)               |
| `--of-ink-900`       | `#1a1a17` | Texto principal                     |

## Tipografía

- **Big Shoulders Display** — titulares, eyebrows, numerales. Estilo letrero de carnicería.
- **Source Serif 4** — cuerpo editorial (tips, recetas, citas). Cálido y ligeramente clásico.
- **DM Sans** — UI: botones, captions, metadata. Limpio y neutro.

---

*Oregon Foods · "Excelencia desde el Origen" · The Oregon Way*
