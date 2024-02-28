"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../nslQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
