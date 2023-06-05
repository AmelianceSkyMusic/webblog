export function getFormattedDate(
	dateString: string,
	dateStyle: Intl.DateTimeFormatOptions['dateStyle'] = 'long',
	format = 'en-US',
): string | null {
	const isValidDate = !isNaN(Date.parse(dateString));
	if (!isValidDate) return null;
	return new Intl.DateTimeFormat(format, { dateStyle }).format(new Date(dateString));
}
