//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

if(new RegExp(/^[A-Z0-9%,\\^@#\(\$\*\!\s]+[A-Z|0-9|!]{2,}[^?]$/,'g').test(message.trim()))
    return "Whoa, chill out!";
  else if(new RegExp(/^[A-Z0-9,%\^@#\(\$\*\!\s]+[A-Z|0-9]{2,}[?]$/,'g').test(message.trim()))
    return "Calm down, I know what I'm doing!";
  else if(new RegExp(/^[A-Z]*[a-z0-9,:\)!\.\s|0-9|A-Z]+[?]$/,'g').test(message.trim()))
   return "Sure."
  else if(message.trim()=="")
    return "Fine. Be that way!";
  else
  return "Whatever." 

};