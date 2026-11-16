# Research → Decisions → Checks

**State:** Proposals, not verified product outcomes. Provider descriptions cross-checked November 14, 2026; Wyzant via indexed source text, other two via opened pages. No user or prototype tests conducted.

| Finding (linked evidence) | Assumption / limitation | Proposed design decision | Planned verification | Result |
| --- | --- | --- | --- | --- |
| [Wyzant](https://support.wyzant.com/students-parents/find-a-tutor/how-does-wyzant-work/) describes filters, credentials and schedules. | College users may also value these fields; untested. | Tutor cards with subject, credentials and availability. | Ask peers to locate a matching tutor from mock cards. | **Not tested** |
| [Varsity Tutors](https://www.varsitytutors.com/how-we-operate) describes assisted matching. | Some students might prefer guidance; untested. | Keep guided matching as an alternative, not initial scope. | Ask users to compare guided and self-directed concepts. | **Not tested** |
| [Tutor.com](https://www.tutor.com/FAQ) distinguishes scheduled and on-demand support. | Users may confuse requests and confirmations. | Label booking state as requested, accepted or declined. | Have reviewer explain each state from a wireframe. | **Not tested** |

## Decision history

- **Nov 14, 2026 — Initial research draft:** Chose a student-led, scheduled tutor-request workflow because it is narrow and comparable to the Wyzant example. This is a design hypothesis, not customer validation.
- **Pending:** Peer issue → team response → linked documentation/code commit or PR → actual verification → reviewer retry → resolution. Do not mark complete until evidence exists.

## Review checklist

1. Open one original provider source and confirm the corresponding observation is supported.
2. Trace the observation to the proposed design decision and its check.
3. Challenge at least one persona or audience assumption.
4. File a GitHub issue with concrete feedback.
5. Record decision (implement, investigate, defer or decline), reasoning and linked change.
6. Report the check performed and its observed outcome; request reviewer retry before closing accepted fixes.

**No customer interviews, review outcomes or test passes have been recorded.**

## Additional source distinction

Wyzant offers both tutor-contact/request workflows and [Instant Book](https://support.wyzant.com/students-parents/find-a-tutor/instant-book-faqs-for-students/). We chose **request → pending → accepted** as a proposed initial flow, not because this is the only competitor pattern. A peer should challenge whether an instant-book option better suits time-constrained students. **Status: question open, not user-tested.**

## Issue #2 integration decisions — Nov 16, 2026

- **Implement:** Link Shakti's committed research in the official shared record, add her two adjacent university role references, and preserve their evidence limitations. [Shakti's commit](https://github.com/davidjimen2008-spec/is117-group-business/commit/2387c89).
- **Implement:** Explicitly distinguish **Requested/Pending**, **Confirmed/Accepted**, and **Declined**. Instant booking is an alternative, not the current scope.
- **Implement:** Compare first-time and returning-learner hypothetical personas without presenting either as validated.
- **Defer:** Automated guided matching, instant booking and repeat-booking implementation pending actual student input and a later planning/build milestone.
- **Check performed:** Compared Shakti's committed Markdown and issue comments with the updated research/decision text; checked that claims remain labeled as inference and checks as planned. **Not** a prototype test or independent verification of Clemson/IVCC source contents.
- **Pending:** Shakti's independent source verification and reviewer retry, plus David's personal confirmation of the proposed decision.
