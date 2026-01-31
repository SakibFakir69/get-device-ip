var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// script.js
var script_exports = {};
__export(script_exports, {
  default: () => script_default
});
module.exports = __toCommonJS(script_exports);
var import_os = __toESM(require("os"));
var getDeviceIP = () => {
  const IPv4 = [];
  const IPv6 = [];
  try {
    const deviceInfo = import_os.default.networkInterfaces();
    for (const interfaceName in deviceInfo) {
      deviceInfo[interfaceName].forEach((addr) => {
        if (addr.internal) return;
        if (addr.family === "IPv4" || addr.family === 4) {
          IPv4.push(addr.address);
        } else if (addr.family === "IPv6" || addr.family === 6) {
          IPv6.push(addr.address);
        }
      });
    }
    return {
      IPv4,
      IPv6,
      primaryIpv4: IPv4[0] || null,
      primaryIpv6: IPv6[0] || null
    };
  } catch (error) {
    return { error: error.message, IPv4: [], IPv6: [] };
  }
};
var script_default = getDeviceIP;
