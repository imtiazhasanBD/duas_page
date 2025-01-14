"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Dua's%20Importance?cat=1");
  }, [router]);

  return null; // Render nothing while redirecting
}
