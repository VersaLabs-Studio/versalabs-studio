# FooterCTA Component

A flexible, graceful Call-to-Action component designed for VersaLabs Studio footers. Built with VersaLabs branding and design principles.

## Features

- **VersaLabs Branded**: Follows official design tokens and color palette
- **Flexible Configuration**: Customizable title, description, and button actions
- **Glassmorphism Effects**: Subtle backdrop blur and gradient overlays
- **Micro-Animations**: Spring physics animations per VersaLabs guidelines
- **Responsive Design**: Works seamlessly across all device sizes
- **Accessibility**: Proper semantic HTML and keyboard navigation

## Usage

### Basic Usage

```tsx
import FooterCTA from '@/components/ui/FooterCTA';

export default function MyPage() {
  return (
    <FooterCTA />
  );
}
```

### Custom Configuration

```tsx
import FooterCTA from '@/components/ui/FooterCTA';

export default function MyPage() {
  return (
    <FooterCTA
      title="Ready to Transform Your Business?"
      description="Let's build the next generation of digital infrastructure together."
      primaryButton={{
        label: "Get Started",
        href: "/contact",
        variant: "primary"
      }}
      secondaryButton={{
        label: "View Portfolio",
        href: "/work",
        variant: "secondary",
        external: true
      }}
      showGlow={false}
    />
  );
}
```

### Integration with Footer

```tsx
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <Footer
      showCTA={true}
      ctaProps={{
        title: "Let's Build Something Amazing",
        description: "Ready to take your project to the next level?",
        primaryButton: {
          label: "Start Conversation",
          href: "/contact"
        }
      }}
    />
  );
}
```

## Props

### FooterCTAProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Ready to Build Something Extraordinary?"` | Main heading text |
| `description` | `string` | See default | Descriptive text below title |
| `primaryButton` | `ButtonProps` | See default | Primary CTA button configuration |
| `secondaryButton` | `ButtonProps` | See default | Secondary CTA button configuration |
| `className` | `string` | `""` | Additional CSS classes |
| `showGlow` | `boolean` | `true` | Whether to show animated gradient glow |

### ButtonProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | Required | Button text |
| `href` | `string` | Required | Link destination |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Button styling variant |
| `external` | `boolean` | `false` | Whether link opens in new tab |
| `icon` | `boolean` | `true` | Whether to show arrow/external icon |

## Design Principles

- **High Contrast**: Stark white text on dark backgrounds
- **Spring Animations**: Smooth, responsive micro-interactions
- **Glassmorphism**: Subtle transparency and backdrop blur effects
- **Gradient Accents**: Text gradients for visual hierarchy
- **Minimal Borders**: Low-opacity white borders for definition

## Accessibility

- Semantic HTML structure
- Proper focus management
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios maintained