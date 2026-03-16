# Animation System

## Overview
This boilerplate uses Framer Motion for all animations with production-ready patterns.

## Animation Types

### 1. Entrance Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### 2. Hover Effects
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Button
</motion.button>
```

### 3. Scroll Animations
```tsx
<motion.div
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### 4. Spring Physics
```tsx
<motion.div
  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
>
  Content
</motion.div>
```

## Custom Animations
- `animate-float`: Floating animation (3s cycle)
- `animate-pulse-glow`: Pulsing glow effect (2s cycle)
- `gradient-animate`: Gradient background shift (5s cycle)
