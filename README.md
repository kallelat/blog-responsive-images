# How to use responsive images

In this article I'm trying to figure out how to use responsive images on a website/webapp. I'm using React+TypeScript, which is a bit overkill, but allows me to split the code into smaller components.

Technologies used:

- React with TypeScript
- Plain CSS files imported to React
- Some new HTML elements, like `<picture>` and `<source>`, plus some new attributes for `<img>`

## Initial setup and configuration

1. Create a new React app with `npx create-react-app . --template typescript`
2. Start dev server using `npm start`

If you want to follow the tutorial, please checkout to branch `initial` which can be used as a starting point.

## Common problems

TBD: one image

TBD: resolution switching problem

TBD: art direction problem

TBD: bandwidth

## Solving problems with `<picture>` element

To make our picture responsive, replace plain `<img>` element with this:

```html
<picture>
  <source media="(max-width: 480px)" srcset="scenery-480w.jpg" />
  <source media="(max-width: 800px)" srcset="scenery-800w.jpg" />
  <img
    src="scenery.jpg"
    alt="A beautiful yet a little heavy to load a mountain scenery"
  />
</picture>
```

Inside the `<picture>` we first list sources to use for different cases (like screen size, portrait vs landscape) and image files for each case.

You can finetune the media queries however you like, you can for example use different image for portrait and landscape versions.

The only thing browsers render, is the `<img>` tag, but the image rendered will be changed according the defined sources.

If none of the `<source>` elements match, then the browser will use standard `<img>` here. It will be also used as a fallback for browsers not supporting `<picture>`.

Remeber that `alt` attribute of the image will always be the same, so the different variations of the image should not be semantically different.

## Advanced use cases

### Newer image format

If you want to have a support for newer, more optimized image formats like `webp`, you can add a new source with `type` attribute, like this:

```html
<source
  type="image/webp"
  media="(max-width: 480px)"
  srcset="scenery-480w.jpg"
/>
<source media="(max-width: 480px)" srcset="scenery-480w.jpg" />
```

In this case, the browser renders the optimized webp version, if the browser supports it.

### High-res devices

Another cool trick is defining separate files for high-res devices, like Retinas. You can do this by utilizing srcSet further:

```html
<source
  media="(max-width: 480px)"
  srcset="scenery-480w.jpg, scenery-480w-2x.jpg 2x"
/>
```

With this, we will always show the image in same size, but use a larger image if the device has a bigger resotion.

## Summary

TBD: yhteenveto latausnopeuksista eri resoilla

TBD: SEO

TBD: parempi UX

**If you are interested** check some additional material from [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#why_responsive_images).

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
