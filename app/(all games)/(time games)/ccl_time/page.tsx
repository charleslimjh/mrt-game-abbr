"use client";

import QuizTime from "@/components/quizTime";
import { questionBank } from "../../cclQB";

export default function Page() {
  return <QuizTime questionBank={questionBank}></QuizTime>;
}
