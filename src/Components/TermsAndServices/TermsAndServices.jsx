import React from "react";
import "./TermsAndServices.css";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TermsAndServices = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="TermsAndServicesWrap">
      <div className="TermsAndServicesHeading">
        <MdOutlineArrowCircleLeft
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />{" "}
        CastBunny’s Terms of Service
      </div>
      <div className="TermsAndServicesDetailsWrap">
        <div className="TermsAndServicesDetails">
          <div>1. Introduction and Acceptance of Terms</div>
          <p>
            These Terms of Service ("Terms") constitute a legally binding
            agreement between CastBunny Inc. ("CastBunny," "we," "our," or "us")
            and you, the user of our services. By accessing or using
            www.castbunny.com, any CastBunny-affiliated websites, or our mobile
            applications (collectively, the "Service"), you agree to be bound by
            these Terms and our Privacy Policy, which is incorporated by
            reference.
          </p>
        </div>
        <div className="TermsAndServicesDetails">
          <div>2. Service Description</div>
          <p>
            CastBunny provides a multi-platform streaming service that utilizes
            peer-to-peer (P2P) technology. Our services include, but are not
            limited to: <br /> ● Multi-platform live streaming
            <br /> ● CastStudios <br />● Analytics and reporting features
            <br /> ● VOD & Stream <br />● Chat integration & Donations <br />
            <span className="TermsAndServicesDetailsSpan">
              We offer both free and paid subscription options, collectively
              referred to as the "Service."
            </span>
          </p>
        </div>
        <div className="TermsAndServicesDetails">
          <div>3. Account Registration and Eligibility</div>
          <p>
            3.1. To use our Service, you must create an account. You are
            responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account.
            <br /> 3.2. You must be at least 18 years old to use our Service. If
            you are under 18, you may only use the Service under the supervision
            of a parent or legal guardian who agrees to be bound by these Terms
            <br /> 3.3. By creating an account, you represent and warrant that
            all information you provide is accurate, current, and complete, and
            you agree to update your information as necessary to maintain its
            accuracy.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>4. User Conduct</div>
          <p>
            4.1. You agree to use our Service in compliance with all applicable
            laws, regulations, and these Terms. <br /> 4.2. You may not use our
            Service for any illegal or unauthorized purpose, including but not
            limited to:
            <br />{" "}
            <span style={{ marginLeft: "20px" }}>
              ● Violating any local, state, national, or international law{" "}
            </span>{" "}
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Infringing on any proprietary rights of any party
            </span>
            <br />{" "}
            <span style={{ marginLeft: "20px" }}>
              ● Harassing, abusing, or threatening other users
            </span>{" "}
            <br />
            <span style={{ marginLeft: "20px" }}>
              ● Transmitting any unlawful, harmful, or offensive content
            </span>{" "}
            <br />
            4.3. You are solely responsible for all content you stream or share
            through our Service, including but not limited to video, audio,
            text, and images ("User Content").
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>5. Intellectual Property Rights</div>
          <p>
            5.1. CastBunny Content: All content provided through the Service,
            including but not limited to text, graphics, logos, icons, images,
            audio clips, digital downloads, and software, is the property of
            CastBunny or its content suppliers and is protected by international
            copyright laws.
            <br /> 5.2. User Content: You retain all rights to your User
            Content. However, by using our Service, you grant CastBunny a
            worldwide, non-exclusive, royalty-free, sublicensable, and
            transferable license to use, reproduce, distribute, prepare
            derivative works of, display, and perform your User Content in
            connection with the Service and CastBunny's business.
            <br /> 5.3. Copyright Infringement: If you believe that any content
            on our Service infringes upon your copyright, please contact our
            Copyright Agent at{" "}
            <a
              href="mailto:copyright@castbunny.com"
              style={{ color: "inherit" }}
            >
              copyright@castbunny.com
            </a>
            .
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>6. Payment and Billing</div>
          <p>
            6.1. Paid Services are billed in advance on a subscription basis.
            You agree to pay all fees associated with your account.
            <br /> 6.2. If you dispute any charges, you must notify CastBunny
            within 30 days of the date of billing.
            <br /> 6.3. CastBunny reserves the right to change its fees and
            billing methods at any time. Any changes will be effective upon
            posting to the Service or by email notification.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>7. Termination</div>
          <p>
            7.1. You may terminate your account at any time by contacting our
            support team.
            <br /> 7.2. CastBunny reserves the right to suspend or terminate
            your account for violations of these Terms or for any other reason
            at our sole discretion, with or without notice
            <br />
            7.3. Upon termination, your right to use the Service will
            immediately cease, and we may delete your account and all associated
            data.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>8. Disclaimer of Warranties</div>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. CASTBUNNY DOES
            NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>9. Limitation of Liability</div>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, CASTBUNNY SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE
            SERVICE
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>10. Indemnification</div>
          <p>
            You agree to indemnify and hold CastBunny harmless from any claims,
            losses, damages, liabilities, and expenses arising out of your use
            of the Service or violation of these Terms.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>11. Governing Law and Dispute Resolution</div>
          <p>
            These Terms shall be governed by the laws of [Your Jurisdiction].
            Any dispute arising from these Terms shall be resolved through
            binding arbitration in accordance with the rules of [Arbitration
            Association].
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>12. Changes to Terms</div>
          <p>
            We may modify these Terms at any time. We will notify you of any
            material changes by posting the new Terms on the Service or via
            email. Your continued use of the Service after such notice
            constitutes your acceptance of the new Terms.
          </p>
        </div>

        <div className="TermsAndServicesDetails">
          <div>13. Contact Information</div>
          <p>
            For any questions regarding these Terms, please contact us at{" "}
            <a href="mailto:legal@castbunny.com" style={{ color: "inherit" }}>
              legal@castbunny.com
            </a>
            . By using CastBunny's Service, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;
