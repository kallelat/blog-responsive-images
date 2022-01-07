import "./picture.css";

const Picture = () => {
  return (
    <picture>
      {/*
        List all the media sources, the browser will pick the first match. 
        
        If you inspect the page, <source> tags are clearly visible, but they do not render anything.
        Instead, the <img> at the end will be rendered, but with the content from the <source>.

        You can finetune the media queries however you like, you can for example
        use different image for portrait and landscape versions.
      */}
      <source media="(max-width: 480px)" srcSet="scenery-480w.jpg" />
      <source media="(max-width: 800px)" srcSet="scenery-800w.jpg" />

      {/*
        If none of the <source> elements return a match, then the browser will use normal <img> here.
        This <img> will be also used on the browsers that do not support <picture>.
      */}
      <img
        src="scenery.jpg"
        alt="A beautiful yet a little heavy to load a mountain scenery"
      />
    </picture>
  );
};

export default Picture;
