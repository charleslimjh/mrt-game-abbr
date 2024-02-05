"use client";

import { questionBank } from "./questionBank";
import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import QuizQuestion from "./quiz-question";
import Status from "./status";
import Timer from "./timer";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [answer, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [skips, setSkips] = useState(0);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(90);

  function skipQuestionHandler() {
    setSkips(skips + 1);
    setTimeLeft(timeLeft - 10);
  }

  function inputChangeHandler(s: string) {
    setInput(s);
  }

  // generates question with a change in score or skip count
  useEffect(() => {
    if (input != "") {
      setInput("");
    }
    const tmp =
      questionBank.questions[
        Math.floor(Math.random() * questionBank.questions.length)
      ];
    setQuestion(tmp.abbr);
    setAns(tmp.station);
  }, [score, skips]);

  // checks if the new input answer is correct or not
  useEffect(() => {
    const a = input.toUpperCase();
    const b = answer.toUpperCase();

    if (a != "" && a === b) {
      setScore(score + 100);
    }
  }, [input]);

  //

  return (
    <div className="space-y-2">
      <div>
        <Status
          score={score}
          skips={skips}
          timeLeft={timeLeft}
          timer={<Timer time={timeLeft} callback={setTimeLeft} />}
        />
      </div>

      <div>
        <QuizQuestion question={question} />
      </div>

      <div>
        <Input
          value={input}
          isDisabled={timeLeft <= 0}
          placeholder="Input answer"
          onChange={(e) => inputChangeHandler(e.target.value)}
        ></Input>
      </div>

      <div>
        <Button
          isDisabled={timeLeft <= 0}
          onPress={(e) => skipQuestionHandler()}
        >
          Skip Question
        </Button>
      </div>
    </div>
  );
}
