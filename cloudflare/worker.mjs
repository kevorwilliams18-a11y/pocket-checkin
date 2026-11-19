const assets = {
  "/": [
    "<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"theme-color\" content=\"#fff0f7\"><title>Pocket Check-in</title><link rel=\"manifest\" href=\"/manifest.webmanifest\"><link rel=\"apple-touch-icon\" href=\"/cat-icon.svg\"><link rel=\"stylesheet\" href=\"/style.css\"><script src=\"/app.js\" defer></script><main><header><span class=\"brand\">Pocket Check-in</span><a href=\"/cdn-cgi/access/logout\">Sign out</a></header><section class=\"hero\"><div><h1 id=\"heading\">Pocket Check-in</h1><p id=\"intro\">A private space for the two of you.</p></div><div class=\"pet-box\"><button id=\"pet\" class=\"pet\" type=\"button\" aria-label=\"Pet your pocket cat\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\" aria-hidden=\"true\">\n<ellipse cx=\"118\" cy=\"175\" rx=\"74\" ry=\"9\" fill=\"#c693ce\" opacity=\".25\"/>\n<path class=\"kitty-tail\" d=\"M153 152c39 9 62-9 52-33-4-10-19-12-22-1\" fill=\"none\" stroke=\"#ae80d0\" stroke-width=\"15\" stroke-linecap=\"round\"/>\n<ellipse cx=\"120\" cy=\"139\" rx=\"52\" ry=\"36\" fill=\"#bd93dc\"/>\n<ellipse cx=\"120\" cy=\"147\" rx=\"30\" ry=\"24\" fill=\"#f9e6ff\"/>\n<ellipse cx=\"91\" cy=\"167\" rx=\"18\" ry=\"9\" fill=\"#ae80d0\"/>\n<ellipse cx=\"147\" cy=\"167\" rx=\"18\" ry=\"9\" fill=\"#ae80d0\"/>\n<path d=\"M67 83 65 40q0-8 7-5l33 22m28 0 33-22q7-3 7 5l-2 43\" fill=\"#bd93dc\" stroke=\"#bd93dc\" stroke-width=\"6\" stroke-linejoin=\"round\"/>\n<path d=\"m75 48 24 16-23 9m88-25-24 16 23 9\" fill=\"#f5a9d1\"/>\n<ellipse cx=\"120\" cy=\"93\" rx=\"63\" ry=\"45\" fill=\"#d7b6ee\"/>\n<path d=\"m112 54 2 11m12-11-2 11\" stroke=\"#b287d1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<g class=\"kitty-eyes\" fill=\"#3e2854\"><ellipse cx=\"96\" cy=\"92\" rx=\"5.5\" ry=\"8\"/><ellipse cx=\"144\" cy=\"92\" rx=\"5.5\" ry=\"8\"/></g>\n<g fill=\"#ef9fc8\"><ellipse cx=\"86\" cy=\"106\" rx=\"10\" ry=\"5\"/><ellipse cx=\"154\" cy=\"106\" rx=\"10\" ry=\"5\"/></g>\n<path d=\"M116 103q4-4 8 0l-4 4Z\" fill=\"#9e5d8c\"/>\n<path d=\"M112 111q4 5 8-3 4 8 8 3\" fill=\"none\" stroke=\"#59406c\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>\n<path d=\"m68 96-15-4m15 11-16 2m120-9 15-4m-15 11 16 2\" stroke=\"#866398\" stroke-width=\"2.3\" stroke-linecap=\"round\"/>\n<path d=\"M120 136c-9-10-19 2 0 13 19-11 9-23 0-13Z\" fill=\"#ee91c1\"/>\n</svg></button><p id=\"petSpeech\" aria-live=\"polite\">Pickles is happy you’re here.</p><button id=\"snack\">Give a snack</button></div></section><div class=\"grid\"><article id=\"compose\" hidden><h2>How are you today?</h2><form id=\"checkin\"><label for=\"mood\">Mood</label><select id=\"mood\"><option value=\"\">Choose a mood</option><option>😊 Good</option><option>😌 Okay</option><option>😴 Tired</option><option>😵‍💫 Overwhelmed</option><option>🤍 Unsure</option></select><label for=\"support\">What would feel good?</label><select id=\"support\"><option value=\"\">Choose what you need</option><option>Let me vent</option><option>Make me laugh</option><option>Call me later</option><option>Give me space</option><option>Celebrate with me</option></select><label for=\"note\">Add a note</label><textarea id=\"note\" maxlength=\"500\"></textarea><button class=\"primary\">Send to Kevor</button></form></article><article><h2 id=\"inboxTitle\">Check-ins</h2><div class=\"choices\"><button id=\"refresh\">Refresh</button><button id=\"alerts\" hidden>Enable reply alerts</button></div><p id=\"status\" role=\"status\"></p><div id=\"messages\"></div></article></div></main></html>",
    "text/html"
  ],
  "/style.css": [
    "\n*{box-sizing:border-box}body{margin:0;background:#fff0f7;color:#27203c;font:16px/1.5 system-ui,sans-serif}main{max-width:1000px;margin:auto;padding:28px 20px 45px}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;font-weight:750}.brand{color:#533294}h1,h2,p{margin:0}h1{font-size:clamp(38px,6vw,64px);line-height:1;letter-spacing:-.065em}h2{font-size:22px;letter-spacing:-.035em}p{color:#5e5274}.hero{background:#e4d5ff;border-radius:32px;padding:32px;display:grid;grid-template-columns:1fr .85fr;align-items:center;gap:20px}.hero p{margin:14px 0}.pet-box{text-align:center}.pet{display:block;margin:auto auto 6px;background:#f9f3ff;border:0;width:164px;height:146px;border-radius:48% 48% 42% 42%;font-size:80px;box-shadow:0 14px 0 #cbb5f1}.pet.pop{animation:hop .4s ease}@keyframes hop{45%{transform:translateY(-14px) rotate(-8deg)}}.pet-box p{margin:14px 0 8px;min-height:24px}.grid{display:grid;grid-template-columns:1.35fr 1fr;gap:18px;margin-top:18px}.side{display:grid;gap:18px;align-content:start}article,dialog{border:1px solid #e6d9f7;background:#fff;border-radius:24px;padding:24px}article p{margin:4px 0 12px}fieldset{border:0;padding:0;margin:18px 0}legend,label{font-weight:700}legend{margin-bottom:8px}.choices{display:flex;flex-wrap:wrap;gap:8px}button,input,select,textarea{font:inherit}button{cursor:pointer;border:1px solid #ddd0ef;background:#faf6ff;color:inherit;border-radius:15px;padding:9px 13px;font-weight:650}button:hover{background:#ede2ff}button[aria-pressed=true]{background:#e7d9ff;border-color:#7951c1}.primary{background:#55329a;color:#fff;border-color:#55329a}.primary:hover{background:#402475}textarea,input,select{display:block;width:100%;border:1px solid #cdbde1;background:#fcfaff;color:inherit;border-radius:12px;padding:9px 12px;margin:5px 0 13px}textarea{resize:vertical;min-height:76px}.pink{background:#fff0f5}.small{font-size:14px}.status{margin-top:10px}dialog{width:min(440px,calc(100% - 32px));color:inherit}dialog::backdrop{background:#28174188}.note{margin-top:14px;padding:12px;background:#fff;border-radius:12px}audio{width:100%;margin:8px 0}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #764fc0;outline-offset:3px}@media(max-width:680px){main{padding:16px 14px 30px}.grid,.hero{grid-template-columns:1fr}.hero{padding:24px}.pet-box{margin-top:7px}.pet{width:130px;height:114px;font-size:62px}article{padding:20px}}@media(prefers-reduced-motion:reduce){.pet.pop{animation:none}}\n\nbody{background:linear-gradient(145deg,#fff0f7 0%,#f5edff 70%,#fce9f6 100%);min-height:100vh}\n.hero{background:linear-gradient(120deg,#fbd9eb,#e6d5ff);border:1px solid #f4cee9}\narticle,dialog{background:#fffafd;border-color:#eed7f1}.pink{background:#ffe6f2}\n.brand{color:#704292}.primary{background:#70439a;border-color:#70439a}.primary:hover{background:#5a337e}\n.pet{display:grid;place-items:center;width:210px;height:175px;background:#fff1fa;box-shadow:0 10px 0 #d5b3eb;font-size:0}\n.pet svg{display:block;width:95%;height:95%;animation:kitty-breathe 3.4s ease-in-out infinite}\n.kitty-tail{transform-origin:153px 152px;animation:kitty-wag 2.3s ease-in-out infinite}\n.kitty-eyes{transform-origin:120px 92px;animation:kitty-blink 4.3s infinite}\n@keyframes kitty-breathe{50%{transform:translateY(-5px) rotate(1deg)}}\n@keyframes kitty-wag{50%{transform:rotate(-19deg)}}\n@keyframes kitty-blink{0%,43%,49%,100%{transform:scaleY(1)}46%{transform:scaleY(.12)}}\n@media(max-width:680px){.pet{width:172px;height:143px}}\n@media(prefers-reduced-motion:reduce){.pet svg,.kitty-tail,.kitty-eyes{animation:none}}\n.ios-emoji{display:inline-block;width:1.15em;height:1.15em;vertical-align:-.22em;object-fit:contain}\n\n[hidden]{display:none!important}",
    "text/css"
  ],
  "/app.js": [
    "const get = id => document.getElementById(id);\nlet owner = false;\nlet publicKey;\nasync function api(path, data) {\n  const response = await fetch('/api/' + path, data === undefined ? {} : {\n    method: 'POST',\n    headers: {'Content-Type': 'application/json'},\n    body: JSON.stringify(data)\n  });\n  if (!response.ok || response.redirected) throw Error('The request failed. Refresh or sign in again.');\n  return response.json();\n}\nfunction status(message) { get('status').textContent = message; }\nfunction react(message) {\n  get('petSpeech').textContent = message;\n  get('pet').classList.remove('pop');\n  void get('pet').offsetWidth;\n  get('pet').classList.add('pop');\n}\nget('pet').onclick = () => react('Pickles does a little happy dance.');\nget('snack').onclick = () => react('Pickles says thanks for the snack!');\nget('mood').onchange = () => react('Pickles is here with you.');\nfunction showMessage(message) {\n  const panel = document.createElement('section');\n  panel.className = 'note';\n  const text = document.createElement('p');\n  text.textContent = [message.mood, message.support, message.note].filter(Boolean).join(' · ');\n  panel.append(text);\n  if (message.reply) {\n    const reply = document.createElement('p');\n    reply.textContent = 'Kevor: ' + message.reply;\n    panel.append(reply);\n  }\n  if (owner && !message.reply) {\n    const form = document.createElement('form');\n    const input = document.createElement('textarea');\n    input.maxLength = 500;\n    input.required = true;\n    input.setAttribute('aria-label', 'Write a reply');\n    const button = document.createElement('button');\n    button.className = 'primary';\n    button.textContent = 'Send reply';\n    form.append(input, button);\n    form.onsubmit = async event => {\n      event.preventDefault();\n      button.disabled = true;\n      try {\n        const result = await api('reply', {id: message.id, reply: input.value});\n        status(result.alertSent ? 'Reply sent and lock-screen alert requested.' : 'Reply saved in her inbox.');\n        await loadMessages();\n      } catch (error) { status(error.message); }\n      finally { button.disabled = false; }\n    };\n    panel.append(form);\n  }\n  return panel;\n}\nasync function loadMessages() {\n  const data = await api('inbox');\n  owner = data.owner;\n  publicKey = data.publicKey;\n  get('heading').textContent = owner ? 'Your private inbox' : 'Hey, how are you, really?';\n  get('compose').hidden = owner;\n  get('alerts').hidden = owner || !publicKey || !('PushManager' in window) || !('serviceWorker' in navigator);\n  const messageList = get('messages');\n  messageList.replaceChildren(...data.messages.map(showMessage));\n  if (!data.messages.length) messageList.textContent = 'No check-ins yet.';\n}\nget('refresh').onclick = () => loadMessages().catch(error => status(error.message));\nget('checkin').onsubmit = async event => {\n  event.preventDefault();\n  const button = event.currentTarget.querySelector('button');\n  const form = event.currentTarget;\n  const entry = {mood: get('mood').value, support: get('support').value, note: get('note').value.trim()};\n  if (!Object.values(entry).some(Boolean)) return status('Choose a mood, pick what you need, or leave a note.');\n  button.disabled = true;\n  try {\n    await api('checkin', entry);\n    form.reset();\n    status('Check-in sent.');\n    await loadMessages();\n  } catch (error) { status(error.message); }\n  finally { button.disabled = false; }\n};\nget('alerts').onclick = async () => {\n  try {\n    const permission = await Notification.requestPermission();\n    if (permission !== 'granted') return status('Reply alerts are off.');\n    await navigator.serviceWorker.register('/sw.js');\n    const registration = await navigator.serviceWorker.ready;\n    const subscription = await registration.pushManager.getSubscription() ||\n      await registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: publicKey});\n    await api('subscribe', subscription.toJSON());\n    status('Reply alerts are on for this device.');\n  } catch { status('Could not enable alerts. On iPhone, open Pocket Check-in from the Home Screen.'); }\n};\nloadMessages().catch(error => status(error.message));",
    "text/javascript"
  ],
  "/sw.js": [
    "self.addEventListener('push', event => {\n  event.waitUntil(self.registration.showNotification('Pocket Check-in', {\n    body: 'Kevor replied to your check-in.',\n    tag: 'pocket-reply'\n  }));\n});\nself.addEventListener('notificationclick', event => {\n  event.notification.close();\n  event.waitUntil(clients.openWindow('/'));\n});",
    "text/javascript"
  ],
  "/cat-icon.svg": [
    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 200\" role=\"img\" aria-label=\"Pocket Check-in cat\">\n<rect width=\"240\" height=\"200\" rx=\"41\" fill=\"#f9d7ee\"/><ellipse cx=\"118\" cy=\"175\" rx=\"74\" ry=\"9\" fill=\"#c693ce\" opacity=\".25\"/>\n<path class=\"kitty-tail\" d=\"M153 152c39 9 62-9 52-33-4-10-19-12-22-1\" fill=\"none\" stroke=\"#ae80d0\" stroke-width=\"15\" stroke-linecap=\"round\"/>\n<ellipse cx=\"120\" cy=\"139\" rx=\"52\" ry=\"36\" fill=\"#bd93dc\"/>\n<ellipse cx=\"120\" cy=\"147\" rx=\"30\" ry=\"24\" fill=\"#f9e6ff\"/>\n<ellipse cx=\"91\" cy=\"167\" rx=\"18\" ry=\"9\" fill=\"#ae80d0\"/>\n<ellipse cx=\"147\" cy=\"167\" rx=\"18\" ry=\"9\" fill=\"#ae80d0\"/>\n<path d=\"M67 83 65 40q0-8 7-5l33 22m28 0 33-22q7-3 7 5l-2 43\" fill=\"#bd93dc\" stroke=\"#bd93dc\" stroke-width=\"6\" stroke-linejoin=\"round\"/>\n<path d=\"m75 48 24 16-23 9m88-25-24 16 23 9\" fill=\"#f5a9d1\"/>\n<ellipse cx=\"120\" cy=\"93\" rx=\"63\" ry=\"45\" fill=\"#d7b6ee\"/>\n<path d=\"m112 54 2 11m12-11-2 11\" stroke=\"#b287d1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<g class=\"kitty-eyes\" fill=\"#3e2854\"><ellipse cx=\"96\" cy=\"92\" rx=\"5.5\" ry=\"8\"/><ellipse cx=\"144\" cy=\"92\" rx=\"5.5\" ry=\"8\"/></g>\n<g fill=\"#ef9fc8\"><ellipse cx=\"86\" cy=\"106\" rx=\"10\" ry=\"5\"/><ellipse cx=\"154\" cy=\"106\" rx=\"10\" ry=\"5\"/></g>\n<path d=\"M116 103q4-4 8 0l-4 4Z\" fill=\"#9e5d8c\"/>\n<path d=\"M112 111q4 5 8-3 4 8 8 3\" fill=\"none\" stroke=\"#59406c\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>\n<path d=\"m68 96-15-4m15 11-16 2m120-9 15-4m-15 11 16 2\" stroke=\"#866398\" stroke-width=\"2.3\" stroke-linecap=\"round\"/>\n<path d=\"M120 136c-9-10-19 2 0 13 19-11 9-23 0-13Z\" fill=\"#ee91c1\"/>\n</svg>",
    "image/svg+xml"
  ],
  "/manifest.webmanifest": [
    "{\"name\":\"Pocket Check-in\",\"short_name\":\"Check-in\",\"start_url\":\"/\",\"display\":\"standalone\",\"icons\":[{\"src\":\"/cat-icon.svg\",\"type\":\"image/svg+xml\",\"sizes\":\"any\"}]}",
    "application/manifest+json"
  ]
};
const headers = {
  'Cache-Control':'no-store',
  'X-Content-Type-Options':'nosniff',
  'Content-Security-Policy':"default-src 'self'; frame-ancestors 'none'; base-uri 'none'",
  'Referrer-Policy':'no-referrer'
};
const json = (value, status = 200) => Response.json(value, {status, headers});
const utf8 = new TextEncoder();
const url64 = bytes => btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'');
const decode = value => Uint8Array.from(atob(value.replaceAll('-','+').replaceAll('_','/')), character => character.charCodeAt(0));
const unpack = part => JSON.parse(new TextDecoder().decode(decode(part)));

async function viewer(request, env) {
  try {
    const token = request.headers.get('Cf-Access-Jwt-Assertion');
    const [encodedHeader, encodedClaims, encodedSig] = token.split('.');
    const {alg, kid} = unpack(encodedHeader);
    const claims = unpack(encodedClaims);
    const issuer = new URL(env.ACCESS_ISSUER);
    if (issuer.protocol !== 'https:' || !issuer.hostname.endsWith('.cloudflareaccess.com')) return null;
    if (alg !== 'RS256' || claims.iss !== issuer.origin || !Array.isArray(claims.aud) ||
        !claims.aud.includes(env.ACCESS_AUD) || !(claims.exp > Date.now()/1000) ||
        (claims.nbf && claims.nbf > Date.now()/1000)) return null;
    const response = await fetch(issuer.origin + '/cdn-cgi/access/certs', {cf:{cacheTtl:300}});
    const jwk = (await response.json()).keys.find(key => key.kid === kid);
    const key = await crypto.subtle.importKey('jwk', jwk, {name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'}, false, ['verify']);
    if (!await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, decode(encodedSig), utf8.encode(encodedHeader+'.'+encodedClaims))) return null;
    const email = claims.email?.toLowerCase();
    const owner = env.OWNER_EMAIL?.trim().toLowerCase();
    const guest = env.GUEST_EMAIL?.trim().toLowerCase();
    if (!owner || !guest || owner === guest) return null;
    return email === owner ? 'owner' : email === guest ? 'guest' : null;
  } catch { return null; }
}
function appleEndpoint(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.port && !url.username && !url.password &&
      (url.hostname === 'web.push.apple.com' || url.hostname.endsWith('.push.apple.com')) &&
      url.pathname !== '/';
  } catch { return false; }
}
async function push(endpoint, env) {
  if (!appleEndpoint(endpoint) || !env.VAPID_PRIVATE_JWK || !env.VAPID_PUBLIC_KEY || !env.VAPID_SUBJECT) return false;
  const key = await crypto.subtle.importKey('jwk', JSON.parse(env.VAPID_PRIVATE_JWK), {name:'ECDSA',namedCurve:'P-256'}, false, ['sign']);
  const encode = value => url64(utf8.encode(JSON.stringify(value)));
  const claims = encode({aud:new URL(endpoint).origin,exp:Math.floor(Date.now()/1000)+3600,sub:env.VAPID_SUBJECT});
  const unsigned = encode({typ:'JWT',alg:'ES256'}) + '.' + claims;
  const signature = await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},key,utf8.encode(unsigned));
  const token = unsigned+'.'+url64(new Uint8Array(signature));
  const response = await fetch(endpoint, {method:'POST',redirect:'error',headers:{
    Authorization:'vapid t='+token+', k='+env.VAPID_PUBLIC_KEY,TTL:'300'
  }});
  if (response.status === 404 || response.status === 410) {
    await env.DB.prepare('DELETE FROM subscriptions WHERE endpoint = ?').bind(endpoint).run();
  }
  return response.ok;
}
const clean = (value, limit) => typeof value === 'string' ? value.trim().slice(0,limit) : '';
export default {
  async fetch(request, env) {
    const role = await viewer(request, env);
    if (!role) return json({error:'Access denied'},403);
    const url = new URL(request.url);
    try {
      if (request.method === 'GET' && Object.hasOwn(assets,url.pathname)) {
        const [body,type] = assets[url.pathname];
        return new Response(body,{headers:{...headers,'Content-Type':type+'; charset=utf-8'}});
      }
      if (request.method === 'GET' && url.pathname === '/api/inbox') {
        const {results} = await env.DB.prepare('SELECT id,mood,support,note,reply FROM checkins ORDER BY id DESC LIMIT 100').all();
        return json({owner:role==='owner',messages:results,publicKey:role==='guest'?env.VAPID_PUBLIC_KEY:null});
      }
      if (request.method !== 'POST' || request.headers.get('Origin') !== url.origin ||
          !request.headers.get('Content-Type')?.startsWith('application/json')) return json({error:'Not found'},404);
      const body = await request.text();
      if (body.length > 4096) return json({error:'Request too large'},413);
      const data = JSON.parse(body);
      if (role === 'guest' && url.pathname === '/api/checkin') {
        const fields = [clean(data.mood,50),clean(data.support,80),clean(data.note,500)];
        if (!fields.some(Boolean)) return json({error:'Empty check-in'},400);
        await env.DB.prepare('INSERT INTO checkins (mood,support,note) VALUES (?,?,?)').bind(...fields).run();
        return json({ok:true},201);
      }
      if (role === 'guest' && url.pathname === '/api/subscribe') {
        if (!appleEndpoint(data.endpoint) || data.endpoint.length > 2048) return json({error:'Unsupported push service'},400);
        await env.DB.prepare('INSERT INTO subscriptions (id,endpoint) VALUES (1,?) ON CONFLICT(id) DO UPDATE SET endpoint=excluded.endpoint').bind(data.endpoint).run();
        return json({ok:true});
      }
      if (role === 'owner' && url.pathname === '/api/reply') {
        const reply = clean(data.reply,500);
        if (!reply || !Number.isSafeInteger(data.id)) return json({error:'Invalid reply'},400);
        const result = await env.DB.prepare('UPDATE checkins SET reply = ? WHERE id = ? AND reply IS NULL').bind(reply,data.id).run();
        if (!result.meta.changes) return json({error:'Check-in unavailable'},409);
        const subscription = await env.DB.prepare('SELECT endpoint FROM subscriptions WHERE id = 1').first();
        const alertSent = subscription ? await push(subscription.endpoint,env).catch(() => false) : false;
        return json({ok:true,alertSent});
      }
      return json({error:'Not found'},404);
    } catch { return json({error:'Request could not be completed'},500); }
  }
};