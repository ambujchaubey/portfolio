# Portfolio Customization Guide

## Quick Content Updates (No Code Changes Required)

All personal content is centralized in a single file: `src/data/resume.ts`

### What You Can Customize:

| Section | Where to Edit |
|---------|---------------|
| Name, Title, Email, Phone | `personalInfo` object |
| Social Links (GitHub, LinkedIn) | `personalInfo.social` |
| Hero Typing Texts | `typingTexts` array |
| About Me Summary | `summary` array |
| Skills Categories | `skills` object |
| Work Experience | `experiences` array |
| Projects | `projects` array |
| Education | `education` array |
| Certifications | `certifications` array |
| Achievements | `achievements` array |
| Navigation Links | `navLinks` array |

### Adding a New Project:
```typescript
{
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description for expanded view",
  techStack: ["Tech1", "Tech2"],
  category: "Category", // Must match one in projectCategories
  highlights: ["Highlight 1", "Highlight 2"],
  github: "https://github.com/...", // optional
  live: "https://live-demo.com",     // optional
}
```

### Adding a New Skill Category:
Add a new key to the `skills` object in `resume.ts`, then add the corresponding icon and color in `src/components/sections/skills.tsx`.

## Setup EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (e.g., Gmail)
3. Create a template with variables: `from_name`, `from_email`, `subject`, `message`, `to_name`
4. In `src/components/sections/contact.tsx`, replace:
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID
   - `YOUR_PUBLIC_KEY` with your public key

## Deployment to Vercel

1. Push to GitHub: `git add . && git commit -m "Initial portfolio" && git push`
2. Go to [vercel.com](https://vercel.com) → Import your GitHub repo
3. Framework: Next.js (auto-detected)
4. Deploy!

## Adding Profile Photo

Replace the initials avatar in `src/components/sections/about.tsx`:
- Add your photo to `public/profile.jpg`
- Replace the initials `<div>` with `<Image src="/profile.jpg" ... />`

## Theme Colors

The primary gradient uses blue/indigo. To change:
- Search for `from-blue-600 to-indigo-600` across the codebase
- Replace with your preferred Tailwind gradient colors

## Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/data/resume.ts` → `navLinks`
