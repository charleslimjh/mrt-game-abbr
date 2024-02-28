"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";

import QuizQuestion from "./quiz-question";
import StatusLives from "./statusLives";
import GameOverModal from "./game-over-modal";

export default function QuizLives(props: {
  questionBank: { questions: Array<{ station: string; abbr: string }> };
}) {
  const [question, setQuestion] = useState("");
  const [answer, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [livesLeft, setLivesLeft] = useState(3);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [qb, setQb] = useState(props.questionBank.questions);
  const totalScore = props.questionBank.questions.length;

  function skipQuestionHandler() {
    const tmp = qb.shift();
    if (tmp) {
      qb.push(tmp);
      setQb(qb);
    }
    generateQuestion();
  }

  function inputChangeHandler(s: string) {
    setInput(s);
  }

  function replayHandler() {
    setScore(0);
    setLivesLeft(3);
  }

  // helps generate a new question
  function generateQuestion() {
    var tmp = qb[0];
    setQuestion(tmp.abbr);
    setAns(tmp.station);
  }

  // generates question with a change in score
  useEffect(() => {
    if (input != "") {
      setInput("");
    }

    if (score < totalScore) {
      generateQuestion();
    }
  }, [score]);

  // checks if the new input answer is correct or not
  function checkAnswer(e: FormEvent) {
    e.preventDefault();
    const a = input.toUpperCase();
    const b = answer.toUpperCase();

    if (a != "" && a === b) {
      setQb(qb.filter((x) => x.abbr != question && x.abbr != answer));
      setScore(score + 1);
    } else {
      setLivesLeft(livesLeft - 1);
      setInput("");
    }
  }

  // trigger check to open modal
  useEffect(() => {
    if (livesLeft <= 0 || score == totalScore) {
      onOpen();
    }
  }, [livesLeft, score]);

  return (
    <div className="space-y-2">
      <GameOverModal
        score={score}
        total={totalScore}
        isLives={true}
        callback={replayHandler}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <div>
        <StatusLives score={score} total={totalScore} livesLeft={livesLeft} />
      </div>

      <div>
        <QuizQuestion question={question} />
      </div>

      <div>
        <form onSubmit={(e) => checkAnswer(e)}>
          <Input
            value={input}
            isDisabled={livesLeft <= 0 || score == totalScore}
            placeholder="Input answer"
            onChange={(e) => inputChangeHandler(e.target.value)}
            className="pb-2"
            autoFocus
          ></Input>
        </form>
      </div>

      <div>
        <Button
          isDisabled={livesLeft <= 0 || score == totalScore}
          onPress={(e) => skipQuestionHandler()}
        >
          Skip Question
        </Button>
      </div>
    </div>
  );
}
