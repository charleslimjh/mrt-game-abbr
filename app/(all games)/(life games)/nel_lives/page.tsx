"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../nelQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
