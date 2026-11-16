# Research — Campus Tutor Connect

**Research question:** How should a college-focused tutoring service help a student find a suitable tutor and request a session with clear expectations?

**Scope:** One workflow: choose subject → inspect tutor details → request a time → receive confirmation. This is a proposed workflow, **not a built or tested feature**.

**Method:** Desk review of three providers' own published descriptions, reviewed **November 14, 2026**. These are provider statements, not independent performance measurements. No real students were interviewed and no conversion or satisfaction results were measured.

## Three references: evidence versus implications

| Reference and original source (accessed Nov 14, 2026) | Observed from provider's description | Interpretation / possible decision (not user evidence) |
| --- | --- | --- |
| [Wyzant — How it works](https://support.wyzant.com/students-parents/find-a-tutor/how-does-wyzant-work/) | Describes searching/filtering, inspecting credentials, reviews and schedules, messaging, then booking lessons. | **Inference:** Show subject, tutor qualifications, availability and a clear request action before asking users to commit. |
| [Varsity Tutors — How We Operate](https://www.varsitytutors.com/how-we-operate) | Describes consultant-assisted matching, tutor contact to arrange sessions, and an online learning platform. | **Inference:** A guided matching option could help uncertain students; consider as a later alternative, not a proven need. |
| [Tutor.com — FAQ](https://www.tutor.com/FAQ) | Describes institution-supported access, on-demand or scheduled tutoring and browser-based sessions. | **Inference:** Clarify whether tutoring is institution-funded or privately paid, and distinguish immediate from scheduled help. |

**Source limitation:** Each source describes its own service. Features may change. The comparison does not establish which service is better, more affordable or preferred by college students.

## Compare two positions

| Position | Strength | Tradeoff | Research-informed choice |
| --- | --- | --- | --- |
| A — Student-led tutor marketplace | Wyzant illustrates browsing credentials, schedules and booking. Offers transparent choice. | Students may spend time comparing options. | **Chosen initial concept:** narrow to college subjects and a simple request flow. |
| B — Guided tutor matching | Varsity Tutors illustrates assisted matching. May reduce decisions for some learners. | Requires staff or matching logic; less direct control. | Defer pending interviews; do not claim students want this. |

## Two persona hypotheses — NOT interviews

1. **Hypothesis A: Time-constrained college student.** A fictional undergraduate who needs help in calculus and wants to compare a few available tutors before an exam. **Unverified assumptions:** short booking time and schedule clarity matter most.
2. **Hypothesis B: First-time tutoring seeker.** A fictional undergraduate unsure which tutor fits their course. **Unverified assumptions:** credentials, introductory explanations and guidance matter most.

**Tentative audience choice:** College students looking for scheduled, subject-specific tutoring (persona A). This choice is based on workflow fit with the desk research, **not observed customer demand**. Test both hypotheses with consenting real students before claiming validation.

## Proposed workflow and honest persuasion

1. Student selects a course or subject.
2. Student compares tutor cards showing verified qualifications (only if verification exists), subject, mode, availability and any disclosed price.
3. Student selects a slot and sends a session request.
4. Platform shows **pending** until the tutor accepts, then sends a confirmation. Do not represent a request as a confirmed booking.

**Trust principles:** No invented tutor ratings, student testimonials, guaranteed grades or false urgency. Clearly label sample data, prices and availability if a prototype is made. Avoid collecting unnecessary personal academic information.

## Open questions and next checks

- Are college students more interested in self-service choice or guided matching? **Planned check:** interview 3–5 consenting students using neutral questions; not yet conducted.
- Which details help someone choose a tutor? **Planned check:** compare two low-fidelity card designs with volunteer users; not yet conducted.
- Is the requested session understandable as pending? **Planned check:** ask a peer to walk through a prototype; not yet conducted.

See [decisions and verification plan](/research/decisions) and [review log](/review/).

## Source verification log — November 14, 2026

The AI assistant rechecked the three original provider pages (Wyzant was retrievable via indexed search results rather than direct page fetch). This verifies that the **provider descriptions** support the listed observations; it does **not** verify user demand, business viability, or any product test.

| Source | Check performed | Observed outcome | Limit |
| --- | --- | --- | --- |
| [Wyzant: How does Wyzant work?](https://support.wyzant.com/students-parents/find-a-tutor/how-does-wyzant-work/) | Compared source text returned in search results to research claim. | Search/filter, tutor credentials/reviews/schedules, messaging and booking are described. | Direct page fetch unavailable in this check; teammate should open the original URL independently. |
| [Varsity Tutors: How We Operate](https://www.varsitytutors.com/how-we-operate) | Read provider page, especially the process section. | Education consultants help select tutors, tutor contacts student to arrange sessions, online learning platform described. | Self-reported service process; not evidence of effectiveness. |
| [Tutor.com: FAQ](https://www.tutor.com/FAQ) | Read provider FAQ. | Institutional access, on-demand and scheduled sessions, browser-based classroom are described. | Self-reported service process; not evidence of customer preference. |

**Correction/clarification:** Wyzant also describes an Instant Book option; our proposed *pending request* flow is a deliberate narrower design choice, not a claim that all competitors require manual confirmation. [Wyzant's scheduling help](https://support.wyzant.com/students-parents/lessons/how-do-i-schedule-a-lesson-with-my-tutor/) distinguishes suggested lesson requests from confirmed bookings. No mockups or user tests have been completed.

## Integration of Shakti's independent research — November 16, 2026 (Issue #2)

Shakti contributed [her own research document](/research/shakti-contribution) in [commit 2387c89](https://github.com/davidjimen2008-spec/is117-group-business/commit/2387c89), developed from [her separate research repository](https://github.com/Shakti2008/tutorconnect-group-business). This section integrates rather than duplicates the team's shared findings.

**Project name:** The official shared documentation uses **Campus Tutor Connect**. “TutorConnect” in Shakti's original research is treated as a short working name for the same proposed concept; this is a documentation convention pending explicit team approval, not evidence of a team vote.

### Two additional adjacent references from Shakti

| Source (included in review Nov 16, 2026) | Evidence type and limit | Interpretation → proposed decision → planned check |
| --- | --- | --- |
| [Clemson University — Peer WISE Lead Tutor, Spring 2027](https://career.clemson.edu/jobs/clemson-university-peer-wise-lead-tutor-spring-2027/) | University tutoring-related role listing, not student preference research; original content still requires independent source verification. | **Inference:** subject expertise and tutoring experience may matter → show clearly sourced qualifications → ask a reviewer which profile details explain tutor suitability. **Not tested.** |
| [Illinois Valley Community College — Professional Tutor, Peer Tutoring Center position description](https://www.ivcc.edu/humanresources/jobdescriptions/level8/Professional_Tutor_Peer_Tutoring_Center.pdf) | Position description, **not a verified current vacancy**; original content still requires independent source verification. | **Inference:** coordination and schedule accuracy may matter → show session status and availability → ask a reviewer to explain each booking state. **Not tested.** |

### Persona alternatives — hypotheses, not customer evidence

- **First-time tutoring seeker (initial draft):** may need extra context about credentials and choosing a tutor.
- **Returning learner (Shakti's contribution):** may want to find the same tutor and arrange repeat sessions.

Both are unvalidated and may coexist. The initial search-first concept will support basic tutor selection; repeat-booking and guided matching remain **future possibilities**, not implemented features. **Planned check:** show both scenarios to volunteers and ask which information they need; record actual responses before deciding.

### Booking status and alternative

**Proposed first release:** Subject search → tutor comparison → **Requested/Pending** → tutor accepts → **Confirmed/Accepted** (or declines → **Declined**). A request is not a confirmed booking. [Wyzant Instant Book](https://support.wyzant.com/students-parents/find-a-tutor/instant-book-faqs-for-students/) illustrates an alternative with faster confirmation; the choice of pending requests is a limited scope decision, not a proven student preference.

**Neutral test question (not administered):** “Which approach would you choose for help needed tomorrow, and why?” Compare pending requests, instant booking and guided matching without leading respondents.
