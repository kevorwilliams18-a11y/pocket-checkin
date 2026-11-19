# Private Pocket Check-in

The Cloudflare Worker serves the private version separately from GitHub Pages. Access must require a one-time code for the two approved emails. The Worker verifies Access JWTs and checks both email addresses before serving the app or accessing D1.

1. Create a Worker and a D1 database on the free plan. Apply schema.sql to the database. Bind it to the Worker as DB.
2. Protect the production workers.dev route with Cloudflare Access. Set an allow policy for the two email addresses and enable One-time PIN. Keep preview URLs disabled or protected.
3. Set OWNER_EMAIL, GUEST_EMAIL, ACCESS_ISSUER (your HTTPS Cloudflare Access team origin), and ACCESS_AUD (the Access application audience). Deploy worker.mjs as an ES module.
4. For reply alerts, configure VAPID_PRIVATE_JWK as a Worker secret and set VAPID_PUBLIC_KEY to the uncompressed P-256 public point encoded as base64url. Set VAPID_SUBJECT to a mailto contact URI. Keep the private key out of Git. On iPhone, add the app to the Home Screen, launch it there, then enable reply alerts. The alert shows a generic message and opens the signed-in inbox. Test on the recipient's iPhone before relying on alerts.

The public GitHub Pages app never reads this database.
