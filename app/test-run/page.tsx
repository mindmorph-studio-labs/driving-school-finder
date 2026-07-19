'use client';
import React, { useState } from 'react';
import { useXP } from '@/components/XPProvider';

export default function TestRunPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const { addXP } = useXP();

  React.useEffect(() => {
    setIsStudent(localStorage.getItem('userType') === 'student');
  }, []);

  const questions = [
    { q: "What does a STOP sign mean?", options: ["Slow down", "Stop only if other vehicles are present", "Come to a complete stop and proceed when safe", "Yield to pedestrians only"], answer: "Come to a complete stop and proceed when safe" },
    { q: "What does a triangular sign with a red border indicate?", options: ["Mandatory instruction", "Warning or caution", "Road closed", "Parking zone"], answer: "Warning or caution" },
    { q: "What does a circular blue sign usually represent?", options: ["Prohibited action", "Warning", "Mandatory instruction", "Roadwork ahead"], answer: "Mandatory instruction" },
    { q: "What does a yellow diamond-shaped sign indicate?", options: ["Regulatory rule", "Hazard or change in road conditions", "Parking restriction", "End of speed limit"], answer: "Hazard or change in road conditions" },
    { q: "What does a “No Entry” sign mean?", options: ["One-way road", "Road closed to all traffic", "Do not enter this road from this direction", "Only motorcycles allowed"], answer: "Do not enter this road from this direction" },
    { q: "What does a sign showing a pedestrian symbol mean?", options: ["Pedestrians prohibited", "Pedestrian crossing ahead", "School zone only", "No stopping"], answer: "Pedestrian crossing ahead" },
    { q: "What does a sign with two arrows pointing in opposite directions mean?", options: ["Dual carriageway ends", "Two-way traffic", "Road narrows", "Passing lane begins"], answer: "Two-way traffic" },
    { q: "What does a sign showing a curved arrow indicate?", options: ["U-turn allowed", "Sharp bend ahead", "Road closed", "No overtaking"], answer: "Sharp bend ahead" },
    { q: "What does a sign with a red circle and a number inside represent?", options: ["Minimum speed limit", "Recommended speed", "Maximum speed limit", "Speed limit only for trucks"], answer: "Maximum speed limit" },
    { q: "What does a sign showing a car with skid marks mean?", options: ["Road slippery when wet", "Road closed", "Vehicle testing zone", "No braking allowed"], answer: "Road slippery when wet" },
  ];

  const displayQuestions = isStudent ? questions : questions.slice(0, 3);

  const handleAnswer = (option: string) => {
    let newScore = score;
    if (option === displayQuestions[currentQuestion].answer) {
        newScore = score + 1;
        setScore(newScore);
        if (isStudent) addXP(50);
    }
    
    if (currentQuestion + 1 < displayQuestions.length) setCurrentQuestion(currentQuestion + 1);
    else {
        setFinished(true);
        if (isStudent && newScore === displayQuestions.length) addXP(500);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex items-center justify-center p-8">
      <div className="bg-[#1e1e1e] p-8 rounded-3xl w-full max-w-2xl border border-white/5">
        {!finished ? (
          <>
            <h2 className="text-xl font-bold mb-6">Question {currentQuestion + 1} of {displayQuestions.length}</h2>
            <p className="mb-8 text-lg">{displayQuestions[currentQuestion].q}</p>
            <div className="grid gap-4">
              {displayQuestions[currentQuestion].options.map(option => (
                <button key={option} onClick={() => handleAnswer(option)} className="bg-[#2a2a2a] p-4 rounded-xl text-left hover:bg-[#333]">{option}</button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Test Finished!</h2>
            <p className="text-xl mb-6">Your score: {score} / {displayQuestions.length}</p>
            {!isStudent && (
              <div className="mb-6 bg-[#f9c938] text-black p-4 rounded-xl font-bold">
                <p className="mb-2">Sign up as a student to take the full test and record XP!</p>
                <button onClick={() => {localStorage.setItem('isUserLoggedIn', 'true'); localStorage.setItem('userType', 'student'); window.location.reload();}} className="bg-black text-white px-4 py-2 rounded-lg text-sm">Sign Up Now</button>
              </div>
            )}
            <a href="/tests" className="bg-[#f9c938] text-black px-8 py-3 rounded-xl font-bold">Back to Tests</a>
          </div>
        )}
      </div>
    </div>
  );
}
