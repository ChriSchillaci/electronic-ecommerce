import CarouselList from "@/components/CarouselList";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";
import { Suspense } from "react";

import "../styles/page.scss";

export default async function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <CarouselList />
    </Suspense>
  );
}
