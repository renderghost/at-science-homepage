export default {
  eleventyComputed: {
    permalink: (data) => {
      // Skip permalink computation for the main events listing page
      if (data.page.fileSlug === 'events') {
        return '/events/';
      }

      // Strip "event-" prefix from the fileSlug for individual event pages
      const slug = data.page.fileSlug.replace(/^event-/, '');
      return `/events/${slug}/`;
    }
  }
};
