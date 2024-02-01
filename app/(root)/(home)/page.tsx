import { Experience } from "@/components/Shared/Filter/Experience";
import { Filter } from "@/components/Shared/Filter/Filter";
import { JobTitle } from "@/components/Shared/Filter/JobTitle";
import { SortBy } from "@/components/Shared/Filter/SortBy";
export default function Home() {
  return (
    <main>
      <section className="flex justify-evenly items-center ">
        <Experience />
        <JobTitle />
        <Filter />
        <SortBy />
      </section>
      <section>B</section>
    </main>
  );
}
