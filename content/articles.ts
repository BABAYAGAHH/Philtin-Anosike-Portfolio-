export const articleCategories = [
  "Leadership",
  "Business",
  "Society & Governance",
  "Personal Growth"
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export type ArticleBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "quote"; content: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  featuredQuote: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "leadership-without-accountability-is-fragile",
    title: "Leadership Without Accountability Is Fragile",
    category: "Leadership",
    excerpt:
      "A leader's authority is not defined by position, but by their ability to consistently hold themselves accountable.",
    featuredQuote:
      "Authority can attract attention, but only accountability sustains trust.",
    readTime: "5 min read",
    publishDate: "2026-01-14",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        content:
          "Leadership often becomes confused with visibility. A title can place someone at the center of attention, but it cannot guarantee respect. Respect is earned through consistency, and consistency is difficult to sustain when accountability is absent."
      },
      {
        type: "paragraph",
        content:
          "The most dangerous moment for any leader is not when they face criticism from others. It is when they stop judging themselves honestly. The day a leader begins to excuse their own inconsistency is the day their authority starts to weaken from within."
      },
      { type: "heading", content: "Accountability Creates Internal Order" },
      {
        type: "paragraph",
        content:
          "Systems fail when the standard at the top becomes negotiable. Teams notice it. Institutions notice it. Even silence in the room begins to change. Once people sense that discipline is optional for the leader, discipline becomes difficult to demand from everyone else."
      },
      {
        type: "list",
        items: [
          "It keeps decision-making grounded in principle rather than emotion.",
          "It creates moral clarity during pressure-filled moments.",
          "It protects credibility before credibility is publicly tested."
        ]
      },
      { type: "heading", content: "Position Is Not Proof" },
      {
        type: "paragraph",
        content:
          "A leader may control authority on paper and still lose influence in practice. People follow conviction more deeply than they follow titles. When followers observe discipline at the top, they are more willing to trust direction even when the road is difficult."
      },
      {
        type: "quote",
        content:
          "When consistency is lost at the top, doubt spreads across the system."
      },
      {
        type: "paragraph",
        content:
          "If leadership is meant to produce stability, then accountability is not optional. It is the structure that holds leadership together when pressure rises and public scrutiny intensifies."
      }
    ]
  },
  {
    slug: "structure-is-the-backbone-of-every-sustainable-business",
    title: "Structure Is the Backbone of Every Sustainable Business",
    category: "Business",
    excerpt:
      "Without structure, growth becomes chaotic and unsustainable.",
    featuredQuote:
      "Growth without structure creates motion, not progress.",
    readTime: "6 min read",
    publishDate: "2025-12-02",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        content:
          "Many businesses begin with energy, sacrifice, and ambition. Those qualities are important, but they are not enough to sustain growth. Once demand increases, the absence of structure becomes visible in delayed decisions, inconsistent service, and avoidable waste."
      },
      { type: "heading", content: "Vision Must Become Process" },
      {
        type: "paragraph",
        content:
          "A business does not become strong because the founder works harder every month. It becomes strong when the original vision is translated into repeatable systems. Structure is what allows standards to survive beyond the founder's personal presence."
      },
      {
        type: "list",
        items: [
          "Clear roles reduce confusion and duplication.",
          "Defined processes improve customer confidence.",
          "Reliable systems make measured growth possible."
        ]
      },
      {
        type: "paragraph",
        content:
          "In practical terms, structure means knowing how work moves, how decisions are made, and how quality is protected. It also means building a culture where discipline is normal rather than dramatic."
      },
      { type: "heading", content: "Short-Term Speed Can Hide Long-Term Weakness" },
      {
        type: "paragraph",
        content:
          "A business can appear successful for a while simply because demand is high or because the founder is carrying too much personally. But over time, disorder always reveals itself. The cost may show up in staff fatigue, customer distrust, or inability to scale."
      },
      {
        type: "quote",
        content:
          "Sustainable businesses are built deliberately, with discipline and long-term focus."
      },
      {
        type: "paragraph",
        content:
          "The businesses that endure are usually not the loudest. They are the ones that design structure early, refine it steadily, and allow discipline to shape execution."
      }
    ]
  },
  {
    slug: "nigerias-potential-requires-discipline-not-noise",
    title: "Nigeria's Potential Requires Discipline, Not Noise",
    category: "Society & Governance",
    excerpt:
      "Progress is not built on promises - it is built on systems and discipline.",
    featuredQuote:
      "A nation's potential becomes meaningful only when discipline gives it direction.",
    readTime: "6 min read",
    publishDate: "2025-11-19",
    featured: true,
    blocks: [
      {
        type: "paragraph",
        content:
          "Nigeria is often described in terms of potential. The statement is true, but potential alone is not a strategy. Every nation has some form of potential. The difference between promise and progress lies in discipline, structure, and leadership that takes execution seriously."
      },
      { type: "heading", content: "Hope Needs Systems" },
      {
        type: "paragraph",
        content:
          "Public enthusiasm matters, but enthusiasm cannot replace competence. If institutions remain weak, inefficiencies remain normalized, and accountability remains inconsistent, the gap between what is possible and what is experienced will continue to frustrate citizens."
      },
      {
        type: "paragraph",
        content:
          "This is why noise can be dangerous. Noise creates the feeling of movement while protecting the absence of measurable progress. It rewards performance over substance and reaction over discipline."
      },
      {
        type: "list",
        items: [
          "Leadership must be evaluated by outcomes, not only rhetoric.",
          "Systems must be strengthened so citizens are not forced to depend on luck.",
          "Development requires continuity, not only campaigns of excitement."
        ]
      },
      { type: "heading", content: "The Strength of the Nigerian Spirit" },
      {
        type: "paragraph",
        content:
          "Despite these realities, the resilience of the average Nigerian remains one of the strongest arguments for future optimism. Across cities and communities, people continue to adapt, create value, and carry burdens that stronger systems should have handled."
      },
      {
        type: "quote",
        content:
          "Progress is not built on promises. It is built on systems and discipline."
      },
      {
        type: "paragraph",
        content:
          "If Nigeria is to fulfill its potential, calm seriousness must replace disorder. We need disciplined leadership, competent execution, and a national culture that stops romanticizing inefficiency."
      }
    ]
  },
  {
    slug: "calm-thinking-in-difficult-times",
    title: "Calm Thinking in Difficult Times",
    category: "Personal Growth",
    excerpt:
      "Pressure exposes the quality of our thinking. Calm is not passivity; it is disciplined control under strain.",
    featuredQuote:
      "Calm thinking is not the absence of urgency. It is the refusal to let urgency destroy clarity.",
    readTime: "4 min read",
    publishDate: "2026-02-08",
    featured: false,
    blocks: [
      {
        type: "paragraph",
        content:
          "Difficult moments often tempt us to confuse speed with wisdom. In pressure-filled environments, the loudest reaction can look decisive even when it is poorly considered. Calm thinking is different. It creates space for judgment before action."
      },
      { type: "heading", content: "Calm Is a Discipline" },
      {
        type: "paragraph",
        content:
          "Calm does not appear automatically. It is trained. It is built when people learn to pause long enough to separate fact from emotion, and principle from impulse. That pause can protect a leader from choices that create larger problems later."
      },
      {
        type: "list",
        items: [
          "Name the real problem before trying to solve it.",
          "Reduce emotional noise before making structural decisions.",
          "Respond in a way that can still be defended tomorrow."
        ]
      },
      {
        type: "quote",
        content:
          "In difficult times, composure can be a greater advantage than speed."
      },
      {
        type: "paragraph",
        content:
          "People often remember how leaders behave under strain more than how they behave in comfort. Calm thinking communicates steadiness, and steadiness builds confidence in moments when confidence is otherwise fragile."
      }
    ]
  },
  {
    slug: "building-for-the-long-term",
    title: "Building for the Long Term",
    category: "Business",
    excerpt:
      "Enduring work is shaped by patience, standards, and a willingness to choose durability over applause.",
    featuredQuote:
      "Long-term builders are willing to look slower today in order to become stronger tomorrow.",
    readTime: "5 min read",
    publishDate: "2025-10-05",
    featured: false,
    blocks: [
      {
        type: "paragraph",
        content:
          "Short-term rewards can distort judgment. They encourage people to optimize for visibility instead of value. But the work that endures is rarely built through haste. It is built through clear standards applied consistently over time."
      },
      { type: "heading", content: "Durability Requires Restraint" },
      {
        type: "paragraph",
        content:
          "To build for the long term is to accept that not every opportunity deserves immediate acceptance. Some opportunities weaken focus. Others reward urgency while quietly damaging structure."
      },
      {
        type: "paragraph",
        content:
          "Long-term thinking asks better questions: Will this still matter in five years? Does it strengthen the system? Can it be maintained with integrity?"
      },
      {
        type: "quote",
        content:
          "Patience is not hesitation when it is governed by vision."
      },
      {
        type: "paragraph",
        content:
          "Whether in business, leadership, or public life, long-term builders do not chase momentum blindly. They build institutions, habits, and structures that can carry weight beyond the present moment."
      }
    ]
  },
  {
    slug: "why-discipline-outlasts-excitement",
    title: "Why Discipline Outlasts Excitement",
    category: "Leadership",
    excerpt:
      "Excitement can begin a journey, but discipline is what keeps meaningful work moving after emotion fades.",
    featuredQuote:
      "What survives after motivation disappears is usually the quality of your discipline.",
    readTime: "4 min read",
    publishDate: "2025-09-12",
    featured: false,
    blocks: [
      {
        type: "paragraph",
        content:
          "Excitement is useful, but it is unstable. It rises quickly and often fades just as quickly. Discipline is different. It does not depend on mood, praise, or novelty. It depends on decision."
      },
      { type: "heading", content: "Emotion Cannot Carry Every Season" },
      {
        type: "paragraph",
        content:
          "There will always be parts of leadership and work that feel repetitive, difficult, or unseen. Those seasons reveal whether a person has built reliable habits or simply depended on inspiration."
      },
      {
        type: "list",
        items: [
          "Discipline protects standards when energy is low.",
          "Discipline turns ideals into repeated behavior.",
          "Discipline gives serious people a longer horizon than excitement can sustain."
        ]
      },
      {
        type: "quote",
        content:
          "The strongest systems are rarely powered by emotion alone."
      },
      {
        type: "paragraph",
        content:
          "If we want durable leadership, stable businesses, and credible institutions, we must respect discipline more than spectacle. Excitement can start movement. Discipline is what gives that movement direction and endurance."
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
