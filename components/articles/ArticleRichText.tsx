import Link from "next/link";
import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/** Markdown tarzı [metin](url) bağlarını güvenli şekilde render eder. */
export function ArticleRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const label = match[1];
    const href = match[2];
    const external = href.startsWith("http");
    if (external) {
      nodes.push(
        <a key={`${href}-${match.index}`} href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link key={`${href}-${match.index}`} href={href} className="text-accent underline-offset-2 hover:underline">
          {label}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
