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
