export default function Privacy() {
  return (
    <div className="space-y-4">
      <h3>Privacy Policy</h3>
      <p>Last updated: September 1, 2026</p>

      <p>This Privacy Policy explains how our California S-Corporation ("Company," "we," "us," or "our") collects, uses, discloses, and safeguards client information when you engage our Information Technology (IT) consulting and managed services. We respect your privacy and are committed to protecting your business and personal data in accordance with California law.</p>

      <p>We do not sell, rent, or lease your personal or business data to third parties for marketing or commercial purposes.</p>

      <h3>Client Relationship Data</h3>
      <ul className="list-disc pl-5">
        <li>Contact details (names, business addresses, email addresses, phone numbers).</li>
        <li>Financial information necessary for billing, invoicing, and corporate accounting.</li>
      </ul>

      <h3>Technical and Operational Data</h3>
      <ul className="list-disc pl-5">
        <li>System configurations, network topology diagrams, software inventories, and IP addresses.</li>
        <li>Access credentials (where explicitly provided for system administration or troubleshooting).</li>
        <li>System performance logs, security metadata, and service ticket histories.</li>
      </ul>

	    <h3>How we use information</h3>
	    <ul className="list-disc pl-5">
        <li>To provide, manage, and optimize IT consulting, network infrastructure, cybersecurity, and support services.</li>
        <li>To process invoices, track service histories, and fulfill administrative requirements for a California S-Corp.</li>
        <li>To maintain the security, integrity, and operational health of client IT environments.</li>
	    </ul>

      <h3>Sharing with third-parties</h3>
      <p>California Service Providers and Contractors</p>
      <p>We may share your information with trusted third-party vendors, subcontractors, or cloud service providers hired to assist in executing specific client deliverables (e.g., specialized engineers, cloud infrastructure hosting, or help desk ticketing platforms).</p>
      <ul className="list-disc pl-5">
        <li>All such third parties operate strictly as "Service Providers" or "Contractors" under California legal frameworks.</li>
        <li>They are bound by comprehensive written contracts and Non-Disclosure Agreements (NDAs).</li>
        <li>They are legally prohibited from retaining, using, disclosing, or selling your information for any purpose other than providing the specified contracted service.</li>
      </ul>

      <h3>CaliforniaPrivacyRights</h3>
      <p>While California law (including the CCPA/CPRA) primarily targets large consumer-facing enterprises, we maintain transparency regarding your operational and business-to-business (B2B) data. Clients may request:</p>

      <h4>Access</h4>
      <p>The right to know what information we hold about your business operations.</p>
      <h4>Correction</h4>
      <p>The right to correct inaccurate or outdated technical and business records.</p>
      <h4>Deletion</h4>
      <p>The right to request data deletion, subject to exemptions for ongoing IT contracts, system security auditing, and mandatory state/federal corporate tax record retention.</p>
    </div>
  );
}
