import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay02M2EtZHM1NTQ2NDUzNTM0NTM0Nl8yLmpwZw.jpg"
          alt="food"
          className="w-full h-96 object-cover opacity-30"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400 text-justify lg:mr-12">
              Discover a world of flavors right at your fingertips. At
              FoodieDelight, we’re passionate about bringing you the best in
              food and dining experiences. Whether you're a food enthusiast
              looking for new recipes, a busy professional seeking quick meal
              ideas, or someone who loves exploring local eateries, our app has
              something for everyone.Extensive Recipe Library: Access thousands
              of recipes from around the world, complete with step-by-step
              instructions, photos, and cooking tips. From quick weeknight
              dinners to elaborate holiday feasts, we’ve got you covered. Smart
              Meal Planner: Plan your meals for the week with ease. Our meal
              planner helps you organize your recipes, create grocery lists, and
              manage your cooking schedule, saving you time and reducing food
              waste. Chef-Approved Techniques: Learn from professional chefs
              through exclusive video tutorials and cooking classes. Enhance
              your skills with expert advice and insider tips.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://png.pngtree.com/background/20231030/original/pngtree-food-menu-picture-image_5794690.jpg"
              alt="food"
              className="w-full h-64 object-cover mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20230801/pngtree-a-tray-of-food-image_12960832.jpg"
              alt="food"
              className="w-full h-64 object-cover mt-4 md:mt-0"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 mt-4 md:mt-0 lg:ml-12">
              About Us
            </h2>
            <p className="text-gray-400 text-justify lg:ml-12">
              Welcome to GourmetGuide, your ultimate companion for all things
              food! Whether you're an aspiring chef, a food lover, or someone
              who simply enjoys a good meal, our app is designed to elevate your
              dining experience and inspire your culinary creativity.Extensive
              Recipe Library: Access thousands of recipes from around the world,
              complete with step-by-step instructions, photos, and cooking tips.
              From quick weeknight dinners to elaborate holiday feasts, we’ve
              got you covered. Smart Meal Planner: Plan your meals for the week
              with ease. Our meal planner helps you organize your recipes,
              create grocery lists, and manage your cooking schedule, saving you
              time and reducing food waste. Chef-Approved Techniques: Learn from
              professional chefs through exclusive video tutorials and cooking
              classes. Enhance your skills with expert advice and insider tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
