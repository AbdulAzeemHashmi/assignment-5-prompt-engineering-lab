# Mission 6: Responsible AI Usage Prompt

## 1. Policy Writing and Risk Awareness Prompt
**Prompt:**
```text
Role: Act as a software security and compliance lead.
Task: Write a comprehensive Responsible AI Usage Policy for developers working with generative AI coding tools (e.g., Cursor, Claude, Copilot, Gemini).
Context: This policy will be stored in our repository and signed off by all engineers on the team.
Constraints: 
1. Markdown format.
2. Must address data privacy, API keys, .env config safety, client data, and proprietary code.
3. Must establish guidelines for manual output verification, code review, and testing to prevent "blind copying".
4. Must define expectations for honest AI disclosure.
Output Format: The policy content in markdown, followed by an explanation of key risks covered.
```

---

## 2. Policy File Location
The policy generated has been compiled and saved as the top-level repository file:
?? [responsible-ai-policy.md](file:///c:/Users/ABC/Documents/GitHub/assignment-5-prompt-engineering-lab/responsible-ai-policy.md)

---

## 3. Explanations of Key Risks Addressed
- **API Key Leakage**: Prevent automated web scanners from harvesting credentials pushed in commits (which can result in massive financial charges).
- **Data Privacy Violations**: Restrict pasting customer database contents, emails, or personal details, ensuring compliance with strict privacy regulations (GDPR/HIPAA).
- **Blind Copying / Code Hallucination**: AI suggestions can include outdated library implementations or subtle logic bugs. Requiring developer code ownership ensures all logic is vetted and correct.
