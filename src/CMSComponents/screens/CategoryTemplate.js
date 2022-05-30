import HomeBanner from '@enouvo/uikit/src/banners/HomeBanner';

export const CategoryTemplateContents = {
  title: 'Category',
  type: 'page',
  openGraph: {
    url: '/category',
    title: 'Category',
    description: 'Category bla bla',
    thumbnail: '/static/images/intro-banner.jpg',
  },
  content: {
    template: 'category',
    items: [
      {
        componentType: 'HomeBanner',
        ...HomeBanner.defaultProps,
      },
    ],
  },
};
