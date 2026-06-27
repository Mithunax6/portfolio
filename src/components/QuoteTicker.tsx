export function QuoteTicker() {
  const quotes = [
    'Growth begins where comfort ends.',
    'Code is like humor. When you explain it, it\'s bad. — Cory House',
    'Every expert was once a beginner.',
    'First solve the problem, then write the code. — John Johnson',
    'Learning never exhausts the mind. — Leonardo da Vinci',
  ];

  const tickerContent = [...quotes, ...quotes].map((quote, idx) => (
    <span key={idx} className="flex items-center whitespace-nowrap px-8">
      <span className="text-accent-500 font-mono opacity-70">{quote}</span>
      <span className="mx-6 text-accent-500">&#10038;</span>
    </span>
  ));

  return (
    <div className="ticker-container w-full overflow-hidden border-y border-accent-500/20 py-4 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="ticker-content flex animate-[ticker_30s_linear_infinite]">
        {tickerContent}
      </div>
    </div>
  );
}
