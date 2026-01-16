import React from "react";

const reviews = [
  {
    text: `"Good portion size, good food, and nice atmosphere. I love that this place served mocktails and made it just as fancy as regular cocktails. The dumplings look handmade which was excellent, and the duck was crispy and nice."`,
    img: "Joelle Carr.png",
    name: "Joelle Carr",
  },
  {
    text: `"Amazing food. Great atmosphere. Really friendly staff, they really cant do enough. We went as a party of 7, and they really accommodated us. Decent wine selections & the food is delicious."`,
    img: "sakalabudhi123.png",
    name: "sakalabudhi123",
  },
  {
    text: `"Probably the best dine in Chinese around. Some work colleagues are from China and always want to come back here because of how nice and authentic the food is. I would always recommend to book a table."`,
    img: "Chris Tilson.png",
    name: "Chris Tilson",
  },
  {
    text: `"Really fast service my favourite Chinese place is definitely here! Food was amazing 10 out of 10 very stuffed after. Our favourites were the teriyaki chicken and salt and chilli chips."`,
    img: "Jasmine Adams.png",
    name: "Jasmine Adams",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-sm tracking-[0.3em] text-gray-400">REVIEWS</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mt-3">
          OUR CUSTOMERS LOVE US
        </h3>
      </div>

      {/* Review Grid (2x2 layout like image) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-gray-700">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-10 border-b border-gray-700 md:border-r last:border-r-0
                       md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(4)]:border-r-0
                       flex flex-col gap-6"
          >
            <p className="text-gray-300 leading-relaxed">{review.text}</p>

            <div className="flex items-center gap-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-gray-200 text-sm">{review.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Read More */}
      <div className="text-center mt-16">
        <button className="text-gray-300 text-sm tracking-wide hover:text-white transition">
          READ MORE REVIEWS
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
