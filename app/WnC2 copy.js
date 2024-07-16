import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';

const MyComponent2 = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='white'/>
        <View style={{position:'absolute',right:0,top:40,}} >
            <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
        </View>
        <Header/>
        <ScrollView style={styles.container}>
            <Text style={{fontSize:18}}>
                Women, especially housewives and who are prone to social media users have been exposed to such crimes during the pandemic. A total number of 704 cybercrime cases against women were registered in 2020 i.e., when the pandemic started and 504 cybercrimes cases against women were registered in 2021 only halfway through the year.{'\n\n'}
                Children are more vulnerable when they are kept away from their parents or when there is no one to look after them. Most of the children, especially those belonging to Grade 1 to Grade 5, are very less acquainted with technology and internet use, and ethics. Therefore, it becomes very easy for sexual predators and other cybercrime offenders to hack the devices of these children and manipulate them. A child does not know whether the particular website is safe to visit or not, or whether a particular image/video should be downloaded or not and hence, gets easily manipulated to indulge in immoral activities and become easy targets of the cybercrime offenders.
            </Text>
            <List.Section>
                <List.Accordion
                    title="Crime Against Women" style={{backgroundColor:'transparent',}}>
                    <List.Item title='Cyberstalking' />
                    <List.Item descriptionNumberOfLines={null}  description="It included connecting or trying to connect with the victim on social media or phone calls despite clear indication of disinterest from her end, posting messages (sometimes threatening) on the profile of the victim, constantly bombarding the victim with emails/text messages/phone calls, etc." />
                    <List.Item title='Sextortion' />
                    <List.Item descriptionNumberOfLines={null} description="This is the most common cybercrime committed against women during the period of the pandemic. The offenders started extorting money or sexual favors by blackmailing the victims to reveal their private pictures or morphed images. The pandemic and lockdown frustration made the offenders seek sexual video calls/images or messages from women by threatening them. Also, loss of income encouraged them to extort money by threatening the victim with their morphed images." />
                    <List.Item title='Cyber hacking' />
                    <List.Item descriptionNumberOfLines={null} description="During the lockdown, people started to read news online. There was a rise in cases of fake news and information. The women started becoming the victim of cyber hacking by clicking on malware links which get all their information available on phone, turns on the camera and microphone, and captures their intimate pictures and videos. Offenders, in turn, use these pieces of information and pictures for sextortion and other favours."/>
                    <List.Item title='Cyberbullying' />
                    <List.Item descriptionNumberOfLines={null} description="This included publishing defamatory and abusive statements against the victim on social media platforms and demanding money for deleting them, insensitive comments on the posts of the victim, exchanging morphed images/private images of the victim without her consent, sending rape threats to the victim, etc."/>
                    <List.Item title='Phishing' />
                    <List.Item descriptionNumberOfLines={null} description="To make money in lockdown, offenders are sending fake emails with a link to a particular webpage to induce the victim to unwittingly enter personal data like bank account details, contact details, and passwords or with the intention to install harmful viruses in the victim’s device as soon as they open the link. These emails and messages appear to have come from legitimate sources. The offenders then make fraudulent transactions from the victim’s account to their account with the use of the bank account and other personal details of the victim."/>
                    <List.Item title='Sexually abusive and pornographic content' />
                    <List.Item descriptionNumberOfLines={null} description="During the pandemic, offenders were also indulged in sexual abuse of women on the internet, morphing the picture of the victim and using it for the purpose of pornography."/>
                    <List.Item title='Cybersex trafficking' />
                    <List.Item descriptionNumberOfLines={null} description="Unlike sex trafficking, the victim does not come in direct contact with the abuser. In cybersex trafficking, the dealer live-streams, films, or photos of the victim performing sexual/intimate acts from a central location and sells the material online to sexual predators and buyers. The offenders have been sexually abusing women by making them a part of cybersex trafficking byways of coercion, manipulation, and blackmailing."/>

                </List.Accordion>

                <List.Accordion
                    title="Crime Against Children">
                    <List.Item title='Sexual abuse' />
                    <List.Item descriptionNumberOfLines={null} description="This includes child sexual abuse materials such as child pornographic images and videos, online sexual exploitation of children over phone call/video call where children are coerced into performing sexual acts." />
                    <List.Item title='Child Pornographic/sexually explicit content' />
                    <List.Item descriptionNumberOfLines={null} description="While using the internet for education and entertainment purposes or going through a social media page, children are being induced to open certain websites which direct them to sexually explicit content and pornographic videos/images. This corrupts the mentality of the child but the offender gets views and money."/>
                    <List.Item title='Cybersex trafficking' />
                    <List.Item descriptionNumberOfLines={null} description="Unlike sex trafficking, the victim does not come in direct contact with the abuser. In cybersex trafficking, the dealer live-streams, films, or photos of the victim performing sexual/intimate acts from a central location and sells the material online to sexual predators and buyers. The offenders have been sexually abusing children by making them a part of cybersex trafficking byways of manipulation and coercion."/>
                    <List.Item title='Cyberbullying' />
                    <List.Item descriptionNumberOfLines={null} description="This includes harsh, mean, abusive, or cruel comments and messages against the child victim. Children are easy to bully because of their innocent nature and it becomes even much easier for the offenders to bully children on virtual platforms. Cyberbullying causes; avoiding school classes via virtual platforms, suddenly wanting to stop using the internet and computer devices, being secretive about their digital life, distress, and emotional instability among children."/>
                    <List.Item title='Child grooming' />
                    <List.Item descriptionNumberOfLines={null} description="The offender befriends the child victim by forming an emotional and fiduciary bond with him/her with the objective of sexual abuse of the child. The children tend to trust easily and hence, it becomes very much easy for the offenders to create such a bond with them. Once the bond is created, the offender starts manipulating the child to perform sexual acts. Child grooming via online platforms and social media has been one of the most committed cybercrimes during the pandemic. Child groomers were able to operate and gain children’s trust online and it became easy for them to do so because of the unawareness of children and parents about the dark side of the internet world."/>
                </List.Accordion>
            </List.Section>
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#white',
        paddingHorizontal:15,
        marginBottom:120,
    },
    Textinfo:{
        fontSize: 18,
        lineHeight: 23,
    }
})

export default MyComponent2;