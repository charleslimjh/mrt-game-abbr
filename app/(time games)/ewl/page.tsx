"use client";

import Quiz from "@/components/quiz";
import { questionBank } from "./ewlQB";

export default function Page() {
  return <Quiz questionBank={questionBank}></Quiz>;
}
