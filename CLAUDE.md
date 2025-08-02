# Speaker Search Project Documentation

## Project Overview

Speaker Search is a high-performance web application that enables event planners to find and book the perfect speaker. Built with Next.js 14, TypeScript, and Tailwind CSS, the frontend connects to an existing speaker database API to provide a seamless, unbiased search experience.

## Business Context

- **Target Users**: Event planners seeking keynote speakers
- **Key Differentiator**: Unbiased, comprehensive speaker database (not limited to exclusive rosters)
- **Core Innovation**: Natural language search - "search like a human being"
- **Goal**: Democratize speaker booking with transparency and comprehensive data

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: JavaScript
- **Styling**: Tailwind CSS with custom theme
- **Deployment**: AWS Kubernetes
- **Performance**: Core Web Vitals optimized for high traffic

## Design System

### Brand Colors

```css
--purple-primary: #7e3cff;
--black: #000000;
--dark-bg-primary: #10091f;
--dark-bg-secondary: #1a0e31;
--light-gray: #fbfbfb;
--white: #ffffff;
```

### Typography

- **Headings (H1)**: Poppins - Modern, approachable
- **Subheadings (H2)**: Open Sans Bold - Clear hierarchy
- **Body Text (H3)**: Open Sans Regular - Excellent readability

### Visual Style

- Dark theme with purple accents
- Clean, minimalist design
- Card-based layouts with subtle borders
- Generous white space
- Professional photography for speaker images

## Architecture Principles

### Performance First

- Static generation where possible
- Aggressive caching strategies
- Optimized images with Next.js Image
- Code splitting and lazy loading
- Target: Perfect Core Web Vitals scores

### Component Structure

```
/components
  /ui          # Base UI components (buttons, inputs, cards)
  /features    # Feature-specific components (speaker-card, search-bar)
  /layouts     # Page layouts and navigation
```

### API Integration Pattern

```javascript
// services/speakers.js
// Example speaker data structure
const speakerExample = {
	id: 'speaker-123',
	name: 'Dr. Sarah Chen',
	bio: 'AI expert and futurist...',
	image: '/speakers/sarah-chen.jpg',
	fee: {
		min: 20000,
		max: 30000,
	},
	topics: ['AI', 'Technology', 'Leadership'],
	rating: 4.9,
	eventCount: 150,
};

// Centralized API client with error handling
// Implement caching at the service layer
// Use React Query or SWR for data fetching
```

## Key Features

### 1. Homepage

- Hero search bar with natural language input
- Trending speakers carousel
- Topic category grid
- Budget-based recommendations widget
- Educational resources section

### 2. Search & Results

- Real-time search with debouncing
- Advanced filters (budget, topics, location, ratings)
- Pagination with smooth transitions
- Sort options (relevance, price, rating)
- Loading skeletons for perceived performance

### 3. Speaker Profiles

- Detailed bio and credentials
- Photo/video gallery
- Client testimonials
- Booking CTA
- Related speakers

### 4. Budget Tool

- Interactive slider
- Dynamic speaker recommendations
- "Who can I afford?" feature

## Development Guidelines

### Code Style

- Use modern JavaScript (ES6+)
- Functional components with hooks
- Consistent naming: PascalCase for components, camelCase for functions
- Modular CSS with Tailwind @apply for repeated patterns
- PropTypes for component prop validation

### Performance Checklist

- [ ] Images: Use next/image with proper sizing
- [ ] Fonts: Preload critical fonts
- [ ] Bundle: Keep JavaScript bundle < 200KB
- [ ] LCP: Target < 2.5s
- [ ] FID: Target < 100ms
- [ ] CLS: Target < 0.1

### Testing Strategy

- Unit tests for utility functions
- Component testing with React Testing Library
- Performance testing with Lighthouse CI
- Real user monitoring in production

## API Endpoints (External)

```
GET /api/speakers                 # List with pagination
GET /api/speakers/:id            # Single speaker details
GET /api/speakers/search         # Search with filters
GET /api/speakers/trending       # Featured speakers
GET /api/topics                  # Available topics
```

## Deployment

- Build optimization with `next build`
- Docker containerization
- Kubernetes deployment on AWS
- CDN for static assets
- Environment-based configuration

## Future Considerations

- Progressive Web App capabilities
- Internationalization support
- Advanced analytics integration
- A/B testing framework
- Speaker availability calendar

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint check
npm run format       # Prettier formatting
npm run test         # Run tests
```

## Important Notes

- Frontend-only implementation (no backend logic)
- All speaker data comes from existing API
- No user authentication required
- Performance is critical due to high traffic
- Maintain design consistency with brand guide
