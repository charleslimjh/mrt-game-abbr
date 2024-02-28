"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../ewlQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
