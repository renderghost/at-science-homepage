export default {
  eleventyComputed: {
    permalink: (data) => {
      // Skip permalink computation for the main people listing page
      if (data.page.fileSlug === 'people') {
        return '/people/';
      }

      // Strip "people-" prefix from the fileSlug for individual person pages
      const slug = data.page.fileSlug.replace(/^people-/, '');
      return `/people/${slug}/`;
    }
  }
};
