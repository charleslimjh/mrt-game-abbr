"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";

import QuizQuestion from "./quiz-question";
import StatusLives from "./statusLives";
import GameOverModal from "./game-over-modal";

export default function QuizLives(props: any) {
  const [question, setQuestion] = useState("");
  const [answer, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [livesLeft, setLivesLeft] = useState(3);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function skipQuestionHandler() {
    setLivesLeft(livesLeft - 1);
    toast(`${question} represents ${answer} station.`);
  }

  function inputChangeHandler(s: string) {
    setInput(s);
  }

  function replayHandler() {
    setScore(0);
    setLivesLeft(3);
  }

  // generates question with a change in score or skip count
  useEffect(() => {
    if (input != "") {
      setInput("");
    }
    const tmp =
      props.questionBank.questions[
        Math.floor(Math.random() * props.questionBank.questions.length)
      ];
    setQuestion(tmp.abbr);
    setAns(tmp.station);
  }, [score, livesLeft]);

  // checks if the new input answer is correct or not
  useEffect(() => {
    const a = input.toUpperCase();
    const b = answer.toUpperCase();

    if (a != "" && a === b) {
      setScore(score + 100);
    }
  }, [input]);

  // trigger check to open modal
  useEffect(() => {
    if (livesLeft <= 0) {
      toast(`${question} represents ${answer} station.`);
      onOpen();
    }
  }, [livesLeft]);

  return (
    <div className="space-y-2">
      <GameOverModal
        score={score}
        isLives={true}
        callback={replayHandler}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <div>
        <StatusLives score={score} livesLeft={livesLeft} />
      </div>

      <div>
        <QuizQuestion question={question} />
      </div>

      <div>
        <Input
          value={input}
          isDisabled={livesLeft <= 0}
          placeholder="Input answer"
          onChange={(e) => inputChangeHandler(e.target.value)}
        ></Input>
      </div>

      <div>
        <Button
          isDisabled={livesLeft <= 0}
          onPress={(e) => skipQuestionHandler()}
        >
          Skip Question
        </Button>
      </div>
    </div>
  );
}
