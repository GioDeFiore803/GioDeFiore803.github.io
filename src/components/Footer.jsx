export default function Footer() {
  return (
    <footer className="border-t border-brand-line h-10 flex items-center justify-center px-6">
      <p className="text-[11px] text-brand-gray tracking-wide">
        &copy; {new Date().getFullYear()} Gio DeFiore. All rights reserved.
      </p>
    </footer>
  )
}
