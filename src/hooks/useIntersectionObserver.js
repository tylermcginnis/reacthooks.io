const name =`useIntersectionObserver`;

const implementation = `const useIntersectionObserver = (target, root) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isIntersecting) {
          setIntersecting(entry.isIntersecting);
        }
      },
      {
        rootMargin: "0px",
        root: root.current
      }
    );
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.unobserve(target.current);
    };
  }, []);

  return isIntersecting;
};`;

const usage = `function Demo() {
  const targetRef = useRef(null);
  const isIntersecting = useIntersectionObserver(
    targetRef,
    document.querySelector("body")
  );
  return (
    <div className="App" ref={targetRef}>
      <h2>{isIntersecting ? "Component is visible" : "Component is hidden"}</h2>
    </div>
  );
}`;

const url = `https://github.com/palmerhq/the-platform/`;

const description = `This hook is used for triggering transitions`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}