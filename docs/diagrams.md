---
title: "Conceptual Diagrams"
sidebar_label: "Conceptual Diagrams"
pagination_label: "Conceptual Diagrams"
description: "Educational Mermaid diagrams for J-TRINITY doctrine study."
tags:
  - j-trinity
  - diagrams
  - simulation-only
---
> **Scope:** Educational documentation only. SIMULATION_ONLY / ADVISORY_ONLY / HUMAN_FINAL.

# Conceptual Diagrams

These diagrams are educational and conceptual. They describe doctrine relationships for simulation study only.

Use the [Glossary](glossary.md) for confirmed term boundaries and cross-links back into the doctrine pages.

:::tip Key Takeaways
- JD, JM, JB, JG, and HUMAN are presented as conceptual learning layers.
- Guardian review is shown as a doctrine boundary, not an operational control system.
- Timeline and AAR diagrams describe preservation and review concepts for study.
:::

## Architecture Overview

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'background': '#0d1a16', 'primaryColor': '#12231e', 'primaryTextColor': '#f5fbf6', 'primaryBorderColor': '#9ac6a5', 'lineColor': '#d7b56d', 'secondaryColor': '#172b24', 'tertiaryColor': '#050c0a'}} }%%
flowchart LR
  JD["JD<br/>Edge Reality Layer"] --> JM["JM<br/>Fusion Hypothesis Layer"]
  JM --> JB["JB<br/>Advisory Synthesis"]
  JB --> JG["JG<br/>Guardian Review"]
  JG --> HUMAN["HUMAN_FINAL<br/>Human judgement"]
```

Related Doctrine: [Part II - Agent Architecture](parts/02-part-ii.md), [Glossary: JD](glossary.md#jd), [Glossary: JG](glossary.md#jg).

## Doctrine Boundary Flow

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'background': '#0d1a16', 'primaryColor': '#12231e', 'primaryTextColor': '#f5fbf6', 'primaryBorderColor': '#9ac6a5', 'lineColor': '#d7b56d', 'secondaryColor': '#172b24', 'tertiaryColor': '#050c0a'}} }%%
flowchart TD
  Study["Doctrine study input"] --> Advisory["ADVISORY_ONLY analysis"]
  Advisory --> Guardian["JG Guardian review"]
  Guardian --> Boundary{"Safety boundary respected?"}
  Boundary -->|Yes| Human["HUMAN_FINAL review"]
  Boundary -->|No| Hold["Hold for human review"]
  Hold --> Human
```

Related Doctrine: [Part IV - Guardian Doctrine](parts/04-part-iv.md), [Glossary: ADVISORY_ONLY](glossary.md#advisory_only).

## Event Timeline Conceptual Flow

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'background': '#0d1a16', 'primaryColor': '#12231e', 'primaryTextColor': '#f5fbf6', 'primaryBorderColor': '#9ac6a5', 'lineColor': '#d7b56d', 'secondaryColor': '#172b24', 'tertiaryColor': '#050c0a'}} }%%
flowchart LR
  Observation["Observed event"] --> Envelope["Global Event Envelope"]
  Envelope --> Timeline["Immutable timeline"]
  Timeline --> Conflict["Conflict preserved"]
  Timeline --> Replay["AAR replay"]
  Conflict --> Human["Human review"]
  Replay --> Human
```

Related Doctrine: [Part III - Event Truth](parts/03-part-iii.md), [Glossary: Immutable Timeline](glossary.md#immutable-timeline).

## Truth Greater Than Speed

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'background': '#0d1a16', 'primaryColor': '#12231e', 'primaryTextColor': '#f5fbf6', 'primaryBorderColor': '#9ac6a5', 'lineColor': '#d7b56d', 'secondaryColor': '#172b24', 'tertiaryColor': '#050c0a'}} }%%
flowchart LR
  Speed["Fast hypothesis"] --> Check{"Truth confidence?"}
  Check -->|Insufficient| Hold["Hold advisory output"]
  Check -->|Sufficient| Present["Present advisory analysis"]
  Hold --> Reassess["Reassess evidence"]
  Reassess --> Check
```

Related Doctrine: [Part I - Foundations](parts/01-part-i.md).

## AAR Replay Flow

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'background': '#0d1a16', 'primaryColor': '#12231e', 'primaryTextColor': '#f5fbf6', 'primaryBorderColor': '#9ac6a5', 'lineColor': '#d7b56d', 'secondaryColor': '#172b24', 'tertiaryColor': '#050c0a'}} }%%
flowchart TD
  Events["Stored events"] --> Order["Timeline ordering"]
  Order --> Context["Context reconstruction"]
  Context --> Lessons["Lessons learned"]
  Lessons --> Doctrine["Doctrine refinement"]
```

Related Doctrine: [Appendix - Reference and AAR](parts/22-the-master-tactical-technical-manual.md), [Glossary: AAR](glossary.md#aar).

:::info Recommended Next Reading
Continue with [Part II - Agent Architecture](parts/02-part-ii.md), then move to [Part III - Event Truth](parts/03-part-iii.md) and [Part IV - Guardian Doctrine](parts/04-part-iv.md).
:::
