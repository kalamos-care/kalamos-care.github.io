import { FC } from 'react';

import { Grid, Typography } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const copy = [
    {
        header: ``,
        body: [
            { paragraph: `Kalamos Care, Inc. (“Kalamos,” “we,” or “us,”) is committed to protecting your privacy. This Privacy Policy (“Privacy Policy”) along with our Terms of Use constitute a valid and binding contract between you (“you” or the “Client”) and Kalamos. This Privacy Policy describes how Kalamos collects, uses, secures, and shares information we receive from you when you access this website, https://kalamos.care/ (“the Website” or “this Website”), our STI testing management services or other services, and software provided on or in connection with such services (collectively, “the “Services”). You acknowledge that this Privacy Policy is part of our Terms of Use, and by agreeing to use the Services, you are agreeing to be bound by all of its terms and conditions and all applicable laws and regulations. If you do not agree to these terms, you are prohibited from using or accessing the Services.` },
            { paragraph: `By using our Website or Services, you are consenting to have your personal information transferred to and processed in the United States.We make no assurances that the Website is suitable for use outside the United States.` },
        ],
    },
    {
        header: `INFORMATION WE COLLECT`,
        body: [
            { paragraph: `In order to provide you with our Services, we may collect, store, and use personally identifiable information that can be used to identify you by itself or when it is combined with other information (“Personal Information”). Personal Information may include identifiers such as name, address, cell phone number, financial, insurance, and credit card information or email address. We may collect Personal Information from you in a variety of ways, including through a registration form, by you filling in forms or by submitting information on the Services or by corresponding with us by phone, email, or otherwise. Personal Information includes Medical Information and Insurance Information, as defined below.` },
            { paragraph: `In order to use our Services, we may require you to complete intake forms which request Personal Information such as medical and demographic information (“Medical Information”) and/or insurance information (“Insurance Information”) for use by Kalamos and your physician or healthcare provider (the “Provider”).` },
            { paragraph: `You will be asked to provide Medical Information relating to you, which may include, but is not limited to, age, disease history, medical test results, and medical treatments. The Provider may provide us with additional Medical Information regarding your medical status and/or the care you may receive. We will also ask that you provide certain information regarding your Provider, including his/her name, address and contact information,National Provider Identification (NPI) and Medicaid provider numbers, and information regarding his/her current electronic medical records (EMR) system in order to allow us to provide you our Services.` },
            { paragraph: `You may also be asked to provide Insurance Information, including the name of your insurance provider, your policy holder’s name, a Member ID number or personal insurance account number, and your relationship to the policy holder. We will also request a customer service or contact phone number associated with your insurance provider. This information will be requested for both your primary and secondary insurance, as applicable.` },
            { paragraph: `You will also be asked to provide an email address so that we and/or the Provider may contact you with relevant reminders and updates about the Services.` },
            { paragraph: `Personal Information collected through the Service and submitted to the Provider may become part of your medical record (both paper and electronic) with the Provider and will be subject to applicable laws, rules, regulations, and guidelines relating to the handling of Personal Information and medical records.` },
            { paragraph: `Entry of Personal Information through the Services is completely voluntary and it is your choice to provide us with the Personal Information requested. Please be aware that failure to provide the requested Personal Information may prevent us from providing you Services.` },
            { paragraph: `From time to time, Kalamos may share aggregate, non-personal information about website usage with third parties, including government agencies and advertisers. Aggregate information does not contain any Personal Information about our users.`},
        ],
    },
    {
        header: `HOW WE MAY COLLECT AND USE YOUR INFORMATION `,
        body: [
            { paragraph: `We do not collect any Personal Information about you unless you voluntarily provide it to us. We may use Personal Information we collect from you in the following ways:` },
            { paragraph: `To contact you;
            To deliver Services to you;
            To identify and authenticate Clients;
            To provide you with information for any products and services that you request from us;
            To register your email address with us;
            To ensure that our Website and our Services function in an effective manner for you;
            To keep our Website safe and secure;
            To process payment information;
            To provide you with relevant reminders and updates about the Services;
            To measure or understand the effectiveness of advertising and outreach.
            ` },
            { paragraph: `We may combine your Personal Information with other information about you that is available to us, including information from other sources.  ` },
        ],
    },
    {
        header: `HOW WE MAY DISCLOSE YOUR INFORMATION`,
        body: [
            { paragraph: `Kalamos will not use, disclose, or share your Personal Information; nor will we sell, trade, or rent your Personal Information to others, except as described in this Privacy Policy. We may share Personal Information about you to unaffiliated third parties:` },
            { paragraph: `
            If you request or authorize it;
            If the information is provided to help complete a transaction for you;
            If the information is provided to comply with law, applicable regulations, governmental and quasi-governmental requests, court orders, or subpoenas, to enforce our Terms of Use or other agreements, or to protect our rights, property or safety or the rights, property or safety of our users or others (e.g., to a consumer reporting agency for fraud protection etc.);
            If the disclosure is done as part of a purchase, transfer or sale of services or assets (e.g., in the event that substantially all of our assets are acquired by another party, customer information may be one of the transferred assets);
            If the information is provided to our agents, outside vendors or service provides to perform functions on our  behalf (e.g., analyzing data, providing marketing assistance, providing customer services, processing orders, etc.); or
            As otherwise described in this Privacy Policy.
            ` },
            { paragraph: `We require our agents, vendors and service providers to limit their use of information but do not otherwise guarantee that any entity receiving such information in connection with one of these transactions will abide by this Privacy Policy.  Agents, vendors and service providers who may have access to protected health information are contractually obligated to protect the privacy and security of such information. We may disclose aggregate, non-personal information to third parties for any purpose.` },
            { paragraph: `Please be advised that we may disclosure your Personal Information to Shopify, Inc. and its affiliates, including Shopify Data Processing (USA) Inc., Shopify Payments (USA) Inc., Shopify (USA) Inc., and Shopify International Limited (collectively “Shopify”) in order to facilitate purchases and other financial transactions you make through the Website.  Your Personal Information will also be disclosed to and may be stored by JN Projects, Inc., d.b.a. HelloSign (“HelloSign”) in order to assist in the creation, completion, and management of your intake forms and other forms containing Personal Information necessary for us to perform the Services. By agreeing to use the Services, you are expressly agreeing to allow Shopify and HelloSign to access, use, and store your Personal Information in accordance with their respective privacy policies, available here   https://www.shopify.com/legal/privacy (Shopify); https://www.hellosign.com/privacy (HelloSign).` },
            { paragraph: `Please read Shopify and HelloWork’s privacy policies carefully before agreeing to use the Services.  Kalamos Care is not responsible for the privacy practices of Shopify or HelloSign.` },
        ],
    },
    {
        header: `HOW LONG DO WE KEEP YOUR INFORMATION`,
        body: [
            { paragraph: `We keep your Personal Information only for as long as we continue to have a business purpose for it. We retain information we collect from you where we have an ongoing business need to do so (for example, to comply with applicable legal, tax or accounting requirements).` },
            { paragraph: `If you cease using the Services, we will keep your Personal Information in a form that allows identification of your Personal Information for no longer than is necessary for our business needs (or as otherwise required by law).` },
        ],
    },
    {
        header: `UPDATES TO OR DELETION OF YOUR INFORMATION `,
        body: [
            { paragraph: `You may edit or delete any of your Personal Information in your account online at any time by linking to your account in accordance with instructions posted elsewhere on this Website. You may also access and correct your Personal Information by communicating with us at privacy@kalamos.care. You may request that Kalamos deactivate your account at any time.` },
        ],
    },
    {
        header: `CHOICES REGARDING COLLECTION, USE, AND DISTRIBUTION OF YOUR INFORMATION`,
        body: [
            { paragraph: `We may, from time to time, send you email regarding our Service and/or the Website. In addition, we may occasionally send you emails about other services that we feel may be of interest to you. Only Kalamos (or agents working on behalf of Kalamos and under confidentiality agreements) will send you these emails.` },
            { paragraph: `Kalamos email correspondence will include instructions on how to update your e-mail preferences or unsubscribe from our emails.  Please follow the instructions in the emails to notify Kalamos of changes to your name, email address and preference information.  If you choose to unsubscribe from our email services, you will no longer receive this type of promotional correspondence. We will still be able to communicate with you about your account and your transactions with us.  ` },
            { paragraph: `You can choose to delete or block cookies by setting your browser to either reject all cookies or to allow cookies only from selected sites.  If you block cookies, performance of the Website may be impaired and certain features may not function at all. See the section entitled “Use of Cookies,” below, for more information on our use of cookies.` },
        ],
    },
    {
        header: `THIRD PARTY LINKS `,
        body: [
            { paragraph: `This Website may contain links to third party websites.  If you choose to click those links, you will leave the Website.  Third party websites may have privacy practices that differ from ours.  We have not reviewed the privacy policies of these third party sites and make no representations about, and are not responsible for, the privacy practices of such third party websites.` },
        ],
    },
    {
        header: `CHANGES TO THIS PRIVACY POLICY `,
        body: [
            { paragraph: `Kalamos may update this Privacy Policy from time to time.  If we decide to change our Privacy Policy, we will post those changes on this page and update the Privacy Policy modification date at the top of this page and, where appropriate, notify you of any changes we make to the Privacy Policy by email.  You acknowledge and agree that it is your responsibility to review this Website and this Privacy Policy periodically and to be aware of any modifications. Your continued use of the Website after such modifications will constitute your: (i) acknowledgment of the modified Privacy Policy; and (ii) agreement to abide and be bound by the modified Privacy Policy.` },
        ],
    },
    {
        header: `INFORMATION SECURITY`,
        body: [
            { paragraph: `Kalamos is committed to protecting the security and privacy of your information stored by us.  We will take all steps reasonably necessary to restrict access to Personal Information to those of our employees, agents, contractors, or representatives who require access to such information to perform tasks assigned to them by us.` },
            { paragraph: `We use reasonable security efforts to protect the data in our possession.  However, no method of transmission or storage of data is 100% secure and we will not be responsible for any damage that results from a security breach of data or the unauthorized access to or use of information, including Personal Information.  To the extent we provide your Personal Information to any third parties, we will request that they use reasonable security measures to protect your information. If you create copies of information from the Services, we cannot protect the security and privacy of the information contained in such copies.` }
        ],
    },
    {
        header: `USE OF COOKIES`,
        body: [
            { paragraph: `When you use our Website we or our third-party vendors may store cookies on your computer in order to facilitate and customize your use of our Website. A cookie is a small data text file, which a website stores on your computer's hard drive (if your web browser permits) that can later be retrieved to identify you to us. Certain pages of the Websites and/or html email correspondence may use session cookies, persistent cookies or web beacons to anonymously track unique visitors, save website preferences and to allow us to recognize visits from the same computer and browser.        
            ` },
            { paragraph: `There are several types of cookies. Cookies that are essential for the operation of our Site (“Essential Cookies”). These cookies enable services you have specifically asked for.  These cookies remain on your device only until you close your browser after visiting our websites. Some cookies are used to collect anonymous information on the pages visited (“Performance Cookies”). For example, we might use Performance Cookies to keep track of which pages are most popular, which method of linking between pages is most effective, and to determine why some pages are receiving error messages.  These cookies remain on your device only until you close your browser after visiting our website. Some cookies remember choices you make to improve your experience (“Functionality Cookies”). These Functionality Cookies remain on your device for an extended period of time. When you revisit our Websites we recognize Functionality Cookies and remember your preferences or can automatically log you on to the website.  Personal Information on our system may be associated with Functionality Cookies but the cookies themselves do not contain any of your Personal Information.` },
            { paragraph: `In general, the cookies on our Website make your use of the Website easier, makes the Website run more smoothly and help us to maintain a secure Website. You are always free to decline our cookies if your browser permits, but some parts of our Website may not work properly in that case. ` },
            { paragraph: `Please be advised that our third-party vendors, including Shopify and HelloSign, may use cookies or similar technologies on our Website. By agreeing to use the Services, you are expressly agreeing to allow Shopify and HelloSign to use cookies and/or similar technologies to collect information about you as described in their respective policies. Shopify’s cookie policy is available here: https://www.shopify.com/legal/cookies. HelloSign’s use of cookies is described in the HelloSign privacy policy available here: https://www.hellosign.com/privacy. We recommend that you read these policies carefully before agreeing to these terms.` },
        ],
    },
    {
        header: `MINORS`,
        body: [
            { paragraph: `This Website and our Services are directed towards adults.  Our Services and any related content, including our public content, is not directed at or meant for individuals under the age of 18.  Kalamos will not knowingly collected or use any Personal Information from individuals under the age of 18. If we become aware that we have collected any Personal Information from individuals under the age of 18, we will promptly delete such information.` },
        ],
    },
    {
        header: `CALIFORNIA PRIVACY RIGHTS`,
        body: [
            { paragraph: `California Civil Code Section 1798.83, also known as the "Shine the Light" law, permits our customers who are California residents to request and obtain from us once a year, free of charge, information about the Personal Information we disclosed to third parties for direct marketing purposes in the preceding calendar year. If you are a California resident and would like a copy of this notice, please send an e-mail to [insert email address] or write to us at [insert mailing address]. Not all information sharing is covered by the “Shine the Light” requirements and only information on covered sharing will be included in our response. Under California law, businesses are only required to respond to a request once during any calendar year.` },
        ],
    },
    {
        header: `OUTSIDE THE UNITED STATES`,
        body: [
            { paragraph: `Our Website is based in the United States and is intended for users residing in the U.S. If you are located outside of the United States, the information we collect may be transferred to and processed in the United States and in other countries where the privacy laws may not be the same as the laws where you reside and, in some cases, may not be as protective.` },
        ],
    },
    {
        header: `"DO NOT TRACK"`,
        body: [
            { paragraph: `“Do Not Track” (“DNT”) is a privacy preference that you may set in certain web browsers. DNT provides you with a method of informing websites and services that you do not want certain information about your website visits collected. Please be advised that we do not respond to DNT signals.` },
        ],
    },
    {
        header: `CONTACT INFORMATION`,
        body: [
            { paragraph: `The Website is owned and operated by Kalamos. You can contact us using the Contact Us page or by email via privacy@kalamos.com.` },
        ],
    },
];


export const Privacy: FC = () => {
    return (
        <Grid container>
            <PageTitle title="Privacy Policy" />
            <Grid item xs={12}>
                {copy.map((section) => (
                    <Grid>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            {section.header}
                        </Typography>
                        <Grid>
                            {section.body.map((i) => (
                                <Typography variant="body1" paragraph>
                                    {i.paragraph}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Privacy;