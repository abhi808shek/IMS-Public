import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function PrivacyPolicy() {


	return (
		<>
        <div className='container privacy_policy'>
            <div className='row'>
                <div className='header_wrapper'>
                    <h1 className={`${roboto.className} text-start fw-bold`}>Privacy Policy</h1>
                    <p>Last Updated: October 3, 2024</p>

                </div>

            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-dark my-3'>
                        At Sortly, Inc. (<strong>“Sortly”, “we”, “us”,</strong> or <strong>“our”</strong>), we are committed to protecting your
                         personal information and your right to privacy. We want you to be fully informed about 
                         the information we collect, how it is used, shared, and protected, and the choices you 
                         have with it and explain the privacy and data practices at Sortly.
                    </p>
                    <p className='text-dark my-3'>
                        This privacy policy (the “Policy”) applies to all information collected through our website located 
                        at<span className='text_red'> https://www.Sortly.com </span> (the “Website”) and/or any related services, sales, marketing or events 
                        (we refer to all of these collectively in this Policy as the (collectively, “Services“).
                    </p>
                    <p className='text-dark my-3'>
                        If there are any terms in this Policy that you do not agree with, you should immediately discontinue use of our Services. 
                        If you have any questions or concerns about our disclosed 
                        practices with regards to your personal information, please contact us at privacy@Sortlyapp.com.
                    </p>
                    <p className='text-dark my-3'>
                        <strong>Introduction</strong>. Sortly Inc. (the <strong>“Company” </strong>or <strong>“we”</strong>) respects your privacy and we are committed to protecting it
                         through our compliance with this policy. This policy describes the types of information we may collect from 
                         you or that you may provide when you visit the website www.sortly.com (this<strong>“Website“</strong>) or through the “Sortly” 
                         productivity app (the <strong>“App“</strong>), and our practices for collecting, storing, processing, using, maintaining, 
                         transferring, sharing, protecting and disclosing that information. Providing your personal information
                          (as defined in this Privacy Policy) to us may be required in order to use certain features and functionalities 
                          of the Website or the App, including any such features that require you to create an account with us. Providing
                           personal information for survey, marketing, or other similar purposes is not required; however, please note that 
                           certain features or functionalities may not be as customized or personalized without such information.
                    </p>
                    <p className='text-dark my-3'><strong>Table of Contents</strong></p>
                   
                        <ol className='ms-2 ps-0 list'>
                            <li>When We Collect Personal Information</li>
                            <li>Types of Personal Information We Collect</li>
                            <li>How We Use Collected Personal Information</li>
                            <li>How We May Share Personal Information</li>
                            <li>Your Rights and How to Exercise Them</li>
                            <li>Online Tracking Technologies and How to Opt Out</li>
                            <li>U.S. State-Specific Notice</li>
                            <li>UK & EEA Specific Notice</li>
                            <li>Security & Retention</li>
                            <li>Children’s Privacy</li>
                            <li>Links on our Services</li>
                            <li>Changes to This Policy</li>
                            <li>Contact Us</li>

                        </ol>
       
                    <p className='text-dark my-3'><strong>1. When We Collect Personal Information</strong></p>
                    <p className='text-dark my-3'>We collect personal information when</p>
                      
                    <ul>
                        <li>You sign up for our Services.</li>
                        <li>You download and use our mobile application.</li>
                        <li>You visit or interact with our Services, including by uploading any company-specific information.</li>
                        <li>You inquire about our Services, engage with our support team or otherwise communicate with us.</li>
                        <li>You view or interact with our emails or other communications.</li>
                    </ul>

                    <p className='text-dark my-3 fw-bold'>2. Types of Personal Information We Collect</p>
                    <p className='text-dark my-3'>We collect the following categories of personal information:</p>
                    <ul>
                        <li>Information you provide directly to us:</li>
                        <ul>
                            <li>Information when you register for an account, including if we offer you the ability to 
                                sign in with third party account credentials (eg; Google).</li>
                            <li>Information from your interactions with our support team or inquiries 
                                into our Services, which may include providing us with your name, 
                                work or personal email, phone number, company name, position title, 
                                website, social media links, and time zone.</li>
                            <li>Our website offers you the ability to purchase our Services, 
                                including providing us with your credit card and billing information.</li>
                            <li>Any company data you upload to our Services that may contain personal 
                                information, such as any information associated with company employees, 
                                contractors, partners, photos of specific individuals, individual licenses,
                                    or potentially associated GPS locations of individuals or IoT devices.</li>
                        </ul>
                        <li>Information we automatically collect during your visit to our Website:</li>
                        <ul>
                            <li>Services form entry content. We do not intentionally collect personal information from users who upload information 
                                through our website or mobile application. However, certain personal information may be provided through our
                                    Services which may be collected automatically through our systems.</li>
                            <li>Website and mobile device metadata and analytics, including IP address,
                                    device information, date/time of visits, new or returning visits, products viewed, 
                                    page response times, URL clickstreams, how long you stay on our pages, what you do on those pages.</li>
                            <li>We may use cookies, beacons, pixel tags, and other similar technologies to collect additional information 
                                automatically as you interact with the Services, to personalize your experience with our Services, 
                                and to measure the performance of our advertising and marketing efforts. Learn more about this collection 
                                in the ‘Cookies and Tracking Technologies’ section below.</li>
                        </ul>
                        <li>Information from third parties:</li>
                            <ul>
                                <li>When you interact with our accounts on LinkedIn or potentially other third party services, we may collect certain 
                                    information that you or the platform make available to us such as Website metadata analytics
                                        (above), your referral traffic to our Website, or custom website interactions.</li>
                                <li>We may also engage third parties to provide additional information about business 
                                    professionals who are interested in our Services, engage with our website, or interact with us on social media.</li>                                
                            </ul>
                    </ul>
                    <p className='text-dark my-3'>
                        Our Website and Services are designed for business professionals. We do not intentionally collect any personal 
                        information from minors under the age of 16. If you believe we have obtained 
                        personal information associated with children, please contact us at privacy@Sortlyapp.com and we will delete it.
                    </p>
                    <p className='text-dark my-3 fw-bold'>3. How We Use Collected Personal Information</p>
                    <p className='text-dark my-3'>We use the personal information that you give and we collect for the following purposes:</p>
                    <ul>
                        <li>To authenticate and secure your account, including through Google Sign in (in compliance with their API Services User Data Policy).</li>
                        <li>To provide our Services, including providing web and mobile software for our Customers</li>
                        <li>For customer support by responding to your issue reports, questions or feedback.</li>
                        <li>To improve or troubleshoot any issues with our Services.</li>
                        <li>To communicate with you, such as sending you email or SMS updates about new features, products, and services.</li>
                        <li>To comply with our agreements or policies.</li>
                        <li>For other business and legal purposes, such as to detect and prevent fraud, to collect amounts owing to us, and to maintain business records.
                        With your consent.</li>
                    </ul>
                    <p className='text-dark my-3 fw-bold'>4. How We May Disclose Personal Information</p>
                    <p className='text-dark my-3'>We may disclose your information with your consent. 
                        We may also share your information with our corporate affiliates, as well as vendors or service providers who:</p>
                    <ul>
                        <li>Process credit card or other payments and enable subscription Services.</li>
                        <li>Help us communicate with you, including through email marketing.</li>
                        <li>Manage and optimize our Website and Services, including website and mobile analytics providers</li>
                    </ul>
                    <p className='text-dark my-3'>In addition:</p>
                    <ul>
                        <li>We may disclose your personal information in order to:</li>
                        <ul>
                            <li>Protect the legal rights of our company, our employees, our agents, and our affiliates;</li>
                            <li>Protect the safety and security of our customers or Website visitors;</li>
                            <li>Detect and protect against fraud;</li>
                            <li>Comply with law or legal process.</li>
                        </ul>
                        <li>We may disclose your personal information as part of a business transition.</li>
                        <ul>
                            <li>We may also share your personal information with prospective purchasers exclusively to evaluate the proposed transaction; and</li>
                            <li>We may also share your personal information with another company that buys the assets or stock of Sortly. That company may use 
                                and disclose personal information for purposes similar to those described in this Privacy Policy. </li>       
                        </ul>
                        <p>In addition, we may disclose de-identified, aggregate, or anonymous information about our Website visitors for any purpose.</p>
                    </ul>
                    <p className='text-dark my-3 fw-bold'>5. Your Privacy Choices And How To Exercise Them</p>
                    <ul>
                        <li>Access the personal information we maintain about you.</li>
                        <li>Delete the personal information we maintain about you, unless such information is necessary for compliance with our legal or regulatory obligations.</li>
                        <li>Correct inaccurate personal information we maintain about you.</li>
                        <ul>
                            <li>Opt-Out of certain uses of your personal information. You can opt out of:</li>
                            <li>Email marketing: you may unsubscribe to our commercial email list by following the instructions provided in the email.</li>
                        </ul>
                    </ul>
                    <p className='text-dark my-3'>You can exercise these choices by contacting Sortly at privacy@Sortlyapp.com.</p>
                    <p className='text-dark my-3 fw-bold'>6. Online Tracking Technologies and How To Opt Out</p>
                    <p className='text-dark my-3'>Like many companies, we use cookies, pixels, web beacons, and other tracking technologies to collect information about your browsing activities, your interactions with websites and apps, and potentially to serve tailored ads. There are a number of ways to opt out of having 
                        your online activity and device data collected through these Services, which we summarize below:</p>
                    <ul>
                        <li><strong>Blocking Cookies In Your Browser.</strong> Most browsers let you remove or reject cookies, including 
                        cookies used for interest-based advertising. To do this, follow the instructions in your browser 
                        settings. Many browsers accept cookies by default until you change your settings. For more 
                        information about cookies, including how to see what cookies have been set on your device 
                        and how to manage and delete them, visit www.allaboutcookies.org.</li>
                        <li><strong>Advertising Industry Opt-Out Tools.</strong> You can also use these opt-out options to limit use
                            of your information for interest-based advertising online or in apps by visiting http://optout.aboutads.info.</li>
                        <li><strong>With Each of Our Vendors Individually.</strong> The following advertising partners offer 
                        opt-out features that let you opt-out of use of your information for interest-based advertising. Please note that because these opt-out mechanisms are specific to the device or browser on which they are exercised, you will need to opt out on every browser and device that you use.</li>
                    </ul>
                    
                    <div class="table-responsive">
                        <table class="table table-bordered  policy_table">
                        <thead class="table-heading text-dark">
                            <tr>
                            <th colspan="2" className='heading'>Third Party Advertising Services</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Google</td>
                            <td><a href="#" class="link">Google Advertising Opt Out</a></td>
                            </tr>
                            <tr>
                            <td>LinkedIn</td>
                            <td><a href="#" class="link">LinkedIn Privacy Preferences</a></td>
                            </tr>
                            <tr class="table-heading text-dark">
                            <td colspan="2" className='heading'>Analytics</td>
                            </tr>
                            <tr>
                            <td>Google Analytics</td>
                            <td><a href="#" class="link">Google Privacy</a></td>
                            </tr>
                            <tr>
                            <td>Hubspot</td>
                            <td><a href="#" class="link">Hubspot Privacy</a></td>
                            </tr>
                            <tr>
                            <td>Twilio Segment</td>
                            <td><a href="#" class="link">Twilio Privacy</a></td>
                            </tr>
                            <tr>
                            <td>Hotjar</td>
                            <td><a href="#" class="link">Hotjar Privacy</a></td>
                            </tr>
                            <tr>
                            <td>Amplitude</td>
                            <td><a href="#" class="link">Amplitude Privacy</a></td>
                            </tr>
                            <tr>
                            <td>VWO</td>
                            <td><a href="#" class="link">VWO Privacy</a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <p className='text-dark fw-bold my-3'>7. U.S. State-Specific Notice</p>
                    <p className='text-dark my-3'>Sortly discloses the categories and types of personal information collected and disclosed in the sections above. 
                        Sortly does not ‘sell’ or ‘share’ personal information, as defined by any U.S. state privacy law.</p>
                
    
                    <p className='text-dark my-3 fw-bold'>8. UK & EEA Specific Notice</p>
                    <p className='text-dark my-3'>The European Union and the United Kingdom (“UK”) have enacted comprehensive privacy laws 
                        including the General Data Protection Regulation (collectively, the “GDPR”). The GDPR affords 
                        residents of the UK and European Economic Area (“EEA”) certain privacy protections and rights. Please note that ChatGPT and 
                        similar technologies are banned in certain countries. If ChatGPT is banned in your country, do not use our Services.</p>

                    <p className='text-dark my-3'><u>Legal Basis:</u></p>
                    <p className='text-dark my-3'>We process personal data under the following legal basis.</p>
                    <div class="table-responsive">
                        <table class="table table-bordered legal_basic">
                        <thead>
                            <tr class="custom-header">
                            <th>Processing Activity</th>
                            <th>Legal Basis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Placement of cookies on our Website</td>
                            <td>Consent</td>
                            </tr>
                            <tr>
                            <td>Improving our Website and Services</td>
                            <td>Legitimate Interest</td>
                            </tr>
                            <tr>
                            <td>Product, Marketing or Service-Related Communications</td>
                            <td>Legitimate Interest and Contract Necessity</td>
                            </tr>
                            <tr>
                            <td>Billing and Services Delivery</td>
                            <td>Necessary Pursuant to Contract</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
        
                    <p className='text-dark my-3'><u>Controller/Processor Designation:</u></p>
                    <p className='text-dark my-3'>Under the GDPR, we are designated as a “Controller” for the collection and use of all 
                        customer account-related information collected through this Website or our mobile application. 
                        For use of our customers’ personal data, including personnel uploaded 
                        into our systems, we are designated as a ‘Processor.’ A list of our subprocessors 
                        is available to our enterprise customers on-demand.
                    </p>
                    <p className='text-dark my-3'><u>Cross-Border Data Transfers:</u></p>
                    <p className='text-dark my-3'>We may transfer to, and store the data we collect about you, 
                        in countries other than the country in which the data was originally collected, 
                        including the United States, Canada or other destinations outside the EEA and the UK. 
                        Those countries may not have equivalent data protection laws as the country in which you 
                        provided the data. When we transfer your data to other countries, we will protect the data 
                        as described in this Privacy Policy and applicable supplemental product privacy policy and 
                        comply with applicable legal requirements providing adequate protection for the transfer of 
                        data to countries outside the EEA.
                    </p>
                    <p className='text-dark my-3'>If you are located in the EEA, we will transfer your personal data to 
                        our processors in the United States through execution of the
                            Standard Contractual Clauses adopted by the European Commission.
                    </p>
                    <p className='text-dark my-3'><u>Additional Rights for UK or European Economic Area Residents:</u></p>
                    <p className='text-dark my-3'>For any data subjects who are customers or have interacted with Sortly, please contact us at 
                        <span className='text_red'> privacy@Sortlyapp.com</span> to exercise your rights to Access, Modify, Delete, or Object to our use of your personal data.</p>
                    <p className='text-dark my-3'>If you believe one of our clients has uploaded your personal data as part of our Services, please contact that company as 
                        Sortly does not have access or the capability to rectify data subject rights related to Client Data.</p>
                    <p className='text-dark my-3'>In addition to the rights granted above, if you are a UK or EEA resident, the GDPR grants you the right to lodge a complaint against us with your local 
                        data protection authority. You can find your data protection authority at 
                       <span className='text_red'> https://edpb.europa.eu/about-edpb/about-edpb/members_en.</span>
                    </p>
                    <p className='text-dark my-3 fw-bold'>9. Security & Retention</p>
                    <p className='text-dark my-3'>We have implemented reasonable security measures designed to protect your personal 
                        information from unauthorized access and disclosure. It is important that you understand, however, that no website, Internet-connected device or online platform is completely secure. We cannot anticipate all 
                        potential misuse of your information, and as a result, 
                        cannot guarantee the security of any information you transmit to us.
                    </p>
                    <p className='text-dark my-3'>
                        We generally retain customer personal information for as long as necessary to provide our Services. 
                        We may also retain personal information if required by law, or for our legitimate interests, 
                        such as abuse detection and prevention, and defending ourselves from legal claims. Residual copies 
                        of personal data may be stored in backup systems for a limited period as a security measure to protect against data loss.
                    </p>
                    <p className='text-dark my-3'>For more information, please email us at <span className='text_red'>privacy@Sortlyapp.com.</span></p>
                    <p className='text-dark my-3 fw-bold'>10. Children’s Privacy</p>
                    <p className='text-dark my-3'>We do not intentionally collect any personal information from children under the age of 16. If you believe we 
                        have obtained personal information associated with children under the age of 16, please contact us at privacy@Sortlyapp.com</p>
                
                    <p className='text-dark my-3 fw-bold'>11. Links On Our Services</p>
                    <p className='text-dark my-3'>Our Services may contain links to other websites or services. We do not control what information you provide, or is collected by 
                        these third-party websites. We encourage you to read the privacy policies or statements of the other websites you visit.</p>
            
            
                    <p className='text-dark my-3 fw-bold'>12. Changes To This Policy</p>
                    <p className='text-dark my-3'>We may revise this Policy from time to time. Review it occasionally so that you keep up-to-date on our most current practices. 
                        We will put the effective date of the latest version at the top of each Policy.</p>
            
            
                    <p className='text-dark my-3 fw-bold'>13. Contact Us</p>
                    <p className='text-dark my-3'>If you have any questions about our privacy or security practices, or if you would like to request 
                        access to or correction of your personal information, you can contact Sortly by mail, telephone, or e-mail:
                    </p>
                    <p className='text-dark my-3'>
                    Sortly Inc.<br/>
                    166 Geary St, STE 1500 #1781<br/>
                    San Francisco, CA 94108<br/>
                    <span className='text_red'>privacy@Sortlyapp.com</span><br/>
                    </p>
                 
            
                  
    

        

                </div>
            </div>
        </div>


					
		</>
	);
}




			
					
						

