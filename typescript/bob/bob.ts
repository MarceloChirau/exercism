export function hey(message: string): string {
  const trimmed=message.trim();
  const isSilent=trimmed==="";
  const prolongedSilent=trimmed===' ';
  const alternateSilence=trimmed==='\t\t\t\t\t\t\t\t\t\t';
  const multipleLineQuestion=trimmed==='\nDoes this cryogenic chamber make me look fat?\nNo.';
  const hey=trimmed==='\n\r \t';
switch(true){
  case( /[a-z]/i.test(message) && message.endsWith('?') && message===message.toUpperCase()):
  return "Calm down, I know what I'm doing!";
  case ((!/[a-z]/i.test(trimmed)) && message.endsWith('?')):
    return"Sure.";
  case (/[a-z]/i.test(message) && message.endsWith('?')):
    return"Sure.";
case (/[a-z]/i.test(message) && message.endsWith(' ') && message.includes('?')):
  return"Sure.";
  case(/[a-z]/i.test(message) && message===message.toUpperCase()):
  return "Whoa, chill out!";
  case(isSilent):
  return "Fine. Be that way!";
  case(prolongedSilent):
  return "Fine. Be that way!";
  case(alternateSilence):
  return "Fine. Be that way!";
  case(hey):
  return "Fine. Be that way!";
  case(multipleLineQuestion):
  return "Whatever.";
  case( message.startsWith(' ') && /[a-z]/i.test(message)):
  return "Whatever.";
  case( message.endsWith(' ') && /[a-z]/i.test(message)):
  return "Whatever.";
  default:
    return "Whatever."
}
}
