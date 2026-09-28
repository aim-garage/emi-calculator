import { InfoPage } from "@/components/InfoPage";

export const metadata = { title: "Privacy Policy | ClearEMI" };

export default function PrivacyPolicyPage() {
  return (
    <InfoPage title="Privacy policy" intro="What happens to the information you enter in the calculator.">
      <h2>Calculator inputs</h2>
      <p>Loan amount, interest rate, and tenure are used in your browser to calculate the estimate. This version of the site does not submit those values to a server or store them in an account.</p>
      <h2>Cookies and analytics</h2>
      <p>This initial version does not include analytics or advertising integrations. If those services are added, this policy must be updated to explain what data they collect and how to manage preferences.</p>
      <h2>Policy updates</h2>
      <p>This policy should be reviewed and updated before adding third-party services or other data collection.</p>
    </InfoPage>
  );
}