"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/formatCurrency";

interface AssetAccordionProps {
  value: string;
  title: string;
  Icon: LucideIcon;
  currentAmount?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AssetAccordion({
  value,
  title,
  Icon,
  currentAmount = 0,
  children,
  defaultOpen = false,
}: AssetAccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      {...(defaultOpen ? { defaultValue: value } : {})}
    >
      <AccordionPrimitive.Item
        value={value}
        className="rounded-[14px] border border-neutral-200 bg-white shadow-xs overflow-hidden group/accordion"
      >
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger
            className={cn(
              "flex w-full items-center gap-4 px-5 py-4 text-left",
              "hover:bg-neutral-50/80 transition-colors duration-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-inset",
              "group"
            )}
          >
            {/* Icône */}
            <div className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-200",
              "bg-neutral-100 group-data-[state=open]:bg-brand-50"
            )}>
              <Icon className={cn(
                "h-4 w-4 transition-colors duration-200",
                "text-neutral-500 group-data-[state=open]:text-brand-600"
              )} aria-hidden />
            </div>

            {/* Titre */}
            <span className="flex-1 text-[15px] font-semibold text-neutral-900">
              {title}
            </span>

            {/* Montant + chevron */}
            <div className="flex items-center gap-3">
              {currentAmount > 0 && (
                <span className="text-[13px] tabular-nums font-medium text-brand-600">
                  {formatCurrency(currentAmount)}
                </span>
              )}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-250",
                  "group-data-[state=open]:rotate-180"
                )}
                aria-hidden
              />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>

        <AccordionPrimitive.Content
          className={cn(
            "overflow-hidden",
            "data-[state=open]:animate-accordion-down",
            "data-[state=closed]:animate-accordion-up"
          )}
        >
          <div className="border-t border-neutral-100 px-5 py-5 space-y-5">
            {children}
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}
