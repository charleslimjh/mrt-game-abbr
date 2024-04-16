"use client";

import QuizLives from "@/components/quizLives";
import { questionBank } from "../../telQB";

export default function Page() {
  return <QuizLives questionBank={questionBank}></QuizLives>;
}
