const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="xl:text-6xl text-4xl flex gap-2">
        <div className="italic font-black">
          <span className="text-sky-500">D</span>
          <span className="text-blue-800">L</span>
          <span className="text-red-600">M</span>
        </div>
        <div className="font-bold">Auto</div>
      </div>
      <div className="font-semibold xl:text-2xl text-lg">
        KFZ SERVICE & HANDEL
      </div>
    </div>
  );
};

export default Logo;
