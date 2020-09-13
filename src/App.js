import React, { useState } from "react";
import { questions } from "./questions";
import TriviaCard from "./components/Trivia/TriviaCard";
import Score from "./components/Trivia/Score";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

export default function App() {
  const [cards, setCards] = useState(questions);
  const [currentScore, setScore] = useState(0);

  function getScore(score) {
    setScore(score);
  }

  function deleteCard(id) {
    setCards((prevCards) => {
      return prevCards.filter((item) => {
        if (item.id !== id) {
          return item;
        }
        return null;
      });
    });
  }

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Score cards={cards} currentScore={currentScore} />
      <main className="grid-container">
        <div className="card-items" />
        {cards.map((question) => (
          <TriviaCard
            key={question.id}
            id={question.id}
            question={question.question}
            src={question.src}
            alt={question.alt}
            ans1={question.ans1}
            ans2={question.ans2}
            ans3={question.ans3}
            ans4={question.ans4}
            correctAns={question.correctAns}
            deleteCard={deleteCard}
            getScore={getScore}
          />
        ))}
      </main>

      <Footer />
    </React.Fragment>
  );
}
