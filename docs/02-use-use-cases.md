# Use Case Model – InspectaPro

This document explains the use cases of the InspectaPro system.
It describes who interacts with the system, what each actor can do, and how the use cases support the complete inspection lifecycle.

The goal of this model is to clearly represent the business behavior of the platform, not its technical implementation.

---

## Actors

### Company Administrator
Represents the person responsible for configuring and controlling inspections inside a company.
This actor manages inspection definitions, assignments, reviews, and closures.

### Technician
Represents the field worker who performs inspections and submits results.

### Company
Represents the organization as a customer of the platform.
It is only related to subscription and service access.

### System
Represents automatic internal behavior that supports business use cases.
It does not represent a real user.

---

## Overview of the inspection lifecycle

The system supports the following high-level process:

1. An inspection form is created.
2. An inspection is created using that form.
3. The inspection is assigned to a technician.
4. The technician fills the inspection.
5. The technician sends the results.
6. The administrator reviews the inspection.
7. The inspection is closed.
8. The inspection becomes part of the history.

All use cases described below follow this lifecycle.

---

## Use cases

### 1. Create inspection form

**Primary actor:** Company Administrator

The administrator creates the structure of an inspection form.
The form defines which questions and fields must be completed during an inspection.

This form can change over time and may have different versions.

This use case supports the business need to create different inspection types for different operational activities.

---

### 2. Create inspection

**Primary actor:** Company Administrator

The administrator creates a new inspection instance using an existing inspection form.

Each inspection represents a real operational activity that must be executed in the field.

During this use case, the system automatically links the inspection to the current version of the form.

---

### 3. Assign inspection

**Primary actor:** Company Administrator

The administrator assigns an inspection to a technician.

After assignment, the technician can access the inspection and start working on it.

---

### 4. Fill inspection

**Primary actor:** Technician

The technician opens an assigned inspection and fills the form.

The technician enters values, selects options, writes notes, and may add evidence links when required.

This use case represents the execution of the inspection in the field.

---

### 5. Send inspection results

**Primary actor:** Technician

The technician submits the completed inspection.

Before the results are stored, the system checks that the information follows the structure of the form and that required data is present.

After submission, the inspection is ready to be reviewed.

---

### 6. Review inspection

**Primary actor:** Company Administrator

The administrator reviews the submitted inspection results.

The goal is to verify that the inspection is complete and that the information is valid for business and audit purposes.

---

### 7. Close inspection

**Primary actor:** Company Administrator

The administrator closes the inspection after reviewing the results.

Once closed, the inspection can no longer be edited.

The inspection becomes part of the official historical record of the company.

---

### 8. View inspection history

**Primary actor:** Company Administrator

The administrator views previous inspections and their results.

This use case supports reporting, auditing and traceability.

---

### 9. Manage subscription

**Primary actor:** Company

The company manages its service plan and subscription status.

This use case is independent from the inspection execution process.

---

## Included system behaviors

The following behaviors are not business goals by themselves.
They are internal responsibilities of the system and are included inside other use cases.

---

### Link inspection to form version

**Included in:** Create inspection  
**Primary actor:** System

When an inspection is created, the system automatically links it to a specific version of the inspection form.

This guarantees that the inspection always refers to the exact structure that was valid at the time it was created.

This behavior is essential to support historical consistency and future changes in form structures.

---

### Check inspection data

**Included in:** Send inspection results  
**Primary actor:** System

When the technician submits the inspection, the system validates the data against the form structure.

This ensures that required fields are present and that the submitted values follow the expected format.

---

## Traceability and architectural relevance

The use case model directly supports the hybrid architecture of the system:

- Business configuration and control actions (forms, inspections, assignments, reviews and closures) are stable and strongly related to structured data.
- Inspection execution and submitted results are dynamic and depend on flexible and evolving form structures.

The separation between business use cases and system behaviors ensures:

- clear responsibility boundaries,
- correct support for form evolution,
- and strong audit and historical traceability.

