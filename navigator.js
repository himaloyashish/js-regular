const appName = document.getElementById("appName");
const appCodeName = document.getElementById("appCodeName");
const platform = document.getElementById("platform");
const cookieEnabled = document.getElementById("cookieEnabled");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const userAgent = document.getElementById("userAgent");
const language = document.getElementById("language");
const online = document.getElementById("online");
const javaEnabled = document.getElementById("javaEnabled");


appName.innerHTML = "appName.innerHTML "    +   navigator.appName;
appCodeName.innerHTML = "appCodeName.innerHTML "   +   navigator.appCodeName;
platform.innerHTML = "platform.innerHTML "   +   navigator.platform;
cookieEnabled.innerHTML = "cookieEnabled.innerHTML "   +   navigator.cookieEnabled;
product.innerHTML = "product.innerHTML "   +   navigator.product;
appVersion.innerHTML = "appVersion.innerHTML "   +   navigator.appVersion;
language.innerHTML = "language.innerHTML "   +   navigator.language;
online.innerHTML = `online.innerHTML ${navigator.online}`;
javaEnabled.innerHTML = `javaEnabled.innerHTML ${navigator.javaEnabled}`;