import os from 'os';

// Sakib Fakir
// published : 1/31/2026




const getDeviceIP = () => {
    const IPv4 = [];
    const IPv6 = [];

    try {
        const deviceInfo = os.networkInterfaces();

        for (const interfaceName in deviceInfo) {
            deviceInfo[interfaceName].forEach((addr) => {
                // Skip internal (loopback) addresses
                if (addr.internal) return;

                // Check for IPv4 (supports string 'IPv4' or number 4)
                if (addr.family === 'IPv4' || addr.family === 4) {
                    IPv4.push(addr.address);
                } 
                // Check for IPv6 (supports string 'IPv6' or number 6)
                else if (addr.family === 'IPv6' || addr.family === 6) {
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

// @ts-ignore
export = getDeviceIP;
export { getDeviceIP };
