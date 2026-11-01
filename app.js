/* =====================================================================
   Campus Events (SOFT4102 Team 03): all JavaScript in one file.
   Used by index.html, tests.html and analysis.html.

   EDIT ONLY THESE TWO PARTS:
     1. SETTINGS (CE_CONFIG) right below
     2. EVENTS   (CE_EVENTS) after that
   Everything else is app code: no need to touch it.
   ===================================================================== */

/* ===================== 1. SETTINGS ===================== */

/* =====================================================================
   config.js — the ONLY file to edit before Day 1 (besides events.js).
   ===================================================================== */
window.CE_CONFIG = {
  /* Paste the Google Apps Script "Web app" URL here (see apps-script/README.md).
     While empty, visits are queued on the device and NOT recorded anywhere. */
  LOG_URL: "https://script.google.com/macros/s/AKfycbxd3no1xy-dT2l-ovf5sI57xDAu8_g3pcWMTOBwtgDK1NvI2-S2sWcMplXjEj1jbaHX/exec",

  /* Pilot window — fixed in Lab 08 before any data. Qatar time. */
  PILOT_START: "2026-11-08",   // Day 1 = Sunday 8 Nov 2026
  PILOT_DAYS: 10,              // Day 10 = Tuesday 17 Nov 2026
  RETURN_FROM_DAY: 3,          // returns counted on days 3–10

  /* 10 participants: 7 students (S), 3 faculty (F). Codes only, never names.
     The code-to-contact list stays with ONE team member, offline. */
  PARTICIPANTS: ["S01","S02","S03","S04","S05","S06","S07","F01","F02","F03"],

  /* Team test codes — removed from all results. Use one for the daily log check. */
  TEST_CODES: ["T01","T02","T03","T04"],

  /* Shown on the site. */
  TEAM: "SOFT4102 Team 03",
  CONTACT_NOTE: "Questions or want to leave the study? Message the team member who invited you."
};


/* ===================== 2. EVENTS ===================== */

/* =====================================================================
   events.js — the event list. Salma & Dania update this every Sun/Tue/Thu.

   HOW TO ADD A REAL EVENT (copy a block, change the values):
     id      unique, e.g. "2026-11-10-career-talk"
     title   event name as announced
     col     IT | ENG | BUS | HLTH | OTH  (OTH = university-wide)
     cat     Workshop | Talk | Career | Competition | Social | Cultural | Volunteering
     org     organiser
     date    "YYYY-MM-DD"            time  "1:00 – 2:30 pm"
     loc     building / room
     purpose one or two sentences from the announcement
     acts    list of what happens there (can be [])
     source  REQUIRED link to the original announcement (Outlook web link,
             Navigate360 page, club Instagram post…). Lab 08 consent rule.
     sourceLabel  where that link goes, e.g. "Career Services email"
     added   "YYYY-MM-DD" the day YOU added it (drives the "New" tag).
             A future date schedules it: it appears on that day.
     audience ["student","faculty","staff"]: who can attend. Leave it out = everyone.
             Drives the audience-specific view (faculty don't see student-only events).
     capacity number of seats from the announcement (leave out if no limit)
     registeredElsewhere / registeredAsOf  optional: the organiser's own count and
             the date they gave it, if they share it. Seats left = capacity −
             (organiser count + Campus Events registrations).
     benefits e.g. ["Participation certificate","Food provided","Counts for volunteer hours"]
     orgRegistration  optional sentence if the organiser ALSO needs you to register
             with them, e.g. "Register on Navigate360 too so you get the certificate." 
     art     optional illustration key (see art.js); defaults by category
     photo   optional "images/file.jpg" (only images you have the right to use)

   Past events hide themselves automatically (Qatar date).

   ⚠ Every event below is a SAMPLE marked sample:true. The pre-flight check
   (tests.html) FAILS until all samples are replaced with real UDST events.
   ===================================================================== */
window.CE_EVENTS = [
  {id:"s1",sample:true,audience:["student"],capacity:30,benefits:["Participation certificate","Bring your own laptop"],art:"laptop",title:"Intro to Git and GitHub",col:"IT",cat:"Workshop",org:"Computing Society",
   date:"2026-11-10",time:"1:00 – 2:30 pm",loc:"Building 5, Lab 2.14",
   purpose:"A hands-on session for students who have never used version control and need it for course projects.",
   acts:["Set up Git on your own laptop","Create and clone a repository","Practise commits, branches and pull requests in pairs"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s2",sample:true,audience:["student"],capacity:400,registeredElsewhere:180,registeredAsOf:"2026-11-08",benefits:["Meet employers","CV feedback"],orgRegistration:"Career Services asks you to register on Navigate360 as well.",art:"booths",title:"Career Fair",col:"OTH",cat:"Career",org:"Career Services",
   date:"2026-11-12",time:"10:00 am – 2:00 pm",loc:"Main Atrium, Building 1",
   purpose:"Meet employers from energy, engineering, IT and healthcare who are hiring interns and graduates.",
   acts:["Employer booths","On-the-spot CV feedback","Short talks from recruiters every hour"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s3",sample:true,audience:["student"],capacity:36,benefits:["Prizes for top 3 teams","Participation certificate"],art:"bridge",title:"Bridge-Building Challenge",col:"ENG",cat:"Competition",org:"Civil Engineering Society",
   date:"2026-11-11",time:"3:00 – 6:00 pm",loc:"Engineering Workshop, Building 6",
   purpose:"Teams design and build a model bridge, then test how much weight it can hold.",
   acts:["Form teams of three","Two-hour build","Load testing and judging"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s4",sample:true,capacity:150,benefits:["Networking","Refreshments"],art:"stage",title:"Startup Pitch Night",col:"BUS",cat:"Competition",org:"Entrepreneurship Club",
   date:"2026-11-16",time:"6:00 – 8:30 pm",loc:"Auditorium, Building 2",
   purpose:"Student teams pitch business ideas to a panel of local founders and investors.",
   acts:["Five-minute pitches","Panel feedback","Networking afterwards"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s5",sample:true,capacity:24,benefits:["Participation certificate"],art:"firstaid",title:"First Aid Basics",col:"HLTH",cat:"Workshop",org:"College of Health Sciences",
   date:"2026-11-13",time:"10:00 am – 12:00 pm",loc:"Simulation Lab, Building 7",
   purpose:"Learn what to do in the first minutes of a medical emergency, open to all students.",
   acts:["CPR practice on manikins","Choking and bleeding response","Short scenario drills"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s6",sample:true,benefits:["Food provided","Live music"],art:"food",title:"International Food Day",col:"OTH",cat:"Cultural",org:"Student Affairs",
   date:"2026-11-15",time:"12:00 – 3:00 pm",loc:"Central Courtyard",
   purpose:"Celebrate the many nationalities on campus through food, music and traditional dress.",
   acts:["Country stalls run by student groups","Live music","Traditional dress parade"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s7",sample:true,capacity:200,benefits:["Q&A with the speaker"],art:"lecture",title:"Guest Lecture: AI in the Energy Sector",col:"IT",cat:"Talk",org:"College of Computing & IT",
   date:"2026-11-18",time:"6:00 – 7:30 pm",loc:"Auditorium, Building 2",
   purpose:"An industry speaker explains how machine learning is used in oil and gas operations and safety.",
   acts:["Lecture","Live demo","Audience questions"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s8",sample:true,audience:["student","faculty","staff"],capacity:60,benefits:["Refreshments","Volunteer hours"],art:"heart",title:"Blood Donation Drive",col:"HLTH",cat:"Volunteering",org:"Health Sciences Student Council",
   date:"2026-11-17",time:"9:00 am – 1:00 pm",loc:"Main Atrium, Building 1",
   purpose:"Donate blood with the national blood bank team on campus.",
   acts:["Quick health screening","Donation (about 15 minutes)","Rest and refreshments area"],
   source:"",sourceLabel:"",added:"2026-11-01"},
  {id:"s9",sample:true,audience:["student"],capacity:40,benefits:["Revision timetable template"],art:"calm",title:"Exam Stress: Study Smarter",col:"OTH",cat:"Workshop",org:"Counselling & Wellbeing",
   date:"2026-12-01",time:"11:00 am – 12:00 pm",loc:"Building 3, Room 1.08",
   purpose:"Practical techniques for planning revision and managing stress before final exams.",
   acts:["Short talk","Build your own revision timetable","Q&A with a counsellor"],
   source:"",sourceLabel:"",added:"2026-11-01"}
  ,{id:"s10",sample:true,art:"lecture",title:"Teaching with AI Tools: Faculty Roundtable",col:"OTH",cat:"Talk",org:"Centre for Teaching & Learning",
   audience:["faculty","staff"],capacity:35,benefits:["Professional development hours"],
   date:"2026-11-11",time:"12:00 – 1:00 pm",loc:"Building 1, Room 1.20",
   purpose:"Faculty share how they use AI tools in assessment design and what policies they follow.",
   acts:["Three 10-minute case studies","Open discussion"],
   source:"",sourceLabel:"",added:"2026-11-01"}
];


/* ===================== APP CODE (no need to edit below) ===================== */

/* ---- counting rules (Lab 07/08), ranking, seats ---- */

/* =====================================================================
   metrics.js — the Lab 07/08 counting rules, in one place.
   Used by the site (tracker), the analysis page and the automated tests,
   so everyone counts visits exactly the same way.

   Pre-registered rules (Lab 08, decided before any data):
   - A visit = one day per participant code, in Qatar time (UTC+3, no DST).
     Reloads and second devices on the same day count once.
   - Visits without a valid code are counted separately (never matched).
   - Test codes (T01–T04) are removed from the metric.
   - Return days are counted on pilot days 3–10 only (days 1–2 = curiosity).
   - "Returned" = 2+ separate return days.
   - SUCCESS ≥60% of finishers returned (6+ of 10)
     FAILURE ≤30% (3 or fewer of 10)
     INCONCLUSIVE otherwise, OR fewer than 8 finish, OR tracking failed.
   - Someone who never returns is "did not return", not a drop-out.
     Only people who withdraw are removed from the finishers.
   ===================================================================== */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.CEMetrics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const QATAR_OFFSET_MIN = 180; // UTC+3 all year

  /** "YYYY-MM-DD" in Qatar time for a Date, ISO string or ms timestamp. */
  function qatarDate(when) {
    const d = when instanceof Date ? when : new Date(when);
    if (isNaN(d)) return "";
    const q = new Date(d.getTime() + QATAR_OFFSET_MIN * 60000);
    return q.toISOString().slice(0, 10);
  }

  /** Whole days between two "YYYY-MM-DD" strings (b - a). */
  function daysBetween(a, b) {
    const ms = Date.UTC(+b.slice(0, 4), +b.slice(5, 7) - 1, +b.slice(8, 10)) -
               Date.UTC(+a.slice(0, 4), +a.slice(5, 7) - 1, +a.slice(8, 10));
    return Math.round(ms / 86400000);
  }

  /** Pilot day number (Day 1 = start date). */
  function dayNumber(dateStr, startStr) { return daysBetween(startStr, dateStr) + 1; }

  /** Participant codes: S01–S99 students, F01–F99 faculty, T01–T99 tests. */
  const CODE_RE = /^[SFT]\d{2}$/;
  function normalizeCode(raw) {
    const c = String(raw == null ? "" : raw).trim().toUpperCase();
    return CODE_RE.test(c) ? c : "";
  }
  const isTestCode = (c, cfg) => (cfg.TEST_CODES || []).includes(c) || /^T\d{2}$/.test(c);

  /** Small CSV parser (quotes, commas and newlines inside quotes). */
  function parseCSV(text) {
    const rows = []; let row = [], cell = "", q = false;
    text = String(text).replace(/^﻿/, "");
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) {
        if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
        else cell += ch;
      } else if (ch === '"') q = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); cell = "";
        if (row.some(v => v !== "")) rows.push(row);
        row = [];
      } else cell += ch;
    }
    row.push(cell); if (row.some(v => v !== "")) rows.push(row);
    if (!rows.length) return [];
    const head = rows[0].map(h => h.trim().toLowerCase());
    return rows.slice(1).map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] || "").trim()])));
  }

  /** Qatar date of a log row: server time first (client clocks can be wrong). */
  function rowDate(r) {
    if (r.qatar_date && /^\d{4}-\d{2}-\d{2}$/.test(r.qatar_date)) return r.qatar_date;
    return qatarDate(r.server_ts || r.timestamp || r.client_ts || "");
  }

  /**
   * Analyse the visit log.
   * rows: objects with at least {code, type, qatar_date|server_ts, device}
   * cfg:  {PILOT_START, PILOT_DAYS, RETURN_FROM_DAY, PARTICIPANTS, TEST_CODES}
   * opts: {withdrawn:[codes], trackingFailed:bool, today:"YYYY-MM-DD"}
   */
  function analyzeVisits(rows, cfg, opts) {
    opts = opts || {};
    const start = cfg.PILOT_START, lastDay = cfg.PILOT_DAYS || 10, fromDay = cfg.RETURN_FROM_DAY || 3;
    const enrolled = (cfg.PARTICIPANTS || []).map(normalizeCode).filter(Boolean);
    const withdrawn = new Set((opts.withdrawn || []).map(normalizeCode).filter(Boolean));

    const visitDays = {};          // code -> Set(day numbers inside the pilot)
    const testDays = new Set();    // pilot days with at least one test-code visit
    const anyDays = new Set();     // pilot days with any row at all
    const noCode = new Set();      // device|date pairs without a code
    const unknown = {};            // valid-looking codes not on the participant list
    let visitRows = 0, testRows = 0, outside = 0, noCodeRows = 0, dupes = 0, ignoredTypes = 0;
    const seen = new Set();

    enrolled.forEach(c => (visitDays[c] = new Set()));

    for (const r of rows) {
      const type = String(r.type || "visit").toLowerCase();
      const date = rowDate(r);
      if (!date) continue;
      const day = dayNumber(date, start);
      const inPilot = day >= 1 && day <= lastDay;
      if (inPilot) anyDays.add(day);
      if (type !== "visit") { ignoredTypes++; continue; }
      visitRows++;
      const code = normalizeCode(r.code);
      if (!code) { noCodeRows++; if (inPilot) noCode.add((r.device || "?") + "|" + date); continue; }
      if (isTestCode(code, cfg)) { testRows++; if (inPilot) testDays.add(day); continue; }
      if (!inPilot) { outside++; continue; }
      const key = code + "|" + date;
      if (seen.has(key)) { dupes++; continue; }
      seen.add(key);
      if (!visitDays[code]) { unknown[code] = (unknown[code] || 0) + 1; continue; }
      visitDays[code].add(day);
    }

    const participants = enrolled.map(code => {
      const days = [...visitDays[code]].sort((a, b) => a - b);
      const returnDays = days.filter(d => d >= fromDay && d <= lastDay);
      const status = withdrawn.has(code) ? "withdrew"
        : returnDays.length >= 2 ? "returned" : "did not return";
      return { code, role: code[0] === "F" ? "faculty" : "student", days, returnDays, status };
    });

    const finishers = participants.filter(p => p.status !== "withdrew");
    const returners = finishers.filter(p => p.status === "returned");

    // Tracking check: every completed pilot day should have the daily test-code visit
    // (the team member doing the daily log check opens the site with a T code).
    const today = opts.today || null;
    const elapsed = today ? Math.min(lastDay, dayNumber(today, start) - 1) : lastDay;
    const gaps = [];
    for (let d = 1; d <= elapsed; d++) if (!testDays.has(d)) gaps.push(d);

    const decision = decide({
      finishers: finishers.length, returners: returners.length,
      trackingFailed: !!opts.trackingFailed
    });

    return {
      participants, finishers: finishers.length, returners: returners.length,
      pct: finishers.length ? returners.length / finishers.length : 0,
      noCodeVisits: noCode.size, noCodeRows, testRows, duplicatesRemoved: dupes,
      outsideWindow: outside, unknownCodes: unknown, visitRows, ignoredTypes,
      trackingGaps: gaps, decision
    };
  }

  /** Apply the pre-registered Lab 07 criteria. */
  function decide({ finishers, returners, trackingFailed }) {
    if (trackingFailed) return { verdict: "INCONCLUSIVE", reason: "Tracking failed during the pilot." };
    if (finishers < 8) return { verdict: "INCONCLUSIVE", reason: `Only ${finishers} finished (fewer than 8).` };
    const pct = returners / finishers;
    if (pct >= 0.6) return { verdict: "SUCCESS", reason: `${returners} of ${finishers} (${Math.round(pct * 100)}%) returned on 2+ days (≥60%).` };
    if (pct <= 0.3) return { verdict: "FAILURE", reason: `${returners} of ${finishers} (${Math.round(pct * 100)}%) returned on 2+ days (≤30%).` };
    return { verdict: "INCONCLUSIVE", reason: `${returners} of ${finishers} (${Math.round(pct * 100)}%) returned: between 30% and 60%.` };
  }

  /** Exit question: "Where did you first hear about it?" → fixed categories. */
  const SOURCES = [
    ["Campus Events (our site)", /campus events|your (site|website|platform)|this (site|website|platform)|the site|the platform/i],
    ["Navigate360", /navigate/i],
    ["Outlook / email", /outlook|e-?mail|inbox|mail/i],
    ["Instagram / social media", /insta|social|whatsapp|snap|tiktok|twitter|x\.com|linkedin|telegram|group chat/i],
    ["Friends / classmates", /friend|classmate|word of mouth|someone told|roommate|colleague/i],
    ["Faculty / instructor", /faculty|instructor|professor|teacher|lecturer|advisor|dr\.?\s/i],
    ["Posters / screens", /poster|flyer|screen|banner|board/i]
  ];
  function classifySource(text) {
    for (const [label, re] of SOURCES) if (re.test(text || "")) return label;
    return "Other / unclear";
  }
  function tally(values) {
    const t = {};
    values.forEach(v => (t[v] = (t[v] || 0) + 1));
    return Object.entries(t).sort((a, b) => b[1] - a[1]);
  }

  /** LM2 past-behaviour interviews (docs/lab08/interview-log.csv). */
  function analyzeInterviews(rows) {
    const n = rows.length;
    const yes = v => /^y(es)?$/i.test(String(v || "").trim());
    return {
      n,
      roles: tally(rows.map(r => (r.role || "unknown").toLowerCase())),
      outsideCircle: rows.filter(r => yes(r.outside_our_circle)).length,
      lastChecked: tally(rows.map(r => (r.last_checked_list_on_own || "not recorded").toLowerCase())),
      firstHeard: tally(rows.map(r => r.first_heard_category || classifySource(r.first_heard_source))),
      missedLate: rows.filter(r => yes(r.missed_event_late)).length,
      usedNavigate: rows.filter(r => yes(r.ever_used_navigate_events)).length
    };
  }

  /**
   * Registrations made on Campus Events, per event.
   * rows: log rows in time order with type "rsvp" | "rsvp_cancel", detail = event id.
   * One person = participant code, or device if no code. Last action wins.
   * Test codes are excluded so team testing never shows up as real attendees.
   */
  function rsvpCounts(rows, cfg) {
    cfg = cfg || {};
    const state = {};
    for (const r of rows) {
      const type = String(r.type || "");
      if (type !== "rsvp" && type !== "rsvp_cancel") continue;
      const ev = String(r.detail || "").trim(); if (!ev) continue;
      const code = normalizeCode(r.code);
      if (code && isTestCode(code, cfg)) continue;
      const who = code || "dev:" + (r.device || "?");
      state[ev + "|" + who] = type === "rsvp";
    }
    const counts = {};
    Object.entries(state).forEach(([k, on]) => { if (on) { const ev = k.split("|")[0]; counts[ev] = (counts[ev] || 0) + 1; } });
    return counts;
  }

  /** Seats shown on an event: organiser's own count (if given) + Campus Events registrations. */
  function seatInfo(ev, campusCount) {
    const going = (ev.registeredElsewhere || 0) + (campusCount || 0);
    if (!ev.capacity) return { going, capacity: null, left: null, full: false };
    const left = Math.max(0, ev.capacity - going);
    return { going, capacity: ev.capacity, left, full: left === 0 };
  }

  /**
   * "For you" order: events matching the user's role first (others hidden unless asked),
   * then interest matches, each group soonest first.
   * profile: {role:"student"|"faculty"|"staff", interests:[cats], colleges:[codes]}
   */
  function rankEvents(events, profile, mode) {
    profile = profile || {};
    const ints = profile.interests || [], cols = profile.colleges || [];
    const score = e => (ints.includes(e.cat) ? 2 : 0) + (cols.includes(e.col) ? 1 : 0);
    const byDate = (a, b) => (a.date + (a.start || "")).localeCompare(b.date + (b.start || "")) || a.title.localeCompare(b.title);
    const list = events.slice();
    if (mode === "soonest" || (!ints.length && !cols.length)) return list.sort(byDate);
    return list.sort((a, b) => (score(b) > 0) - (score(a) > 0) || byDate(a, b) || score(b) - score(a));
  }
  const openTo = (e, role) => !e.audience || !e.audience.length || !role || e.audience.includes(role);

  return { rsvpCounts, seatInfo, rankEvents, openTo, qatarDate, daysBetween, dayNumber, normalizeCode, isTestCode, parseCSV, rowDate,
           analyzeVisits, decide, classifySource, tally, analyzeInterviews, SOURCES };
});


/* ---- visit tracking ---- */

/* =====================================================================
   tracker.js — records visits for the Lab 08 concierge pilot.

   What is sent (and nothing else):
     code        participant code (S07) or "" if none
     code_source "url" (from ?p=), "stored" (remembered on this device) or "none"
     device      random ID made on this device (to count no-code visits once per device/day)
     session     random ID per page load
     type        visit | event_open | source_click | search | filter
     detail      event id / search words / filter value
     qatar_date  day of the visit in Qatar time (the Sheet also adds its own server time)
     client_ts   device time (ISO)
   No names, emails, IP-based location or full user agents are collected.

   Delivery: each row is queued in localStorage and sent to the Apps Script
   web app; anything not confirmed as sent is retried on the next load.
   ===================================================================== */
(function () {
  "use strict";
  if (!document.getElementById("grid")) return;   // tests/analysis pages: no tracking
  const cfg = window.CE_CONFIG || {}, M = window.CEMetrics;
  const QKEY = "ce-queue", CKEY = "ce-code", DKEY = "ce-device", SKEY = "ce-stats";
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const rid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

  /* ---- participant code: URL wins, then the code remembered on this device ---- */
  const params = new URLSearchParams(location.search);
  const fromUrl = M.normalizeCode(params.get("p"));
  let code = "", source = "none";
  if (fromUrl) { code = fromUrl; source = "url"; store.set(CKEY, code); }
  else { const s = M.normalizeCode(store.get(CKEY, "")); if (s) { code = s; source = "stored"; } }
  const rawP = params.get("p");
  const invalidCode = rawP != null && rawP !== "" && !fromUrl;   // e.g. a typo in the link

  let device = store.get(DKEY, "");
  if (!device) { device = rid(); store.set(DKEY, device); }
  const session = rid();
  const stats = store.get(SKEY, { sent: 0, failed: 0, lastOk: null, lastErr: null });

  function enqueue(type, detail) {
    const now = new Date();
    const q = store.get(QKEY, []);
    q.push({ code, code_source: source, device, session, type,
             detail: String(detail || "").slice(0, 200),
             qatar_date: M.qatarDate(now), client_ts: now.toISOString(),
             page: location.pathname.split("/").pop() || "index.html" });
    store.set(QKEY, q.slice(-500));      // cap so storage never fills up
    flushSoon();
  }

  let timer = null, sending = false;
  function flushSoon() { clearTimeout(timer); timer = setTimeout(flush, 400); }
  async function flush() {
    if (sending || !cfg.LOG_URL) return;
    const q = store.get(QKEY, []);
    if (!q.length) return;
    sending = true;
    const batch = q.slice(0, 50);
    try {
      /* text/plain + no-cors = no CORS preflight, which Apps Script can't answer.
         The response is opaque, so "sent" means the browser delivered it without
         a network error. The Sheet check with test codes confirms real arrival. */
      await fetch(cfg.LOG_URL, { method: "POST", mode: "no-cors", keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ rows: batch }) });
      const rest = store.get(QKEY, []).slice(batch.length);
      store.set(QKEY, rest);
      stats.sent += batch.length; stats.lastOk = new Date().toISOString();
      if (rest.length) flushSoon();
    } catch (e) {
      stats.failed++; stats.lastErr = new Date().toISOString() + " " + (e && e.message);
      setTimeout(flush, 15000);
    } finally { sending = false; store.set(SKEY, stats); }
  }
  addEventListener("online", flush);
  addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });

  window.CETracker = {
    track: enqueue,
    get code() { return code; }, get source() { return source; }, get device() { return device; },
    invalidCode,
    queueLength: () => store.get(QKEY, []).length,
    stats: () => store.get(SKEY, stats),
    flush,
    forgetCode() { store.set(CKEY, ""); code = ""; source = "none"; }
  };

  /* One "visit" row per page load. Same-day repeats are removed in analysis
     (one visit = one day per code), so reloads can never inflate the metric. */
  enqueue("visit", invalidCode ? "invalid code in link" : "");
})();


/* ---- illustrations ---- */

/* Flat event illustrations (from the Lab 06 prototype). */
/* ---------------- Illustrations (flat event artwork) ---------------- */
const INK="#152238", W="#FFFFFF", SKIN="#E9B48A", SKIN2="#B97A50", GOLD="#FFD45C", RED="#E8473C";
const person=(x,y,s,shirt,skin,hair)=>`<g transform="translate(${x} ${y}) scale(${s})">
  <path d="M-26 70 Q-26 20 0 20 Q26 20 26 70 Z" fill="${shirt}"/>
  <circle cx="0" cy="0" r="16" fill="${skin}"/>
  <path d="M-16 -2 Q-16 -20 0 -20 Q16 -20 16 -2 Q8 -12 -16 -2Z" fill="${hair}"/></g>`;
const bg=(extra="")=>`<rect width="400" height="250" fill="var(--cc)"/>
  <circle cx="340" cy="40" r="90" fill="${W}" opacity=".12"/><circle cx="40" cy="230" r="70" fill="${W}" opacity=".1"/>${extra}`;
const floor=`<rect y="200" width="400" height="50" fill="${INK}" opacity=".12"/>`;
const ART={
  laptop:()=>bg()+floor+`
    <rect x="70" y="184" width="270" height="12" rx="4" fill="${W}" opacity=".9"/>
    <rect x="120" y="70" width="170" height="110" rx="10" fill="${INK}"/>
    <rect x="130" y="80" width="150" height="90" rx="4" fill="#1F2E48"/>
    <rect x="142" y="94" width="50" height="7" rx="3" fill="${GOLD}"/><rect x="198" y="94" width="40" height="7" rx="3" fill="#7FB2FF"/>
    <rect x="152" y="110" width="70" height="7" rx="3" fill="#8DE0B5"/><rect x="152" y="126" width="44" height="7" rx="3" fill="#FF9F7A"/><rect x="202" y="126" width="56" height="7" rx="3" fill="#7FB2FF"/>
    <rect x="142" y="142" width="64" height="7" rx="3" fill="${GOLD}"/><rect x="142" y="156" width="30" height="7" rx="3" fill="#C9B2FF"/>
    <path d="M100 180 H310 L322 192 H88 Z" fill="${W}"/>
    <rect x="320" y="150" width="26" height="34" rx="5" fill="${W}"/><path d="M346 158 q12 0 12 10 q0 10 -12 10" stroke="${W}" stroke-width="5" fill="none"/>
    <rect x="50" y="160" width="30" height="26" rx="4" fill="${INK}" opacity=".8"/><ellipse cx="58" cy="148" rx="10" ry="20" fill="#2FA36B" transform="rotate(-20 58 148)"/><ellipse cx="72" cy="146" rx="9" ry="20" fill="#3CBF7E" transform="rotate(18 72 146)"/>`,
  booths:()=>bg()+floor+`
    <rect x="30" y="60" width="150" height="30" rx="6" fill="${W}"/><rect x="45" y="70" width="70" height="10" rx="5" fill="var(--cc)"/>
    <rect x="220" y="60" width="150" height="30" rx="6" fill="${W}"/><rect x="235" y="70" width="90" height="10" rx="5" fill="${INK}" opacity=".7"/>
    <rect x="40" y="90" width="8" height="70" fill="${W}" opacity=".7"/><rect x="162" y="90" width="8" height="70" fill="${W}" opacity=".7"/>
    <rect x="230" y="90" width="8" height="70" fill="${W}" opacity=".7"/><rect x="352" y="90" width="8" height="70" fill="${W}" opacity=".7"/>
    ${person(80,120,1,INK,SKIN,INK)}${person(290,118,1,"#2F7BEA",SKIN2,INK)}
    <rect x="30" y="160" width="150" height="40" rx="6" fill="${W}"/><rect x="220" y="160" width="150" height="40" rx="6" fill="${W}"/>
    ${person(140,150,1.15,RED,SKIN2,INK)}${person(250,152,1.1,"#1FA463",SKIN,"#5A3A22")}
    <rect x="186" y="170" width="28" height="22" rx="4" fill="${INK}"/><rect x="194" y="164" width="12" height="8" rx="3" fill="none" stroke="${INK}" stroke-width="3"/>`,
  bridge:()=>bg(`<circle cx="320" cy="70" r="26" fill="${GOLD}"/>`)+`
    <rect y="190" width="400" height="60" fill="#2E86D6"/>
    <path d="M0 200 q50 -8 100 0 t100 0 t100 0 t100 0" stroke="${W}" stroke-width="3" fill="none" opacity=".5"/>
    <rect x="0" y="150" width="400" height="14" fill="${INK}"/>
    <rect x="80" y="70" width="14" height="130" fill="${INK}"/><rect x="306" y="70" width="14" height="130" fill="${INK}"/>
    <path d="M0 150 Q87 60 87 70 Q200 160 313 70 Q313 60 400 150" stroke="${W}" stroke-width="5" fill="none"/>
    ${[110,140,170,200,230,260,290].map(x=>`<line x1="${x}" y1="${x<200?150-(x-87)*0.6+((x-87)*(x-87))/180:150-(313-x)*0.6+((313-x)*(313-x))/180}" x2="${x}" y2="150" stroke="${W}" stroke-width="3"/>`).join("")}
    <rect x="170" y="128" width="40" height="22" rx="5" fill="${RED}"/><circle cx="178" cy="152" r="5" fill="${INK}"/><circle cx="202" cy="152" r="5" fill="${INK}"/>`,
  stage:()=>bg()+`
    <path d="M160 0 L240 0 L320 200 L80 200 Z" fill="${W}" opacity=".18"/>
    <rect x="40" y="175" width="320" height="25" rx="4" fill="${INK}"/>
    <rect x="250" y="70" width="100" height="70" rx="6" fill="${W}"/><path d="M262 125 L282 105 L298 115 L322 88 L338 98" stroke="var(--cc)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <rect x="296" y="140" width="6" height="35" fill="${W}"/>
    ${person(180,110,1.15,INK,SKIN,"#3B2618")}
    <path d="M140 130 h70 l-8 45 h-54 Z" fill="${W}"/><rect x="160" y="140" width="30" height="6" rx="3" fill="var(--cc)"/>
    <line x1="175" y1="130" x2="168" y2="104" stroke="${INK}" stroke-width="3"/><circle cx="167" cy="101" r="5" fill="${INK}"/>
    ${[30,80,130,230,280,330,370].map((x,i)=>`<circle cx="${x}" cy="${222+(i%2)*6}" r="15" fill="${INK}" opacity=".55"/>`).join("")}`,
  firstaid:()=>bg()+floor+`
    <rect x="120" y="70" width="160" height="120" rx="18" fill="${W}"/><rect x="175" y="58" width="50" height="20" rx="8" fill="none" stroke="${W}" stroke-width="8"/>
    <rect x="186" y="95" width="28" height="70" rx="5" fill="${RED}"/><rect x="165" y="116" width="70" height="28" rx="5" fill="${RED}"/>
    <path d="M300 120 q20 -30 40 0 t40 0" stroke="${W}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>
    <path d="M20 120 h20 l10 -22 l14 44 l10 -22 h26" stroke="${W}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="300" y="160" width="70" height="30" rx="15" fill="${W}" opacity=".85"/><rect x="330" y="160" width="10" height="30" fill="${RED}" opacity=".7"/>`,
  food:()=>bg()+`
    <path d="M0 40 Q100 80 200 40 T400 40" stroke="${W}" stroke-width="2" fill="none"/>
    ${[30,80,130,180,230,280,330,375].map((x,i)=>{const y=40+Math.sin((x/400)*Math.PI*2)*-14+ (i%2?6:0);return `<path d="M${x-12} ${y} L${x+12} ${y} L${x} ${y+26} Z" fill="${[GOLD,RED,W,"#3CBF7E"][i%4]}"/>`}).join("")}
    <rect x="20" y="170" width="360" height="22" rx="6" fill="${W}"/>
    <path d="M50 140 h90 a45 32 0 0 1 -90 0Z" fill="${RED}"/><ellipse cx="95" cy="140" rx="45" ry="8" fill="${GOLD}"/>
    <path d="M80 125 q-6 -14 0 -26 M96 122 q-6 -14 0 -26 M112 125 q-6 -14 0 -26" stroke="${W}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <ellipse cx="200" cy="160" rx="55" ry="12" fill="${W}"/><circle cx="182" cy="150" r="13" fill="#E89A3C"/><circle cx="204" cy="146" r="13" fill="#C9672A"/><circle cx="224" cy="152" r="12" fill="#E89A3C"/>
    <path d="M260 145 h90 a45 30 0 0 1 -90 0Z" fill="${INK}"/><ellipse cx="305" cy="145" rx="45" ry="8" fill="#8DE0B5"/>
    <line x1="290" y1="140" x2="330" y2="100" stroke="${W}" stroke-width="4"/><line x1="300" y1="142" x2="344" y2="108" stroke="${W}" stroke-width="4"/>`,
  lecture:()=>bg()+`
    <rect x="40" y="40" width="230" height="140" rx="10" fill="${INK}"/>
    <path d="M70 150 L110 110 L140 128 L190 75 L240 100" stroke="${GOLD}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="190" cy="75" r="8" fill="${W}"/><rect x="70" y="58" width="80" height="8" rx="4" fill="${W}" opacity=".7"/>
    <path d="M330 60 L300 120 h26 l-14 50 l46 -70 h-28 l18 -40 Z" fill="${GOLD}"/>
    ${person(320,175,.9,W,SKIN2,INK)}
    ${[40,95,150,205,260].map(x=>`<circle cx="${x}" cy="228" r="17" fill="${INK}" opacity=".55"/>`).join("")}`,
  cv:()=>bg()+floor+`
    <g transform="rotate(-6 200 125)"><rect x="135" y="35" width="130" height="170" rx="10" fill="${W}"/>
    <circle cx="165" cy="72" r="16" fill="var(--cc)" opacity=".5"/><rect x="190" y="62" width="58" height="8" rx="4" fill="${INK}"/><rect x="190" y="76" width="40" height="6" rx="3" fill="${INK}" opacity=".4"/>
    ${[105,120,135,155,170,185].map((y,i)=>`<rect x="152" y="${y}" width="${[96,80,90,70,96,60][i]}" height="6" rx="3" fill="${INK}" opacity="${i==3?.8:.25}"/>`).join("")}</g>
    <g transform="rotate(30 300 150)"><rect x="285" y="70" width="16" height="110" rx="4" fill="${GOLD}"/><path d="M285 180 h16 l-8 18 Z" fill="${INK}"/></g>
    <circle cx="85" cy="110" r="38" fill="${W}"/><path d="M68 110 l12 12 l24 -26" stroke="#1FA463" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  robot:()=>bg()+floor+`
    <line x1="200" y1="45" x2="200" y2="70" stroke="${INK}" stroke-width="5"/><circle cx="200" cy="42" r="8" fill="${RED}"/>
    <rect x="150" y="70" width="100" height="70" rx="16" fill="${W}"/><rect x="165" y="88" width="70" height="32" rx="12" fill="${INK}"/>
    <circle cx="185" cy="104" r="7" fill="#7FE0FF"/><circle cx="215" cy="104" r="7" fill="#7FE0FF"/>
    <rect x="160" y="145" width="80" height="50" rx="10" fill="${INK}"/><circle cx="200" cy="170" r="10" fill="${GOLD}"/>
    <rect x="120" y="150" width="34" height="12" rx="6" fill="${W}"/><rect x="246" y="150" width="34" height="12" rx="6" fill="${W}"/>
    <circle cx="118" cy="156" r="10" fill="${INK}"/><circle cx="282" cy="156" r="10" fill="${INK}"/>
    <circle cx="175" cy="202" r="12" fill="${INK}"/><circle cx="225" cy="202" r="12" fill="${INK}"/>
    <path d="M40 90 h40 v30 h30" stroke="${W}" stroke-width="4" fill="none" opacity=".6"/><circle cx="110" cy="120" r="5" fill="${W}"/>
    <path d="M360 70 h-40 v40 h-30" stroke="${W}" stroke-width="4" fill="none" opacity=".6"/><circle cx="290" cy="110" r="5" fill="${W}"/>`,
  heart:()=>bg()+`
    <path d="M200 205 C120 150 90 115 90 85 C90 55 115 40 140 40 C165 40 185 55 200 75 C215 55 235 40 260 40 C285 40 310 55 310 85 C310 115 280 150 200 205 Z" fill="${W}"/>
    <path d="M200 90 q-22 32 -22 48 a22 22 0 0 0 44 0 q0 -16 -22 -48Z" fill="${RED}"/>
    <path d="M30 210 q30 -40 70 -30 l40 10" stroke="${W}" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M370 210 q-30 -40 -70 -30 l-40 10" stroke="${W}" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="320" y="40" width="10" height="34" rx="3" fill="${W}" opacity=".8"/><rect x="308" y="52" width="34" height="10" rx="3" fill="${W}" opacity=".8"/>`,
  hack:()=>bg()+floor+`
    <rect x="40" y="110" width="320" height="10" rx="4" fill="${W}" opacity=".9"/>
    ${[[70,"#1F2E48"],[170,INK],[270,"#1F2E48"]].map(([x,c])=>`<rect x="${x}" y="70" width="70" height="40" rx="5" fill="${c}"/><rect x="${x+8}" y="80" width="30" height="5" rx="2" fill="${GOLD}"/><rect x="${x+8}" y="90" width="44" height="5" rx="2" fill="#8DE0B5"/>`).join("")}
    ${person(105,150,1,RED,SKIN,INK)}${person(205,148,1,W,SKIN2,INK)}${person(305,150,1,INK,SKIN,"#5A3A22")}
    <path d="M200 20 l6 14 l15 2 l-11 10 l3 15 l-13 -7 l-13 7 l3 -15 l-11 -10 l15 -2Z" fill="${GOLD}"/>`,
  calm:()=>bg(`<circle cx="200" cy="105" r="70" fill="${W}" opacity=".18"/>`)+floor+`
    <path d="M150 200 q50 -26 100 0" fill="${W}" opacity=".9"/>
    <path d="M168 160 Q168 120 200 120 Q232 120 232 160 Z" fill="${W}"/>
    <circle cx="200" cy="100" r="18" fill="${SKIN}"/><path d="M182 98 Q182 78 200 78 Q218 78 218 98 Q206 88 182 98Z" fill="${INK}"/>
    <path d="M168 150 Q140 170 150 186 M232 150 Q260 170 250 186" stroke="${W}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <rect x="40" y="150" width="70" height="12" rx="3" fill="${GOLD}"/><rect x="46" y="138" width="60" height="12" rx="3" fill="${RED}"/><rect x="40" y="126" width="66" height="12" rx="3" fill="${W}"/>
    <path d="M320 100 a26 26 0 1 0 26 26 a20 20 0 0 1 -26 -26Z" fill="${W}"/>`,
  games:()=>bg()+`
    <rect x="60" y="180" width="280" height="20" rx="6" fill="${INK}" opacity=".3"/>
    <g transform="rotate(-12 140 120)"><rect x="95" y="75" width="90" height="90" rx="18" fill="${W}"/>${[[115,95],[165,95],[140,120],[115,145],[165,145]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="${INK}"/>`).join("")}</g>
    <g transform="rotate(14 250 140)"><rect x="215" y="105" width="70" height="70" rx="14" fill="${RED}"/>${[[232,122],[268,158],[250,140]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${W}"/>`).join("")}</g>
    <path d="M320 180 q0 -30 14 -46 a14 14 0 1 1 12 0 q14 16 14 46Z" fill="${GOLD}"/>
    <g transform="rotate(-18 60 90)"><rect x="35" y="50" width="50" height="72" rx="8" fill="${W}"/><path d="M60 72 l10 14 l-10 14 l-10 -14Z" fill="${RED}"/></g>`
};


/* ---- the app ---- */

/* =====================================================================
   app.js — Campus Events (SOFT4102 Team 03)
   A UDST university events app: Lab 06 prototype + instructor feedback
   + Lab 08 pilot tracking. See docs/changes.md for what changed and why.
   ===================================================================== */
(function () {
  "use strict";
  if (!document.getElementById("grid")) return;   // only on index.html
  const cfg = window.CE_CONFIG, M = window.CEMetrics, T = window.CETracker;
  const ALL = window.CE_EVENTS || [];
  const $ = id => document.getElementById(id);

  /* ---------------- constants & helpers ---------------- */
  const COLLEGES = {
    IT:{name:"Computing & IT",v:"it"}, ENG:{name:"Engineering",v:"eng"}, BUS:{name:"Business",v:"bus"},
    HLTH:{name:"Health Sciences",v:"hlth"}, OTH:{name:"University-wide",v:"oth"}
  };
  const CATS = ["Workshop","Talk","Career","Competition","Social","Cultural","Volunteering"];
  const ROLES = {
    student:{label:"Student",plural:"students",title:"Events for students",sub:"Workshops, talks, career events, competitions and more from every UDST college."},
    faculty:{label:"Faculty",plural:"faculty",title:"Events for faculty",sub:"Talks, research and teaching sessions, and student events you may want to share with your classes."},
    staff:{label:"Staff",plural:"staff",title:"Events for staff",sub:"University-wide events, development sessions and community activities open to staff."}
  };
  const DEFAULT_ART = {Workshop:"laptop",Talk:"lecture",Career:"cv",Competition:"stage",Social:"games",Cultural:"food",Volunteering:"heart"};
  const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const LONG_M=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const LONG_D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const SHORT_D=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const parse=s=>{const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d);};
  const longDate=s=>{const d=parse(s);return `${LONG_D[d.getDay()]}, ${d.getDate()} ${LONG_M[d.getMonth()]}`;};
  const shortDate=s=>{const d=parse(s);return `${SHORT_D[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;};
  const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const safeUrl=u=>/^https?:\/\//i.test(u||"")?u:"";
  const col=k=>COLLEGES[k]||COLLEGES.OTH;
  const colVars=k=>{const v=col(k).v;return `--cc:var(--${v});--ct:var(--${v}-tint);--cx:var(--${v}-text)`;};
  const store={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};
  const audLabel=a=>(a&&a.length?a:["student","faculty","staff"]).map(r=>ROLES[r]?ROLES[r].label:r).join(" · ");
  const ico=(p,s=20)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I={
    clock:s=>ico(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,s),
    pin:s=>ico(`<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>`,s),
    cal:s=>ico(`<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>`,s),
    seat:s=>ico(`<path d="M6 20v-3M18 20v-3M5 17h14M7 17V9a5 5 0 0 1 10 0v8"/>`,s),
    people:s=>ico(`<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5.5 5.5 0 0 1 3.5 6"/>`,s),
    gift:s=>ico(`<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8S10.5 3 8 3.5 7 8 12 8zM12 8s1.5-5 4-4.5S17 8 12 8z"/>`,s),
    ext:s=>ico(`<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>`,s),
    star:s=>ico(`<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>`,s),
    home:s=>ico(`<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>`,s),
    spark:s=>ico(`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>`,s),
    ticket:s=>ico(`<path d="M3 8a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M14 4v16" stroke-dasharray="2 2"/>`,s),
    user:s=>ico(`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`,s),
    check:s=>ico(`<path d="m5 12 5 5 9-10"/>`,s)
  };
  function media(e,cls=""){
    const art=ART[e.art]||ART[DEFAULT_ART[e.cat]]||ART.calm;
    return `<div class="media ${cls}" style="${colVars(e.col)}">
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${art()}</svg>
      ${e.photo?`<img src="${esc(e.photo)}" alt="" onerror="this.remove()">`:""}</div>`;
  }
  let toastT;
  const toast=msg=>{const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2400);};

  /* ---------------- state ---------------- */
  const today = M.qatarDate(new Date());
  const EVENTS = ALL.filter(e => e && e.date >= today && (!e.added || e.added <= today));
  const isNew = e => e.added && M.daysBetween(e.added, today) <= 2;

  const PKEY="ce-profile", MKEY="ce-mine", CKEY="ce-counts";
  const roleFromCode = c => c && c[0]==="F" ? "faculty" : c && c[0]==="S" ? "student" : "";
  let profile = store.get(PKEY, null) || { role: roleFromCode(T.code) || "student", interests: [], colleges: [], setup: false };
  let mine = new Set(store.get(MKEY, []));          // event ids I registered for (this device)
  /* Server counts (cached for offline) + which of MY registrations the server
     already includes, so my own tap shows up instantly without double counting. */
  let server = store.get(CKEY, null);
  if (!server || !server.counts || !Array.isArray(server.inc)) server = { counts:{}, inc:[] };
  let state = { q:"", cat:"All", col:"All", sort: "foryou", allAud: false };
  let current = null, view = "discover";

  const saveProfile = () => store.set(PKEY, profile);
  const campusCount = id => {
    const inc = server.inc.includes(id), me = mine.has(id);
    return Math.max(0, (server.counts[id] || 0) + (me && !inc ? 1 : 0) - (!me && inc ? 1 : 0));
  };
  const going = e => M.seatInfo(e, campusCount(e.id));

  /* ---------------- seat counts from the Sheet ---------------- */
  async function loadCounts(){
    if(!cfg.LOG_URL) return;
    try{
      const r=await fetch(cfg.LOG_URL+"?counts=1",{cache:"no-store"});
      const j=await r.json();
      if(j&&j.ok){
        /* The Sheet excludes test codes, so a tester's own taps are never in it.
           Rows still waiting in the queue aren't in it either. */
        const synced = !(T.code && M.isTestCode(T.code,cfg)) && T.queueLength()===0;
        server={ counts:j.counts||{}, inc: synced ? [...mine] : [] };
        store.set(CKEY,server); renderAll();
      }
    }catch(e){/* offline: keep cached counts */}
  }

  /* ---------------- tabs / routing (in-app, hash based) ---------------- */
  const TABS=[["discover","Discover",I.home],["highlights","Highlights",I.spark],["mine","My events",I.ticket],["profile","Profile",I.user]];
  $("topTabs").innerHTML=TABS.map(([k,l])=>`<button role="tab" data-go="${k}" aria-selected="false">${l}</button>`).join("");
  $("tabbar").innerHTML=TABS.map(([k,l,ic])=>`<button data-go="${k}" aria-selected="false">${ic(22)}<span>${l}</span></button>`).join("");
  document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b){e.preventDefault();go(b.dataset.go);}});

  function go(v,replace){
    const hash = "#"+v;
    if(location.hash!==hash) history[replace?"replaceState":"pushState"](null,"",hash);
    show(v);
  }
  function show(v){
    if(!$("view-"+v)) v="discover";
    view=v; current=null;
    document.querySelectorAll(".view").forEach(x=>x.classList.add("hide"));
    $("view-"+v).classList.remove("hide");
    document.querySelectorAll("[data-go]").forEach(b=>{if(b.closest("#topTabs,#tabbar"))b.setAttribute("aria-selected",b.dataset.go===v);});
    document.title = v==="discover" ? "Campus Events – UDST university events" : `${TABS.find(t=>t[0]===v)[1]} – Campus Events`;
    window.scrollTo(0,0);
    T.track("tab",v);
    renderAll();
  }
  function route(){
    const m=location.hash.match(/^#e=(.+)$/);
    if(m){openEvent(decodeURIComponent(m[1]),true);return;}
    show((location.hash||"#discover").slice(1));
  }
  addEventListener("popstate",route);
  $("home").onclick=()=>go("discover");

  /* ---------------- cards ---------------- */
  function card(e){
    const d=parse(e.date), s=going(e), matchI=profile.interests.includes(e.cat)||profile.colleges.includes(e.col);
    const chips=(e.date===today?`<span class="chip today">Today</span>`:"")+(isNew(e)?`<span class="chip new">New</span>`:"");
    const seatTxt = s.capacity==null ? (s.going?`${s.going} going`:"") :
      s.full?`<span class="seats full">Full</span>`:`<span class="seats${s.left<=Math.max(5,s.capacity*.15)?" low":""}">${s.left} of ${s.capacity} seats left</span>`;
    return `<li><button class="card" data-id="${esc(e.id)}" style="${colVars(e.col)}">
      <span class="cwrap" style="display:block">${media(e)}
        <span class="collab"><i></i>${col(e.col).name}</span>
        ${chips?`<span class="chips">${chips}</span>`:""}
        <span class="badge" aria-hidden="true"><span class="m">${MONTHS[d.getMonth()]}</span><span class="d">${d.getDate()}</span></span>
      </span>
      <span class="cbody">
        <h3>${esc(e.title)}</h3>
        <span class="line">${I.clock(16)}${shortDate(e.date)}, ${esc(e.time)}</span>
        <span class="line">${I.pin(16)}${esc(e.loc)}</span>
        ${matchI&&state.sort==="foryou"?`<span class="match">${I.star(14)}Matches your interests</span>`:""}
        <span class="cfoot"><span>${mine.has(e.id)?`<span class="going-tag">You're going</span>`:seatTxt||esc(e.org)}</span><span class="type">${esc(e.cat)}</span></span>
      </span></button></li>`;
  }
  document.addEventListener("click",e=>{const b=e.target.closest(".card");if(b)openEvent(b.dataset.id);});

  /* ---------------- Discover ---------------- */
  function visible(){ return EVENTS.filter(e => state.allAud || M.openTo(e, profile.role)); }
  function matches(e,skip){
    const q=state.q.trim().toLowerCase();
    return (skip==="cat"||state.cat==="All"||e.cat===state.cat)&&
           (skip==="col"||state.col==="All"||e.col===state.col)&&
           (!q||[e.title,e.org,e.loc,e.purpose,e.cat,col(e.col).name,...(e.acts||[]),...(e.benefits||[])].join(" ").toLowerCase().includes(q));
  }
  function renderFilters(base){
    const cc=k=>base.filter(e=>matches(e,"col")&&(k==="All"||e.col===k)).length;
    const tc=k=>base.filter(e=>matches(e,"cat")&&(k==="All"||e.cat===k)).length;
    $("colList").innerHTML=`<li><button class="fbtn" data-col="All" aria-pressed="${state.col==="All"}">All colleges<span class="n">${cc("All")}</span></button></li>`+
      Object.entries(COLLEGES).map(([k,c])=>`<li><button class="fbtn" data-col="${k}" aria-pressed="${state.col===k}"><i style="background:var(--${c.v})"></i>${c.name}<span class="n">${cc(k)}</span></button></li>`).join("");
    $("catList").innerHTML=`<li><button class="fbtn" data-cat="All" aria-pressed="${state.cat==="All"}">All types<span class="n">${tc("All")}</span></button></li>`+
      CATS.map(c=>`<li><button class="fbtn" data-cat="${c}" aria-pressed="${state.cat===c}">${c}<span class="n">${tc(c)}</span></button></li>`).join("");
    $("clear").classList.toggle("hide",state.col==="All"&&state.cat==="All"&&!state.q.trim());
  }
  function renderDiscover(){
    const R=ROLES[profile.role]||ROLES.student;
    $("welcomeTitle").textContent=R.title; $("welcomeSub").textContent=R.sub;
    $("allAudTxt").textContent=`Also show events not open to ${R.plural}`;
    $("allAud").checked=state.allAud;
    document.querySelectorAll(".seg").forEach(b=>b.setAttribute("aria-pressed",b.dataset.sort===state.sort));
    const base=visible();
    const items=M.rankEvents(base.filter(e=>matches(e)),profile,state.sort);
    const bits=[]; if(state.col!=="All")bits.push(COLLEGES[state.col].name); if(state.cat!=="All")bits.push(state.cat+"s");
    $("resTitle").textContent=state.q.trim()?`Results for “${state.q.trim()}”`:(bits.length?bits.join(", "):(state.sort==="foryou"?"For you":"Soonest first"));
    $("count").textContent=`${items.length} event${items.length===1?"":"s"}`;
    $("interestHint").classList.toggle("hide",!(state.sort==="foryou"&&!profile.interests.length&&!profile.colleges.length));
    $("grid").innerHTML=items.length?items.map(card).join(""):`<li class="empty">${base.length?"No events match your search. Try another word or clear the filters.":"No upcoming events are listed right now."}</li>`;
    renderFilters(base);
  }
  $("colList").addEventListener("click",e=>{const b=e.target.closest(".fbtn");if(!b)return;state.col=b.dataset.col;renderDiscover();T.track("filter","college:"+state.col);});
  $("catList").addEventListener("click",e=>{const b=e.target.closest(".fbtn");if(!b)return;state.cat=b.dataset.cat;renderDiscover();T.track("filter","type:"+state.cat);});
  $("clear").onclick=()=>{state.q="";state.cat="All";state.col="All";$("q").value="";renderDiscover();T.track("filter","cleared");};
  document.querySelectorAll(".seg").forEach(b=>b.onclick=()=>{state.sort=b.dataset.sort;renderDiscover();T.track("filter","sort:"+state.sort);});
  $("allAud").onchange=e=>{state.allAud=e.target.checked;renderDiscover();T.track("filter","allAudiences:"+state.allAud);};
  let qTimer;
  $("q").addEventListener("input",e=>{
    state.q=e.target.value; if(view!=="discover"||current) go("discover"); else renderDiscover();
    clearTimeout(qTimer);qTimer=setTimeout(()=>{const q=state.q.trim();if(q)T.track("search",`${q.slice(0,60)} → ${visible().filter(x=>matches(x)).length}`);},1200);
  });

  /* ---------------- Highlights (collage section) ---------------- */
  function renderHighlights(){
    $("legend").innerHTML=Object.values(COLLEGES).map(c=>`<span><i style="background:var(--${c.v})"></i>${c.name}</span>`).join("");
    const week=M.rankEvents(visible().filter(e=>M.daysBetween(today,e.date)<=6),profile,"soonest");
    const pick=(week.length>=3?week:M.rankEvents(visible(),profile,"soonest")).slice(0,3);
    $("collage").innerHTML=pick.map((e,i)=>media(e,"m"+(i+1))).join("");
    $("weekGrid").innerHTML=week.length?week.map(card).join(""):`<li class="empty">Nothing in the next 7 days. Check Discover for later events.</li>`;
  }

  /* ---------------- My events ---------------- */
  function renderMine(){
    const list=M.rankEvents(ALL.filter(e=>mine.has(e.id)&&e.date>=today),profile,"soonest");
    $("mineGrid").innerHTML=list.length?list.map(card).join(""):`<li class="empty">You haven't registered for anything yet. Find an event in <button class="linkbtn" data-go="discover">Discover</button> and tap “Register”.</li>`;
  }

  /* ---------------- Profile (role + interests) ---------------- */
  function prefsHTML(p){
    const ch=(group,val,label,on)=>`<button type="button" class="choice" data-g="${group}" data-v="${val}" aria-pressed="${on}">${label}</button>`;
    return `<div class="pgroup"><h3>I am…</h3><div class="choices">${Object.entries(ROLES).map(([k,r])=>ch("role",k,r.label,p.role===k)).join("")}</div></div>
      <div class="pgroup"><h3>Interested in</h3><div class="choices">${CATS.map(c=>ch("interests",c,c,p.interests.includes(c))).join("")}</div></div>
      <div class="pgroup"><h3>Colleges I follow</h3><div class="choices">${Object.entries(COLLEGES).map(([k,c])=>ch("colleges",k,c.name,p.colleges.includes(k))).join("")}</div></div>`;
  }
  function bindPrefs(root,p,onChange){
    root.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{
      const g=b.dataset.g,v=b.dataset.v;
      if(g==="role") p.role=v; else { const s=new Set(p[g]); s.has(v)?s.delete(v):s.add(v); p[g]=[...s]; }
      root.innerHTML=prefsHTML(p); bindPrefs(root,p,onChange); onChange&&onChange();
    });
  }
  const logProfile=()=>T.track("profile",`role:${profile.role};interests:${profile.interests.join("|")};colleges:${profile.colleges.join("|")}`);
  let profTimer;
  function renderProfile(){
    const f=$("profileForm"); f.innerHTML=prefsHTML(profile);
    bindPrefs(f,profile,()=>{saveProfile();clearTimeout(profTimer);profTimer=setTimeout(()=>{logProfile();toast("Saved");},700);});
    $("contactNote").textContent=cfg.CONTACT_NOTE||"";
  }

  /* ---------------- Event page ---------------- */
  function openEvent(id,fromHash){
    const e=ALL.find(x=>x.id===id); if(!e){go("discover",true);return;}
    current=e; T.track("event_open",e.id);
    if(!fromHash) history.pushState(null,"","#e="+encodeURIComponent(e.id));
    document.querySelectorAll(".view").forEach(x=>x.classList.add("hide"));
    renderDetail(); $("detailView").classList.remove("hide"); window.scrollTo(0,0);
    document.title=`${e.title} – Campus Events`;
  }
  function renderDetail(){
    const e=current; if(!e) return;
    const c=col(e.col), src=safeUrl(e.source), s=going(e), me=mine.has(e.id), past=e.date<today;
    const pct=s.capacity?Math.min(100,Math.round(s.going/s.capacity*100)):0;
    const seatBlock = s.capacity!=null
      ? `<div class="seatline"><span>${s.full?"Full":`${s.left} seats left`}</span><span>${s.going} of ${s.capacity} registered</span></div><div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${s.capacity}" aria-valuenow="${s.going}" aria-label="Seats taken"><i style="width:${pct}%"></i></div>`
      : `<div class="seatline"><span>${s.going} registered</span><span>No seat limit given</span></div>`;
    const btn = past ? `<button class="primary big" disabled>This event has ended</button>`
      : me ? `<button class="ghost big" id="rsvp">${I.check(18)} You're registered. Cancel?</button>`
      : s.full ? `<button class="primary big" disabled>Full</button>`
      : `<button class="primary big" id="rsvp">Register</button>`;
    $("detailView").innerHTML=`
      <section class="ehero" style="${colVars(e.col)}"><div class="in pad">
        <div class="crumb"><button id="back">${ico(`<path d="M15 18l-6-6 6-6"/>`,18)}Back</button></div>
        <div>
          <span class="pill"><i></i>${c.name}</span><span class="pill" style="color:var(--ink)">${esc(e.cat)}</span>
          <h1>${esc(e.title)}</h1>
          <p>Organised by ${esc(e.org)}</p>
        </div>
        ${media(e)}
      </div></section>
      <div class="elayout pad">
        <div>
          <div class="facts">
            <div class="fact"><span class="ic">${I.cal(20)}</span><div><b>Date</b><span>${longDate(e.date)}</span></div></div>
            <div class="fact"><span class="ic">${I.clock(20)}</span><div><b>Time</b><span>${esc(e.time)}</span></div></div>
            <div class="fact"><span class="ic">${I.pin(20)}</span><div><b>Location</b><span>${esc(e.loc)}</span></div></div>
            <div class="fact"><span class="ic">${I.people(20)}</span><div><b>Open to</b><span>${esc(audLabel(e.audience))}</span></div></div>
          </div>
          <div class="sec"><h2>About this event</h2><p>${esc(e.purpose)}</p></div>
          ${(e.acts||[]).length?`<div class="sec"><h2>What you'll do</h2><ul>${e.acts.map(a=>`<li>${esc(a)}</li>`).join("")}</ul></div>`:""}
          ${(e.benefits||[]).length?`<div class="sec"><h2>What you get</h2><div class="tags">${e.benefits.map(b=>`<span class="tag">${esc(b)}</span>`).join("")}</div></div>`:""}
        </div>
        <aside class="regbox" aria-label="Registration">
          <h2>${I.seat(22)} Seats</h2>
          ${seatBlock}
          ${btn}
          ${e.orgRegistration&&!past?`<div class="orgnote"><b>The organiser also takes registrations.</b> ${esc(e.orgRegistration)}</div>`:""}
          ${src?`<a class="official" id="srcLink" href="${esc(src)}" target="_blank" rel="noopener noreferrer">${I.ext(16)}Official announcement${e.sourceLabel?` (${esc(e.sourceLabel)})`:""}</a>`:""}
          <small>Seat counts include registrations made on Campus Events${e.registeredElsewhere?` plus ${e.registeredElsewhere} reported by the organiser${e.registeredAsOf?` on ${shortDate(e.registeredAsOf)}`:""}`:""}. Campus Events is a student project, not an official UDST service.</small>
        </aside>
      </div>`;
    $("back").onclick=()=>history.length>1?history.back():go("discover");
    const r=$("rsvp"); if(r) r.onclick=()=>toggleRsvp(e);
    const l=$("srcLink"); if(l) l.addEventListener("click",()=>T.track("source_click",e.id));
  }
  function toggleRsvp(e){
    if(mine.has(e.id)){
      if(!confirm(`Cancel your registration for “${e.title}”?`)) return;
      mine.delete(e.id); T.track("rsvp_cancel",e.id); toast("Registration cancelled");
    } else {
      mine.add(e.id); T.track("rsvp",e.id); toast("You're registered. It's saved in My events.");
    }
    store.set(MKEY,[...mine]); renderDetail();
  }

  /* ---------------- render ---------------- */
  function renderAll(){
    if(current){renderDetail();return;}
    if(view==="discover")renderDiscover();
    else if(view==="highlights")renderHighlights();
    else if(view==="mine")renderMine();
    else if(view==="profile")renderProfile();
  }

  /* ---------------- first-run: notice, setup, code ---------------- */
  const NKEY="ce-notice-ok";
  if(!store.get(NKEY,false)) $("notice").classList.remove("hide");
  $("noticeOk").onclick=()=>{$("notice").classList.add("hide");store.set(NKEY,true);};

  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  function askCode(){
    const d=$("codeDlg"); if(!d.showModal) return;
    d.showModal();
    $("codeForm").onsubmit=ev=>{
      if(ev.submitter&&ev.submitter.value==="save"){
        const c=M.normalizeCode($("codeIn").value);
        if(!c){ev.preventDefault();$("codeErr").classList.remove("hide");return;}
        location.replace(location.pathname+"?p="+c+location.hash);   // reload so the visit is logged with the code
      }
      store.set("ce-code-asked",true);
    };
  }
  function onboard(){
    const d=$("onboard"); if(!d.showModal){profile.setup=true;saveProfile();return;}
    const draft=JSON.parse(JSON.stringify(profile));
    const body=$("obBody"); body.innerHTML=prefsHTML(draft); bindPrefs(body,draft);
    d.showModal();
    $("obForm").onsubmit=ev=>{
      if(ev.submitter&&ev.submitter.value==="save"){profile=Object.assign(draft,{setup:true});}
      else profile.setup=true;
      saveProfile(); logProfile(); renderAll();
    };
  }

  /* ---------------- Team panel (press L, tap the faint dot, or ?admin=1) ---------------- */
  function renderPanel(){
    const st=T.stats(), q=T.queueLength();
    const sample=ALL.filter(e=>e.sample).length, noSrc=ALL.filter(e=>!safeUrl(e.source)).length;
    const row=(k,v,cls)=>`<dt>${k}</dt><dd class="${cls||""}">${v}</dd>`;
    $("panelBody").innerHTML=`<dl>
      ${row("Participant code",T.code?`${T.code} (${T.source})${M.isTestCode(T.code,cfg)?" · test code":""}`:"none on this device",T.code?"":"warn")}
      ${T.invalidCode?row("Link problem","The ?p= code in this link is not valid (use S01, F02, T01…)","warn"):""}
      ${row("Today (Qatar)",`${today} · pilot day ${M.dayNumber(today,cfg.PILOT_START)}`)}
      ${row("Log URL",cfg.LOG_URL?"set":"NOT SET: nothing is being recorded",cfg.LOG_URL?"ok":"warn")}
      ${row("Waiting to send",q,q?"warn":"ok")}
      ${row("Sent from this device",`${st.sent}${st.lastOk?` · last ${st.lastOk.replace("T"," ").slice(0,16)} UTC`:""}`)}
      ${st.lastErr?row("Last error",esc(st.lastErr),"warn"):""}
      ${row("Events",`${ALL.length} in file · ${EVENTS.length} upcoming · ${sample} sample · ${noSrc} without official link`,(sample||noSrc)?"warn":"ok")}
      ${row("Profile",esc(`${profile.role} · ${profile.interests.join(", ")||"no interests"}`))}
      ${row("Device ID",T.device)}
    </dl>`;
  }
  const panel=$("obs");
  const togglePanel=()=>{panel.classList.toggle("show");if(panel.classList.contains("show"))renderPanel();};
  $("obsBtn").onclick=togglePanel;
  $("closeObs").onclick=()=>panel.classList.remove("show");
  $("sendNow").onclick=async()=>{await T.flush();setTimeout(renderPanel,800);};
  $("forget").onclick=()=>{if(confirm("Forget the participant code on this device? (Team testing only.)")){T.forgetCode();renderPanel();}};
  document.addEventListener("keydown",e=>{if(e.key.toLowerCase()==="l"&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))togglePanel();});
  const admin=new URLSearchParams(location.search).get("admin")==="1";

  /* ---------------- start ---------------- */
  route();
  if(admin) togglePanel();
  else if(standalone && !T.code && !store.get("ce-code-asked",false)) askCode();
  else if(!profile.setup) onboard();
  loadCounts();
  if("serviceWorker" in navigator && location.protocol==="https:") navigator.serviceWorker.register("sw.js").catch(()=>{});
})();