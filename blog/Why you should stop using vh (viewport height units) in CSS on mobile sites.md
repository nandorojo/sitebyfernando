# Why you should stop using vh in CSS on mobile websites

CSS viewport unit heights feel like the ideal solution to creative responsive heights for HTML elements, since they make elements scale exactly to the height of the user's screen. 

But it's important to note that `vh` units should be confined to large screen sizes only, and should no longer be used on mobile.

I've seen far too many mobile websites experience poor performance because of this minor line of CSS, that I felt it was time to intervene.

To see why, let's see what viewport units are.

## What are viewport units?

It's very common nowadays to see [viewport units](https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/) used like this in CSS:

```
.cover {
  height: 100vh; // vh stands for viewport height
}
```

This code tells the browser that you want the height of any HTML element with the class `cover` to be 100% of the height of the entire screen.

However, viewport units should *never* be used for mobile screen sizes. Here's why: **When users scroll on most mobile browsers, the size of the viewport changes, creating a glitch across the entire document.**

😬 Really?

## Viewport heights cause a jumpy scroll glitch on mobile devices

Take a look at the hopper.com website below.

<!--video of hopper scroll here-->

Now, while hopper.com might have a beautiful design, the user is entirely distracted by the fact that, when scrolling, the screen becomes jumpy.

Why is this happeneing? Well, the good part about viewport widths is that they perfectly respond to screen dimensions. 

The bad part is that screen dimensions on mobile browsers change while you scroll, since the URL bar shrinks and the footer bar at the bottom disappears.

So how can we solve this?

## How to solve the 100vh viewport height glitch

It's worth nothing that using `vh` in CSS is totally fine, as long as the screen size is large enough.

The way to remedy the mobile scrolling glitch caused by `vh` in CSS would be to simply set media queries.

For example, this would be totally fine:

```
.cover {
  height: 400px; // vh stands for viewport height
}

@media screen and (min-width: 767px) {
  .cover {
  	height: 100vh; 
  }
}
```

*If the above looks confusing, take a look at W3Schools' brief [media queries tutorial](https://www.w3schools.com/Css/css3_mediaqueries_ex.asp).*

The code block above says that all elements with the class `cover` are now 400 pixels tall, unless the screen is at least 767 pixels high (this is about the width of a tablet). 

Once the viewport (i.e. the user's screen) is above 767px in height, the element grows to 100% of the screen height.

And just like that, no more mobile scroll glitch!

### Alternative solution

While the following solution might not fit your needs, it's worth noting that `vw` (viewport width units) is a great way to add a responsive nature to your elements. 

For instance, although you won't be able to use `vw` to make your element 100% of the height of the screen, if you set an element's height to, say, `150vw`, you maintain the exact same height-to-width ratio no matter the screen size. 

Setting `height: 50vw` means that the height of the element will always be half of the screen's width.

Using `vw` to set the height of an element is mostly useful when the element has an image as the background with a certain aspect ratio you want to maintain.

Ultimately, this `vw` solution should be considered if you're using `vh` strictly for the sake of creating responsive views that react to the user's screen, but it shouldn't be used if you're looking to achieve the `100vh` (full-height) case.

## An aside

Too many websites with amazing front-end developers fall victim to this very avoidable glitch. 

Remember to always test your websites on a mobile browser. Soon enough, it might be the only place people see your work.

Ultimately, I'm more of a fan of using padding for `.cover` elements rather than fixed heights, but since I've seen this glitch on so many mobile sites, I thought it was a good time to write a post about it.