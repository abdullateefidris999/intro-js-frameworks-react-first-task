import React from 'react';
import ProfileCard from './components/ProfileCard';
import ismailImg from './assets/img/ismail.jpeg';
import test2Img from './assets/img/test2 (2).jpg';
import test3Img from './assets/img/img.jpg';
import './App.css';

const App = () => {
  return (
    <div className="max-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard
          name="Ismail Muhammad"
          image={ismailImg}
          description="A passionate software developer with over 5 years of experience in building innovative web applications."
        />
        <ProfileCard
          name="Fatima Aliyu"
          image={test2Img}
          description="An experienced data analyst specializing in predictive modeling and data visualization."
        />
        <ProfileCard
          name="Amina Umar"
          image={test3Img}
          description="A creative UI/UX designer with a knack for crafting user-friendly and visually appealing interfaces."
        />
      </div>
    </div>
  );
};

export default App;