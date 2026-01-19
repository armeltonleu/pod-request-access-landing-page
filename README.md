# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [On Github](https://github.com/armeltonleu/pod-request-access-landing-page)
- Live Site URL: [On Vercel](https://pod-request-access-landing-page-navy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

- How to use basic functions in javascript
- How to create an alternative theme for a web page
- How to apply a color on a svg by using filter

```css
:root {
  ...
  --logos-filter: brightness(0) saturate(100%) invert(40%) sepia(10%) saturate(
      1479%) hue-rotate(188deg) brightness(93%) contrast(87%);
  ...
}
.logos img {
  filter: var(--logos-filter);
}
```

```js
form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    e.preventDefault();
    console.log(emailValue);
    formError("Oops! Please add your email");
  } else if (!regex.test(emailValue)) {
    e.preventDefault();
    console.log(emailValue);
    formError("Oops! Please check your email");
  } else {
    e.preventDefault();
    console.log(emailValue);
    formSuccess();
  }
});
```

### Continued development

I'm not yet comfortable with CSS preprocessors, so I'd rather save them for the next project since my goal is to improve my JavaScript skills.

### Useful resources

- [Google](https://www.google.com) was the main source of help
- [Color filter generator](https://posstack.com/css-color-filter-generator/) - helped me generate filter so I could change svg color by using css.

## Author

- Frontend Mentor - [@armeltonleu](https://www.frontendmentor.io/profile/armeltonleu)
