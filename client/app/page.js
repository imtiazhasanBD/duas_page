"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Dua's%20Importance?cat=1");
  }, [router]);

  return (
    <SkeletonLoader/>
  );
}
