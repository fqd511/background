# background

> A tool to render different background in specific part of a page, background code are from codepen.io or other website

## What is this?

When you found an amazing css effect on website like codepen.io, but it's in seperate files(html, javascript, css), you cannot use it in your project immediately,and here I offer a solution:

## How to use

```javascript
// install it in your project
npm install @digvan/background

// in you project,'id' is for the element you want to render background for, 'dynamicParticle' is from a effect list below
import background from "@digvan/background"

background('id').render('dynamicParticle')

```

## Effect list

- dynamicParticle : [Dynamic Particle](https://codepen.io/jasperlachance/pen/QNMwBg) by [Jasper LaChance](Jasper LaChance) on codepen.io