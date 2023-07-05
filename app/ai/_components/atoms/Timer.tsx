const Timer: React.FC = () => {
  return (
    <div id="timer" className="sticky top-[var(--nav-h)] w-full z-[4] h-0">
      <div className="relative w-full flex justify-center">
        <div className="absolute  bg-slate-900 w-fit h-10 flex items-center">
          <h5 className="text-2xl font-bold text-blue-500">
            Time remaining: 00:00:00
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Timer;
