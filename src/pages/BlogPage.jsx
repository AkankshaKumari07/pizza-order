// src/components/BlogPage.js
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Best Recipes for Summer",
    date: "August 20, 2024",
    excerpt:
      "Discover delicious and refreshing recipes perfect for the summer season. From cool salads to refreshing beverages...",
    image:
      "https://www.365daysofbakingandmore.com/wp-content/uploads/2024/07/25SummersBestRecipes-BlogGraphic.001-1-680x510.png",
    link: "https://www.bbcgoodfood.com/recipes/collection/summer-recipes", // Manually set link
  },
  {
    id: 2,
    title: "5 Tips for Healthy Eating",
    date: "August 15, 2024",
    excerpt:
      "Learn practical tips for maintaining a healthy diet. Incorporate these strategies into your daily routine for better well-being...",
    image:
      "https://youaligned.com/wp-content/uploads/2022/05/7-healthy-food-blogs-feature.jpg",
    link: "https://healthyrecipesblogs.com/", // Manually set link
  },
  {
    id: 3,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://odishabytes.com/wp-content/uploads/2022/12/Indian-cuisine-5th-best.jpg",
    link: "https://iamafoodblog.com/", // Manually set link
  },
  {
    id: 4,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
    link: "https://iamafoodblog.com/", // Manually set link
  },
  {
    id: 5,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3237%2Ftrend20211029112313.jpg",
    link: "https://iamafoodblog.com/", // Manually set link
  },
  {
    id: 6,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://blog.swiggy.com/wp-content/uploads/2024/03/Phannu-1024x538.png",
    link: "https://iamafoodblog.com/", // Manually set link
  },
  {
    id: 7,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://henpicked.net/wp-content/uploads/2019/03/iStock-618201406.jpg",
    link: "https://iamafoodblog.com/", // Manually set link
  },
  {
    id: 8,
    title: "Exploring Local Food Markets",
    date: "August 10, 2024",
    excerpt:
      "A guide to exploring local food markets and discovering fresh, high-quality ingredients. Find out where to go and what to look for...",
    image:
      "https://veronikasadventure.com/wp-content/uploads/2024/02/jakarta-highlight-and-indonesian-cuisine.jpg",
    link: "https://iamafoodblog.com/", // Manually set link
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platter Palooza Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full lg:h-[500px] lg:object-fill rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href={post.link} // Manually set link
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
