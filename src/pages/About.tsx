import React from 'react';

const About = React.memo(() => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Theme App</h2>
      <p className="text-md mb-4">
        At <strong>Theme App</strong>, we specialize in delivering seamless, real-time theme management solutions for web applications. 
        Founded in 2022, our mission is to empower developers and teams to create beautiful, accessible, and customizable user experiences across any device or platform.
      </p>
      <p className="text-md mb-4">
        Our core product enables effortless multi-theme switching with deep integration into modern frontend stacks such as 
        <strong> React</strong>, <strong>Redux</strong>, and <strong>Tailwind CSS</strong>. Whether you're building a SaaS dashboard, e-commerce storefront, 
        or personal portfolio — Theme App offers a lightweight yet powerful way to implement dynamic theming without the bloat.
      </p>
      <p className="text-md mb-4">
        We believe that theming is more than just colors and fonts — it's about personalization, accessibility, and performance. 
        That’s why we focus on clean architecture, responsive design, and persistent state management using tools like <strong>localStorage</strong> to 
        ensure users’ preferences are always respected.
      </p>
      <p className="text-md mb-4">
        Trusted by developers and teams worldwide, Theme App continues to evolve as a flexible theming solution built for scalability, maintainability, and rapid development.
      </p>
      <p className="text-md">
        Learn more about our work, or get in touch to see how we can help power theming in your next project.
      </p>
    </div>
  );
});

export default About;
