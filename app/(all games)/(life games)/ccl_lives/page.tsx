"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../cclQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
