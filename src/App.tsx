import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const activities = [
    {
      title: "Algorithm Workshops",
      description: "Weekly sessions covering C++, Python, and core data structures to prep for technical interviews.",
      icon: "💻"
    },
    {
      title: "Applied Mathematics",
      description: "Collaborative study groups focusing on linear algebra, probability, and differential equations.",
      icon: "📐"
    },
    {
      title: "Hackathons",
      description: "Team up with peers to build exciting projects and compete in weekend-long coding challenges.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <Hero />
      
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">What We Do</h2>
        
        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;