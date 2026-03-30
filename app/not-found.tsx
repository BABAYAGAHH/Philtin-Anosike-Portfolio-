import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Not Found"
        title="That page is not available."
        description="The route may have changed, or the page may not exist yet. The main sections of the platform are still available below."
      />
      <section className="section-space-sm">
        <Container className="flex flex-col gap-4 sm:flex-row">
          <PrimaryButton href="/">Return home</PrimaryButton>
          <SecondaryButton href="/ideas">Explore ideas</SecondaryButton>
        </Container>
      </section>
    </>
  );
}

