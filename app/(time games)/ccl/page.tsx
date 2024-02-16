"use client";

import Quiz from "@/components/quiz";
import { questionBank } from "./cclQB";

export default function Page() {
  return <Quiz questionBank={questionBank}></Quiz>;
}
