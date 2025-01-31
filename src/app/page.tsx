import type { Metadata } from "next";
import CarouselList from "@/components/CarouselList";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";
import { Suspense } from "react";
import "../styles/page.scss";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

export default async function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <CarouselList />
    </Suspense>
  );
}
