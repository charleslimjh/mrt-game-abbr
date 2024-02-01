"use client";

import { questionBank } from "./questionBank";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Quiz() {
  const [currAbbr, setCurrAbbr] = useState("");
  const [answer, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [skips, setSkips] = useState(0);
  const [input, setInput] = useState("");

  function generateQuestion() {
    if (input != "") {
      setInput("");
    }
    const tmp =
      questionBank.questions[
        Math.floor(Math.random() * questionBank.questions.length)
      ];
    setCurrAbbr(tmp.abbr);
    setAns(tmp.station);
  }

  function skipQuestion() {
    setSkips(skips + 1);
    generateQuestion();
  }

  function inputChangeHandler(s: string) {
    console.log(s);
    setInput(s);
    if (s.toUpperCase() == answer.toUpperCase()) {
      console.log("Correct answer found!");
      correctAnswer();
    }
  }

  function correctAnswer() {
    setScore(score + 100);
    alert("Correct! to the next question!");
    generateQuestion();
  }

  if (currAbbr == "") {
    generateQuestion();
  }

  return (
    <div className="space-y-2">
      <div>
        Current Score: {score}
        <br />
        Number Skips: {skips}
      </div>

      <div>What is the station represented by the abbreviation {currAbbr}?</div>

      <div>
        <Input
          value={input}
          placeholder="Input answer"
          onChange={(e) => inputChangeHandler(e.target.value)}
        ></Input>
      </div>

      <Button onPress={(e) => skipQuestion()}>Skip Question</Button>
    </div>
  );
}
