# get-device-ip 🚀

[![npm version](https://img.shields.io/npm/v/get-device-ip.svg)](https://www.npmjs.com/package/get-device-ip)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A ultra-lightweight, zero-dependency Node.js utility to quickly find your machine's local IPv4 and IPv6 addresses.
### Use this for Backend development

### 🌟 Why use this?

- **Zero Dependencies**: No bloated `node_modules`.
- **Modern Node Support**: Fully compatible with Node.js 18, 20, 22+ (handles both string and numeric `family` types).
- **Clean Output**: Filters out internal loopback addresses (127.0.0.1) automatically.
- **Cross-Platform**: Works on Windows, macOS, and Linux.

---

## 📦 Installation

```bash
npm install get-device-ip
🚀 Usage
You can now use this package in any Node.js project without extra configuration.

Modern (ES Modules)
import { getDeviceIP } from 'get-device-ip';

const ip = getDeviceIP();
console.log('Primary IPv4:', ip.primaryIpv4);
console.log('All IPv4s:', ip.IPv4);

Legacy (CommonJS)
const { getDeviceIP } = require('get-device-ip');

const ip = getDeviceIP();
console.log('Primary IPv4:', ip.primaryIpv4);

```

```
📊 Return Object Structure

{
  IPv4: [ '192.168.0.100', '172.23.160.1' ],
  IPv6: [ 'fe80::2ecc:c31a:a1fc:dcf0' ],
  primaryIpv4: '192.168.0.100',
  primaryIpv6: 'fe80::2ecc:c31a:a1fc:dcf0'
}


```

📄 License
MIT © Sakib Fakir
