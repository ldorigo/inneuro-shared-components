"use client";

interface MaterialInputProps {
  label?: string;
  type: "text" | "number" | "select" | "month";
  value: string;
  onChange: (value: string) => void;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  // Additional props for unit-based inputs
  unit?: string;
  onUnitChange?: (unit: string) => void;
  unitOptions?: Array<{ value: string; label: string }>;
  // Style customization
  inputClassName?: string;
  selectClassName?: string;
}

export default function MaterialInput({
  label,
  type,
  value,
  onChange,
  options,
  placeholder,
  unit,
  onUnitChange,
  unitOptions,
  inputClassName = "",
  selectClassName = "",
}: MaterialInputProps) {
  const baseInputClass =
    "w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-800 text-content-primary-light dark:text-content-primary-dark placeholder-content-tertiary-light dark:placeholder-content-tertiary-dark border-surface-border-light dark:border-surface-border-dark hover:border-surface-accent-light dark:hover:border-surface-accent-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors";
  const baseSelectClass =
    baseInputClass + " [&>option]:bg-white dark:[&>option]:bg-zinc-800";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // For number inputs, only allow numbers and decimal points
    if (type === "number") {
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        onChange(value);
      }
    } else {
      onChange(value);
    }
  };

  const input =
    type === "select" ? (
      <select
        className={`${baseSelectClass} ${selectClassName}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        className={`${baseInputClass} ${inputClassName}`}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    );

  // If we have unit options, wrap the input in a flex container with the unit selector
  if (unitOptions && onUnitChange) {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-content-secondary-light dark:text-content-secondary-dark">
            {label}
          </label>
        )}
        <div className="flex gap-2">
          {input}
          <select
            value={unit}
            onChange={(e) => onUnitChange(e.target.value)}
            className={`${baseSelectClass} ${selectClassName}`}
          >
            {unitOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  // Standard input with optional label
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-content-secondary-light dark:text-content-secondary-dark">
          {label}
        </label>
      )}
      {input}
    </div>
  );
}
