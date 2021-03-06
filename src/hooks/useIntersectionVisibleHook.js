const name = `useIntersectionVisibleHook`;

const implementation = `function useVisibility(node, options = {}) {
  const [ visible, setVisibilty ] = useState({});
  const isIntersecting = useRef();

  const handleObserverUpdate = (entries) => {
    const ent = entries[0];

    if (isIntersecting.current !== ent.isIntersecting) {
      setVisibilty(ent);
      isIntersecting.current = ent.isIntersecting;
    }
  };

  const observer = new IntersectionObserver(handleObserverUpdate, options);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return function cleanup() {
      observer.unobserve(element);
    };
  });

  return visible;
}`;

const usage = `function App() {
  const nodeRef = useRef(null);
  const visibility = useVisibility(nodeRef);

  return (
    <div className="App" ref={nodeRef}>
      <h1>Hello</h1>
    </div>
  );
}`;

const url = `https://github.com/AvraamMavridis/react-intersection-visible-hook`;

const description = `This hook tracks the visibility of a functional component based on Intersection Visible Observer.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}