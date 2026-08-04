import { Link } from "@tanstack/react-router";
import { Home, Clock, Heart, MessageCircle, User, ChevronLeft, Bell } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { to: "/", label: "Beranda", icon: Home },
  { to: "/riwayat", label: "Riwayat", icon: Clock },
  { to: "/catatan", label: "Hari Ini", icon: Heart, center: true },
  { to: "/pesan", label: "Pesan", icon: MessageCircle },
  { to: "/profil", label: "Profil", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="no-print mt-auto shrink-0 z-20 rounded-t-[2rem] border-t border-border bg-card/95 px-2 pt-2 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur sm:mx-2 sm:rounded-[1.5rem] sm:border sm:shadow-[var(--shadow-card)] lg:mx-4 lg:mb-3 lg:rounded-[1.5rem]">
      <ul className="mx-auto grid max-w-[480px] grid-cols-5 items-end gap-1 sm:max-w-[560px] lg:max-w-none">
        {tabs.map(({ to, label, icon: Icon, ...rest }) => {
          const center = "center" in rest && rest.center;
          return (
            <li key={to} className="flex justify-center">
              <Link
                to={to}
                aria-label={label}
                className="group flex w-full flex-col items-center gap-1 text-[0.65rem] font-bold text-muted-foreground data-[status=active]:text-primary"
              >
                {center ? (
                  <span className="brand-gradient -mt-6 grid size-14 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-soft)]">
                    <Icon className="size-6" fill="currentColor" />
                  </span>
                ) : (
                  <span className="grid size-9 place-items-center rounded-2xl transition-colors group-data-[status=active]:bg-primary-soft">
                    <Icon className="size-5" />
                  </span>
                )}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function PageHeader({
  title,
  subtitle,
  illustration,
  back = true,
  action,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  illustration?: ReactNode;
  back?: boolean;
  action?: ReactNode;
}) {
  return (
    <header className="header-wash relative overflow-hidden rounded-b-[2rem] px-4 pt-4 pb-6 sm:px-6 sm:pb-7 lg:px-8 lg:pt-6">
      <div className="relative z-10 grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-2 sm:gap-4">
        {back ? (
          <Link
            to="/"
            aria-label="Kembali ke beranda"
            className="no-print grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
          >
            <ChevronLeft className="size-5" />
          </Link>
        ) : (
          <span className="size-10" />
        )}
        <div className="min-w-0 text-center">
          <h1 className="text-2xl leading-tight font-extrabold text-foreground sm:text-3xl lg:text-[2rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="size-10 shrink-0">{action}</div>
      </div>
      {illustration ? (
        <div className="pointer-events-none absolute -right-4 -bottom-2 z-0 w-32 opacity-95 sm:w-36 lg:w-44">
          {illustration}
        </div>
      ) : null}
    </header>
  );
}

export function NotifBell() {
  return (
    <Link
      to="/pesan"
      aria-label="Pesan dan pengingat"
      className="no-print relative grid size-10 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-card)]"
    >
      <Bell className="size-5" />
      <span className="absolute top-1 right-1 size-2.5 rounded-full bg-destructive" />
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center bg-[oklch(0.955_0.02_300)] px-0 py-0 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="print-area flex min-h-screen w-full max-w-[440px] flex-col overflow-hidden bg-background shadow-[var(--shadow-soft)] sm:max-w-[560px] sm:rounded-[2.5rem] lg:max-w-6xl lg:min-h-[calc(100vh-4rem)] lg:rounded-[2.5rem] lg:border lg:border-border/70">
        {children}
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-3xl bg-card p-4 shadow-[var(--shadow-card)] ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  icon,
  children,
  hint,
}: {
  icon?: ReactNode;
  children: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <div className="mb-3 flex min-w-0 items-start gap-2">
      {icon ? <span className="shrink-0 text-lg leading-none">{icon}</span> : null}
      <div className="min-w-0">
        <h2 className="text-base font-extrabold text-secondary-foreground">{children}</h2>
        {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      </div>
    </div>
  );
}

export function PrintButton({ label = "Cetak / Simpan" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print brand-gradient w-full rounded-full py-3 text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98]"
    >
      {label}
    </button>
  );
}
