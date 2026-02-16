--Research: Normalization and Referential Integrity-------------
.1NF (Atomic Normal Form)
Each column contains a single indivisible value. In Crudazaso, avoid storing lists of questions or answers in a single cell. Example: do not use “Questions: Q1, Q2, Q3” but rather references to a separate table.
.2NF (No partial dependencies)
Non-key attributes depend on the entire primary key. In N:M relationships such as COMPANY_USERS, avoid redundancy: (CompanyID, UserID, CompanyName) is incorrect; CompanyName depends only on CompanyID.
.3NF (No transitive dependencies)
Non-key attributes depend only on the primary key. Do not store TechnicianEmail in INSPECTIONS if it depends on TechnicianID. Create a separate USERS table.
Referential Integrity: Foreign Keys ensure that there are no references to non-existent records. Protects against orphaned data and allows for complete auditing.


--How 3NF Prevents Redundancy

 NOT NORMALIZED (Bad)

INSPECTIONS
 InspectionID
 -CompanyID
 -CompanyName ← REDUNDANT (repeated thousands of times)
 -TechnicianID
 -TechnicianName ← REDUNDANT
 -TechnicianEmail ← REDUNDANT
 -Status

Problem: If you change the technician's email, do you update 500 records?

 WITH 3NF (Good)
INSPECTIONS → CompanyID → COMPANIES.CompanyName (reference)
INSPECTIONS → AssignedToUserID → USERS.Email (reference)
Benefit: One place to update. Consistency guaranteed.

---Architectural Justification
Why is it here and not in NoSQL?

-COMPANIES, USERS, ROLES, INSPECTIONS (header): Structured, stable, highly relational data. Requires referential integrity and auditable history.
SUBSCRIPTION_PLANS: Master catalog, frequent references.
COMPANY_USERS: Critical N:M relationship that requires normalization.

-Why are they NOT here?

Dynamic inspection responses (variable questions, evidence, free notes)  They go in NoSQL
Forms that evolve → Need flexible versioning


-Referential Integrity: Protections

-Foreign Keys: Prevent creating inspections with non-existent TypeID
Constraints: If you try to delete a user with inspections, the system rejects it (or controlled cascade)
Audit: Each inspection records who created it, when, status changes

