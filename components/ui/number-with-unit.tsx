"use client";

import * as React from "react";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "../../lib/utils";

interface NumberWithUnitProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  unit?: string;
  onUnitChange?: (unit: string) => void;
  unitOptions?: Array<{ value: string; label: string }>;
  className?: string;
}

export function NumberWithUnit({
  label,
  value,
  onChange,
  placeholder,
  unit,
  onUnitChange,
  unitOptions,
  className,
}: NumberWithUnitProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      {label && <Label>{label}</Label>}
      <div className="flex gap-2">
        <Input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="flex-1"
        />
        {unitOptions && onUnitChange && (
          <Select value={unit} onValueChange={onUnitChange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {unitOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}
