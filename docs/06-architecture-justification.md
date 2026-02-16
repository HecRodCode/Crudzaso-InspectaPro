# Architectural Justification: Hybrid Data Strategy

This document provides the technical and strategic reasoning for the hybrid database architecture implemented in InspectaPro. By combining **SQL** and **NoSQL**, we ensure a balance between administrative control and operational flexibility.

## 1. The Need for a Hybrid Architecture

Following the business interpretation, the system must handle two distinct types of information. A single-database approach would have introduced significant risks:

- **Relational Model (SQL):** Chosen for **structured, stable, and highly relational data**. This includes entities that require strict ACID compliance, such as Companies, Users, Roles, Subscriptions, and the legal "header" of an inspection.
- **Document Model (NoSQL):** Chosen for **dynamic, evolving, and variable data**. This covers the inspection results, varied field types (booleans, numbers, text), and multimedia evidence links that differ from one inspection type to another.

## 2. Decision Matrix: Where Data Lives and Why

| Data Category                | Database | Justification                                                                                                  |
| :--------------------------- | :------- | :------------------------------------------------------------------------------------------------------------- |
| **Identity & Access (RBAC)** | SQL      | Roles and permissions must be immutable and easily auditable to ensure security in a Multi-tenant environment. |
| **SaaS Subscriptions**       | SQL      | Financial and plan-related data require high consistency to manage service access.                             |
| **Inspection Headers**       | SQL      | Stores the "Who, When, and Status." Essential for historical traceability and legal compliance.                |
| **Inspection Results**       | NoSQL    | Allows different companies to have unique form structures without altering the global database schema.         |
| **Evidence & Metadata**      | NoSQL    | Efficiently handles links to photos and device-specific metadata (GPS, duration) that are not always present.  |

---

## 3. Connectivity: The Shared ID Strategy

The connection between the two models is established via an **ID-sharing strategy**, which acts as the bridge for data consistency:

- **The Pivot:** The `InspectionID` (Primary Key in SQL) is the unique identifier for every operational activity.
- **The Link:** This ID is embedded in the NoSQL document as `inspectionSqlId`.
- **Traceability:** This ensures that when an administrator reviews an inspection, the system can instantly fetch the "Management data" from SQL and the "Technical evidence" from NoSQL using a single reference point.

---

## 4. Risk Mitigation

By choosing this hybrid model, we mitigate the following architectural risks:

### Risks of a Fully Relational Model (SQL only)

1.  **Schema Rigidity:** Every time a client wants to add a new question to a form, we would need a database migration (DDL change), leading to downtime.
2.  **Complexity:** Implementing an EAV (Entity-Attribute-Value) model to handle variable forms would result in extremely complex queries and poor reporting performance.

### Risks of a Fully Document-Based Model (NoSQL only)

1.  **Data Inconsistency:** Managing cross-tenant relationships (like ensuring a Technician belongs to the correct Company) is harder and more prone to errors without relational constraints.
2.  **Audit Fragility:** NoSQL lacks the strict ACID properties required for financial subscriptions and legal user-access logs.

---

## 5. Form Evolution and Versioning

One of the most critical business requirements is that forms change over time. Our architecture supports this through:

- **SQL Versioning:** The `Inspection_Types` table tracks the version of the template.
- **NoSQL Flexibility:** The NoSQL document stores the results exactly as they were at the time of completion. Even if the original template is deleted or modified in SQL, the historical record in NoSQL remains intact and legible, fulfilling the audit and historical traceability requirements.

## 6. Conclusion

The InspectaPro hybrid architecture is the most technically appropriate solution for a SaaS-based inspection system. It provides the **reliability of SQL** for business management and the **scalability of NoSQL** for field operations, ensuring that the system can grow and evolve without compromising data integrity or user experience.
