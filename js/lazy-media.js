function loadVideo(video) {
  const source = video.querySelector("source[data-src]");
  if (!source || source.src) return;

  source.src = source.dataset.src;
  video.load();
  video.play().catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  const lazyVideos = document.querySelectorAll("video[data-lazy-video]");
  if (!("IntersectionObserver" in window)) {
    lazyVideos.forEach(loadVideo);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      loadVideo(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "200px 0px" });

  lazyVideos.forEach((video) => observer.observe(video));
});
