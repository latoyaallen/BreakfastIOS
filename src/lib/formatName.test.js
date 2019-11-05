import formatName from './formatName'

it('replaces dashes with an empty string', () => {
  const content = "-HBO-" ;
  expect(formatName(content)).toEqual(" HBO ");
});

it('replaces # with an empty string', () => {
  const content = "#SHOWTIME" ;
  expect(formatName(content)).toEqual(" SHOWTIME");
});

it('gives uppercase string', () => {
  const content = "Showtime" ;
  expect(formatName(content)).toEqual("SHOWTIME");
});
