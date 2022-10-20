import { calcWeeksOfPregnancy } from './main';

describe('calcWeeksOfPregnancy', () => {
	it('case1: today= 2022-10-20 due date 2022-12-31', () => {
		const dueDate = new Date('2022-12-31');
		const today = new Date('2022-10-20');
		const result = { weeks: 29, days: 5 };
		expect(calcWeeksOfPregnancy(dueDate, today)).toStrictEqual(result);
	});

	it('case2: today= 2022-10-20 due date 2022-12-31', () => {
		const dueDate = new Date('2022-12-31');
		const today = new Date('2022-04-01');
		const result = { weeks: 0, days: 6 };
		expect(calcWeeksOfPregnancy(dueDate, today)).toStrictEqual(result);
	});
});
