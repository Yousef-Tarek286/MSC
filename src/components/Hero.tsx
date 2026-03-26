export default function Hero() {
  return (
    <section className="bg-blue-50 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
          Explore the Beauty of Logic
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-10">
          From unraveling complex data structures to solving differential equations, join a community dedicated to exploring the fascinating intersections of computer science and mathematics.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          Join the Society
        </button>
      </div>
    </section>
  );
}