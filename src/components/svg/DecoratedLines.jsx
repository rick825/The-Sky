const DecoratedLines = () => {
  return (
    <div className="decoratedLines fade-in-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        <path
          d="M 0 150 Q 50 50, 120 120 Q 180 180, 250 50"
          fill="none"
          stroke="var(--heading-highlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default DecoratedLines;
