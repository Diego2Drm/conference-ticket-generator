# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/assets/screenshot.png)

### Links

- Solution URL: [Github](https://github.com/Diego2Drm/conference-ticket-generator)
- Live Site URL: [conference-ticket-generator](https://diego-2d-conference-ticket-generator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles


### What I learned

I learned how to implement a loading screen

```js
import { useContext, } from "react"
import { Register } from "./Register"
import { Confirmation } from "./Confirmation"
import { Context } from "./context/MyContext"
import { SnipperIndicator } from "./compnents/SnipperIndicator";

function App() {
  const { isLogin, isLoading } = useContext(Context);
 
  return (
    <>
      {
        isLoading ? (
          <SnipperIndicator />
        ) : isLogin ? (
          <Confirmation />
        ) : (
          <Register />
        )
      }
    </>
  )

}

export default App

```

### Continued development

- Typescript

## Author

- Website - [Diego Ramírez](https://diego2drm.github.io/Portafolio/)
- Frontend Mentor - [@Diego2Drm](https://www.frontendmentor.io/profile/Diego2Drm)
- Gmail - [diego.ramirez2d03@gmail.com]
