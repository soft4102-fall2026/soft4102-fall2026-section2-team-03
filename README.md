# Campus Events (SOFT4102 Team 03, Section 2)

**Team:** Dania Aljaja · Mawada Ghalab · Salma Abouzeid · Aly Abouzeid

Campus Events puts upcoming UDST events in one place. Students can find an event that fits them early enough to go, without checking Instagram, Outlook and Navigate360 separately.

**Why we built it:** 7 of 8 students we interviewed had missed an event because they found out too late. In our 10-day pilot (LM2), 6 of 8 students came back to the site on their own on 2 or more days. That met our success criterion, so we decided to **persevere** ([founder decision](docs/LM2/founderDecision.md)).

**Live site:** https://soft4102-fall2026.github.io/soft4102-fall2026-section2-team-03/prototypes/

> This is a student project, not an official UDST service. Every event links to (or names) its official announcement.

---

## The LM3 increment (from Lab 09)

**User journey:** A student opens the app, picks their interests and college, and sees upcoming events sorted by soonest date or as "For you". They search or filter by type or college, then open an event and read the details. They can decide whether to go without asking anyone.

| # | User story | Acceptance criterion |
|---|---|---|
| 1 | Event list: soonest first or "For you" | Only upcoming events show, sorted by date. In "For you", events matching the student's interests or college come first. |
| 2 | Search and filters | A filter shows only matching events, and clearing it shows all. Searching a word shows only events with that word in the title. |
| 3 | Event detail page | Every event page shows title, date, time, location, type, organiser and purpose. |

Full scope decisions: [docs/lab09](docs/lab09/Team03_Lab09_ProductDecisions.pdf) 

---

## How to run it

The app is plain HTML, CSS and JavaScript. It has no build step and nothing to install.

**Option 1: live site.** Open the link above.

**Option 2: locally.**
1. Clone the repo:
   ```
   git clone https://github.com/soft4102-fall2026/soft4102-fall2026-section2-team-03.git
   ```
2. Open `prototypes/index.html` in a browser (double-click it).

   Or serve the folder, which also turns on the offline/install feature:
   ```
   cd soft4102-fall2026-section2-team-03/prototypes
   python3 -m http.server 8000
   ```
   Then go to http://localhost:8000

**Useful URL options**

| Add to the URL | What it does |
|---|---|
| `?demo=0` | Hides the 6 demo events and shows real events only |
| `?p=s01` | Uses a team test code. Test visits are logged but never counted in the results |
| `?admin=1` | Opens the team panel (tracking check). You can also press **L** |

---

## How to run the tests

Open `prototypes/tests.html` in a browser. It runs:
1. **Automated tests:** visit counting rules, "For you" ranking, title search, multi-day events and upcoming-event filtering.
2. **Data checks:** every event has all required fields, valid dates and a source.
3. **Log connection:** checks the Google Apps Script visit log is reachable.

The page shows **READY** or **NOT READY** at the top. It also lists the manual checks we run before a demo.

---

## Project structure

```
prototypes/
  index.html     the app (pages and dialogs)
  app.js         all JavaScript, in this order:
                   1. SETTINGS (CE_CONFIG): e.g. SHOW_REGISTRATION: false
                   2. EVENTS (CE_EVENTS): the real event list, edited by hand
                   3. Demo events (labelled "Demo", hidden with ?demo=0)
                   4. CEMetrics: ranking (rankEvents), search, date rules, pilot counting
                   5. Tracker: sends visit rows to a Google Sheet
                   6. App: Discover, Highlights, Profile, event page
  style.css      styles
  tests.html     automated tests and pre-demo checks
  analysis.html  reads the exported visit log and applies the LM2 criteria
  sw.js          service worker (install as an app, offline fallback)
docs/            lab reports (lab01–lab09) and LM2 evidence
```

**How "For you" works (`rankEvents` in app.js):** each event gets 2 points if its type is one of the student's interests and 1 point if it is from a college they follow. Events with any points come first, and each group is sorted soonest first. With no interests set, the list is just soonest first.

**How events get in:** team members copy each event from Navigate360, college emails or Instagram into the `CE_EVENTS` list in `app.js`, with a link to the original announcement. Past events hide themselves automatically (by Qatar date).

---

## How we built it (including AI tools)

- We started from our Lab 06 clickable prototype and turned it into working software in stages. Lab 08 added visit tracking for the pilot. Lab 09/LM3 hid registration, made search title-only, added real events and added multi-day events.
- **AI-assisted development:** Claude: generating the first version of the filtering and ranking code, writing the automated tests, explaining bugs.
- How we checked AI output: every change has to pass `tests.html`, and we tested each acceptance criterion by hand on the live site.

---

## What works and what doesn't (LM3)

**Works**
- Upcoming events list, sorted soonest first or "For you"
- Title search (case-insensitive, ignores punctuation, so "pp26" finds "PP-26"), plus filters by college and type with result counts and a "Clear filters" button
- Event page with title, date, time, location, type, organiser and purpose, plus a link to the official announcement
- Multi-day events (shown with an "On now" tag until their last day)
- Profile (role, interests, colleges), saved on the device
- "Highlights" tab for the next 7 days
- Visit tracking to a Google Sheet, so we can keep checking whether students come back

**Not done / known limitations**
- **Events are added by hand** in `app.js`. There is no admin page, database or automatic import, and keeping events up to date (A3) is still our biggest risk.
- **Demo events:** 6 events labelled "Demo" fill the Engineering, Business and Health Sciences filters until we add more real college events. They are clearly tagged and can be hidden with `?demo=0`.
- **Some events have no public link** because they were only announced by email. The event page says where they were announced. <!-- TODO: update once Member 2 fills the source links -->
- **Deferred on purpose (Lab 09):** registration and seat counts, login, and saved events.
- **Dropped:** notifications and ratings.
- The profile is stored only on one device and browser.
- Search looks at titles only (this matches our acceptance criterion). Searching an organiser name such as "Career Services" finds nothing.
