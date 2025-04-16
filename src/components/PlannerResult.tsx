"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Spinner from "@/components/Spinner";
import styles from "@/styles/PlannerResult.module.css";

export default function PlannerResult() {
  const { plan, loading } = useSelector((state: RootState) => state.planner);

  return (
    <div className={styles.resultContainer}>
      {loading && <Spinner />}
      {!loading && plan && !plan.startsWith("Failed to") && (
        <div className={styles.resultBox}>
          <h2 className={styles.resultTitle}>Your Optimized Day:</h2>
          <p>{plan}</p>
        </div>
      )}
      {!loading && plan.startsWith("Failed to") && (
        <div className={styles.errorBox}>{plan}</div>
      )}
    </div>
  );
}