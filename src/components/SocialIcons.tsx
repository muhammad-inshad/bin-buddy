export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.3c0-.87.24-1.46 1.5-1.46h1.6V4.14C16.3 4.1 15.3 4 14.1 4c-2.4 0-4.1 1.47-4.1 4.16v2.34H7.5v3h2.5V21h3.5Z" />
    </svg>
  );
}

export function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.5 6.1c-.6.3-1.2.5-1.9.6a3.3 3.3 0 0 0 1.4-1.8c-.6.4-1.3.6-2 .8a3.2 3.2 0 0 0-5.5 2.9A9.1 9.1 0 0 1 5.9 5.3a3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.5.1-1 .1-1.4 0 .4 1.3 1.6 2.3 3 2.3A6.4 6.4 0 0 1 4 16.1a9 9 0 0 0 4.9 1.4c5.9 0 9.1-4.9 9.1-9.1v-.4c.6-.5 1.1-1 1.5-1.9Z" />
    </svg>
  );
}
