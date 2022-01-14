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

Usually the problem comes when you have a nice image for your app/site, but the image usually fits only a few selected resolutions. Even if the layout is responsive, the image itself might not be perfect fit for different resolutions or device orientations. 

In general the problems with images are divivid into two categories: `art direction problem` and `resolution switching problem`.

`The art direction problem` is the case where picture dimensions or layout in general is different on different devices, for example `landscape vs portrait devide` or `narrow mobile view vs desktop view`.

`The resolution switching problem` is the case where the quality of the image does not match the device it is shown in. For example `large image on a small device` which is waste of resources, or `small image on large device` which makes image quality poor.

In addition, from bandwidth point of view is is not optimal to download large images when the device itself is small and does not benefit from images with bigger resolution. What we want is to download the one and only image, that would fit the device perfectly.

## Solving problems with `<picture>` element

To make our picture responsive, replace the plain `<img>` element with this:

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

First we list all the potential versions of the image with `source` elements. Each source has a media query, that browser uses to determine which source to choose and a srcSet to tell which image file to use.

You can finetune the media queries however you like, you can for example use different image for portrait and landscape versions.

The browsers only render `<img>` element so you don't need to care about `<picture>` or `<source>` tags messing up your layout.

If none of the `<source>` elements match, then the browser will `<img>` here. It will be also used as a fallback for browsers not supporting `<picture>`.

Remember that `alt` attribute of the image will always be the same, so the different variations of the image should not be semantically different.

## Advanced use cases

### Newer image format

If you want to have a support for newer, more optimized image formats like `webp`, you can add a new source with `type` attribute, like this:

```html
<source
  type="image/webp"
  media="(max-width: 480px)"
  srcset="scenery-480w.webp"
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

Quite simple in the end, isn't it?

There is a big difference in amount of data your browser needs to download, if you use responsive images wisely. In my simple demo, a mobile would only download 75Kb image instead of 208Kb image. That is a lot.

This helps you in `UX` as you create your layout optimised for multiple devices. It also helps you with `SEO` as your page comes faster to load and faster to render.

**If you are interested** check some additional material from [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#why_responsive_images).

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
