// Components/TicketLayout.jsx
export default function BackgroundDesign({
  children,
  // backgroundImage = "/background-desktop.png",
  decorations = true,
}) {
  return (
    <div
      className="relative w-full min-h-screen bg-[url('/background-desktop.png')] bg-cover bg-no-repeat"
    >
      {children}

      {decorations && (
        <>
          <img
            className="absolute top-[-75px]"
            src="/pattern-circle.svg"
            alt=""
          />
          <img
            className="absolute top-10 right-[1px]"
            src="/pattern-squiggly-line-top.svg"
            alt=""
          />
          <img
            className="absolute top-[600px] left-[1100px]"
            src="/pattern-circle.svg"
            alt=""
          />
          <img
            className="absolute bottom-[700px] z-[10]"
            src="/pattern-lines.svg"
            alt=""
          />
          <img src="/pattern-squiggly-line-bottom-desktop.svg" alt="" />
        </>
      )}
    </div>
  );
}
