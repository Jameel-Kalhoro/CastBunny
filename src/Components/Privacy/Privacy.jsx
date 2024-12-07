import React from "react";
import "./Privacy.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

const Privacy = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="privacyWrap">
      <div className="privacyHeading">
        <div>
          <MdOutlineArrowCircleLeft
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />{" "}
          CastBunny’s Privacy Policy
        </div>
        <p>
          Welcome to CastBunny.com and any other websites, applications, or
          services that link to this Privacy Policy (collectively, the
          "CastBunny Service"), operated by CastBunny Inc. ("CastBunny," "we,"
          "our," or "us"). At CastBunny, we value the privacy of our users,
          publishers, and others who visit and use the CastBunny Service
          (collectively or individually, "You" or "Users"). This Privacy Policy
          explains how we collect, use, and disclose information from and about
          you. By agreeing to this Privacy Policy during your CastBunny account
          setup, or by using the CastBunny Service, you expressly consent to the
          information handling practices described in this notice.
        </p>
      </div>

      <div className="privacyDetails">
        <div className="privacyDetailsHeading">1. Information We Collect</div>
        <div className="privacyDetailsContent">
          <div>1.1 User-Provided Information</div>
          <p>
            You may provide us with "personal information" (such as your name,
            email address, postal address, phone number, credit card
            information, and billing details) when you: <br />● Register for a
            CastBunny account
            <br />● Upload or download content <br />● Enter contests or
            promotions <br />● Submit feedback or support requests
          </p>

          <div>1.2 Automatically Collected Information</div>
          <p>
            When you access the CastBunny Service or open our emails, we may
            automatically collect: <br />● Internet Protocol (IP) address <br />
            ● Unique user ID <br />● Device type and identifiers <br />● Browser
            information
            <br /> ● Operating system details <br />● Pages accessed and
            interaction data <br />● Time spent on pages <br />● Dates and times
            of visits
          </p>

          <div>1.3 Information from Third Parties</div>
          <p>
            We may obtain information, including personal information, from
            third parties such as:
            <br />
            <span style={{ marginLeft: "20px" }}>● Advertisers</span>
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Social media platforms (e.g., YouTube, Twitch, Facebook)
            </span>
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Other streaming services you've connected to CastBunny
            </span>
            <br />
            When you access CastBunny through social media or other platforms,
            you authorize us to collect, store, and use information provided by
            those services in accordance with this Privacy Policy.
          </p>
        </div>

        <div className="privacyDetailsHeading">
          2. How We Use Your Information
        </div>
        <div className="privacyDetailsContent">
          <p>
            We use the collected information to:
            <br />● Operate, maintain, and improve the CastBunny Service
            <br />● Process your transactions and send related communications
            <br />● Provide customer support and respond to inquiries
            <br />● Send administrative messages about service changes or
            updates
            <br />● Analyze user behavior to enhance our service and develop new
            features
            <br />● Personalize your experience and deliver targeted content
            <br />● Detect and prevent fraudulent or unauthorized activity
            <br />● Comply with legal obligations
          </p>
        </div>

        <div className="privacyDetailsHeading">
          3. Information Sharing and Disclosure
        </div>
        <div className="privacyDetailsContent">
          <p>
            CastBunny does not sell or rent your personal information to third
            parties for their marketing purposes without your explicit consent.
            We may share your information in the following circumstances:
          </p>
          <div>3.1 Service Providers</div>
          <p>
            We may share information with third-party service providers who help
            us operate our business, such as:
            <br />● Cloud storage providers
            <br />● Payment processors
            <br />● Analytics companies
            <br /> ● Customer support services
          </p>

          <div>3.2 Legal Requirements</div>
          <p>
            We may disclose your information if required by law, legal process,
            or government request.
          </p>

          <div>3.3 Business Transfers</div>
          <p>
            If CastBunny is involved in a merger, acquisition, or sale of
            assets, your information may be transferred as part of that
            transaction.
          </p>

          <div>3.4 With Your Consent</div>
          <p>
            We may share your information for any other purpose with your
            explicit consent.
          </p>
        </div>

        <div className="privacyDetailsHeading">
          4. Data Retention and Deletion
        </div>
        <div className="privacyDetailsContent">
          <p>
            We retain your information for as long as necessary to provide our
            services and fulfill the purposes outlined in this Privacy Policy.
            You can request deletion of your account data by emailing{" "}
            <a href="mailto:privacy@castbunny.com" style={{ color: "inherit" }}>
              privacy@castbunny.com
            </a>
            . Please note that some information may be retained for legal or
            legitimate business purposes.
          </p>
        </div>

        <div className="privacyDetailsHeading">5. Your Rights and Choices</div>
        <div className="privacyDetailsContent">
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Access to your personal information
            </span>
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Correction of inaccurate data
            </span>
            <br />
            <span style={{ marginLeft: "20px" }}>● Deletion of your data</span>
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Restriction of processing
            </span>
            <br />
            <span style={{ marginLeft: "20px" }}>● Data portability</span>
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Objection to processing
            </span>
            <br />
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@castbunny.com" style={{ color: "inherit" }}>
              privacy@castbunny.com
            </a>
            .
          </p>
        </div>

        <div className="privacyDetailsHeading">
          6. Cookies and Tracking Technologies
        </div>
        <div className="privacyDetailsContent">
          <p>
            CastBunny uses cookies and similar tracking technologies to enhance
            your experience, analyze usage patterns, and deliver personalized
            content. You can manage your cookie preferences through your browser
            settings.
          </p>
        </div>

        <div className="privacyDetailsHeading">7. Data Security</div>
        <div className="privacyDetailsContent">
          <p>
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="privacyDetailsHeading">8. Children's Privacy</div>
        <div className="privacyDetailsContent">
          <p>
            The CastBunny Service is not directed to children under 13. We do
            not knowingly collect personal information from children under 13.
            If we become aware that we have collected personal information from
            a child under 13, we will take steps to delete such information
          </p>
        </div>

        <div className="privacyDetailsHeading">
          9. International Data Transfers{" "}
        </div>
        <div className="privacyDetailsContent">
          <p>
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place
            to protect your information in compliance with applicable laws.
          </p>
        </div>

        <div className="privacyDetailsHeading">
          10. Changes to This Privacy Policy
        </div>
        <div className="privacyDetailsContent">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on our
            website or by sending you an email
          </p>
        </div>

        <div className="privacyDetailsHeading">11. Contact Us</div>
        <div className="privacyDetailsContent">
          <p>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at: CastBunny Inc.
            <br />
            Attn: Privacy Officer
            <br />
            Email:{" "}
            <a href="mailto:privacy@castbunny.com" style={{ color: "inherit" }}>
              privacy@castbunny.com
            </a>
            <br />
            By using the CastBunny Service, you acknowledge that you have read
            and understood this Privacy Policy. Last updated: Oct 27, 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
