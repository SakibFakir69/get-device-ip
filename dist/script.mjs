// script.js
import os from "os";
var getDeviceIP = () => {
  const IPv4 = [];
  const IPv6 = [];
  try {
    const deviceInfo = os.networkInterfaces();
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
export {
  script_default as default
};
