import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "dark" | "gold" | "outline" | "outline-gold" | "caramel" | "light";

type BaseButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  dark: "btn-dark",
  gold: "btn-gold",
  outline: "btn-outline",
  "outline-gold": "btn-outline-gold",
  caramel: "btn-caramel",
  light: "btn-light",
};

export function Button({
  variant = "dark",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const combinedClassName = `btn ${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props;
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const isTel = href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={combinedClassName}
          {...rest}
        >
          {children}
        </a>
      );
    }

    if (isTel) {
      return (
        <a href={href} className={combinedClassName} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
      className={combinedClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

