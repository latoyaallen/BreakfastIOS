import formatDay from './formatDay'

it('replaces # with an empty string', () => {
  const content = "#SHOWTIME" ;
  expect(formatDay(content)).toEqual(" SHOWTIME");
});

it('gives uppercase string', () => {
  const content = "Showtime" ;
  expect(formatDay(content)).toEqual("SHOWTIME");
});
