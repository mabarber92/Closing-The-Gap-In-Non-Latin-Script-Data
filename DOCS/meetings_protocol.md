﻿# Protocol of CtG Team Meetings

## 2023-12-08

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- Edited DHd abstract was successfully submitted

- Theo will present CtG in a research colloquium for Arabic DH next Thursday (14 Dec.)

- Workshop

  - Catering has been arranged
  - Xenia prepared multiple draft flyers, and the team chose one option
  - Promotional text needs to be finalized
  - Advertising: invitation email, blog post, and social media
  - Roll-up poster: should follow the pattern of other posters from Arabistik and be produced by CeDiS. Xenia will contact them.
  - Reminder should be sent to all workshop invitees once materials are ready

- Interviews

  - Two projects have been contacted; we are waiting for the answers. We may need to send reminders.
  - Should also speak with librarians about issues of long-term data preservation

- Database

  - Projects added recently were mostly from 2022 or older
  - New projects launched in 23–24 need to be investigated
  - The number of research languages covered almost doubled (and not all languages have ISO codes; this could be discussed at the DHd conference)
  - Arguments for our focus on certain languages: our outreach is mainly in the SWANA region, but in case we are asked to add projects working with other languages we are open to do so
  - Idea: adding a Japanese or Chinese project to check if the encoding will work

- SHK: we should start the process of hiring a SHK to help with adding new projects

- Website

  - Working on creating a fully static version
  - Static mode could be set via config file or environment variable
  - Wayback Machine (Internet Archive): we should snapshot our own project site periodically. Additionally, we could save all the links we have in the database, to preserve a better record of those projects. We need to make sure that such a practice would be legal, and to find an API for automatic archiving, since we have over 1,200 links.
  - Timeline should be reimplemented

- Idea for experts' database: list with names that can be filtered by language and project (again, legal questions)

- Visualizations: next to be implemented will be a Vega edge bundling chart containing project relations. Other possible charts: alluvial, bubble, sunburst.

- Schema

  - Should start adding ORCID pages of contact people
  - To add to schema: a boolean value, `maintained`, should be added to address the difference between the funding time and the general time of activity of a project

- Blog: topics of upcoming posts will be our link-checking workflow (Theo), keyword taxonomy (Xenia), and use of AI in the field of multilingual DH (Xenia).

- Data in RDF and CSV formats: scheduled for later follow-up

  - We should probably use the XML-based syntax option for RDF, rather than Turtle

- Next meeting: 22 Dec., 10:00

## 2023-11-17

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Jonas Müller-Laackman

- Discussion of recent events (BUA colloquium, Open Science Dashboards workshop)

- A number of projects have been added recently (Xenia)

- February workshop

  - Structure

    - Short talks in the beginning (PIs, SUB people)
    - General introduction to the project (Jonas)
    - Presentation 1: Xenia or Theo
    - Break
    - Presentation 2: Xenia or Theo
    - Final hour less structured

  - Possible titles for the event

    - Closing the Gap in Non-Latin-Script Data: Challenges of Data Loss in the Multilingual Digital Humanities
    - Data Survival: Challenges of Infrastructural Monolingualism
    - How to Preserve Diverse Data in a Monolingual Environment

  - Remarks

    - Leave time for people to chat, ask questions, have coffee and pretzels
    - Open event, open to the public
    - Hybrid setup possible (and desirable?)
    - English title, bilingual blurb

  - To-dos

    - Schedule for February workshop should be published ASAP
    - Brief text needed for blog post
    - Flyers to advertise the event (Xenia)
    - Participants should email Jonas' department to register in advance
    - Roll-up poster for CtG should be made before the event

- Possible collaborations: Ada Lovelace Center, QUEST Center and others

- DHd paper

  - Submission of camera-ready version of "paper" (i.e., abstract) by Dec. 4
  - Registration phase also opens on Dec. 4
  - Conference will take place in Passau in the last week of Feb.

- CtG internal matters

  - Test run for explaining our workflow (e.g., the focus on Germany; difficult enough to build networks in Germany)
  - Ideas for follow-up, expanding project
  - IDHN, OpenITI and Hist-ME are doing similar things

- General to-dos:

  - Update on survey (schedule first meeting, then second meeting with AnonymClassic) (Xenia)
  - Website updates (new visualizations needed) (Xenia)

- Next meeting Dec. 8

## 2023-09-29

**Time**: 10:00–11:15 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Jonas Müller-Laackman

- DHd conference abstracts: Reviews came back for the abstracts that we submitted, and they are overall quite positive. We can respond to the reviews, and final decisions will be made in due course.

- Hamburg workshop: Plans are underway for a "Closing the Gap" mini-workshop, to be held in Hamburg in early 2024 (most likely in February). We have a specific date nearly fixed; there is just one guest participant who still needs to confirm. Soon, hopefully, we can develop a detailed schedule and begin to publicize the event.

  - The workshop will feature two or three presentations (mostly by members of our team?), with plenty of time left for discussion and networking. It will be open to the public.

- Open-Access-Tage 2023: This week, Xenia Kudela attended the [Open-Access-Tage conference](https://open-access-tage.de/open-access-tage-2023-berlin) on behalf of "Closing the Gap." She will report back to us about this soon, and may write a post for our blog.

- BerlinUP: Beatrice Gründler brought to our attention a new initiative called [Berlin Universities Publishing](https://www.berlin-universities-publishing.de/)—"an open access publisher with a non-commercial, scholar-owned infrastructure." BerlinUP, as it's known for short, is "funded by the Berlin University Alliance and supported jointly by the libraries of Freie Universität Berlin, Humboldt Universität zu Berlin, Technische Universität Berlin and Charité – Universitätsmedizin Berlin." This is something that members of "Closing the Gap" can both promote and consider for publishing our own research.

- Collaboration with librarians: We discussed the idea of strengthening our relationships with staff members at other university libraries in Berlin—i.e., in addition to the FU Library, with which we are already collaborating actively.

- Questionnaire: The remainder of this meeting was devoted to a detailed review of the questionnaire that we plan to use when interviewing people affiliated with non-Latin-script DH projects. At this point, we are basically ready to conduct our first interview. We have a person in mind and are working on scheduling a time.

- Our next team meeting will need to be scheduled via email, with input from Xenia Kudela.

## 2023-09-08

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- Documentation

  - Documentation of our technology and workflow should be systematized. A new `DOCS` folder containing the changelog, list of dependencies, and description of our workflow will be added to the GitHub repo. (Xenia and Theo)
  - Releases: The latest GitHub release is outdated. New releases should be launched—one today and another after the new taxonomy has been implemented. For better searchability, the new release should contain three folders: `SCHEMA`, `DATA`, and one for the entire project (?). If possible, the release should be also connected to Zenodo. (Jonas)
  - The schema version should be bumped after the taxonomy has been changed. (Xenia)

- Questionnaire

  - A draft of the interview questionnaire has been prepared by Theo. The questionnaire should contain the most crucial questions to be asked of all projects. But each interview will also have its own particular points to cover. This topic is scheduled to be discussed in depth at the next meeting. (Everyone)

- Meeting in Hamburg

  - The event will take place in the first few months of 2024.
  - Guests should be asked in advance for preferred times. (Jonas?)
  - A small workshop should be offered alongside the presentation of the project. Idea: giving an overview of our data and proposing possible implementations based on this research. (Jonas, Theo, Xenia)

- Website

  - The search pane should be updated to enable filtering projects by marking multiple tags at once. (Xenia, Theo)
  - New cards with detailed information about each project (e.g., research and output languages) should be implemented soon. (Theo)
  - For now, the languages listed in the existing cards will not be changed.

- Taxonomy

  - The new keywords are ready; they will be visible on the website within a week. (Xenia)
  - The display categories for the keywords should be as follows: discipline, topic, output, resources, and methods. (Xenia)
  - The proposed division between primary disciplines, which fall within the focus of the project (e.g., Arabic or Persian Studies), and secondary disciplines (e.g., Literary Studies or Linguistics), was questioned by team members due to its hierarchical and exclusive tone. We may return to this question later.

- Interviews

  - The first interviews should take place ASAP, i.e., as soon as the questionnaire is ready. A list of the first few proposed interviewees has been set by the team privately.
  - If possible, the first interviews should take place directly after team meetings, so that everyone can sit in. Once the pace of interviews increases, other time slots will be found.

- Next meeting

  - Date and time: 2023-09-29, 10:00–11:30 (Berlin)
  - Topics: Questionnaire and other updates
  - Xenia and Theo will meet separately before this to discuss the questionnaire.
