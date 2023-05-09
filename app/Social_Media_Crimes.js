import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';

const SmC = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='white' />
            <View style={{ position: 'absolute', right: 0, top: 40, }} >
                <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
            </View>
            <Header fdid={1} lanID={route.params.lanID}/>
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 18 }}>
                    Many of us have grown to rely on social media platforms such as Facebook, Instagram, and Twitter to remain connected, follow the news, and even make purchases. However, as their popularity grows, so does the possibility of fraud.
                    These sorts of frauds are becoming highly complicated, frequently use brand logos and fraudulent terms and conditions to seem real. Here, we will look at the most frequent forms of social media fraud and how to protect yourself online.
                </Text>
                <List.Section>
                    <List.Accordion
                        title="Social media scams" style={{ backgroundColor: 'transparent', }}>
                        <List.Item title='Fake friends' />
                        <List.Item descriptionNumberOfLines={null} description="It goes without saying that you should be cautious about who you connect with on social media. People contacting you as a friend and requesting money may sound like something out of an American TV drama, but it is shockingly regular. The fraudster may even impersonate as one of your friends or send you phishing links that direct you to a dangerous website." />
                        <List.Item title='Free app downloads' />
                        <List.Item descriptionNumberOfLines={null} description="These apps frequently request personal information from you. An app that appears to be legitimate may in fact download virus onto your smartphone. Before downloading new apps, consider if you trust the source, conduct research, and avoid third-party app stores in favour of the one provided by your phone carrier." />
                        <List.Item title='Quizzes' />
                        <List.Item descriptionNumberOfLines={null} description="Online questionnaires promising to tell you your personality type, which celebrity you look like or give you a too-good-to-be-true prize, come with hidden threats. They usually include terms and conditions which allow the data you enter to be sold to third parties. It also means the app developer can obtain a lot of information about you from your profile, friends and IP address. Avoid any short quizzes advertised on social media sites like Facebook and Twitter." />
                        <List.Item title='Hidden URLS' />
                        <List.Item descriptionNumberOfLines={null} description="Beware of clicking on shortened URLs which hide the full location of the webpage. They are very common on Twitter and while they could innocently direct you to the correct site, there’s always a chance they might divert you to one which installs malware. Be wary of what you click on, check if the post is typical behaviour from the account publishing it and make sure you have real-time protection against spyware and viruses." />
                        <List.Item title='Identity theft and Defamation' />
                        <List.Item descriptionNumberOfLines={null} description="When a computer linked to the internet is used as a tool or media to misrepresent a person or entity, this is referred to as cyber defamation. For example, publishing a defamatory comment about a person on a social networking site such as Facebook, Twitter, or others, or sending emails with defamatory information about a person with the aim to defame him or her." />
                        <List.Item title='Sexting and Cyber-bullying:' />
                        <List.Item descriptionNumberOfLines={null} description="Sexting is sending sexually explicit photographs, messages, and video in a text message or email. Cyberbullying is the act of spreading unpleasant or embarrassing images and words about another person via the Internet, mobile devices, or other technology. Examples of cyber bullying include: sending regular mean messages, spreading rumours, sharing private information, creating fake profiles to bully others or excluding anyone out of an online group." />
                        
                    </List.Accordion>

                    <List.Accordion
                        title="How to stay safe on social (PREVENTIONS AND PRECAUTIONS)">
                        <List.Item title='Use strong, unique passwords' />
                        <List.Item descriptionNumberOfLines={null} description="You should have unique passwords for all your online accounts, including email. People often have the same passwords for their accounts, which is dangerous. If your password also uses any type of personal details (like a pet’s name or mother’s maiden name) a fraudster might easily grab this from your social media posts." />
                        <List.Item title='Change your passwords every 30 days' />
                        <List.Item descriptionNumberOfLines={null} description="To ensure safety and privacy, one should stay out of risk by changing the passwords of their important personal/business accounts in every 30 days." />
                        <List.Item title='Don’t post personal details' />
                        <List.Item descriptionNumberOfLines={null} description="If you’re sharing your nicknames, pet’s names, address or when you’re on holiday, you’re probably increasing your risk of a fraudster being able to piece together your details." />
                        <List.Item title='Make your accounts private' />
                        <List.Item descriptionNumberOfLines={null} description="Or have limited details showing on anything that can be viewed by the public. That way only trusted friends and family can see what you’re posting." />
                        <List.Item title='Steer clear of strangers' />
                        <List.Item descriptionNumberOfLines={null} description="If someone contacts you on social media asking for personal details, be very careful. Always make sure they are genuine and you’re providing details for the right reason." />
                        <List.Item title='Delete old social media profiles' />
                        <List.Item descriptionNumberOfLines={null} description="Keep track of your digital footprint by removing any accounts you no longer user. If a profile was created ten years ago, there may be personal information currently available for a fraudster to use that you’re not aware of or you have forgotten about." />
                        <List.Item title='Install anti-virus software' />
                        <List.Item descriptionNumberOfLines={null} description="There are a number of free services which can help protect your laptop and any other personal devices from malware." />
                        <List.Item title='Take care on public Wi-Fi' />
                        <List.Item descriptionNumberOfLines={null} description="Sometimes scammers can impersonate a genuine Wi-Fi network or hack into an existing one. If you’re getting connected on the go, avoid using apps with sensitive information, like mobile banking." />

                    </List.Accordion>

                    <List.Accordion
                        title="PUNISHMENTS ACCORDING TO IT ACT, 2000">
                        <List.Item title='Posting offensive messages on a regular basis' />
                        <List.Item descriptionNumberOfLines={null} description="SECTION 66A prescribes punishment for posting, regulating or transmitting any mails, comments or messages that are unwarranted or offensive: 
                        Imprisonment up to 3 years with a fine or both." />
                       
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

export default SmC;