export function toggleInViewportCSSClass (intersectionObserverEntry) {
  if (intersectionObserverEntry instanceof IntersectionObserverEntry) { intersectionObserverEntry.target.classList.toggle('in-viewport', intersectionObserverEntry.isIntersecting) }
}
