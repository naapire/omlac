import React from "react";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Omlac made it so easy to order products from China. The process was smooth and my goods arrived in perfect condition.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Nana Kwame",
    text: "Excellent service! Fast delivery, great packaging, and the quality of the items exceeded my expectations.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Mavis Kuusori",
    text: "I was able to send a custom order outside the listed products and they delivered just as promised. Highly reliable!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Vida KoKoi",
    text: "I've used several importers, but Omlac is by far the most efficient. The team is responsive and trustworthy.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TestimonialData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-full w-20 h-20 mx-auto"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3 text-center">
                    <p className="text-xs text-gray-500 leading-relaxed">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
