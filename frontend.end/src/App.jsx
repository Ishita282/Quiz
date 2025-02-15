import React from "react";
import Header from "./components/header";
import mainSection from "./components/mainSection";
import quizLists from "./components/quizLists";
import shareSection from "./components/shareSection";
import footer from "./components/footer";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-indigo-800 main-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Disney Quiz Game!
      </h1>
      <Header>
        <mainSection />
        <quizLists />
        <shareSection />
        <footer />
      </Header>
    </div>
  );
};

export default App;
