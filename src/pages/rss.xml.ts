import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = (await getCollection("articles")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: "Revue Cinq",
    description:
      "Magazine lifestyle français — Mode, Beauté, Lifestyle et Technologie. Une fenêtre française sur l'art de vivre contemporain.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.date),
      description: article.data.excerpt || article.data.title,
      link: `/${article.data.category}/${article.slug}/`,
      categories: [article.data.category],
      author: "Revue Cinq",
    })),
    customData: `<language>fr-FR</language>`,
  });
}