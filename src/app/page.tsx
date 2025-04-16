"use client";

import PlannerForm from "@/components/PlannerForm";
import PlannerResult from "@/components/PlannerResult";
import { Provider } from "react-redux";
import store from "@/store";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.container}>
        <h1 className={styles.title}>What's Your Plan Today?</h1>
        <PlannerForm />
        <PlannerResult />
      </main>
    </Provider>
  );
}