import type { CaseStudy } from "@/types/project";

export const caseStudies: CaseStudy[] = [
  {
    slug: "mazadeco",
    name: "MazaDeco",
    role: "Full Stack Developer",
    period: "2026",
    status: "in-progress",
    url: "https://mazadeco.com",
    summary:
      "A B2B furniture catalog platform for an Indonesian natural-decor manufacturer, built on Laravel 13 and Filament, with a CI/CD pipeline and a phased delivery roadmap enforced from day one.",
    technologies: [
      "Laravel 13",
      "PHP 8.3",
      "Filament 5.6",
      "MariaDB",
      "Tailwind CSS 4",
      "Alpine.js",
      "Spatie Media Library",
      "Spatie Permission",
      "GitHub Actions",
      "Cloudflare",
    ],
    highlights: [
      { label: "Test suite", value: "535 passing" },
      { label: "Static analysis", value: "PHPStan level 5, zero errors" },
      { label: "Domains modeled", value: "23 tables / 7 domains" },
      { label: "Structured data", value: "13 page types with JSON-LD" },
    ],
    problem:
      "MazaDeco needed a catalog presence for a handcrafted-furniture business, not a storefront — there are no prices, carts, or checkout. Buyers browse by material and collection, then convert through WhatsApp or a contact form. The build also had to support a small internal team managing hundreds of SKUs without engineering help, which meant the admin experience mattered as much as the public site.",
    challenge: [
      "Model a non-commerce catalog domain (products, categories, collections, portfolios, articles) cleanly enough that a phased roadmap could be followed without schema churn.",
      "Give non-technical staff full content and media control through Filament, with role-based access split across super_admin and admin, without exposing anything a public visitor shouldn't reach.",
      "Hit SEO, performance, and accessibility bars for a catalog site where organic search is the primary acquisition channel — not paid traffic.",
      "Enforce production discipline (CI gates, static analysis, deploy scripting) on a solo-maintained codebase so quality doesn't erode as scope grows across nine planned phases.",
    ],
    solution:
      "Delivered as a phased Laravel 13 + Filament 5.6 build: a public Blade/Tailwind/Alpine frontend backed by a Filament admin panel, with Spatie's Permission, Media Library, and Activitylog packages handling authorization, asset pipelines, and audit trails respectively. Each phase (foundation, data layer, auth/admin shell, catalog management, content & leads, public frontend, SEO/hardening) shipped behind its own feature branch with CI gates before merge, so the roadmap doubled as the project's quality contract.",
    architecture: [
      "Laravel 13 (PHP 8.3) backend with a Filament 5.6 admin panel mounted at /admin, restricted to two roles via Spatie Permission — no public registration path.",
      "Public frontend rendered server-side with Blade + Tailwind CSS 4 + Alpine.js; no client-side framework or API layer, since the catalog doesn't need one.",
      "Thin controllers backed by query services (CatalogQueryService, PortfolioQueryService, BlogQueryService) that own caching — listings are cached as ID arrays with a 30-minute TTL and rehydrated in order per request, not as serialized Eloquent collections.",
      "Media handled through Spatie Media Library with WebP conversions and responsive srcsets behind a shared responsive-image component — confirmed zero raw <img> tags across the frontend.",
      "GitHub Actions CI (composer validate, composer audit, Pint, PHPStan level 5, full test suite, npm build) gates every push/PR; a separate deploy workflow runs an SSH deploy script with maintenance-mode wrapping, migrations, and a Cloudflare cache purge — dormant until DEPLOY_ENABLED is flipped once the VPS is provisioned.",
    ],
    engineeringDecisions: [
      {
        decision: "Cache primitive ID arrays instead of hydrated Eloquent models.",
        rationale:
          "The project's cache config disallows unserializing arbitrary objects (serializable_classes => false). Caching full model collections passed silently until the request after a cache write, which then hit a 500 trying to unserialize them. Caching just the ID arrays and rehydrating per request sidesteps the config constraint entirely and stays portable across MariaDB and the SQLite test driver.",
      },
      {
        decision: "Build JSON-LD payloads in an @php block rather than inline inside a raw Blade echo.",
        rationale:
          "Writing '@context' directly inside a {!! json_encode(...) !!} expression caused Blade to misparse the literal string as its own @context/@endcontext directive, silently corrupting the emitted JSON. No prior test caught it because nothing asserted on JSON-LD content, only page load. Fixed by building the array in @php and echoing a plain variable, plus added tests that decode every JSON-LD block as real JSON.",
      },
      {
        decision: "No CSP in this pass, despite a global security-headers middleware shipping.",
        rationale:
          "X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, and HSTS were safe to ship immediately. A Content-Security-Policy needs a dedicated browser-testing pass to confirm compatibility with Filament, Alpine, and Vite's dev/build asset pipeline — shipping it un-verified risked breaking the admin panel, so it was scoped out and documented rather than guessed at.",
      },
      {
        decision: "Re-check publication state in controllers even though routes already resolve by slug.",
        rationale:
          "Route-model binding resolves a record by slug but doesn't filter on published()/is_active. Controllers explicitly re-check those flags so a draft product or unpublished post can never leak through a guessed or shared URL.",
      },
    ],
    outcome: [
      "Public frontend (home, catalog, product/category/collection detail, portfolio, blog, about, contact) shipped phase-by-phase, each phase closed with a full production audit before merge.",
      "535 tests passing, PHPStan level 5 clean, Pint-formatted, with CI enforcing all four on every push.",
      "Full SEO layer shipped: canonical URLs, Open Graph and Twitter Card metadata, Organization/WebSite/Product/Article/Breadcrumb JSON-LD, a dynamically generated sitemap.xml, and an environment-aware robots.txt that disallows everything outside production.",
      "A real accessibility defect was measured and fixed — the WhatsApp CTA buttons were white text on brand teal at a 2.19:1 contrast ratio, below the WCAG AA minimum for both icon-only (3:1) and text (4.5:1) buttons — darkened to page-scoped values that clear both thresholds without touching the shared brand token used elsewhere.",
    ],
    lessonsLearned: [
      "Config-level constraints (like a locked-down unserialize allowlist) can produce failures one request after the triggering write — the bug surfaces disconnected from its cause, so cache strategy has to be designed around the constraint, not debugged around it after the fact.",
      "Framework template syntax can collide with data your code emits verbatim (here, a literal '@context' JSON-LD key colliding with a Blade directive) — anything echoed raw into a template deserves a test that parses the actual output, not just one that checks the page loaded.",
      "Treating a roadmap's phase boundaries as hard quality gates — CI green, static analysis clean, tests passing, before a phase is called done — keeps a solo-maintained codebase from accumulating debt as scope grows, especially across a nine-phase plan.",
    ],
  },
  {
    slug: "penta-pelita-semesta",
    name: "Penta Pelita Semesta",
    role: "Full Stack Developer",
    period: "2026",
    status: "live",
    url: "https://pentapelitasemesta.id",
    summary:
      "A corporate export site for an Indonesian natural-commodities exporter (Virgin Coconut Oil, patchouli oil, vanilla beans), built with Astro for a static, content-first, fast-loading public presence.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    highlights: [
      { label: "Product lines", value: "3 export commodities" },
      { label: "Rendering", value: "Static, zero client JS by default" },
      { label: "Traceability", value: "Farm-to-export sourcing narrative" },
    ],
    problem:
      "PT Penta Pelita Semesta exports natural commodities — VCO, patchouli oil, vanilla beans — into international B2B markets where buyers evaluate suppliers on traceability and quality documentation before price. The site needed to carry that trust signal (direct farmer partnerships, traditional processing methods, third-party Certificates of Analysis) without the overhead of a CMS or backend the client doesn't need to operate.",
    challenge: [
      "Communicate supply-chain traceability and quality credibility to an international B2B audience with no e-commerce transaction to anchor trust around.",
      "Keep the site fast and cheap to host for a company whose core business isn't software, avoiding a server/database footprint that would need ongoing maintenance.",
      "Structure content (product categories, sourcing story, quality documentation) so it reads clearly to both a global buyer and local search.",
    ],
    solution:
      "Built as a static Astro site — no runtime backend, minimal client-side JavaScript, content compiled at build time. This matched the actual requirement: a small set of pages (company story, three product lines, sourcing/quality narrative, contact) that change infrequently and need to load fast on the varied connection quality of an international B2B audience.",
    architecture: [
      "Astro static-site generation with component islands only where interactivity is actually needed, keeping the shipped JavaScript minimal by default.",
      "Tailwind CSS for styling, with image assets optimized through Astro's build pipeline.",
      "Content structured around three product verticals (VCO, patchouli oil, vanilla) plus a sourcing/traceability narrative, rather than a generic 'products' catalog — the structure mirrors how the business actually sells.",
    ],
    engineeringDecisions: [
      {
        decision: "Chose a static-site generator over a CMS-backed stack.",
        rationale:
          "The client has no need to self-edit content frequently, and the business risk of a database, admin panel, and ongoing hosting a non-technical team would need to maintain outweighed the convenience for a small, mostly-static corporate site. Astro removes that surface area entirely.",
      },
    ],
    outcome: [
      "Shipped a fast, static, low-maintenance corporate site that carries the company's traceability and quality-sourcing story to an international audience without a backend to operate or secure.",
    ],
    lessonsLearned: [
      "Not every client site needs a CMS — matching the stack to the actual update cadence of the content avoids handing a non-technical team infrastructure they didn't ask for and can't maintain.",
    ],
  },
  {
    slug: "bodyfit-tengah-sawah",
    name: "Bodyfit Tengah Sawah",
    role: "Full Stack Developer",
    period: "Aug 2025 — Nov 2025",
    status: "live",
    summary:
      "A company profile site and gym management system for a Yogyakarta gym, with a custom authentication layer on Laravel Breeze and a multi-level RBAC admin panel.",
    technologies: ["Laravel", "Laravel Breeze", "RBAC", "Queues", "Cron", "Admin Panel"],
    highlights: [
      { label: "Access control", value: "Panel, resource, and action-level RBAC" },
      { label: "Background jobs", value: "Async queue + scheduled cron" },
    ],
    problem:
      "Bodyfit Tengah Sawah needed both a public-facing company profile and an internal system to manage gym memberships and operations, with different staff roles needing different levels of access to different parts of the admin panel — not a single flat admin/user split.",
    challenge: [
      "Laravel Breeze's default auth scaffolding covers login/registration but not business-specific rules like role-based redirects or middleware-enforced business logic.",
      "A flat admin role wasn't sufficient — access needed to be controlled at the panel, resource, and individual-action level.",
      "Back-end operations (notifications, recurring membership tasks) needed to run without blocking user-facing requests.",
    ],
    solution:
      "Extended Laravel Breeze with custom middleware for business-logic validation and role-based redirects, then built an Admin Panel with a multi-level RBAC system controlling access at three granularities: which panels a role can see, which resources within a panel, and which actions on those resources. Backend performance was handled by moving long-running work onto an asynchronous queue and scheduled cron jobs instead of the request cycle.",
    architecture: [
      "Laravel Breeze as the authentication base, extended with custom middleware for business rules and role-based post-login redirects.",
      "A three-tier RBAC model: panel-level access, resource-level access, and action-level permissions within a resource.",
      "Asynchronous queue workers for deferred/background tasks, with Cron-driven task scheduling for recurring operations.",
    ],
    engineeringDecisions: [
      {
        decision: "Layered custom middleware on top of Breeze rather than replacing it.",
        rationale:
          "Breeze already solved credential handling and session management correctly; the actual gap was business logic (role-based redirects, gym-specific validation), which belongs in middleware, not a rebuilt auth system.",
      },
      {
        decision: "Three-level RBAC granularity instead of simple role flags.",
        rationale:
          "A gym admin panel has meaningfully different staff roles (front desk, trainers, management) that need different combinations of panel/resource/action access — a flat admin/staff split would have forced over- or under-provisioning access for at least one role.",
      },
    ],
    outcome: [
      "Delivered a working company profile plus an internal gym management system with fine-grained access control and background-job-driven operations for bodyfittengahsawah.com.",
    ],
    lessonsLearned: [
      "Granular RBAC is worth the added complexity as soon as more than two meaningfully different staff roles exist — retrofitting it after a flat role system ships is more expensive than designing for it up front.",
    ],
  },
  {
    slug: "pawcket",
    name: "Pawcket",
    role: "Web Developer",
    period: "Oct 2025",
    status: "live",
    summary:
      "A responsive, SEO-optimized company profile site for Pawcket, built with Nuxt.js for server-side rendering and deployed on Vercel.",
    technologies: ["Nuxt.js", "Vue.js", "SSR", "SEO", "Vercel"],
    highlights: [
      { label: "Rendering", value: "Server-side rendered (SSR)" },
      { label: "Deployment", value: "Vercel, fully managed" },
    ],
    problem:
      "Pawcket needed a company profile site that loads fast and is discoverable in search — a client-rendered SPA would have hurt both initial load time and SEO indexing.",
    challenge: [
      "Deliver a fast, crawlable site on a short timeline without sacrificing visual polish.",
      "Handle the full deployment and hosting lifecycle, not just the build.",
    ],
    solution:
      "Built with Nuxt.js (Vue.js) using server-side rendering so pages are fully formed HTML on first response, which is both faster to first paint and directly crawlable by search engines. Deployed and hosted entirely on Vercel, keeping the operational footprint minimal for a company profile site that doesn't need custom infrastructure.",
    architecture: [
      "Nuxt.js SSR rendering for all public pages.",
      "Vercel-managed deployment pipeline, connected directly to the repository for zero-touch deploys.",
    ],
    engineeringDecisions: [
      {
        decision: "SSR over static generation or a client-rendered SPA.",
        rationale:
          "SSR gave the SEO benefits of server-rendered HTML without the build-time constraints of full static generation, appropriate for a company profile site expected to have minor content updates over time.",
      },
    ],
    outcome: [
      "Shipped and deployed a production-ready, SEO-friendly company profile site end-to-end, including hosting setup.",
    ],
    lessonsLearned: [
      "Matching rendering strategy to actual content-update frequency and SEO priority — rather than defaulting to whatever's fastest to scaffold — is a decision worth making explicitly per project.",
    ],
  },
  {
    slug: "whatsapp-chatbot",
    name: "WhatsApp Chatbot",
    role: "Programmer",
    period: "Apr 2025 — Jul 2025",
    status: "archived",
    summary:
      "A WhatsApp chatbot built from scratch for Universitas Amikom Yogyakarta's Computer Engineering study program, serving program-specific information to students automatically.",
    technologies: ["JavaScript", "Node.js", "whatsapp-web.js", "Baileys"],
    highlights: [
      { label: "Scope", value: "Built from scratch, no framework template" },
      { label: "Users", value: "Computer Engineering study program" },
    ],
    problem:
      "The Computer Engineering study program fielded repetitive information requests from students (schedules, procedures, program details) through manual channels, with no automated first line of response.",
    challenge: [
      "Two competing WhatsApp automation libraries (whatsapp-web.js and Baileys) with different connection models needed to be evaluated and integrated correctly.",
      "Chatbot logic needed to answer program-specific questions accurately rather than generically, without a general-purpose LLM in the loop.",
    ],
    solution:
      "Designed and implemented a chatbot from scratch in JavaScript, integrating both whatsapp-web.js and Baileys to handle WhatsApp connectivity, with response logic built specifically around the study program's actual information needs rather than a generic FAQ bot.",
    architecture: [
      "Node.js service handling WhatsApp session connectivity via whatsapp-web.js and Baileys.",
      "Rule-based response logic mapped to the study program's specific, recurring information requests.",
    ],
    engineeringDecisions: [
      {
        decision: "Built the integration from scratch rather than using an existing chatbot framework.",
        rationale:
          "The scope was narrow and specific enough (one program's information needs) that a general chatbot framework would have added abstraction overhead without saving meaningful implementation time.",
      },
    ],
    outcome: [
      "Delivered a functional chatbot serving the Computer Engineering study program's information needs automatically over WhatsApp.",
    ],
    lessonsLearned: [
      "Building a narrow, purpose-specific bot from first principles can be faster and easier to reason about than adopting a general framework when the actual requirement set is small and well understood upfront.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug);
}
