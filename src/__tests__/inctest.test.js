import { incr } from '../redux/slices/dataSlice';

test('should return 6', () => {
  expect(incr(5)).toBe(6);
});
