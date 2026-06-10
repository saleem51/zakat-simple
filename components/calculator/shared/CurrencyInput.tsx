"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CurrencyInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string | undefined;
  error?: string | undefined;
  disabled?: boolean;
  placeholder?: string;
}

export function CurrencyInput({
  id,
  label,
  value,
  onChange,
  hint,
  error,
  disabled = false,
  placeholder = "0",
}: CurrencyInputProps) {
  const [rawValue, setRawValue] = React.useState<string>(
    value > 0 ? String(value) : ""
  );

  React.useEffect(() => {
    if (value === 0 && rawValue !== "") return;
    if (value > 0) setRawValue(String(value));
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.,]/g, "").replace(",", ".");
    setRawValue(raw);
    const parsed = parseFloat(raw);
    onChange(isNaN(parsed) || parsed < 0 ? 0 : parsed);
  };

  const hasError = Boolean(error);
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[14px] font-medium text-neutral-800"
      >
        {label}
      </label>

      <div
        className={cn(
          "flex h-[56px] items-center rounded-[10px] border bg-neutral-50 transition-all duration-150",
          hasError
            ? "border-error-500 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]"
            : "border-neutral-200 focus-within:border-brand-600 focus-within:bg-white focus-within:shadow-brand",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <span
          aria-hidden
          className="flex h-full items-center px-4 text-[15px] font-medium text-neutral-400 select-none border-r border-neutral-200"
        >
          €
        </span>

        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={rawValue}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
          aria-invalid={hasError}
          className={cn(
            "h-full flex-1 bg-transparent px-4 text-right text-[18px] font-semibold text-neutral-900",
            "tabular-nums placeholder:text-neutral-300 placeholder:font-normal placeholder:text-[16px]",
            "focus:outline-none",
            disabled && "cursor-not-allowed"
          )}
        />
      </div>

      {hint && !hasError && (
        <p id={hintId} className="text-[12px] text-neutral-400 leading-relaxed">
          {hint}
        </p>
      )}

      {hasError && (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-[12px] text-error-700"
        >
          <span aria-hidden>⚠</span>
          {error}
        </p>
      )}
    </div>
  );
}
