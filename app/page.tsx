"use client";

import { db } from "@/lib/firebase";

export default function Home() {
  console.log("Firestore Connected:", db);

  return (
    <main className="p-10">
      <h1>Firebase Connected Successfully</h1>
    </main>
  );
}