# Privacy Policy – OceanIMR Offshore Pipe Tracer

**Application:** OceanIMR Offshore Pipe Tracer
**Package:** `com.oceanimr.pipes`
**Last updated:** 13 March 2026

OceanIMR ("we", "us", or "our") operates the *OceanIMR Offshore Pipe Tracer* mobile application (the "App"). This Privacy Policy explains what information we collect, how we use it, with whom we share it, and what rights you have in relation to that information. By using the App you agree to the practices described below.

---

## 1. Who This App Is For

The App is a business-to-business (B2B) tool provided exclusively to authorised employees and contractors of companies that have a commercial agreement with OceanIMR. It is not intended for, and should not be used by, members of the general public or minors under the age of 18.

---

## 2. Information We Collect

### 2.1 Account & Identity Information

- **Email address** – collected at login via Microsoft Azure B2C and used as your primary identifier throughout the App.
- **Authentication tokens** – OAuth 2.0 / OpenID Connect tokens issued by Azure B2C are stored securely on your device and are used solely to authenticate API requests.

### 2.2 Operational & Transaction Data

- Records of pipe/equipment transactions you initiate (receive, relocate, etc.), including the date, time, transaction type, your email address, and the location and asset identifiers involved.
- Pipe and equipment details (serial numbers, RFID tags, specifications, inspection measurements) that you scan or enter into the App.
- Delivery ticket and tally information associated with your work sessions.

### 2.3 Device Information

- Device model, operating system version, and a device identifier are collected via the device info library to differentiate physical devices from emulators and to support offline session management.
- Network connectivity status is checked to determine whether to operate in online or offline mode.

### 2.4 Information We Do *Not* Collect

- Precise GPS location or real-time location tracking.
- Contacts, photos, microphone, or camera data (the App uses a barcode scanner but does not retain images).
- Financial, health, or sensitive personal information.
- Advertising identifiers or behavioural analytics data.

---

## 3. How We Use Your Information

- To authenticate you and authorise access to company resources.
- To use your **email address** as the user identifier when creating pipe/equipment transactions, ensuring a complete audit trail of who performed each operation.
- To record and synchronise pipe/equipment transactions to the backend database on behalf of your employer.
- To support offline-first functionality by caching operational data locally on your device.
- To generate Excel exports and PDF datasheets that you request within the App.
- To maintain audit trails required by offshore logistics operations.

**Important:** All data you access and create through the App is restricted to your employer's company data. You cannot view or modify data belonging to other companies using the App.

We do not use your information for advertising, profiling, or any purpose unrelated to the operational function of the App.

---

## 4. Data Storage & Retention

### 4.1 On-Device Storage

A local SQLite database stores a working copy of operational data (items, serials, bundles, transactions, tallies) to enable offline use. This includes your **email address**, which is stored to associate transactions with your user account and to enable offline transaction creation. This data is protected through Android's secure storage APIs. It is retained on your device until you uninstall the App or your employer revokes access.

### 4.2 Cloud Storage

Synchronised data, including your **email address**, is transmitted over HTTPS to a backend hosted on **Microsoft Azure** (Norway East region) and stored in a PostgreSQL database. Your email address is stored as part of transaction records to maintain audit trails. PDF datasheets are stored in Azure Blob Storage with time-limited, signed access URLs.

### 4.3 Retention Period

Data is retained for as long as required by your employer's operational and regulatory obligations. When your account is deprovisioned by your employer, data associated with your account will be anonymised or deleted in accordance with our agreement with that employer.

---

## 5. Data Sharing & Disclosure

We share data only in the following circumstances:

- **With your employer / the contracting company.** All operational data you enter is company data accessible to authorised personnel within your organisation.
- **With Microsoft Azure.** Authentication, database hosting, secret management, and blob storage services are provided by Microsoft, acting as a data processor under a Data Processing Agreement. See [Microsoft's Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).
- **Legal requirements.** We may disclose information if required by law, court order, or to protect the rights and safety of OceanIMR, its clients, or the public.

We do not sell, rent, or share your personal data with any advertising networks or unaffiliated third parties.

---

## 6. Third-Party Services

| Service | Purpose | Provider |
|---|---|---|
| Azure B2C / CIAM | User authentication & identity | Microsoft |
| Azure App Service | Backend API hosting | Microsoft |
| Azure Blob Storage | PDF datasheet storage | Microsoft |
| Azure Key Vault | Secrets & connection string management | Microsoft |

---

## 7. Security

We implement industry-standard safeguards to protect your information:

- All data in transit is encrypted with TLS (HTTPS).
- Authentication tokens are stored using Android's secure keystore system.
- Access to the backend API requires a valid OAuth 2.0 bearer token.
- Secrets and connection strings are stored in Azure Key Vault, not in the application binary.
- Release builds apply ProGuard code obfuscation.

No method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.

---

## 8. Your Rights

Depending on your jurisdiction you may have the right to:

- Access the personal data we hold about you.
- Request correction of inaccurate data.
- Request deletion of your personal data (subject to legal and contractual obligations).
- Object to or restrict certain processing activities.
- Data portability (receive your data in a structured, machine-readable format).

Because the App is deployed by your employer, most access and deletion requests should be directed to your employer's data protection contact in the first instance. You may also contact us directly using the details in Section 10.

---

## 9. Changes to This Policy

We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically. Continued use of the App after changes are posted constitutes acceptance of the revised policy.

---

## 10. Contact Us

If you have questions or requests regarding this Privacy Policy or our data practices, please contact:

**OceanIMR AS**
Email: [it@oceanimr.com](mailto:it@oceanimr.com)
 