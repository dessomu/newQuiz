import React, { useState, useContext } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard/QuizCard";
import UseContext from "./context/UseContext";

const QuizApp = () => {
  const {topic, setTopic} = useContext(UseContext);
  const [numQuestions, setNumQuestions] = useState(5);
  const { quizStarted, setQuizStarted } = useContext(UseContext);

  const handleStartQuiz = () => {
    if (topic.trim()) {
      setQuizStarted(true);
    } else {
      alert("Please enter a topic first!");
    }
  };

  return (
    <>
      {quizStarted ? (
        <div className="quiz-container">
          <div className="floating-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="orb orb-4"></div>
            <div className="orb orb-5"></div>
            <div className="orb orb-6"></div>
          </div>
          <QuizCard />
        </div>
      ) : (
        <div className="quiz-container">
          <div className="floating-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="orb orb-4"></div>
            <div className="orb orb-5"></div>
            <div className="orb orb-6"></div>
          </div>
          <div className="quiz-card">
            <div className="header-section">
              <div className="icon-wrapper">
                <div className="brain-icon">🧠</div>
              </div>
              <h1 className="main-title">Hey Geek</h1>
              <p className="subtitle">
                Let's challange your curious mind.
              </p>
            </div>

            <div className="form-section">
              <div className="input-group">
                <label htmlFor="topic" className="input-label">
                  Topic: {""}
                </label>
                <input
                  id="topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Diabetes, Disney, or Democracy - it's your call!"
                  className="topic-input"
                />
              </div>
{/* 
              <div className="input-group">
                <label htmlFor="questions" className="input-label">
                  Number of Questions:{" "}
                  <span className="question-count">{numQuestions}</span>
                </label>
                <input
                  id="questions"
                  type="range"
                  min="3"
                  max="20"
                  value={numQuestions}
                  onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>3</span>
                  <span>20</span>
                </div>
              </div> */}

              <button onClick={handleStartQuiz} className="start-button">
                <span className="button-icon">⚡</span>
                Let's Geek Out!
              </button>
            </div>

            <div className="features-section">
              <p className="features-label">Geeky Goodness</p>
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <span>Context-Aware</span>
              </div>
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <span>AI Powered</span>
              </div>
              <div className="feature">
                <div className="feature-icon">📊</div>
                <span>Insightful</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizApp;
