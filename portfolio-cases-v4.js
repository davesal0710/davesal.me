const cases={
  "amazon": {
    "kicker": "AMAZON · OPERATIONS ANALYSIS · 2025",
    "title": "Investigating a bottleneck. Designing a testable next step.",
    "summary": "During a two-week project as an Area Manager intern, I analyzed alarms, throughput data, and floor observations to investigate a flow bottleneck. I developed the recommendation, business case, presentation, and phased pilot plan.",
    "items": [
      [
        "Role & deliverables",
        "I analyzed the data, wrote the whitepaper, built the presentation, and developed implementation steps. I presented the recommendation at the end of my internship."
      ],
      [
        "Outcome",
        "Presented the proposal at the end of my internship. The pilot did not run because the spare equipment was allocated to another project."
      ]
    ],
    "sections": [
      [
        "Understand the bottleneck",
        "An inbound process depended on a shared downstream route. Interruptions could back up upstream work and require manual intervention. I investigated whether an alternative route could reduce that dependency."
      ],
      [
        "Combine data with floor observations",
        "I compared alarm categories and downtime over the same period, assessed an alternative route, and established a throughput baseline. Floor walks helped identify staging, pedestrian access, and nearby workflows that the proposal needed to accommodate."
      ],
      [
        "Develop the recommendation",
        "I proposed a temporary connection to the alternative route, with a phased path toward a permanent configuration. The plan covered equipment availability, operations and maintenance approval, staging changes, and safety review."
      ],
      [
        "Build the business case and pilot plan",
        "I developed equipment and labor-cost assumptions and estimated the potential benefits. The proposed pilot would compare throughput, alarms, downtime, and associate feedback against the baseline before a permanent investment."
      ],
      [
        "What I took from the project",
        "A useful recommendation needs more than a promising comparison. It needs clear dependencies, implementation steps, and a practical way to evaluate the result."
      ]
    ],
    "note": "Operational details are generalized for confidentiality.",
    "gallery": [
      {
        "src": "assets/amazon-proposal-flow.svg",
        "alt": "Conceptual comparison of the existing operational dependency and the proposed pilot",
        "caption": "Conceptual illustration of the operational dependency and proposed pilot."
      }
    ]
  },
  "gym": {
    "kicker": "TETSUGYM · MOBILE PRODUCT DEVELOPMENT",
    "title": "Turning workout notes into a mobile training workflow.",
    "summary": "TetsuGym grew out of my own training: I wanted the flexibility of notes with the structure of a workout tracker. Using an AI builder, I shaped a mobile web app around routine setup, set logging, rest timing, and progress. I define the requirements, direct implementation changes, and test the experience through my own use.",
    "items": [
        [
            "My contribution",
            "Product scope, user stories, acceptance criteria, feature priorities, hands-on testing, and feedback to the AI builder."
        ],
        [
            "Core workflow",
            "Choose a template, paste a routine, or build a custom split. Review the plan, log sets, and track working weight and volume."
        ],
        [
            "Key product decision",
            "Remove estimated 1RM from the progress interface and focus on working loads, logged reps, and practical weight increments."
        ],
        [
            "Current status",
            "Working personal project with ongoing mobile refinement. Built with React, TypeScript, an Express AI endpoint, and local-first PWA storage."
        ]
    ],
    "sections": [
        [
            "Reduce the work before the workout",
            "A routine can arrive as a note or message with rep ranges, decimal weights, and machine-specific instructions. Re-entering every detail creates extra setup work. I used that problem to define a flow from unstructured text to an editable weekly plan, followed by straightforward set logging."
        ],
        [
            "Make onboarding match the starting point",
            "I simplified the initial setup to language and name, then ordered the creation paths as Templates, Paste Text, and Custom. I removed the fitness-goal question and the routine-replacement warning for new users. When custom day inputs overlapped on small screens, I turned the issue into a specific layout revision. English and Spanish interfaces support the same workflow."
        ],
        [
            "Turn AI intake into a reviewable handoff",
            "The intake requirements cover days, exercises, sets, rep ranges, working weights, rest times, and exercise notes. Gemini structures pasted text, and the review flow lets users edit fields and reassign days before saving. I specified clear import errors rather than silently substituting a generic routine. The AI request goes through the backend so API credentials stay out of the browser."
        ],
        [
            "Choose progress metrics that fit the training",
            "The updated progress view uses maximum working weight and total session volume. I asked for projections of future working loads in 5 lb steps instead of estimated one-rep max. The model uses logged weights, set-by-set reps, training frequency, and observed weight changes across 1, 3, 6, and 12-month horizons. These are planning estimates that assume consistent training, nutrition, and recovery."
        ],
        [
            "Translate an example into acceptance criteria",
            "My example was four dumbbell bench sets at 40 lb: first 12, 10, 8, 8 reps, then 12, 12, 12, 12. I used it to clarify that reaching the rep ceiling across all sets should indicate readiness for the next 5 lb step. I also asked the interface to show which logs informed the estimate and to consolidate the projection assumptions into one clear note."
        ],
        [
            "Plan for the gym environment and data ownership",
            "Local workout storage and PWA caching support training after the app has loaded, while AI imports require a connection. Set completion connects to an adjustable rest timer, with sound and notification support. JSON backup and restore give users a portable copy of their plans and logs; spreadsheet exports and session recaps extend that workflow."
        ],
        [
            "Turn usability issues into concrete revisions",
            "When Reset All did not respond, I directed a change from a browser confirmation popup to a two-step in-app confirmation. The confirmed reset clears saved data and returns to initial setup. The documented revisions also cover mobile input sizing, onboarding order, projection transparency, and duplicate notices. Each issue became a defined behavior to check in the next iteration."
        ],
        [
            "Define how to evaluate the next iteration",
            "The project docs propose time to the first logged set, successful routine imports, weekly routine completion, and the difference between projected and actual working weights as evaluation measures. I would use these to assess setup friction and refine the model over time. The main takeaway is connecting a practical user problem to requirements, implementation feedback, and a clear review process."
        ]
    ],
    "screens": [
        {
            "src": "assets/tetsu-ai-import.png",
            "title": "AI routine intake",
            "alt": "Paste Text onboarding with a workout routine and an Organize Routine button referencing Gemini AI.",
            "caption": "Earlier app capture. Paste a routine into the onboarding flow and organize it with Gemini AI."
        },
        {
            "src": "assets/tetsu-calendar.png",
            "title": "Plan the training week",
            "alt": "Monthly calendar showing a scheduled push, pull, and legs routine.",
            "caption": "Earlier app capture. A monthly view of the training split, with a starting point for each workout."
        },
        {
            "src": "assets/tetsu-workout-timer.png",
            "title": "Log sets and manage rest",
            "alt": "Lat pulldown with three completed sets and an active rest timer.",
            "caption": "Earlier app capture. Completed sets, exercise notes, and the rest timer in the logging flow."
        }
    ],
    "screenIntro": "Earlier mobile app captures, retained to show the intake and logging flow. The updated progress decisions are explained below."
},
  "pins": {
    "kicker": "DVZZPINS · BUSINESS OWNERSHIP & SUPPLIER COORDINATION",
    "title": "Turning product ideas into manufacturing requirements.",
    "summary": "Running DvzzPins meant connecting customer-facing products with the practical details of production. I worked with GS-JJ to specify pins, review proofs, request changes, coordinate timing, and manage repeat orders alongside the storefront.",
    "items": [
      [
        "Business activity",
        "199 orders and $3,760 in net sales recorded in the store exports."
      ],
      [
        "My contribution",
        "Product specifications, proof feedback, supplier communication, order follow-up, restock requests, and storefront operations."
      ]
    ],
    "sections": [
      [
        "Specify the product",
        "The correspondence documents requirements for soft enamel, pin dimensions, metal finish, clutch attachment, individual packaging, and quantities. I used these details to communicate the intended product and request a proof before manufacturing."
      ],
      [
        "Review and revise",
        "In one thread, I requested a cutout to remove unwanted filled spaces in the artwork. The supplier responded with a revised proof and advised that a larger pin size was needed. In another, I requested back engraving and later changed the restock instructions to retain the brand name without numbering. These exchanges show requirements changing through manufacturing feedback."
      ],
      [
        "Coordinate production",
        "I requested finished-product reference photos and followed up on shipping status. I also asked to change a production-and-shipping option. The supplier’s correspondence made timing constraints visible, including a holiday closure, so delivery expectations had to account for more than the quoted transit time."
      ],
      [
        "Question repeat costs",
        "On a restock, I questioned a repeat mold charge. The supplier agreed to a $50 credit toward a future order."
      ],
      [
        "Compare expansion options",
        "I explored a potential charm product by requesting quotes for different molds, shared-mold variations, and order quantities. This helped me compare production options before committing to a new product line."
      ],
      [
        "Follow up when the process breaks",
        "When a bonus sticker proof appeared missing, I contacted support and the supplier coordinator. The proof had gone to spam; after approval, the pin shipment had already left. The supplier proposed including the stickers with a future order. This is a concrete example of resolving a communication gap while working within fulfillment constraints."
      ],
      [
        "What I took from the project",
        "Product ideas become practical through clear specifications, careful proof reviews, cost questions, and consistent follow-up. Running the storefront gave me responsibility for both the customer experience and the work behind the product."
      ]
    ],
    "image": "assets/dvzz-storefront.png",
    "gallery": [
      {
        "src": "assets/dvzz-manufacturing-proof-optimized.jpg",
        "alt": "Supplier proof showing front and back pin views, dimensions, colors, finishes, and clutch locations",
        "caption": "GS-JJ manufacturing proof showing the dimensions, colors, finishes, and attachment details reviewed during supplier coordination."
      }
    ]
  },
  "capstone": {
    "kicker": "CCNY / BRAVEN · PROJECT COORDINATION",
    "title": "Keeping a team moving from problem to presentation.",
    "summary": "For a student capstone focused on communication, belonging, and engagement, I served as the primary active project manager, coordinating the team’s work from planning through presentation.",
    "items": [
      [
        "My role",
        "Planned work, coordinated tasks, held meetings and stand-ups, communicated with stakeholders, and organized presentation rehearsals."
      ],
      [
        "Team collaboration",
        "I coordinated delivery while teammates led research, prototype design, and slide design."
      ],
      [
        "Deliverable",
        "A research-informed team presentation with proposed app improvements and prototype feedback."
      ],
      [
        "What I learned",
        "Coordination means maintaining shared momentum and helping people arrive prepared to make the next decision."
      ]
    ],
    "gallery": [
      {
        "src": "assets/ccny-coordination.svg",
        "alt": "David’s primary project-manager role linked to team research, prototype work, and presentation preparation",
        "caption": "Conceptual map of my coordination role across the team’s research, prototype, and presentation work."
      }
    ]
  },
  "agent": {
    "kicker": "BA AI AGENT · AI AGENT DESIGN & PROMPT REFINEMENT",
    "title": "Designing an AI agent for guided requirements discovery.",
    "summary": "I designed and refined a specialized conversational AI agent to support my business analysis work in an expense-management training scenario. My contribution was shaping its instructions, supplying scenario decisions, reviewing its responses, and correcting unsupported output.",
    "items": [
      [
        "Agent design",
        "Defined step-by-step discovery support, concise BA drafts, source checks, and explicit assumptions. The agent was intended to guide my thinking and produce work I could explain."
      ],
      [
        "Human oversight",
        "I challenged invented claim IDs and evidence labels, then directed the agent to avoid presenting made-up identifiers as source evidence."
      ],
      [
        "AI skills demonstrated",
        "Instruction design, prompt refinement, context setting, output review, and iterative correction using a concrete BA task."
      ],
      [
        "Project context",
        "An AI agent designed for an expense-management training scenario and BA workbook support."
      ]
    ],
    "sections": [
      [
        "From informal input to a requirement",
        "I explained that a corrected card statement should replace the active file while retaining the original version. The agent helped organize that into requirements and discovery questions about replacement triggers, processing timing, and affected expense matches."
      ],
      [
        "Refine behavior through feedback",
        "When the agent introduced unsupported identifiers, I challenged them and instructed it to stop. I also requested shorter drafts and focused questions so I could understand and defend the workbook answers in my own words."
      ],
      [
        "Use AI for quality review",
        "In the example I documented, the agent flagged truncated acceptance-criterion text, an overwritten test description, incomplete traceability, and conflicting risk statuses. It proposed field-level corrections for review."
      ],
      [
        "Ask the next discovery question",
        "I designed the agent to surface exceptions, dependencies, and missing decisions. This keeps the conversation moving from an initial idea toward clearer requirements and acceptance criteria."
      ]
    ]
  }
};

const renderScreens = (screens, intro) => screens ? `<section class="case-screens" aria-label="TetsuGym app screenshots"><h3>Inside the app</h3><p>${intro || "Actual mobile app captures. Select any screen to inspect it at full size."}</p><div class="case-screen-grid">${screens.map(g=>`<figure><h4>${g.title}</h4><a href="${g.src}" target="_blank" rel="noopener" aria-label="Open full-size screenshot: ${g.title}"><img src="${g.src}" alt="${g.alt}" width="1206" height="2622" loading="lazy"></a><figcaption>${g.caption} <a href="${g.src}" target="_blank" rel="noopener">Open full size ↗</a></figcaption></figure>`).join('')}</div></section>` : '';
const modal=document.querySelector('#case-modal'),content=document.querySelector('#modal-content');
document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',event=>{if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||typeof modal.showModal !== 'function')return;const c=cases[b.dataset.modal];content.innerHTML=`<article class="modal-inner"><div class="modal-kicker">${c.kicker}</div><h2 id="case-title">${c.title}</h2><p>${c.summary}</p><div class="case-grid">${c.items.map(x=>`<div><span>${x[0]}</span><p>${x[1]}</p></div>`).join('')}</div>${c.image?`<figure class="case-figure"><img src="${c.image}" alt="Archived DvzzPins storefront showing product listings and branded backing cards"><figcaption>Archived storefront from the supplied business records.</figcaption></figure>`:""}${renderScreens(c.screens, c.screenIntro)}${(c.sections||[]).map(x=>`<section class="case-section"><h3>${x[0]}</h3><p>${x[1]}</p></section>`).join("")}${(c.gallery||[]).map(g=>`<figure class="case-figure evidence-figure"><a href="${g.src}" target="_blank" rel="noopener" aria-label="Open image at full size: ${g.alt}"><img src="${g.src}" alt="${g.alt}" loading="lazy"></a><figcaption>${g.caption} <a href="${g.src}" target="_blank" rel="noopener">Open full size ↗</a></figcaption></figure>`).join("")}${c.note?`<p class="case-note">${c.note}</p>`:""}</article>`;modal.showModal();event.preventDefault();modal.scrollTop=0;document.body.classList.add("case-open")}));
document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

modal.addEventListener("close",()=>document.body.classList.remove("case-open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>a.closest("details").open=false));
