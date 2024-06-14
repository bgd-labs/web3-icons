export const IconCard = ({
  name,
  symbol,
  children,
}: {
  name: string;
  symbol: string;
  children: React.ReactNode;
}) => {
  // TODO: refactor to use components
  // TODO: implement downloads
  // TODO: implement copy to clipboard

  return (
    <div className="border border-gray-200 aspect-square w-44 flex items-center justify-center relative">
      <div className="absolute top-0 left-0 p-4">
        <div className="font-semibold text-sm text-gray-800">{name}</div>
        <div className="text-xs font-mono text-gray-400 uppercase">
          {symbol}
        </div>
      </div>

      <div className="size-11">
        {children}
      </div>

      <div className="absolute bottom-0 w-full p-2 items-center flex">
        <button className="ml-auto text-gray-400 hover:text-gray-800 px-0.5 py-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 14.25L12 4.75"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8.75 10.75L12 14.25L15.25 10.75"
            ></path>
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-800 p-1">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
            ></path>
            <rect
              width="10.5"
              height="10.5"
              x="8.75"
              y="8.75"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              rx="2"
            ></rect>
          </svg>
        </button>
      </div>
    </div>
  );
};
