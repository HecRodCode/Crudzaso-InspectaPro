# HYBRID ARCHITECTURAL MODELING

## SaaS Operational Inspection Management System

### Crudzaso

---

# 1. Research

## 1.1 JSON

JSON (JavaScript Object Notation) is a lightweight data interchange
format based on key--value structures and nested arrays.

### Characteristics:

- Flexible\
- Hierarchical\
- Extensible\
- Does not require a rigid schema\
- Ideal for dynamic data

Example:

```json
{
  "questionId": "q1",
  "type": "boolean",
  "value": true
}
```

JSON enables modeling complex forms with different field types within
the same structure.

---

## 1.2 Dynamic Schemas in NoSQL

Document databases allow:

- Each document to have a different structure\
- New fields to be added without migrations\
- Multiple versions of a form to coexist

Example:

Document A:

```json
{ "temperature": 35 }
```

Document B:

```json
{ "temperature": 35, "humidity": 80 }
```

Both can be stored without altering a global structure.

---

## 1.3 Embedded vs References

### Embedded Documents

Related data is stored inside the parent document.

Advantages:

- Faster reads\
- Fewer queries\
- Contextual consistency

Disadvantages:

- Document size can grow significantly

---

### References

Only the ID that points to another document is stored.

Advantages:

- Modularity\
- Reusability

Disadvantages:

- Requires multiple queries

For the inspection system:

- Answers should be embedded.\
- The administrative inspection record remains in SQL and is
  referenced from the NoSQL document.

---

# 2. Why Variable Forms Do Not Fit Well in SQL

Inspection forms:

- Change over time\
- Do not always share the same structure\
- May include different data types

SQL requires:

- Predefined columns\
- Rigid schemas\
- Structural migrations when data changes

Possible SQL alternatives:

## Tables per inspection type

- Poor scalability\
- Structural duplication

## EAV Model (Entity--Attribute--Value)

Problems:

- Complex queries\
- Difficult indexing\
- Inefficient reporting\
- Complicated validations

Conclusion:

SQL is not designed for highly dynamic structures. NoSQL handles this
type of information more efficiently.

---

# 3. Document Model (NoSQL)

## Visual Representation

    InspectionResult
    │
    ├── _id
    ├── inspectionSqlId  ← Reference to SQL
    ├── companyId
    ├── formVersion
    ├── completedAt
    │
    ├── technician
    │   ├── id
    │   └── name
    │
    ├── location
    │   ├── lat
    │   └── lng
    │
    ├── answers [ ]
    │   ├── questionId
    │   ├── type
    │   ├── value
    │   └── notes / unit
    │
    └── additionalMetadata
        ├── device
        ├── offlineMode
        └── durationSeconds

---

## Complete JSON Example

```json
{
  "_id": "64f8912ab129a",
  "inspectionSqlId": 2451,
  "companyId": 12,
  "formVersion": 3,
  "completedAt": "2026-02-14T10:45:00Z",
  "technician": {
    "id": 87,
    "name": "Carlos Mejía"
  },
  "location": {
    "lat": 6.2442,
    "lng": -75.5812
  },
  "answers": [
    {
      "questionId": "q1",
      "type": "boolean",
      "value": true,
      "notes": "Properly labeled"
    },
    {
      "questionId": "q2",
      "type": "number",
      "value": 95,
      "unit": "psi"
    },
    {
      "questionId": "q3",
      "type": "evidence",
      "value": ""
    }
  ],
  "additionalMetadata": {
    "device": "Android",
    "offlineMode": false,
    "durationSeconds": 420
  }
}
```

---

# 4. Conclusion

The inspection system combines structured data and dynamic data.

- SQL is ideal for companies, users, roles, and administrative
  inspections.
- NoSQL is ideal for variable forms and responses.

The hybrid architecture guarantees:

- Data integrity\
- Flexibility\
- Scalability\
- Maintainability

It is the most technically appropriate solution for a SaaS-based
operational inspection system.
