import React from 'react';
import logo from './assets/gitlab.png';

const features = [
  {
    title: 'Built-in CI/CD',
    description: 'Automate your pipelines and deliver code faster with built-in Continuous Integration.',
  },
  {
    title: 'Secure DevOps',
    description: 'Security scanning integrated directly into your development workflow.',
  },
  {
    title: 'Project Management',
    description: 'Plan, track, and collaborate in the same space where you build your code.',
  },
];

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow transition hover:shadow-lg">
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="GitLab Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-purple-600">GitLab</h1>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <a href="#" className="hover:text-purple-600 transition">Features</a>
          <a href="#" className="hover:text-purple-600 transition">Pricing</a>
          <a href="#" className="hover:text-purple-600 transition">Docs</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Manage Your Code, CI/CD, and DevOps in One Place
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          GitLab is a complete DevOps platform, delivered as a single application.
          From planning to production, bring teams together.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Why GitLab?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 bg-gray-50">
        © {new Date().getFullYear()} GitLab. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
