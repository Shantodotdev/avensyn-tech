# Project Stack Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing project list into a restrained 3D sticky card stack inspired by the supplied Design Monks reference.

**Architecture:** Keep project data and card markup in `project-showcase.tsx`. Add a small pure depth-calculation helper so scroll transforms are deterministic and testable, then drive each sticky card with the existing Motion and Lenis setup. Disable sticky depth behavior below `768px` and when reduced motion is requested.

**Tech Stack:** React, TypeScript, Motion, Tailwind CSS v4, Vitest, Lenis

## Global Constraints

- Preserve all existing project content and assets.
- Use no `font-bold` or uppercase styling.
- Keep the current `16:9` project media frames.
- Do not trap scrolling.
- Use normal document scrolling on mobile and for reduced-motion users.

---

### Task 1: Deterministic stack depth

**Files:**
- Create: `src/components/project-stack-motion.ts`
- Create: `src/components/project-stack-motion.test.ts`

**Interfaces:**
- Produces: `getProjectStackDepth(index: number, total: number, progress: number): ProjectStackDepth`

- [ ] Write tests proving cards remain unchanged before their cover range, move into subtle depth after the following card arrives, remain clamped, and keep the final card unchanged.
- [ ] Run `npm.cmd test -- src/components/project-stack-motion.test.ts` and verify the missing module fails.
- [ ] Implement clamped scale, vertical shift, rotation, opacity, and depth values.
- [ ] Run the focused test and verify it passes.

### Task 2: Sticky project stack

**Files:**
- Modify: `src/components/project-showcase.tsx`

**Interfaces:**
- Consumes: `getProjectStackDepth`
- Produces: desktop sticky cards driven by the section scroll progress.

- [ ] Add one section-level `useScroll` motion value and one responsive motion preference.
- [ ] Render project cards through a focused `ProjectStackCard` component so hooks remain valid.
- [ ] Apply increasing sticky top offsets, preserve-3D transforms, layer ordering, and subtle shadow depth.
- [ ] Preserve the existing flat list below `768px` and under reduced motion.
- [ ] Run typecheck, focused tests, and the production build.
- [ ] Verify desktop scroll stacking and mobile fallback in the browser.

