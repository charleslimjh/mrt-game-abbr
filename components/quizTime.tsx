"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { toast } from "react-toastify";

import QuizQuestion from "./quiz-question";
import StatusTime from "./statusTime";
import GameOverModal from "./game-over-modal";
import Timer from "./timer";

export default function QuizTime(props: any) {
  const [question, setQuestion] = useState("");
  const [answer, setAns] = useState("");
  const [score, setScore] = useState(0);
  const [skips, setSkips] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(90);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function skipQuestionHandler() {
    setSkips(skips + 1);
    setTimeLeft(timeLeft - 5);
    setFeedback("wrong");
    setTimeout(() => {
      setFeedback("");
    }, 500);
    toast(`${question} represents ${answer} station.`);
  }

  function inputChangeHandler(s: string) {
    setInput(s);
  }

  function replayHandler() {
    setScore(0);
    setSkips(0);
    setTimeLeft(90);
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
  }, [score, skips]);

  // checks if the new input answer is correct or not
  useEffect(() => {
    const a = input.toUpperCase();
    const b = answer.toUpperCase();

    if (a != "" && a === b) {
      setScore((prevScore) => prevScore + 100);
      setFeedback("correct");
      setTimeout(() => {
        setFeedback("");
      }, 500);
    }
  }, [input]);

  // trigger check to open modal
  useEffect(() => {
    if (timeLeft <= 0) {
      toast(`${question} represents ${answer} station.`);
      onOpen();
    }
  }, [timeLeft]);

  return (
    <div className="space-y-2">
      <GameOverModal
        score={score}
        skips={skips}
        isSkips={true}
        callback={replayHandler}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />

      <div>
        <StatusTime
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
          classNames={{
            base: "pb-2",
            inputWrapper:
              feedback === "correct"
                ? "animate-pulse-bg from-default to-green-400"
                : feedback === "wrong"
                ? "animate-pulse-bg from-default to-red-400"
                : "",
          }}
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
