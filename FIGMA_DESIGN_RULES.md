# Figma to Code Design System Rules

This document provides comprehensive guidelines for integrating Figma designs into the teamday-web codebase using the Model Context Protocol (MCP).

## Project Overview

**Framework Stack:**
- **Frontend Framework:** Nuxt 4.2.0 (Vue 3.5.22)
- **UI Library:** @nuxt/ui 4.1.0
- **Styling:** Tailwind CSS (via @nuxt/ui)
- **Icons:** @nuxt/icon (Iconify with 200,000+ icons)
- **Build Tool:** Vite (bundled with Nuxt)
- **Type System:** TypeScript 5.6.3
- **Package Manager:** Bun

---

## 1. Design Token Definitions

### Token Structure

Design tokens are managed through Nuxt UI's CSS variable system and Tailwind CSS configuration. Tokens are auto-generated at `.nuxt/ui.css`.

#### Color Tokens

The design system uses semantic color variables that automatically support light/dark modes:

**Semantic Colors:**
```css
/* Light Mode */
--ui-text-dimmed: var(--ui-color-neutral-400)
--ui-text-muted: var(--ui-color-neutral-500)
--ui-text-toned: var(--ui-color-neutral-600)
--ui-text: var(--ui-color-neutral-700)
--ui-text-highlighted: var(--ui-color-neutral-900)
--ui-text-inverted: var(--color-white)

--ui-bg: var(--color-white)
--ui-bg-muted: var(--ui-color-neutral-50)
--ui-bg-elevated: var(--ui-color-neutral-100)
--ui-bg-accented: var(--ui-color-neutral-200)
--ui-bg-inverted: var(--ui-color-neutral-900)

--ui-border: var(--ui-color-neutral-200)
--ui-border-muted: var(--ui-color-neutral-200)
--ui-border-accented: var(--ui-color-neutral-300)
--ui-border-inverted: var(--ui-color-neutral-900)

/* Dark Mode - values adjust automatically */
```

**Color Palettes:**
- `primary` (50-950 scale)
- `secondary` (50-950 scale)
- `success` (50-950 scale)
- `info` (50-950 scale)
- `warning` (50-950 scale)
- `error` (50-950 scale)
- `neutral` (50-950 scale)

**Tailwind Usage:**
```vue
<div class="bg-primary-500 text-white">
<div class="text-default bg-default"> <!-- Semantic tokens -->
<div class="border-muted"> <!-- Semantic border -->
```

#### Typography Tokens

Typography follows Tailwind CSS utility classes with Nuxt UI enhancements:

**Font Sizes:**
- `text-xs` (extra small)
- `text-sm` (small)
- `text-base` (base)
- `text-lg` (large)
- `text-xl` (extra large)
- `text-2xl` through `text-9xl` (display sizes)

**Font Weights:**
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

**Default Body Style:**
```css
body {
  @apply antialiased text-default bg-default scheme-light dark:scheme-dark
}
```

#### Spacing Tokens

Spacing follows Tailwind's 4px-based scale:

- `spacing(0)` = 0
- `spacing(1)` = 0.25rem (4px)
- `spacing(2)` = 0.5rem (8px)
- `spacing(4)` = 1rem (16px)
- `spacing(8)` = 2rem (32px)
- `spacing(16)` = 4rem (64px)

**Usage:**
```vue
<div class="p-4 m-2 gap-4">
<div class="px-2.5 py-1.5"> <!-- Component-specific spacing -->
```

#### Border Radius Tokens

**Default Radius:**
```css
--ui-radius: 0.25rem (4px)
```

**Tailwind Classes:**
- `rounded-none` (0)
- `rounded-sm` (0.125rem)
- `rounded` (0.25rem)
- `rounded-md` (0.375rem)
- `rounded-lg` (0.5rem)
- `rounded-xl` (0.75rem)
- `rounded-2xl` (1rem)
- `rounded-full` (9999px)

---

## 2. Component Library

### Component Location

**Nuxt UI Components:**
- **Location:** `node_modules/@nuxt/ui/dist/runtime/components/`
- **Auto-import:** All Nuxt UI components are auto-imported (no explicit imports needed)
- **TypeScript Definitions:** `.d.vue.ts` files alongside each component
- **Theme Definitions:** `.nuxt/ui/[component-name].ts`

### Available Components

Nuxt UI provides 100+ pre-built, accessible components:

**Layout Components:**
- `UApp` - Root application wrapper
- `UContainer` - Content container with max-width
- `UHeader` - Header navigation
- `UFooter` - Footer layout
- `UCard` - Card container

**Form Components:**
- `UButton` - Primary interaction button
- `UInput` - Text input field
- `UTextarea` - Multi-line text input
- `USelect` - Dropdown select
- `UCheckbox` / `UCheckboxGroup` - Checkbox inputs
- `URadio` / `URadioGroup` - Radio inputs
- `UForm` / `UFormField` - Form wrapper with validation
- `UFileUpload` - File upload widget
- `UColorPicker` - Color selection

**Navigation Components:**
- `UBreadcrumb` - Breadcrumb navigation
- `UDropdownMenu` - Dropdown menu
- `UContextMenu` - Right-click context menu
- `UTabs` - Tabbed interface

**Feedback Components:**
- `UAlert` - Alert messages
- `UToast` - Toast notifications
- `UModal` / `UDrawer` - Overlay dialogs
- `UProgress` - Progress indicators
- `UBadge` - Status badges
- `UChip` - Small info chips

**Data Display:**
- `UTable` - Data tables
- `UAvatar` / `UAvatarGroup` - User avatars
- `UAccordion` - Collapsible content
- `UCarousel` - Image/content carousel
- `UCalendar` - Date picker calendar

**Specialized:**
- `UIcon` - Icon wrapper (integrates with @nuxt/icon)
- `UColorModeButton` / `UColorModeSwitch` - Theme switcher
- `UCommandPalette` - Command palette (Cmd+K)
- `UDashboard*` - Dashboard layout components

### Component Architecture

**Component Pattern:**
```vue
<script setup lang="ts">
// Props are auto-typed via TypeScript
</script>

<template>
  <UButton
    color="primary"
    variant="solid"
    size="md"
    icon="i-heroicons-arrow-right"
  >
    Click Me
  </UButton>
</template>
```

**Theme Customization Pattern:**

Each component has a theme configuration with:
- `slots` - CSS classes for component parts
- `variants` - Style variations (color, size, variant)
- `compoundVariants` - Combined variant styles
- `defaultVariants` - Default variant values

**Example Button Theme (`.nuxt/ui/button.ts`):**
```ts
{
  slots: {
    base: "rounded-md font-medium inline-flex items-center...",
    label: "truncate",
    leadingIcon: "shrink-0",
    trailingIcon: "shrink-0"
  },
  variants: {
    color: ["primary", "secondary", "success", "info", "warning", "error", "neutral"],
    variant: ["solid", "outline", "soft", "subtle", "ghost", "link"],
    size: ["xs", "sm", "md", "lg", "xl"]
  }
}
```

### Creating Custom Components

**Location:** `app/components/` (auto-scanned by Nuxt)

**Naming Convention:**
- PascalCase for component files: `MyComponent.vue`
- Auto-imported as `<MyComponent />`

**Custom Component Pattern:**
```vue
<!-- app/components/TeamDayCard.vue -->
<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

const props = defineProps<Props>()
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">{{ title }}</h3>
    </template>

    <p class="text-muted">{{ description }}</p>
  </UCard>
</template>
```

---

## 3. Styling Approach

### CSS Methodology

**Primary:** Tailwind CSS utility-first approach via Nuxt UI
**Secondary:** Scoped styles when needed
**Theme System:** CSS variables + Tailwind Variants

### Tailwind Configuration

Tailwind is auto-configured by @nuxt/ui. Custom configurations can be added via `app.config.ts`.

### Style Organization

**Utility Classes (Preferred):**
```vue
<template>
  <div class="flex items-center gap-4 p-4 bg-white dark:bg-neutral-900 rounded-lg">
    <UIcon name="i-heroicons-check" class="text-success-500" />
    <span class="text-sm font-medium text-default">Success!</span>
  </div>
</template>
```

**Scoped Styles (When Needed):**
```vue
<style scoped>
/* Use only for complex animations or truly custom styles */
.custom-gradient {
  background: linear-gradient(135deg, var(--ui-color-primary-500), var(--ui-color-secondary-500));
}
</style>
```

### Responsive Design

**Breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

**Mobile-First Approach:**
```vue
<div class="w-full md:w-1/2 lg:w-1/3">
<div class="text-sm md:text-base lg:text-lg">
<div class="flex-col md:flex-row">
```

### Dark Mode

**Color Mode System:** Automatic via `@nuxtjs/color-mode` (bundled with @nuxt/ui)

**Usage:**
```vue
<!-- Automatic dark mode variants -->
<div class="bg-white dark:bg-neutral-900">
<div class="text-neutral-900 dark:text-white">

<!-- Semantic tokens (auto-adjusting) -->
<div class="bg-default text-default">
```

**Color Mode Toggle:**
```vue
<UColorModeButton />
<UColorModeSwitch />
```

---

## 4. Icon System

### Icon Provider

**Package:** `@nuxt/icon` (auto-installed with @nuxt/ui)
**Icon Source:** Iconify (200,000+ icons from 150+ icon sets)
**Browser:** https://icones.js.org

### Icon Usage

**Component:**
```vue
<UIcon name="i-heroicons-star" />
<UIcon name="i-lucide-heart" class="text-error-500" />
<UIcon name="i-carbon-delete" size="24" />
```

**In Buttons:**
```vue
<UButton icon="i-heroicons-arrow-right">
  Next
</UButton>

<UButton
  leading-icon="i-heroicons-magnifying-glass"
  trailing-icon="i-heroicons-chevron-down"
>
  Search
</UButton>
```

### Icon Naming Convention

**Format:** `i-{collection}-{icon-name}`

**Popular Collections:**
- `i-heroicons-*` - Heroicons (default)
- `i-lucide-*` - Lucide icons
- `i-carbon-*` - Carbon icons
- `i-mdi-*` - Material Design icons
- `i-ph-*` - Phosphor icons
- `i-tabler-*` - Tabler icons

**Examples:**
```
i-heroicons-home
i-heroicons-user-circle
i-heroicons-arrow-right-20-solid
i-lucide-settings
i-carbon-menu
```

### Custom SVG Icons

**Location:** `public/icons/` (if needed)

**Usage:**
```vue
<UIcon name="custom-icon" />
```

---

## 5. Asset Management

### Asset Locations

**Public Assets:** `public/`
- Direct access via `/filename.ext`
- No bundling/optimization
- Use for: favicons, robots.txt, static files

**Example:**
```vue
<img src="/favicon.ico" />
<img src="/team-logo.png" />
```

### Image Optimization

**Nuxt Image Module (Optional):** Can be added for optimization

**Current Setup:** Standard HTML images

```vue
<img
  src="/images/hero.jpg"
  alt="Hero image"
  class="w-full h-auto object-cover"
/>
```

### Asset Best Practices

1. **SVG Preferred:** Use SVG for icons and illustrations
2. **WebP/AVIF:** Use modern formats for photos
3. **Responsive Images:** Provide multiple sizes for different viewports
4. **Lazy Loading:** Use `loading="lazy"` attribute
5. **Alt Text:** Always include descriptive alt text

---

## 6. Project Structure

### Directory Organization

```
teamday-web/
├── .claude/                  # Claude Code configuration
├── .nuxt/                    # Generated Nuxt files (build artifacts)
│   ├── ui/                   # Generated UI theme configs
│   ├── ui.css                # Generated Tailwind + UI styles
│   └── tsconfig.json         # Generated TypeScript config
├── app/                      # Application source code
│   ├── app.vue               # Root application component
│   ├── components/           # Vue components (auto-imported)
│   ├── composables/          # Vue composables (auto-imported)
│   ├── layouts/              # Layout components
│   ├── middleware/           # Route middleware
│   ├── pages/                # File-based routing pages
│   ├── plugins/              # Nuxt plugins
│   └── assets/               # Style assets (if needed)
├── public/                   # Static public assets
│   ├── favicon.ico
│   └── robots.txt
├── node_modules/             # Dependencies
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

### Path Aliases

Auto-configured by Nuxt:

```ts
// Available path aliases:
~      // Points to app/
~/     // Points to app/*
@      // Points to app/
@/     // Points to app/*
~~     // Points to project root
~~/    // Points to project root/*

#ui    // Points to @nuxt/ui runtime
#app   // Points to Nuxt app internals
#imports // Auto-imports
#components // Component registry
```

**Usage:**
```vue
<script setup>
import { myUtil } from '~/utils/myUtil'
import MyComponent from '@/components/MyComponent.vue'
</script>
```

### Feature Organization Pattern

**Recommended Structure:**
```
app/
├── components/
│   ├── common/              # Shared components
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── team/                # Feature-specific components
│   │   ├── TeamCard.vue
│   │   └── TeamList.vue
│   └── dashboard/
│       └── DashboardWidget.vue
├── composables/
│   ├── useTeam.ts           # Team-related composable
│   └── useAuth.ts           # Auth composable
└── pages/
    ├── index.vue            # Home page (/)
    ├── dashboard.vue        # Dashboard page (/dashboard)
    └── teams/
        ├── index.vue        # Teams list (/teams)
        └── [id].vue         # Team detail (/teams/:id)
```

---

## 7. Figma Integration Workflow

### Step 1: Design Analysis

When receiving a Figma design:

1. **Extract Colors:**
   - Map Figma colors to semantic tokens (`primary`, `secondary`, `success`, etc.)
   - Identify neutral/gray scale usage
   - Note light/dark mode requirements

2. **Identify Components:**
   - Check if equivalent Nuxt UI components exist
   - Document custom component requirements
   - Note interaction patterns

3. **Typography Mapping:**
   - Map Figma text styles to Tailwind classes
   - Identify font weights and sizes
   - Note responsive typography needs

4. **Spacing Analysis:**
   - Use Tailwind's spacing scale (4px increments)
   - Note padding, margins, gaps
   - Identify layout patterns (flex, grid)

### Step 2: Component Selection

**Decision Tree:**

```
Does a Nuxt UI component match?
  ├─ YES → Use Nuxt UI component with variants
  │        Example: <UButton color="primary" variant="solid" />
  │
  └─ NO → Is it a composition of Nuxt UI components?
           ├─ YES → Create wrapper component
           │        Example: <UCard> with <UButton> + <UIcon>
           │
           └─ NO → Build custom component with Tailwind utilities
                    Example: Custom chart, unique layout
```

### Step 3: Implementation Pattern

**1. Start with Nuxt UI Components:**
```vue
<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">Title</h3>
        <UButton
          icon="i-heroicons-x-mark"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </template>

    <div class="space-y-4">
      <!-- Content -->
    </div>

    <template #footer>
      <div class="flex gap-2">
        <UButton variant="outline">Cancel</UButton>
        <UButton color="primary">Confirm</UButton>
      </div>
    </template>
  </UCard>
</template>
```

**2. Apply Tailwind Utilities for Layout:**
```vue
<div class="
  flex
  flex-col md:flex-row
  items-start md:items-center
  gap-4
  p-6
  bg-white dark:bg-neutral-900
  rounded-lg
  shadow-sm
">
```

**3. Use Semantic Tokens:**
```vue
<div class="text-default bg-default border border-muted">
```

### Step 4: Responsive Implementation

**Mobile-First Approach:**
```vue
<template>
  <!-- Stack on mobile, side-by-side on desktop -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <TeamCard v-for="team in teams" :key="team.id" :team="team" />
  </div>

  <!-- Hide on mobile, show on desktop -->
  <div class="hidden lg:block">
    <Sidebar />
  </div>

  <!-- Mobile menu -->
  <div class="lg:hidden">
    <MobileMenu />
  </div>
</template>
```

### Step 5: Theme Customization

**App Config (if needed):**

Create `app.config.ts`:
```ts
export default defineAppConfig({
  ui: {
    // Override component themes
    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    },
    // Custom color palette
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... rest of scale
      }
    }
  }
})
```

---

## 8. Code Generation Guidelines

### When Generating Code from Figma:

**DO:**
- ✅ Use Nuxt UI components wherever possible
- ✅ Apply Tailwind utility classes for styling
- ✅ Use semantic color tokens (`text-default`, `bg-default`)
- ✅ Include dark mode variants (`dark:`)
- ✅ Use icon names from Iconify (`i-heroicons-*`)
- ✅ Implement responsive breakpoints (`md:`, `lg:`)
- ✅ Use TypeScript for props and types
- ✅ Follow Vue 3 Composition API with `<script setup>`
- ✅ Auto-import composables and components (no explicit imports)

**DON'T:**
- ❌ Write custom CSS unless absolutely necessary
- ❌ Use inline styles
- ❌ Import Vue or Nuxt functions (they're auto-imported)
- ❌ Hardcode colors (use semantic tokens)
- ❌ Ignore accessibility attributes
- ❌ Create components that duplicate Nuxt UI components
- ❌ Use deprecated Vue 2 patterns

### Component Template Structure:

```vue
<!-- app/components/FeatureCard.vue -->
<script setup lang="ts">
// Types
interface Props {
  title: string
  description?: string
  icon?: string
}

// Props
const props = defineProps<Props>()

// Composables (auto-imported)
const { data } = await useFetch('/api/data')

// Computed
const formattedTitle = computed(() => props.title.toUpperCase())

// Methods
function handleClick() {
  // Handle interaction
}
</script>

<template>
  <UCard class="hover:shadow-lg transition-shadow">
    <div class="flex items-start gap-4">
      <UIcon
        v-if="icon"
        :name="icon"
        class="text-primary-500 text-2xl shrink-0"
      />

      <div class="flex-1 space-y-2">
        <h3 class="text-lg font-semibold text-default">
          {{ formattedTitle }}
        </h3>

        <p v-if="description" class="text-sm text-muted">
          {{ description }}
        </p>

        <UButton
          size="sm"
          variant="soft"
          @click="handleClick"
        >
          Learn More
        </UButton>
      </div>
    </div>
  </UCard>
</template>
```

---

## 9. Common Patterns & Recipes

### Layout Pattern: Dashboard

```vue
<!-- app/pages/dashboard.vue -->
<template>
  <UDashboard>
    <UDashboardNavbar>
      <template #left>
        <UIcon name="i-heroicons-home" class="text-xl" />
        <span class="font-semibold">TeamDay</span>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UDashboardNavbar>

    <UDashboardSidebar>
      <!-- Sidebar content -->
    </UDashboardSidebar>

    <UDashboardPanel>
      <UDashboardToolbar>
        <h1 class="text-2xl font-bold">Dashboard</h1>
      </UDashboardToolbar>

      <div class="p-6">
        <!-- Main content -->
      </div>
    </UDashboardPanel>
  </UDashboard>
</template>
```

### Form Pattern

```vue
<script setup lang="ts">
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const state = reactive({
  email: '',
  password: ''
})

async function onSubmit() {
  // Handle form submission
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    class="space-y-4"
  >
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" type="email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit" block>
      Sign In
    </UButton>
  </UForm>
</template>
```

### Card Grid Pattern

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <UCard
      v-for="item in items"
      :key="item.id"
      class="hover:ring-2 hover:ring-primary-500 transition-all"
    >
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <UBadge :color="item.status">{{ item.status }}</UBadge>
          <UIcon :name="item.icon" class="text-xl text-muted" />
        </div>

        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p class="text-sm text-muted">{{ item.description }}</p>

        <UButton variant="outline" block>
          View Details
        </UButton>
      </div>
    </UCard>
  </div>
</template>
```

### Loading State Pattern

```vue
<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/teams')
</script>

<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center p-12">
      <UIcon name="i-heroicons-arrow-path" class="animate-spin text-2xl" />
    </div>

    <!-- Error State -->
    <UAlert
      v-else-if="error"
      color="error"
      variant="soft"
      :title="error.message"
    />

    <!-- Success State -->
    <div v-else class="space-y-4">
      <TeamCard v-for="team in data" :key="team.id" :team="team" />
    </div>
  </div>
</template>
```

---

## 10. Accessibility Guidelines

Nuxt UI components are built with accessibility in mind, but always verify:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ ARIA attributes where needed
- ✅ Focus states visible
- ✅ Color contrast ratios (WCAG AA minimum)
- ✅ Alt text for images
- ✅ Label associations for form inputs

**Example:**
```vue
<UButton
  aria-label="Close dialog"
  icon="i-heroicons-x-mark"
/>

<UInput
  label="Email Address"
  placeholder="you@example.com"
  aria-describedby="email-help"
/>
<span id="email-help" class="text-xs text-muted">
  We'll never share your email
</span>
```

---

## 11. Performance Considerations

- **Auto-imports:** Components and composables are tree-shaken automatically
- **Icon Loading:** Icons are loaded on-demand via Iconify
- **CSS:** Tailwind purges unused styles in production
- **Code Splitting:** Nuxt handles automatic code splitting per page
- **Lazy Loading:** Use `defineAsyncComponent` for heavy components

```vue
<script setup>
const HeavyChart = defineAsyncComponent(
  () => import('~/components/HeavyChart.vue')
)
</script>
```

---

## 12. Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Generate static site
bun run generate
```

---

## 13. Resources

- **Nuxt UI Docs:** https://ui.nuxt.com
- **Nuxt 3 Docs:** https://nuxt.com
- **Tailwind CSS Docs:** https://tailwindcss.com
- **Iconify Icon Browser:** https://icones.js.org
- **Vue 3 Docs:** https://vuejs.org
- **Reka UI (Headless Components):** https://reka-ui.com

---

## Summary Checklist for Figma → Code

When converting Figma designs:

1. ✅ Map colors to semantic tokens or color palette
2. ✅ Choose appropriate Nuxt UI components
3. ✅ Use Tailwind utilities for spacing/layout
4. ✅ Select icons from Iconify collections
5. ✅ Implement responsive breakpoints
6. ✅ Add dark mode variants
7. ✅ Use TypeScript for type safety
8. ✅ Follow Vue 3 Composition API patterns
9. ✅ Test accessibility and keyboard navigation
10. ✅ Verify loading and error states

---

**Last Updated:** 2025-11-06
**Project:** teamday-web
**Nuxt UI Version:** 4.1.0
