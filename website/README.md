# InspectaPro – Documentation Docusaurus

This directory contains the **Docusaurus** engine used to render the InspectaPro technical documentation into an interactive web portal.

## 🛠 Prerequisites

Before running the portal, ensure you have `Node.js` installed and that you are inside the `website/` directory.

## 🚀 Setup & Local Development

1. **Install Dependencies:**

Since we are using `Mermaid` for diagrams, you must install the specific themes:

```bash
npm install
```

2. Start the Development Server:

```bash
npm start
```

- The portal will be available at http://localhost:3000.

## 📂 Content Management

The content of this portal is mirrored from the root docs/ and diagrams/ folders:

- Markdown Files: Located in `./docs/` These are the English source files for all modeling explanations.
- Static Assets: Located in `./static/img/` All system diagrams must be placed here to be rendered correctly.
- Navigation: Managed via `sidebars.js` to ensure a logical flow from Business Case to Architecture Justification.

## 🏗 Build

To generate the final static files for production (e.g., for GitHub Pages):

```bash
npm run build
```

The output will be generated in the `./build/` directory.