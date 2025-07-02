import React from "react";


const Home: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Cool background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse" />

      <div className="relative z-10 text-center max-w-2xl mx-auto p-8">
        <img src={"/main_logo.jpg"} alt="Main Logo" className="mx-auto mb-6 h-24 w-24 rounded-full shadow-lg border-4 border-white bg-white animate-bounce" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg animate-fade-in">
          Welcome to <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Dynamic Teamwork</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in delay-100">
          Empowering your business with innovative teamwork solutions.
        </p>
        <a href="#services" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all text-lg animate-fade-in delay-200">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Home;
