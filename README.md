# inneuro-shared-components

This repository contains shared components, utilities, and types used across inneuro portfolio apps.

## Structure

- `components/ui/`: UI components (buttons, cards, inputs, etc.)
- `components/app-shared/`: Shared components for apps (AppCard, MaterialInput)
- `lib/`: Shared utilities
- `types/`: Shared types

## Usage

### Installation

```bash
npm install inneuro-shared-components
# or
yarn add inneuro-shared-components
```

### Importing Components

```tsx
import { Button, Card, AppCard } from 'inneuro-shared-components';

// Use components
<Button>Click Me</Button>
```

### Importing Utilities

```tsx
import { cn, formatDecimal, formatInteger } from 'inneuro-shared-components';
```

### Importing Types

```tsx
import { AppMetadata } from 'inneuro-shared-components';
```

## Development

### Setup

```bash
# Install dependencies
npm install
# or
yarn install
```

### Build

```bash
npm run build
# or
yarn build
```

### Watch Mode

```bash
npm run dev
# or
yarn dev
``` 