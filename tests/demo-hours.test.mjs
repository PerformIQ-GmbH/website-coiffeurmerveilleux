import test from 'node:test';
import assert from 'node:assert/strict';
import { openingState } from '../demo/hours.js';

test('Friday opens at 10:00 and closes exactly at 18:30 in Zurich summer time', () => {
  assert.equal(openingState(new Date('2026-10-16T07:59:00Z')).open, false);
  assert.equal(openingState(new Date('2026-10-16T08:00:00Z')).open, true);
  assert.equal(openingState(new Date('2026-10-16T16:29:00Z')).open, true);
  const closed = openingState(new Date('2026-10-16T16:30:00Z'));
  assert.equal(closed.open, false);
  assert.match(closed.text, /Samstag ab 09:00/);
});

test('Saturday uses 09:00–16:00 and points across the closed weekend to Tuesday', () => {
  assert.equal(openingState(new Date('2026-10-17T07:00:00Z')).open, true);
  const closed = openingState(new Date('2026-10-17T14:00:00Z'));
  assert.equal(closed.open, false);
  assert.match(closed.text, /Dienstag ab 10:00/);
});

test('Sunday and Monday are closed', () => {
  for (const date of ['2026-10-18T10:00:00Z', '2026-10-19T10:00:00Z']) {
    const state = openingState(new Date(date));
    assert.equal(state.open, false);
    assert.match(state.text, /Dienstag ab 10:00/);
  }
});

test('Winter daylight offset and local dates are handled in Europe/Zurich', () => {
  assert.equal(openingState(new Date('2026-12-01T08:59:00Z')).open, false);
  assert.equal(openingState(new Date('2026-12-01T09:00:00Z')).open, true);
  const afterLocalMidnight = openingState(new Date('2026-10-18T22:30:00Z'));
  assert.equal(afterLocalMidnight.day, 1);
  assert.equal(afterLocalMidnight.date, '2026-10-19');
});
