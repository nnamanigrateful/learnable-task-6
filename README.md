REPLIT LINK:   https://replit.com/@gratefulnnamani/card-verification#task%206.js



An overview of the Regex Pattern in brief

\: Declares the string's beginning.
Options divided by a |:
(?:[0-9]{3}) = 4[0-9]{12}Complies with Visa. '4' at the beginning, then twelve numbers. It may have an extra three digits if desired.
5[1–5][0–9]{14}: Equivalent to Mastercard. begins with '5', with the second digit falling between '1' and '5', and then 14 digits.
3[47][0–9]{13}: Complies with US Express. starts at '3' and goes through '4' or '7' before 13 digits.
6(?:011|5[0–9]{2})[0–9]{12}: Find Matches. starts with '6', then is followed by two digits, '011' or '5', and finally 12 digits.
$: Declares that the string is over.
The common formats of credit card numbers for various kinds are captured by this regex pattern. 
