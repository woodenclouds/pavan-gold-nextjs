import Footer from "@/components/footer";
import Header from "@/components/header";
import { LegalSection } from "@/components/legal-content";
import LegalContent from "@/components/legal-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | PAVAN GOLD",
  description: "Review the terms and conditions for using PAVAN GOLD's website and services.",
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <LegalContent title="Terms and Conditions" lastUpdated="March 2024">
        <LegalSection>
          <p>Welcome to PAVAN GOLD</p>
          <p className="mt-4">
            These terms and conditions outline the rules and regulations for the use of PAVAN GOLD&apos;s Website, operated by MITHRA GOLD AND DIAMONDS LLP.
          </p>
          <p className="mt-4">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use PAVAN GOLD if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </LegalSection>

        <LegalSection title="Terminology">
          <p>
            The following terminology applies to these Terms and Conditions: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to PAVAN GOLD. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner.
          </p>
        </LegalSection>

        <LegalSection title="License">
          <p>
            Unless otherwise stated, PAVAN GOLD and/or its licensors own the intellectual property rights for all material on PAVAN GOLD. All intellectual property rights are reserved. You may access this from PAVAN GOLD for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p className="mt-4 font-semibold">You must not:</p>
          <ul className="list-disc pl-6 mt-2 flex flex-col gap-1">
            <li>Republish material from PAVAN GOLD</li>
            <li>Sell, rent or sub-license material from PAVAN GOLD</li>
            <li>Reproduce, duplicate or copy material from PAVAN GOLD</li>
            <li>Redistribute content from PAVAN GOLD</li>
          </ul>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>
            We employ the use of cookies. By accessing PAVAN GOLD, you agreed to use cookies in agreement with PAVAN GOLD&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit.
          </p>
        </LegalSection>

        <LegalSection title="Product Authenticity">
          <p>
            All jewellery sold by PAVAN GOLD is BIS Hallmarked. We guarantee the purity and authenticity of our gold, diamond, and platinum products as per the certifications provided at the time of purchase.
          </p>
        </LegalSection>

        <LegalSection title="Refund Policy">
          <p>
            Unless mandated by law or agreed otherwise in writing, payments made for customized jewellery or specific orders are subject to our in-store refund policy. Please consult with our staff for detailed information regarding returns and exchanges.
          </p>
        </LegalSection>

        <LegalSection title="Governing Law">
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </LegalSection>

        <LegalSection title="Contact Information">
          <p>
            If you have any queries regarding any of our terms, please contact us:
            <br />
            <strong>Telephone:</strong> 0494 2423916
            <br />
            <strong>Mobile:</strong> +91 98461 92222
            <br />
            <strong>Email:</strong> mail@pavangold.com
          </p>
        </LegalSection>
      </LegalContent>
      <Footer />
    </main>
  );
}
