// ═══════════════════════════════════════════════════════════
// FYNLO DEPLOYMENT CONFIG
//
// This is the ONLY file you need to touch when you deploy or
// redeploy the backend — to Render, Railway, or anywhere else.
// All three apps (fynlo-admin.html, fynlo-business.html,
// fynlo-individual.html) read the backend URL from here.
//
// Paste your backend's URL below (no trailing slash, no /api —
// that's added automatically).
//   Render example:  https://fynlo-backend.onrender.com
//   Railway example: https://fynlo-production-3664.up.railway.app
// ═══════════════════════════════════════════════════════════

const FYNLO_CONFIG = {
  //PRODUCTION_API_URL: 'https://fynlo-production-3664.up.railway.app',
  PRODUCTION_API_URL: 'https://fynlo-design.vercel.app',

  // Used automatically when running on localhost — no need to change this.
  LOCAL_API_URL: 'http://localhost:3000',
};
