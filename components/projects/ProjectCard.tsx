import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "case-study";
};

export function ProjectCard({
  project,
  variant = "compact"
}: ProjectCardProps) {
  const caseStudy = variant === "case-study";

  return (
    <ContentCard
      className={cn(
        "overflow-hidden p-0",
        caseStudy && "grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
      )}
    >
      <div className="relative min-h-72 overflow-hidden bg-[linear-gradient(135deg,rgba(12,31,23,0.98),rgba(37,79,57,0.78))]">
        <Image
          alt={project.title}
          className="h-full w-full object-cover opacity-92 transition duration-700 group-hover:scale-[1.035]"
          fill
          sizes={caseStudy ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          src={project.image}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(8,22,17,0.54))]" />
      </div>

      <div className="flex flex-col justify-between p-7 sm:p-9">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.status}</Badge>
            <span className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
              Proof of execution
            </span>
          </div>
          <h3 className="mt-5 font-serif text-[2.05rem] leading-[1.02] text-foreground sm:text-[2.45rem]">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-stoneText">
            {project.summary}
          </p>

          {caseStudy ? (
            <div className="mt-8 grid gap-6">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-stoneText/[0.64]">
                  Problem
                </p>
                <p className="mt-2 text-base leading-8 text-stoneText">{project.problem}</p>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-stoneText/[0.64]">
                  Action
                </p>
                <p className="mt-2 text-base leading-8 text-stoneText">{project.action}</p>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-stoneText/[0.64]">
                  Outcome
                </p>
                <p className="mt-2 text-base leading-8 text-stoneText">{project.outcome}</p>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-[1.7rem] border border-white/65 bg-[linear-gradient(180deg,rgba(249,251,248,0.78),rgba(231,238,232,0.78))] px-5 py-5">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-stoneText/[0.64]">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-7 text-stoneText">{project.impact}</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-stoneText/[0.78]">
            {caseStudy ? project.impact : project.outcome}
          </p>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent-ink))] transition hover:gap-3"
            href="/projects"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </ContentCard>
  );
}
