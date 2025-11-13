# NovaCode Prototype

This repository contains a minimal scaffold for **NovaCode**, an experimental AI coding agent inspired by Cline.  The goal of this scaffold is to provide a starting point for developing the features described in the blueprint report.  It is **not** a full implementation, but it shows how to:

* Start an Electron application with a simple chat UI.
* Communicate between the Electron renderer and a Node.js backend via IPC and HTTP.
* Stub out a backend endpoint that would call your preferred LLM API.

## Getting Started

1. Install dependencies (requires Node.js and npm):

   ```sh
   cd novacode
   npm install
   ```

2. Start the backend server in one terminal:

   ```sh
   npm run backend
   ```

   This will launch an Express server on `http://localhost:3000` that accepts chat messages and responds with a placeholder reply.

3. In another terminal, launch the Electron app:

   ```sh
   npm start
   ```

   A window will appear with a simple chat interface.  Type a message and click “Send” to see the stubbed reply.

## Extending the Scaffold

This scaffold is intentionally minimal.  To build out the full NovaCode experience, you can:

* Replace the placeholder backend logic in `backend/server.js` with real calls to your chosen language model API (Anthropic, OpenAI, etc.).
* Add modules for tasks such as planning and execution, summarization, checkpoints, rule parsing, Focus Chain, and others described in the blueprint report.
* Implement a persistent storage layer (e.g., SQLite or file‑based) to save checkpoints and conversation history.
* Integrate voice dictation (e.g., using Web Speech API) and drag‑and‑drop file handling in the renderer.
* Build a plugin system and collaborative features as separate modules.

## License

This prototype scaffold is provided as‑is under the MIT license.