{
  const target = [...document.querySelectorAll('#subimges')];
  function callback(entries, obs) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    })
  }
  const options = {
    threshold: 0.2,
  };
  let observer = new IntersectionObserver(callback, options);
  target.forEach((targets) => {
    observer.observe(targets);
  })
}