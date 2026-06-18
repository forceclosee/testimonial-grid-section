# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

<!-- isi screenshoot -->

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid & Flexbox
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [Vite](https://vite.dev/) - Frontend Tooling/Build Tool

### What I learned

In this project, I learned how to implement conditional rendering in React to display specific elements (like the background quotation mark) only when certain conditions are met, such as for specific testimonial cards.

- **Inline Conditional Rendering (`&&`)**: Using the logical AND (`&&`) operator inside JSX is a clean and declarative way to render elements conditionally without needing to declare extra temporary variables:

```jsx
{
  title === "Daniel Clifford" && (
    <img
      className="card__bg-quotations"
      src={bgPatternQuotations}
      alt=""
      aria-hidden="true"
    />
  );
}
```

### Continued development

### Useful resources

### AI Collaboration

I collaborated with Antigravity (a Gemini-based AI assistant) to debug React component behavior, fix SVG styling issues, automate Git commits, and refine the project's documentation.

**How I used it:**

- **React Conditional Rendering & Scope**: Resolved how to scope conditional checks inside the component function to access dynamic props, implementing the `{condition && <element />}` JSX pattern.
- **SVG Aspect Ratio & CSS**: Added a proper `viewBox` attribute (`viewBox="0 0 104 102"`) to the decorative SVG illustration, allowing it to scale fluidly through CSS while keeping its aspect ratio.
- **Git Commit Automation**: Used antigravity skill to analyze staged changes, automatically write a Conventional Commit message, and commit the changes directly to the repository.

This collaborative debugging and development approach was highly interactive and helped reinforce key frontend and Git workflow concepts.

## Author

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)
