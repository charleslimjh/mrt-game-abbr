"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../allLinesQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
