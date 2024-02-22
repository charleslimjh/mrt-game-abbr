"use client";

import QuizTime from "@/components/quizTime";
import { questionBank } from "../../allLinesQB";

export default function Page() {
  return <QuizTime questionBank={questionBank}></QuizTime>;
}
