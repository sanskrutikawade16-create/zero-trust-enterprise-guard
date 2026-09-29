# ZeroTrust Enterprise Guard

**Project:** Zero Trust Architecture for Enterprise Security  
**Developed by:** Sanskruti Kawade  
**Type:** Academic cybersecurity prototype / GitHub Pages web simulation

## 1. Project Overview
This prototype demonstrates the core idea of Zero Trust Architecture (ZTA): **Never Trust, Always Verify**.

It provides an interactive browser-based simulation of:
- Identity verification
- Multi-Factor Authentication (MFA)
- Role-Based Access Control (RBAC)
- Device trust and encryption checks
- Micro-segmentation
- IAM policy decisions
- External, insider and stolen-credential threat scenarios
- Security event logging

No real credentials or real enterprise systems are connected. All security events are simulated locally in JavaScript.

## 2. Project Objectives
1. Understand Zero Trust principles.
2. Demonstrate MFA and RBAC.
3. Model identity, device and resource verification.
4. Demonstrate micro-segmentation and least privilege.
5. Simulate common security threats in a controlled environment.
6. Provide a simple prototype suitable for an academic demonstration.

## 3. Technology Used
- HTML5
- CSS3
- JavaScript
- GitHub Pages

Optional future implementation:
- Docker
- VMware/VirtualBox
- Keycloak or another IAM platform
- Nginx
- A test database

## 4. Folder Structure
```text
ZeroTrust_Enterprise_Guard/
├── index.html
├── style.css
├── script.js
├── README.md
└── docs/
    └── architecture.md
```

## 5. How to Run Locally
1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Select different users, authentication states and resources.
4. Run the verification and threat simulation buttons.

## 6. GitHub Pages Deployment
1. Create a GitHub account if needed.
2. Create a new repository named `zero-trust-enterprise-guard`.
3. Upload all files from this folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and `/root` folder.
7. Save.
8. GitHub will provide a Pages URL similar to:
   `https://YOUR-USERNAME.github.io/zero-trust-enterprise-guard/`

## 7. Demonstration Flow
### Scenario A — Valid employee
- User: Employee
- Password: Valid
- MFA: Verified
- Device: Managed Corporate Device
- Encryption: Enabled
- Resource: HR Portal or Corporate Email

Expected result: access is allowed.

### Scenario B — Failed MFA
- Password: Valid
- MFA: Failed

Expected result: identity verification is denied.

### Scenario C — Unauthorized resource
Select Employee and Admin Console.

Expected result: RBAC denies the request because of least privilege.

### Scenario D — Untrusted device
Select Unknown or Compromised Device.

Expected result: device posture check blocks access.

### Scenario E — Threat testing
Run External Attack, Insider Threat and Stolen Credentials.

Expected result: the simulated Zero Trust controls block the requests.

## 8. Zero Trust Architecture
The prototype follows these logical layers:

```text
User
  |
  v
Identity Verification
  |
  +--> MFA
  |
  v
Device Trust
  |
  v
RBAC / Least Privilege
  |
  v
Micro-Segmentation
  |
  v
Protected Application / Data
```

## 9. Important Note
This is an educational simulation, not a production enterprise security system. It does not collect passwords, connect to a real IAM server, or perform real attacks.

## 10. Future Scope
- Connect to Keycloak for real IAM testing in a lab.
- Add PostgreSQL or another test database.
- Add Docker Compose for isolated services.
- Add audit-log storage.
- Add policy administration.
- Add TLS certificates in a controlled deployment.
- Add SIEM integration for a laboratory environment.
