import Footer from "@/components/footer";
import Header from "@/components/header";
import { LegalSection } from "@/components/legal-content";
import LegalContent from "@/components/legal-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PAVAN GOLD",
  description: "Learn about how PAVAN GOLD collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <LegalContent title="Privacy Policy" lastUpdated="March 2024">
        <LegalSection>
          <p>
            At PAVAN GOLD, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PAVAN GOLD and how we use it.
          </p>
          <p className="mt-4">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:mail@pavangold.com" className="text-primary hover:underline">mail@pavangold.com</a>.
          </p>
          <p className="mt-4">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PAVAN GOLD. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </LegalSection>

        <LegalSection title="Consent">
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </LegalSection>

        <LegalSection title="Information We Collect">
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="mt-4">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p className="mt-4">
            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>
          <p className="mt-4">
            We also gather usage statistics such as pages viewed, number of unique visitors, browser software, screen resolution etc. for analysis that helps us provide you improved user experience and services.
          </p>
        </LegalSection>

        <LegalSection title="How We Use Your Information">
          <p>We use the information we collect in various ways, including:</p>
          <ul className="list-disc pl-6 mt-4 flex flex-col gap-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and marketing</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </LegalSection>

        <LegalSection title="Log Files">
          <p>
            PAVAN GOLD follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </LegalSection>

        <LegalSection title="Cookies and Web Beacons">
          <p>
            Like any other website, PAVAN GOLD uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
        </LegalSection>

        <LegalSection title="Third Party Privacy Policies">
          <p>
            PAVAN GOLD&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </LegalSection>

        <LegalSection title="Contact Us">
          <p>
            For any queries regarding our privacy practices, please contact us at:
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
