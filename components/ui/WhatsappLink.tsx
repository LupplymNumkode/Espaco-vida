"use client";

import type { ReactNode, AnchorHTMLAttributes } from "react";
import { buildWhatsappUrl, isWhatsappConfigured } from "@/lib/whatsapp";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  message: string;
  children: ReactNode;
};

/**
 * Safe WhatsApp anchor that handles the unconfirmed-number state.
 * When the number is not yet configured, renders as an inert link (href="#").
 */
export default function WhatsappLink({ message, children, ...rest }: Props) {
  const href = buildWhatsappUrl(message);
  const configured = isWhatsappConfigured;

  return (
    <a
      href={href}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noreferrer" : undefined}
      aria-disabled={configured ? undefined : true}
      onClick={configured ? undefined : (e) => e.preventDefault()}
      {...rest}
    >
      {children}
    </a>
  );
}
