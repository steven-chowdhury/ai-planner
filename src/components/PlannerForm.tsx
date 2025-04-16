"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { generatePlan, setTasks } from "@/store/plannerSlice";
import { useState } from "react";
import styles from "@/styles/PlannerForm.module.css";

export default function PlannerForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tasks = input.split("\n").map((t) => t.trim()).filter(Boolean);
    dispatch(setTasks(tasks));
    dispatch(generatePlan(tasks));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        placeholder="Enter things you want to accomplish today (one per line)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Generate Plan
      </button>
    </form>
  );
}