"use client";

import Quiz from "@/components/quiz";
import { questionBank } from "./telQB";

export default function Page() {
  return <Quiz questionBank={questionBank}></Quiz>;
}
