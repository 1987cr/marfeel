var faker = require("faker");

const makeArticles = n =>
  [...Array(n).keys()].map(() => ({
    id: faker.random.uuid(),
    title: faker.random.words(2),
    description: faker.lorem.paragraph(5),
    ...(Math.random() > 0.3 && {
      // About 25% of these generated links are broken
      thumbnail: `https://picsum.photos/500/320/?image=${faker.random.number(
        1084
      )}`
    })
  }));

module.exports = () => {
  const data = {
    config: {
      header: {
        background: "#000"
      },
      burger: {
        color: "#fff"
      },
      section: {
        size: 16,
        color: "#fff"
      },
      tabs: {
        technology: "Technology"
      }
    },
    home: {
      articles: makeArticles(10)
    },
    politics: {
      articles: makeArticles(10)
    },
    sports: {
      articles: makeArticles(10)
    },
    national: {
      articles: makeArticles(10)
    },
    technology: {
      articles: makeArticles(10)
    }
  };

  return data;
};
