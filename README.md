# Motion Icons

**Beautiful animated icons for React** - Where simplicity meets motion.

Motion Icons is a powerful React component library that brings your icons to life with smooth animations, entrance effects, and interactive behaviors. Built on top of Lucide React icons with 3500+ icons and 15+ animation presets.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/motion-icons.svg)](https://www.npmjs.com/package/motion-icons)

## Features

-  **3500+ Icons** - Full Lucide icon library support
-  **15+ Animations** - Pulse, spin, bounce, wiggle, flip, and more
-  **Entrance Effects** - Fade, slide, zoom, and rotate entrances
-  **Smart Triggers** - Always, hover, click, or keyboard focus
-  **Lightweight** - Less than 2KB per icon (gzipped)
-  **Fully Customizable** - Size, color, duration, delay, and more
-  **Accessible** - Built with keyboard navigation and ARIA support
-  **Interactive Mode** - Scale effects on hover/focus
-  **Tree Shakeable** - Only bundle what you use

##  Quick Start

### Installation

```bash
npm install motion-icons lucide-react
# or
yarn add motion-icons lucide-react
```

### Basic Usage

```jsx
import { MotionIcon } from 'motion-icons';

function App() {
  return (
    <MotionIcon
      name="Heart"
      size={32}
      animation="pulse"
      className="text-red-500"
    />
  );
}
```

## Examples

### Basic Animation

```jsx
<MotionIcon
  name="Heart"
  size={48}
  animation="heartbeat"
  className="text-red-500"
/>
```

### Hover to Animate

```jsx
<MotionIcon
  name="Loader2"
  size={48}
  animation="spin"
  trigger="hover"
  className="text-blue-500"
/>
```

### Entrance Effect

```jsx
<MotionIcon
  name="Sparkles"
  size={48}
  entrance="zoomIn"
  animation="tada"
  className="text-yellow-500"
/>
```

### Interactive Button

```jsx
<MotionIcon
  name="Bell"
  size={48}
  animation="wiggle"
  trigger="click"
  interactive={true}
  className="text-purple-500"
/>
```

### Keyboard Focus Animation

```jsx
<MotionIcon
  name="Star"
  size={48}
  animation="spin"
  trigger="focus"
  className="text-amber-500"
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Icon name from Lucide icons |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |
| `animation` | `string` | `'none'` | Animation type (see below) |
| `entrance` | `string` | `null` | Entrance animation (see below) |
| `trigger` | `string` | `'always'` | When to trigger animation |
| `animationDuration` | `number` | `1000` | Animation duration in ms |
| `animationDelay` | `number` | `0` | Animation delay in ms |
| `weight` | `string` | `'regular'` | Icon stroke weight |
| `interactive` | `boolean` | `false` | Enable hover/focus scale effect |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `onMouseEnter` | `function` | - | Mouse enter handler |
| `onMouseLeave` | `function` | - | Mouse leave handler |
| `onAnimationEnd` | `function` | - | Animation end handler |

### Animation Types

**Looping Animations:**
- `pulse` - Gentle pulsing effect
- `spin` - Continuous rotation
- `bounce` - Bouncing motion
- `ping` - Ping/ripple effect

**Custom Animations:**
- `wiggle` - Side-to-side wiggle
- `flip` - 3D flip effect
- `heartbeat` - Double pulse like a heartbeat
- `shake` - Rapid shaking
- `swing` - Pendulum swing
- `tada` - Attention-grabbing tada
- `rubber` - Rubber band stretch

### Entrance Animations

- `fadeIn` - Simple fade in
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up with bounce
- `slideInUp` - Slide up with overshoot
- `slideInDown` - Slide down with overshoot
- `rotateIn` - Rotate and scale in
- `zoomIn` - Explosive zoom with bounce

### Trigger Modes

- `always` - Animation runs continuously
- `hover` - Animation on mouse hover
- `click` - Animation on click (temporary)
- `focus` - Animation on keyboard focus (Tab navigation)

### Weight Options

- `light` - Thin stroke (1.5px)
- `regular` - Normal stroke (2px)
- `bold` - Thick stroke (2.5px)

## Styling

Motion Icons uses Tailwind CSS for styling. You can customize colors, sizes, and more using Tailwind classes:

```jsx
<MotionIcon
  name="Heart"
  size={48}
  animation="pulse"
  className="text-red-500 hover:text-red-600 transition-colors"
/>
```

## Accessibility

Motion Icons is built with accessibility in mind:

- Keyboard navigation support with `trigger="focus"`
- ARIA labels for screen readers
- Focus-visible indicators
- Respects `prefers-reduced-motion` media query
- Semantic HTML with proper roles

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/motion-icons.git

# Install dependencies
cd motion-icons
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
motion-icons/
├── src/
│   ├── components/
│   │   ├── MotionIcon.jsx      # Main component
│   │   ├── ui/                 # UI components
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── AnimationDemo.jsx   # Interactive playground
│   │   └── IconGallery.jsx     # Icon browser
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   └── index.css               # Global styles & animations
├── public/
│   └── favicon.ico
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Lucide React](https://lucide.dev/) icons
- Powered by [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Links

- [Documentation](https://motion-icons.dev)
- [Icon Gallery](https://motion-icons.dev/gallery)
- [Animation Playground](https://motion-icons.dev/animations)
- [GitHub Repository](https://github.com/Garvit1000/npm-motion-icons)
- [npm Package](https://www.npmjs.com/package/motion-icons)

## Stats

- **3500+** Available Icons
- **15+** Animation Presets
- **<2KB** Per Icon (Gzipped)
- **100%** Tree Shakeable
- **♿** Fully Accessible

---

Made with ❤️ by the Motion Icons team
