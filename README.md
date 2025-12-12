# ATProto Science Homepage

The official website for ATProto Science - fostering an ecosystem for science on ATProto.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npx eleventy --serve
```

The site will be available at `http://localhost:8080`

### Build

```bash
npx eleventy
```

## Content Management

This site uses [Eleventy](https://www.11ty.dev/) with the [GOV.UK Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) for styling.

### Collections

The site automatically generates collection pages for:
- **Events** - `content/events/event-*.md`
- **Products** - `content/products/product-*.md`
- **News** - `content/news/news-*.md`

## Creating Events

Events are automatically collected and displayed on the `/events` page. To create a new event:

### 1. Create a new file in `content/events/`

File naming convention: `event-{shortname}.md`

Example: `content/events/event-atmosphere2026.md`

### 2. Add frontmatter

```markdown
---
layout: sub-navigation
title: 2026 March - ATmosphereConf 2026
description: Your event description for meta tags and listings
date: 2026-03-26
image:
  src: /events/images/event-atmosphere2026.jpg
  alt: Event image description
  opengraphImage: true
author:
  - name: ATproto.science
    url: '/'
tags:
  - ATproto
eleventyComputed:
  aside:
    title: Get Ticket
    content: |
      [Get Ticket](https://example.com/tickets)
---
```

### 3. Add event content

Write your event content in Markdown below the frontmatter:

```markdown
## Key Info

> [!IMPORTANT]
> 10am, March 26th–6pm, March 29th, 2026
> [Venue Name, Address](https://maps.app.goo.gl/example)

Event description and details here...

## Speakers

List speakers or use placeholder:
> [!IMPORTANT]
> Coming Soon

## Schedule

Add schedule or use placeholder:
> [!IMPORTANT]
> Coming Soon

## FAQ

<details>
<summary>Question here?</summary>

Answer here.
</details>
```

### 4. Add event images (optional)

Store event-specific images in `content/events/images/`

Example: `content/events/images/event-atmosphere2026.jpg`

### Event Sorting

Events are automatically sorted by date (most recent first) on the events index page.

### Tips

- Use the `date` field for proper sorting
- Keep filenames short and descriptive
- Use `event-` prefix for automatic collection
- Store images in `content/events/images/` for organization
- Use collapsible `<details>` sections for FAQs

## Creating Products

Coming soon...

## Creating News

Coming soon...

## Styling

Custom styles are defined in `content/assets/styles.scss` and compiled automatically by Eleventy.

The site uses GOV.UK Design System with custom brand colors:
- Brand color: `#8822aa`
- Link color: `#660088`
- Link hover: `#440066`

## Deployment

The site generates static files in the `_site` directory which can be deployed to any static hosting service.

## Contributing

For questions or contributions, reach out at [hello@atproto.science](mailto:hello@atproto.science)