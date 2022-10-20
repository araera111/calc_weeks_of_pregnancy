import { differenceInMilliseconds, subWeeks } from 'date-fns';
import humanizeDuration from 'humanize-duration';

const isInvalidDate = (date: any) => Number.isNaN(date.getDate());

export const calcWeeksOfPregnancy = (dueDate: Date, today: Date | 'today') => {
	const minus40Date = subWeeks(dueDate, 40);
	if (isInvalidDate(minus40Date)) return 'invalid date';
	const resultToday = today === 'today' ? new Date() : today;
	const diff = differenceInMilliseconds(resultToday, minus40Date);
	const list = humanizeDuration(diff, {
		units: ['w', 'd'],
		round: false,
		maxDecimalPoints: 0,
		spacer: '',
		serialComma: false,
		conjunction: 'and'
	}).match(/\d+/g);

	if (!list) return 'invalid';

	if (list?.length === 1) {
		return {
			weeks: 0,
			days: parseInt(list[0], 10)
		};
	}

	return {
		weeks: parseInt(list[0], 10),
		days: parseInt(list[1], 10)
	};
};
