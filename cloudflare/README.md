# Pocket Check-in on Cloudflare

The Worker serves the public check-in at / and Kevor’s private dashboard at /admin. Visitors can submit without an account. Replies are scoped to a randomly generated key kept in the browser that submitted the check-in. Clearing browser storage or switching devices loses access to those replies.

1. Apply schema.sql to a new D1 database and bind it to the Worker as DB.
2. Configure Cloudflare Access to protect /admin and its subpaths with an email allow policy for Kevor. Keep the public form, /api endpoints, and required assets outside the Access policy. The Worker also verifies the Access JWT and owner email on every dashboard request.
3. Set OWNER_EMAIL, ACCESS_ISSUER (the HTTPS Access team origin), and ACCESS_AUD. Deploy worker.mjs as an ES module. Verify the public form and signed-out dashboard separately before sharing.
4. For optional iPhone alerts, set VAPID_PRIVATE_JWK as a Worker secret, VAPID_PUBLIC_KEY as the base64url uncompressed P-256 public point, and VAPID_SUBJECT as a mailto contact URI. Install the public Worker page on the iPhone Home Screen and enable alerts from there. Test delivery on the recipient’s device.

The GitHub Pages version stays separate until the public Worker URL has been verified.
