const root = process.env.NEXT_PUBLIC_DOMAIN;

export const API = {
  root,
  topPage: {
    find: root + "/api/top-page/find",
    alias: root + "/api/top-page/byAlias/",
  },
  product: {
    find: root + "/api/product/find",
  },
  review: {
    createDemo: root + "/api/review/create-demo",
  },
};
