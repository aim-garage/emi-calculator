import { InfoPage } from "@/components/InfoPage";

export const metadata = { title: "Contact | ClearEMI" };

export default function ContactPage() {
  return (
    <InfoPage title="Contact" intro="Questions or feedback about the calculator are welcome.">
      <h2>Get in touch</h2>
      <p>Contact details are being prepared. Before public launch, this page will include a monitored support address for questions, corrections, and accessibility feedback.</p>
      <h2>Calculation questions</h2>
      <p>The calculator uses a standard reducing-balance EMI formula. Estimates may differ from a lender’s quote because of fees, rate changes, payment dates, or rounding.</p>
    </InfoPage>
  );
}