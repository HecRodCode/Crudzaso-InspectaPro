# CRUDZASO - InspectaPro

## 🎯 Project Overview

**InspectaPro** is a specialized SaaS platform designed for companies that need to plan, execute, and control operational inspections in the field.

The core challenge of this system is balancing the **rigidity** required for administrative auditing (who, when, and legal status) with the **flexibility** needed for field inspections, where forms change constantly depending on the industry or specific regulations.

This repository contains the complete technical modeling, from business interpretation to hybrid database design.

---

## 👥 The Team

- **Héctor:** Process Flow, System Integration, and Architectural Justification.
- **Daniela Quinto:** Business Interpretation and Use Case Modeling.
- **Juan José:** Relational Modeling (SQL) and 3NF Normalization.
- **Mateo Rico:** Document-Based Modeling (NoSQL) and Flexible Schemas.

---

## Organization logic

```bash
inspecta-pro-modeling/
│
├── README.md               # Project overview and team information
│
├── docs/
│   ├── 01-business-interpretation.md
│   ├── 02-use-cases.md
│   ├── 03-process-flow.md
│   ├── 04-sql-model.md
│   ├── 05-nosql-model.md
│   └── 06-architecture-justification.md
│    # Written explanations of the system design.
│    # Each file documents one conceptual part of the modeling work.
│
├── diagrams/
│   └── use-case-diagram.png
│    # Visual representations of the system.
│    # All diagrams created for analysis and modeling go here.
│
└── website/                # Documentation Portal (Docusaurus)
    ├── docs/               # Portal content source
    ├── static/img/         # Portal image assets
    ├── docusaurus.config.js # Site configuration and Mermaid setup
    └── sidebars.js          # Navigation logic and document order
```

---

## 🏗️ Architectural Strategy: The Hybrid Approach

InspectaPro is built on a **Hybrid Data Architecture**. We don't believe in "one size fits all" for data:

1.  **SQL (PostgreSQL Style):** Handles structured data like multi-tenancy (Companies), security (RBAC), and subscription billing.
2.  **NoSQL (MongoDB Style):** Handles dynamic inspection results, allowing for infinite form variations and multimedia evidence without schema migrations.

**The Bridge:** Both worlds are connected through a **Shared ID Strategy**, ensuring 100% traceability for legal audits.

---

## 📂 Repository Structure & Navigation

The project is organized following a logical flow from business requirements to technical implementation:

### 📖 Documentation (`/docs`)

1.  [**Business Interpretation**](./docs/01-business-interpretation.md): Detailed analysis of the SaaS model and actor roles.
2.  [**Use Case Model**](./docs/02-use-cases.md): Functional representation of how Admins and Technicians interact.
3.  [**Process Flow**](./docs/03-process-flow.md): The technical lifecycle of an inspection, from creation to NoSQL storage.
4.  [**Relational Model (SQL)**](./docs/04-sql-model.md): 3NF normalized schema for administrative control.
5.  [**Document Model (NoSQL)**](./docs/05-nosql-model.md): Flexible JSON structure for inspection answers and evidence.
6.  [**Architectural Justification**](./docs/06-architecture-justification.md): The "Why" behind our hybrid database decisions.

### 🖼️ Visual Assets (`/diagrams`)

- `use-case-diagram.png`: Actor interactions.

---

## 🚀 Key Technical Features

- **Multi-tenancy:** Data isolation per company (Tenant).
- **3NF Normalization:** Zero redundancy in administrative data.
- **Dynamic Forms:** Support for versioned templates and variable field types.
- **Audit-Ready:** Every inspection result is linked to a permanent SQL header for historical tracking.

---

## 🛠️ Tools Used

- **Modeling:** Mermaid.js.
- **Documentation:** Markdown & Docusaurus.
- **Version Control:** GitHub.

---

© 2026 Crudzaso Team - InspectaPro Project.