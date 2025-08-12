interface Props {
	date: Date;
	format?: Intl.DateTimeFormatOptions;
}

/**
 * Format a date using the given format options according to the user's locale.
 * @description
 * Why the component is in React (`.tsx`) and not in Astro (`.astro`):
 * Because the Component use localeDateString and need to be rendered in the browser to get client locale. Astro Component is rendered in the server so it will use server locale. By using React Component, it will be rendered in the browser and get the client locale.
 *
 * If format is not provided, it will use the default format:
 * ```ts
 * { year: "numeric", month: "short", day: "numeric" }
 * ```
 * Result will be like: `Jan 1, 2024` or `1 Jan 2024` depending on the user's locale.
 *
 * @example
 * ```tsx
 * <FormattedDate date={new Date()} format={{year: "2-digit",month: "long", day: "2-digit"}} />
 * ```
 */
export function FormattedDate({ date, format }: Readonly<Props>) {
	return (
		<time dateTime={date.toISOString()}>
			{date.toLocaleDateString(
				undefined,
				format || {
					year: "numeric",
					month: "short",
					day: "numeric",
				},
			)}
		</time>
	);
}
