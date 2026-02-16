# Business Interpretation - InspectaPro

## 1. Problem Statement

In many industrial and service sectors, operational inspections are still managed via paper or static digital forms. This leads to:

- **Information Silos:** Lack of real-time visibility for administrators.
- **Loss of Traceability:** Difficulty in auditing past inspections after a form structure has changed.
- **Operational Inefficiency:** High manual overhead in assigning tasks and collecting field evidence.

**InspectaPro** solves this by providing a cloud-based, centralized platform that balances administrative control with field flexibility.

---

## 2. Business Model: SaaS & Multi-Tenancy

InspectaPro is designed as a **Software as a Service (SaaS)** platform using a **Multi-tenancy** architecture.

- **Tenant Isolation:** Each company acts as a separate "tenant." Data is logically isolated to ensure that Company A can never access the forms, users, or inspection results of Company B.
- **Scalability:** The system supports multiple subscription tiers (Plans), allowing companies to scale their inspection volume as needed.

---

## 3. System Actors and RBAC (Role-Based Access Control)

To ensure security and organizational order, the system implements **RBAC**. Each actor has specific permissions:

| Actor                     | Responsibility                                                    | Access Level                           |
| :------------------------ | :---------------------------------------------------------------- | :------------------------------------- |
| **Company Administrator** | Configures the workspace, creates forms, and audits results.      | Full Control (Company level)           |
| **Technician**            | Executes inspections in the field and submits evidence.           | Field Operations (Assigned tasks only) |
| **System**                | Automated processes (Versioning, Data Validation, Notifications). | Internal Service                       |
| **Company (Customer)**    | Represents the billing entity and subscription owner.             | Billing & Account Management           |

---

## 4. Operational Inspection Flow

The business logic follows a strict lifecycle to ensure data integrity:

1.  **Definition:** The Admin creates a dynamic **Inspection Form**.
2.  **Versioning:** The System generates a unique version for that form (to protect historical data).
3.  **Scheduling:** An **Inspection Instance** is created and assigned to a specific **Technician**.
4.  **Execution:** The Technician completes the form in the field (online or offline).
5.  **Validation:** The System verifies that all required evidence and fields meet the business rules.
6.  **Review & Audit:** The Admin evaluates the results.
7.  **Closure:** Once closed, the inspection is encrypted/locked to maintain a permanent **Historical Record**.

---

## 5. Business Rules (The "Who & When")

- **Integrity Rule:** No inspection can be submitted if required fields (defined in the Form version) are empty.
- **Immutability Rule:** Once an inspection is marked as **Closed**, it cannot be modified by any user, including the Admin.
- **Ownership Rule:** Technicians can only see and fill inspections specifically assigned to their User ID.
- **Version Lock:** If an Admin updates a Form Template, existing "Assigned" or "In Progress" inspections keep the previous version to avoid data corruption.

---

## 6. Audit and Traceability

For legal and quality compliance, the system maintains a "Single Source of Truth":

- Every answer is timestamped.
- Every result is linked to the specific version of the form used at that moment.
- The system preserves the technician's metadata (location, device, duration) as supporting evidence.
