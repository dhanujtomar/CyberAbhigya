import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';

const OC = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='white' />
            <View style={{ position: 'absolute', right: 0, top: 40, }}>
                <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
            </View>
            <Header fdid={2} lanID={route.params.lanID} />
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 18 }}>
                    Scam websites are any illegal websites on the internet that are used to trick users into committing fraud or malicious acts. These may include fake security alerts, prize/ property giveaways and other deceiving formats to lure an impression of legitimacy.
                    Such websites attract users for negative purposes like penetrating identity theft to credit card frauds. Here are eight common Internet crimes that are impacting people today

                </Text>
                <List.Section>
                    <List.Accordion title="Online/website crimes" style={{ backgroundColor: 'transparent', }}>
                        <List.Item title='1. Phishing' />
                        <List.Item descriptionNumberOfLines={null} description="Phishing is when criminals send fake emails claiming to be from trusted brands to obtain sensitive, private information. Always be cautious about the information you disclose online. Frequently, any links in the email may go to a website run by a scammer. " />
                        <List.Item title='2. Harassment' />
                        <List.Item descriptionNumberOfLines={null} description="Cyber-stalkers stalk and harass people using online communication channels like social media, email, and websites. Hate speech, libel, false charges, threats, and other actions that humiliate or shame a person are examples of forms of internet harassment. Cyberstalking can result in jail time and heavy fines as punishment." />
                        <List.Item title='3. Ransomware' />
                        <List.Item descriptionNumberOfLines={null} description="Cyber thieves might install harmful software on your PC, effectively holding your essential information ransom until you match their demands. A typical ransomware attack may either shut down or encrypt a victim's computer, promising to unlock the contents only if the victim pays a ransom. However, far too frequently, the files are never retrieved." />
                        <List.Item title='4. Child Pornography & Solicitation' />
                        <List.Item descriptionNumberOfLines={null} description="It is said that children, in particular, spend more time on the Internet for educational purposes, particularly for online sexual abuse, sending obscene messages, exposure to pornography, sexual abuse material, cyber-bullying, and online harassment, among other things. - face similar dangers. Perpetrators will use the Internet to gain access to sexually explicit images of children, and sometimes even arrange for a face-to-face meeting." />
                        <List.Item title='5. Intellectual Property Theft' />
                        <List.Item descriptionNumberOfLines={null} description="Intellectual property theft (IP theft) is the stealing of people's or businesses' ideas, inventions, and creative expressions (i.e., their IP). Trade secrets, trademarks, copyrights, and patents are the four primary categories of intellectual property. Intellectual property theft may cause significant economic harm, a loss of competitive advantage, and a slowdown in future business growth." />
                        <List.Item title='6. Account Hacking and impersonation' />
                        <List.Item descriptionNumberOfLines={null} description="We are all aware of how important it is to protect our passwords; consider the harm that could result from someone gaining access to your email account, which contains all of your most sensitive data. Someone may go to jail if they access your computer, email, or social media accounts without your permission. A user impersonation attack is a type of fraud in which an attacker assumes the identity of a trusted individual to steal cash or private data from a business." />
                        <List.Item title='7. Drug Trafficking' />
                        <List.Item descriptionNumberOfLines={null} description="The internet drug trade has grown dramatically over the past few years with the rise of cryptocurrencies. Cannabis, cocaine, meth, ecstasy, and heroin are just a few clicks away, and in today's society, recreational drug sales and purchases take place online in darknet markets." />
                        <List.Item title='8. Credit Card Fraud' />
                        <List.Item descriptionNumberOfLines={null} description="Spyware, the harmful software that is accidentally installed on a victim's computer or mobile device, is the origin of 50% of all credit card theft. Background-running spyware collects your information and sends it back to the fraudster, who then uses your card to make illegal purchases. It might involve a scam artist contacting a user on a social network and persuading them to send money through a credit card. An actual credit card might also be taken, or its numbers could be obtained and used to make online purchases. Alternately, a criminal may hack into a bank or company database to steal consumer personal information and sell it online." />
                        <List.Item title='9. Work from home' />
                        <List.Item descriptionNumberOfLines={null} description="Work from home scam is one of the serious internet frauds. Under this, fraudsters dupe people who are looking for work-from-home opportunities by promising that they will earn handsome money, just by working for a few hours from home. To register for the scheme, job seekers will be asked to deposit a certain amount of money for a job kit that is useful for the work. After the money is deposited, there will be no track of employers." />
                        <List.Item title='10. Matrimonial frauds' />
                        <List.Item descriptionNumberOfLines={null} description="In this busy lifestyle, people prefer online matrimonial sites to find their life partners. But the sad part here is a lot of people lose lakhs of money while finding their soulmates on matrimonial sites. Fraudsters dupe innocent people by creating fake profiles. Also, there are many gangs set up to carry out this fraud. Under this fraud, first, fraudsters make victims believe them. Once the trust is created, money is looted from the victims." />
                        <List.Item title='11.  Social media frauds' />
                        <List.Item descriptionNumberOfLines={null} description="With the number of people using social media, social media frauds are on the rise. Cyberbullying is one of the biggest social media frauds many teenagers have fallen prey to. Under cyberbullying, social media sites are used to bully people. Also, there are many other social media frauds like Facebook friend fraud." />
                        <List.Item title='12. lottery fraud' />
                        <List.Item descriptionNumberOfLines={null} description="Lottery fraud is one of the top three internet frauds in India. Under lottery fraud, fraudsters call you or send emails and messages stating you have won a lottery worth rupee some crore. To receive the lottery money, you will be asked to transfer money online in the name of tax.  Sometimes you will be asked to pay money by visiting fake websites. When you try to make a payment using those websites, all your card details will be stolen." />

                    </List.Accordion>

                    <List.Accordion title="PREVENTIONS:">
                        <List.Item descriptionNumberOfLines={null} description="•	Use only verified apps and access only authorized websites." />
                        <List.Item descriptionNumberOfLines={null} description="•	Use secure connections" />
                        <List.Item descriptionNumberOfLines={null} description="•	Don’t share any personal information on online platforms" />
                        <List.Item descriptionNumberOfLines={null} description="•	Keep your financial credentials private and secure." />
                        <List.Item descriptionNumberOfLines={null} description="•	Never click on any suspicious links on SMS or Emails" />
                        <List.Item descriptionNumberOfLines={null} description="•	Never share your passwords, OTPs or login pins." />
                        <List.Item descriptionNumberOfLines={null} description="•	Keep your phone and internet services up-to-date." />
                    </List.Accordion>

                    <List.Accordion title="PUNISHMENTS ACCORDING TO IT ACT, 2000">
                        <List.Item title='Identity theft and cheating by impersonation:' />
                        <List.Item descriptionNumberOfLines={null} description="Section 66C prescribes punishments for identity theft for dishonestly making use of electronic signatures or passwords: 
                        Imprisonment extending up to 3 years and a fine extending up to 1 lakh rupees." />
                        <List.Item title='Cheating by impersonation using computer resources:' />
                        <List.Item descriptionNumberOfLines={null} description="Section 66D prescribes the punishment for impersonation or identity theft using computer device: 
                        Imprisonment up to 3 years and a fine extending up to 1 lakh rupees." />
                        <List.Item title='Publishing or transmitting obscene or sexually explicit material in electronic form:' />
                        <List.Item descriptionNumberOfLines={null} description="Section 67/67A/67B prescribes punishment for publishing or transmitting any sexually inappropriate content using electronic resources:
                    	First conviction imprisonment extending up to 3 years with a fine of 5 lakh rupees
                    	Second conviction imprisonment extending up to 5 years with a fine of 10 lakh rupees." />

                    </List.Accordion>

                    <List.Accordion title="Case studies" style={{ backgroundColor: 'transparent', }}>
                        <List.Item title='Lucknow family loses Rs 16 lakh in an online fraud ' />
                        <List.Item descriptionNumberOfLines={null} description="A Lucknow-based man and his two sons lost Rs 16 lakhs after scammers obtained a new SIM card for his mobile number and lodged an FIR about a missing SIM by submitting a fake Aadhar.
                        https://www.indiatoday.in/technology/news/story/lucknow-family-loses-rs-16-lakh-in-an-online-fraud-1959980-2022-06-08 " />
                        <List.Item title='Delhi: Woman clicks on URL, loses Rs 4 lakh' />
                        <List.Item descriptionNumberOfLines={null} description="http://timesofindia.indiatimes.com/articleshow/92500863.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" />

                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#white',
        paddingHorizontal: 15,
        marginBottom: 120,
    },
    Textinfo: {
        fontSize: 18,
        lineHeight: 23,
    }
})

export default OC;