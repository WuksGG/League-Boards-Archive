import type { ReactFragment } from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Text,
  Box,
  Link,
  Divider,
  OrderedList,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

function Privacy(): ReactFragment {
  return (
    <Flex direction='column'>
      <Text as='h2'>Privacy Policy</Text>
      <Box sx={{
        '& a': {
          color: '#ff4848',
        }
      }}>
        <Text as='span'><Text as='b'>Last updated: January 30, 2022</Text></Text>
        <Text>Thank you for choosing to use our application at Runeterra.net (<Text as='strong'>&quot;Company&quot;</Text>, <Text as='strong'>&quot;we&quot;</Text>, <Text as='strong'>&quot;us&quot;</Text>, or <Text as='strong'>&quot;our&quot;</Text>). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, our our practices with regards to your personal information, please contact us at <Link href="mailto:inquiries@runeterra.net" target="_blank">inquiries@struxlab.com</Link>.</Text>
        <Text>When you visit our Website, <NextLink href="/">https://archive.runeterra.net</NextLink>, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our sites and services.</Text>
        <Text>This privacy policy applies to all information collected through use of this website, and/or any related services, sales, marketing, or events (we refer to them collectively in this privacy policy as the <Text as='strong'>&quot;Services&quot;</Text>).</Text>
        <Text><Text as='strong'>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</Text></Text>

        <Divider />

        <Box>
          <Text as='h3'>Table of Contents</Text>
          <OrderedList>
            <ListItem><Link href="#anchor_1">What information do we collect?</Link></ListItem>
            <ListItem><Link href="#anchor_2">How do we use your information?</Link></ListItem>
            <ListItem><Link href="#anchor_3">Will your information be shared with anyone?</Link></ListItem>
            <ListItem><Link href="#anchor_4">Do we use cookies and other tracking technologies?</Link></ListItem>
            <ListItem><Link href="#anchor_5">How do we handle your social logins?</Link></ListItem>
            <ListItem><Link href="#anchor_6">How long do we keep your information?</Link></ListItem>
            <ListItem><Link href="#anchor_7">How do we keep your information safe?</Link></ListItem>
            <ListItem><Link href="#anchor_8">Do we collect information from minors?</Link></ListItem>
            <ListItem><Link href="#anchor_9">What are your privacy rights?</Link></ListItem>
            <ListItem><Link href="#anchor_10">Data Breach</Link></ListItem>
            <ListItem><Link href="#anchor_11">Controls for Do-Not-Track Features</Link></ListItem>
            <ListItem><Link href="#anchor_12">Do California residents have specific privacy rights?</Link></ListItem>
            <ListItem><Link href="#anchor_13">Do we make updates to this policy?</Link></ListItem>
            <ListItem><Link href="#anchor_14">How can you contact us about this policy?</Link></ListItem>
          </OrderedList>
        </Box>

        <Text as='h3' id="anchor_1">1. What information do we collect?</Text>
        <Text as='h4'>Personal information you disclose to us</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We collect personal information that you provide to us.</Text></Text>
        <Text>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services (such as posting messages in our online forums, or making contributions on the Services), or otherwise contacting us.</Text>
        <Text>The personal information we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect can include the following:</Text>
        <Text><Text as='b'>Publicly Available Personal Information.</Text> We collect first name, last name, and nickname; email addresses; social logins; and other similar data.</Text>
        <Text><Text as='b'>Social Media Login Data.</Text> We provide you with the option to register using social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the Information described in the section called &quot;<Link href="#anchor_5">How do we handle your social logins?</Link>&quot; below.</Text>
        <Text>All personal information that you provide to us should be true, complete, and accurate; and you should notify us of any changes to such personal information.</Text>
        <Text as='h4'>Information automatically collected</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> Some information, such as IP address and/or browser and device characteristics, is collected automatically when you visit our Services.</Text></Text>
        <Text>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information), but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</Text>
        <Text>Like many businesses, we also collect information through cookies and similar technologies.</Text>
        <Text><Text as='b'>Online Identifiers.</Text> We collect tools and protocols, such as IP (Internet Protocol) addresses; and other similar data.</Text>

        <Text as='h3' id="anchor_2">2. How do we use your information?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</Text></Text>
        <Text>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processesing grounds we rely on next to each purpose listed below.</Text>
        <Text>We use the information we collect or receive:</Text>
        <UnorderedList>
          <ListItem><Text as='b'>To facilitate account creation and logon process.</Text> If you choose to link your account with us to a third party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed &quot;<Link href="#anchor_5">How do we handle your social logins?</Link>&quot; for further information.</ListItem>
          <ListItem><Text as='b'>Request Feedback.</Text> We may use your information to request feedback and to contact you about your use of our Services.</ListItem>
          <ListItem><Text as='b'>To protect our Services.</Text> We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).</ListItem>
          <ListItem><Text as='b'>To enable user-to-user communications.</Text> We may use your information in order to enable user-to-user communications with each user&rsquo;s consent.</ListItem>
          <ListItem><Text as='b'>To enforce our terms, conditions, and policies for Business Purposes, Legal Reasons, and Contractual.</Text></ListItem>
          <ListItem><Text as='b'>To respond to legal requests and prevent harm.</Text> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</ListItem>
          <ListItem><Text as='b'>To manage user accounts.</Text> We may use your information for the purposes of managing our account and keeping it in working order.</ListItem>
          <ListItem><Text as='b'>To deliver services to the user.</Text> We may use your information to provide you with the requested service.</ListItem>
          <ListItem><Text as='b'>For other Business Purposes.</Text> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience. We may use and store this information in aggregated and anyonmized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</ListItem>
        </UnorderedList>

        <Text as='h3' id="anchor_3">3. Will your information be shared with anyone?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</Text></Text>
        <Text>We may process or share data based on the following legal basis:</Text>
        <UnorderedList>
          <ListItem><Text as='b'>Consent:</Text> We may process your data if you have given us specific consent to use your personal information in a specific purpose.</ListItem>
          <ListItem><Text as='b'>Legitimate Interests</Text> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</ListItem>
          <ListItem><Text as='b'>Performance of a Contract:</Text> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</ListItem>
          <ListItem><Text as='b'>Legal Obligations:</Text> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</ListItem>
          <ListItem><Text as='b'>Vital Interests</Text> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</ListItem>
        </UnorderedList>
        <Text>More specifically, we may need to process your data or share your personal information in the following situations:</Text>
        <UnorderedList>
          <ListItem><Text as='b'>Business Transfers.</Text> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</ListItem>
          <ListItem><Text as='b'>Third-Party Advertisers.</Text> We may use third-party advertising companies to serve ads when you visit the Services. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</ListItem>
        </UnorderedList>

        <Text as='h3' id="anchor_4">4. Do we use cookies and other tracking technologies?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We may use cookies and other tracking technologies to collect and store your information.</Text></Text>
        <Text>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</Text>

        <Text as='h3' id="anchor_5">5. How do we handle your social logins?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</Text></Text>
        <Text>Our Services offer you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your account identifier, name, e-mail address, profile picture as well as other information you choose to make public.</Text>
        <Text>We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</Text>

        <Text as='h3' id="anchor_6">6. How long do we keep your information?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless otherwise required by law.</Text></Text>
        <Text>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period of required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.</Text>
        <Text>When we have no ongoing legitimate business need to process your personal information, we will either delete it or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>

        <Text as='h3' id="anchor_7" >7. How do we keep your information safe?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We aim to protect your personal information through a system of organizational and technical security measures.</Text></Text>
        <Text>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.</Text>

        <Text as='h3' id="anchor_8">8. Do we collect information from minors?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> We do not knowingly collect data from or market to children under 18 years of age.</Text></Text>
        <Text>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such a minor dependent&rsquo;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <Link href="mailto:inquiries@runeterra.net" target="_blank">inquiries@runeterra.net</Link>.</Text>

        <Text as='h3' id="anchor_9" >9. What are your privacy rights?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</Text></Text>
        <Text>In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the <Link href="#anchor_14">contact details</Link> provided below. We will consider and act upon any request in accordance with applicable data protection laws.</Text>
        <Text>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.</Text>
        <Text>If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <Link href="https://ec.europa.eu/newsroom/article29/items/612080/en" target="_blank">https://ec.europa.eu/newsroom/article29/items/612080/en</Link>.</Text>
        <Text>If you have any questions or comments about your privacy rights, you may email us at <Link href="mailto:inquiries@runeterra.net" target="_blank">inquiries@runeterra.net</Link>.</Text>
        <Text as='h4'>Account Information</Text>
        <Text>If you would at any time like to review or change the information in your account or terminate your account, you can contact us using the contact information provided.</Text>
        <Text>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements.</Text>
        <Text><Text as='b'><Text as='u'>Cookies and similar technologies:</Text></Text> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit <Link  href="https://www.aboutads.info/choices/" target="_blank">https://www.aboutads.info/choices/</Link>.</Text>
        <Text><Text as='b'><Text as='u'>Opting out of email marketing:</Text></Text> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list; however, we will still need to send you service-related emails that are necessary for the adminsitration and use of your account. To otherwise opt-out, you may access your account settings and update preferences.</Text>

        <Text as='h3' id="anchor_10">10. Data Breach</Text>
        <Text>A privacy breach occurs when there is unauthorized access to or collection, use, disclosure, or disposal of personal information. You will be notified about data breaches when Runeterra.net believes you are likely to be at risk or serious harm. For example, a data breach may be likely to result in serious financial harm or harm to your mental or physical well-being. In the event that Runeterra.net becomes aware of a security breach which has resulted or may reult in unauthorized access, use, or disclosure of personal information, Runeterra.net will promptly investigate the matter and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.</Text>

        <Text as='h3' id="anchor_11" >11. Controls for Do-Not-Track Features</Text>
        <Text>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</Text>

        <Text as='h3' id="anchor_12">12. Do California residents have specific privacy rights?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</Text></Text>
        <Text>California Civil Code Section 1798.83, also known as the &quot;Shine the Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request to us using the contact information provided below.</Text>
        <Text>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</Text>

        <Text as='h3' id="anchor_13">13. Do we make updates to this policy?</Text>
        <Text><Text as='i'><Text as='b'>In Short:</Text> Yes, we will update this policy as necessary to stay compliant with relevant laws.</Text></Text>
        <Text>We may update this privacy policy from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</Text>

        <Text as='h3' id="anchor_14" >14. How can you contact us about this policy?</Text>
        <Text>If you have questions or comments about this policy, you may email us at <Link href="mailto:inquiries@struxlab.com" target="_blank">inquiries@runeterra.net</Link>, or use the <NextLink href="/contact">Contact Form</NextLink>.</Text>

        <Text as='h3'>How can you review, update, or delete the data we collect from you?</Text>
        <Text>Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please email us at <Link href="mailto:inquiries@runeterra.net" target="_blank">inquiries@struxlab.com</Link>. We will respond to your request within 30 days.</Text>
      </Box>
    </Flex>
  );
}

type GetStaticProps = {
  props: {
    pageTitle: string,
  },
};
export async function getStaticProps(): Promise<GetStaticProps> {
  return {
    props: {
      pageTitle: 'Privacy Policy',
    },
  };
}

export default Privacy;
