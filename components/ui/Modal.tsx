"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  /** id do nó que rotula o diálogo — aponta para o título renderizado em children. */
  labelledBy: string;
  children: ReactNode;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const SHEET_QUERY = "(max-width: 639px)";

const subscribeToSheet = (onChange: () => void) => {
  const mq = window.matchMedia(SHEET_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/** createPortal precisa de document.body, ausente na renderização do export estático. */
const subscribeNever = () => () => {};

/**
 * Mini janela sobreposta, reutilizável.
 * Bottom sheet no mobile, diálogo centrado no desktop.
 * Fecha com ESC, clique no fundo ou botão. Prende o foco enquanto aberta.
 */
export default function Modal({ open, onClose, labelledBy, children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const mounted = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false
  );

  const isSheet = useSyncExternalStore(
    subscribeToSheet,
    () => window.matchMedia(SHEET_QUERY).matches,
    () => false
  );

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!items || items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const raf = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const panelMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : isSheet
      ? {
          initial: { opacity: 0, y: "100%" },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: "100%" },
        }
      : {
          initial: { opacity: 0, y: 18, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.98 },
        };

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6"
          role="presentation"
        >
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 backdrop-blur-[3px]"
            style={{ background: "rgba(37, 24, 47, 0.42)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className="relative w-full sm:max-w-[540px] max-h-[88vh] sm:max-h-[85vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] border"
            style={{
              background: "#FFFFFF",
              borderColor: "var(--line)",
              boxShadow: "var(--shadow-strong)",
            }}
            {...panelMotion}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Alça do bottom sheet — apenas no mobile */}
            <div
              aria-hidden
              className="sm:hidden mx-auto mt-3 mb-1 h-1.5 w-10 rounded-full"
              style={{ background: "var(--line-strong)" }}
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full grid place-items-center transition-colors duration-200 hover:bg-[var(--lilac)]"
              style={{ color: "var(--muted)" }}
            >
              <X size={18} />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
