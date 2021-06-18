const makePassword = async (length) => {
  characters =
    "!@#$%^&*()_+~`|}{[]:;?><,./-=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  generatedPassword = "";

  for (var i = 0; i < length; i++) {
    generatedPassword +=
      characters[Math.floor(Math.random() * characters.length)];
  }

  return generatedPassword;
};

module.exports = makePassword;
