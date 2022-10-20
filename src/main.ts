import { differenceInMilliseconds, subWeeks } from 'date-fns';
import humanizeDuration, { LanguageCode } from 'humanize-duration';

const isInvalidDate = (date: any) => Number.isNaN(date.getDate());

export const calcWeeksOfPregnancy = (
	dueDate: Date,
	today: Date | undefined,
	languageCode: LanguageCode
) => {
	const minus40Date = subWeeks(dueDate, 40);
	if (isInvalidDate(minus40Date)) return 'invalid date';
	const resultToday = today === undefined ? new Date() : today;
	const diff = differenceInMilliseconds(resultToday, minus40Date);
	return humanizeDuration(diff, {
		units: ['w', 'd'],
		round: false,
		maxDecimalPoints: 0,
		language: languageCode
	});
};
