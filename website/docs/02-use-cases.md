# Use Case Model – InspectaPro

This document explains the use cases of the InspectaPro system. It describes who interacts with the system, what each actor can do, and how the use cases support the complete inspection lifecycle.

The goal of this model is to clearly represent the business behavior of the platform, not its technical implementation.

---

## Use Case Diagram

The following diagram illustrates the interactions between the Administrators, Technicians, and the System, following the complete operational cycle.

![Use Case Diagram](/img/use-case-diagram.png)

---

## Actors

### Company Administrator

Represents the person responsible for configuring and controlling inspections inside a company. This actor manages inspection definitions, assignments, reviews, and closures.

### Technician

Represents the field worker who performs inspections and submits results.

### Company

Represents the organization as a customer of the platform. It is only related to subscription and service access.

### System

Represents automatic internal behavior that supports business use cases. It does not represent a real user.

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
The administrator creates the structure of an inspection form, defining questions and fields. This form supports different versions to allow business evolution.

### 2. Create inspection

**Primary actor:** Company Administrator  
The administrator creates a new instance using an existing form. The system automatically links the inspection to the current version of the form.

### 3. Assign inspection

**Primary actor:** Company Administrator  
The administrator assigns an inspection to a technician, enabling their access to start field work.

### 4. Fill inspection

**Primary actor:** Technician  
The technician opens an assigned task, enters values, selects options, and adds evidence links.

### 5. Send inspection results

**Primary actor:** Technician  
The technician submits the completed work. The system validates data structure and integrity before storage.

### 6. Review inspection

**Primary actor:** Company Administrator  
The administrator verifies that results are complete and valid for audit purposes.

### 7. Close inspection

**Primary actor:** Company Administrator  
Once closed, the inspection is locked and becomes an official historical record.

### 8. View inspection history

**Primary actor:** Company Administrator  
Supports reporting and traceability by viewing previous results and form versions.

### 9. Manage subscription

**Primary actor:** Company  
Independent process where the company manages its service plan.

---

## Included system behaviors

### Link inspection to form version

**Included in:** Create inspection | **Primary actor:** System  
Guarantees that the inspection refers to the exact structure valid at creation time, ensuring historical consistency.

### Check inspection data

**Included in:** Send inspection results | **Primary actor:** System  
Validates that required fields follow the expected format before finalizing the submission.

---

## Traceability and architectural relevance

The use case model directly supports the hybrid architecture of the system:

- **Structured Actions:** Administrative control (SQL) for forms, assignments, and closures.
- **Dynamic Content:** Execution results (NoSQL) for flexible and evolving form structures.
