# Styling Guide - Ranglar va Fontlar

## Qayerda saqlash?

Ranglar va fontlar **`src/styles/index.css`** faylida saqlanadi.

## Ishlatish

### Tailwind class orqali:
```tsx
{/* Primary ranglar */}
<div className="bg-primary-500 text-white">Primary color</div>

{/* Background ranglar */}
<div className="bg-bg-primary">Asosiy fon</div>
<div className="bg-bg-secondary">Ikkinchi darajali fon</div>

{/* Text ranglar */}
<h1 className="text-text-primary">Asosiy matn</h1>
<p className="text-text-secondary">Ikkinchi darajali matn</p>
<span className="text-text-muted">Yorib turadigan matn</span>

{/* Border */}
<div className="border border-border">Border</div>

{/* Accent */}
<button className="bg-accent hover:bg-accent-hover">Tugma</button>

{/* Status ranglar */}
<div className="text-success">Muvaffaqiyat</div>
<div className="text-warning">Ogohlantirish</div>
<div className="text-error">Xato</div>
```

### CSS variables orqali:
```css
.custom-element {
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}
```

### Fontlar:
```tsx
<div className="font-primary">Asosiy font</div>
<p className="font-serif">Serif font</p>
<code className="font-mono">Monospace font</code>
```

## O'zgartirish

Light mode uchun ranglarni o'zgartirish uchun `src/styles/index.css` faylidagi qiymatlarni tahrirlang:

```css
@theme {
  --color-primary-500: #0ea5e9; /* Bu rangni o'zgartiring */
  --color-text-primary: #0f172a; /* Text rangni o'zgartiring */
}
```

