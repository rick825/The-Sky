const WavyLine = () => {
  return (
    <div className="wavyLine fade-in-opacity">
      <svg
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C100,80 300,-20 400,50"
          fill="none"
          stroke="var(--heading-highlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WavyLine;
