import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const WnC = () => {
    const route = useRoute();
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='white' />
            <View style={{ position: 'absolute', right: 0, top: 40, }} >
                <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
            </View>
            <Header fdid={5} lanID={route.params.lanID}/>
            <ScrollView style={styles.container}>
                <Text style={{ fontSize: 18 }}>
                    {route.params.lanID ==2 ? "Women, especially housewives and who are prone to social media users have been exposed to such crimes during the pandemic. A total number of 704 cybercrime cases against women were registered in 2020 i.e., when the pandemic started and 504 cybercrimes cases against women were registered in 2021 only halfway through the year.{'\n\n'} Children are more vulnerable when they are kept away from their parents or when there is no one to look after them. Most of the children, especially those belonging to Grade 1 to Grade 5, are very less acquainted with technology and internet use, and ethics. Therefore, it becomes very easy for sexual predators and other cybercrime offenders to hack the devices of these children and manipulate them. A child does not know whether the particular website is safe to visit or not, or whether a particular image/video should be downloaded or not and hence, gets easily manipulated to indulge in immoral activities and become easy targets of the cybercrime offenders.":
                    "महिलाओं, विशेष रूप से गृहिणियों और जो सोशल मीडिया उपयोगकर्ताओं के लिए प्रवण हैं, महामारी के दौरान इस तरह के अपराधों के संपर्क में आई हैं। 2020 में महिलाओं के खिलाफ कुल 704 साइबर अपराध के मामले दर्ज किए गए, यानी जब महामारी शुरू हुई और 2021 में महिलाओं के खिलाफ 504 साइबर अपराध के मामले केवल आधे में दर्ज किए गए। बच्चे तब अधिक असुरक्षित होते हैं जब उन्हें उनके माता-पिता से दूर रखा जाता है या जब उनकी देखभाल करने वाला कोई नहीं होता है। अधिकांश बच्चे, विशेष रूप से कक्षा 1 से कक्षा 5 तक के बच्चे, प्रौद्योगिकी और इंटरनेट के उपयोग और नैतिकता से बहुत कम परिचित हैं। इसलिए, यौन शिकारियों और अन्य साइबर अपराध अपराधियों के लिए इन बच्चों के उपकरणों को हैक करना और उनमें हेरफेर करना बहुत आसान हो जाता है। एक बच्चे को यह नहीं पता होता है कि उस विशेष वेबसाइट पर जाना सुरक्षित है या नहीं, या किसी विशेष छवि / वीडियो को डाउनलोड किया जाना चाहिए या नहीं और इसलिए, अनैतिक गतिविधियों में लिप्त होने के लिए आसानी से हेरफेर किया जाता है और साइबर अपराध अपराधियों का आसान लक्ष्य बन जाता है।"}
                </Text>
                <List.Section>
                    <List.Accordion
                        title={route.params.lanID == 2 ? "Crime Against Women" : "महिलाओं के खिलाफ अपराध"} style={{ backgroundColor: 'transparent', }}>
                        <List.Item title={route.params.lanID == 2 ? "Cyberstalking" : "साइबरस्टॉकिंग" }/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "It included connecting or trying to connect with the victim on social media or phone calls despite clear indication of disinterest from her end, posting messages (sometimes threatening) on the profile of the victim, constantly bombarding the victim with emails/text messages/phone calls, etc." : "इसमें पीड़िता की ओर से उदासीनता के स्पष्ट संकेत के बावजूद, सोशल मीडिया या फोन कॉल्स पर उससे जुड़ने या उससे जुड़ने की कोशिश करना, पीड़िता के प्रोफाइल पर संदेश पोस्ट करना (कभी-कभी धमकी देना), लगातार ईमेल/टेक्स्ट मैसेज/फोन कॉल के साथ पीड़ित पर बमबारी करना शामिल था। , आदि।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Sextortion" : "सेक्सटॉर्शन" }/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "This is the most common cybercrime committed against women during the period of the pandemic. The offenders started extorting money or sexual favors by blackmailing the victims to reveal their private pictures or morphed images. The pandemic and lockdown frustration made the offenders seek sexual video calls/images or messages from women by threatening them. Also, loss of income encouraged them to extort money by threatening the victim with their morphed images." : "महामारी की अवधि के दौरान महिलाओं के खिलाफ किया जाने वाला यह सबसे आम साइबर अपराध है। अपराधियों ने पीड़ितों की निजी तस्वीरों या विकृत छवियों को प्रकट करने के लिए ब्लैकमेल करके पैसे या यौन संबंध बनाना शुरू कर दिया। महामारी और लॉकडाउन की हताशा ने अपराधियों को धमकी देकर महिलाओं से यौन वीडियो कॉल / चित्र या संदेश प्राप्त करने के लिए मजबूर किया। साथ ही, आय के नुकसान ने पीड़ितों को उनकी विकृत छवियों के साथ धमकी देकर पैसे निकालने के लिए प्रोत्साहित किया।"} />
                        <List.Item title={route.params.lanID == 2 ? "Cyber hacking" : "साइबर हैकिंग"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "During the lockdown, people started to read news online. There was a rise in cases of fake news and information. The women started becoming the victim of cyber hacking by clicking on malware links which get all their information available on phone, turns on the camera and microphone, and captures their intimate pictures and videos. Offenders, in turn, use these pieces of information and pictures for sextortion and other favours." : "लॉकडाउन के दौरान लोग ऑनलाइन खबरें पढ़ने लगे। फेक न्यूज और सूचना के मामलों में वृद्धि हुई थी। महिलाएं मैलवेयर लिंक पर क्लिक करके साइबर हैकिंग का शिकार होने लगीं, जिससे उनकी सारी जानकारी फोन पर उपलब्ध हो जाती है, कैमरा और माइक्रोफोन चालू हो जाता है और उनकी अंतरंग तस्वीरें और वीडियो कैप्चर हो जाते हैं। बदले में, अपराधी इन सूचनाओं और तस्वीरों का इस्तेमाल सेक्सटॉर्शन और अन्य एहसानों के लिए करते हैं।"} />
                        <List.Item title={route.params.lanID == 2 ? "Cyberbullying" : "साइबरबुलिंग" }/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "This included publishing defamatory and abusive statements against the victim on social media platforms and demanding money for deleting them, insensitive comments on the posts of the victim, exchanging morphed images/private images of the victim without her consent, sending rape threats to the victim, etc." : "इसमें सोशल मीडिया प्लेटफॉर्म पर पीड़िता के खिलाफ अपमानजनक और अपमानजनक बयान प्रकाशित करना और उन्हें हटाने के लिए पैसे की मांग करना, पीड़िता के पोस्ट पर असंवेदनशील टिप्पणियां, पीड़िता की सहमति के बिना उसकी मॉर्फ्ड छवियों / निजी छवियों का आदान-प्रदान करना, पीड़िता को बलात्कार की धमकी भेजना, आदि।"} />
                        <List.Item title={route.params.lanID == 2 ? "Phishing" : "फ़िशिंग" }/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "To make money in lockdown, offenders are sending fake emails with a link to a particular webpage to induce the victim to unwittingly enter personal data like bank account details, contact details, and passwords or with the intention to install harmful viruses in the victim’s device as soon as they open the link. These emails and messages appear to have come from legitimate sources. The offenders then make fraudulent transactions from the victim’s account to their account with the use of the bank account and other personal details of the victim." : "लॉकडाउन में पैसा कमाने के लिए, अपराधी एक विशेष वेबपेज के लिंक के साथ फर्जी ईमेल भेज रहे हैं ताकि पीड़ित को अनजाने में व्यक्तिगत डेटा जैसे बैंक खाता विवरण, संपर्क विवरण और पासवर्ड दर्ज करने के लिए प्रेरित किया जा सके या पीड़ित के डिवाइस में हानिकारक वायरस स्थापित करने के इरादे से। जैसे ही वे लिंक खोलते हैं। ऐसा लगता है कि ये ईमेल और संदेश वैध स्रोतों से आए हैं। इसके बाद अपराधी बैंक खाते और पीड़ित के अन्य व्यक्तिगत विवरणों का उपयोग करके पीड़ित के खाते से उनके खाते में धोखाधड़ी का लेनदेन करते हैं।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Sexually abusive and pornographic content" : "यौन रूप से अपमानजनक और अश्लील सामग्री"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "During the pandemic, offenders were also indulged in sexual abuse of women on the internet, morphing the picture of the victim and using it for the purpose of pornography." : "महामारी के दौरान, अपराधियों को इंटरनेट पर महिलाओं के यौन शोषण, पीड़ित की तस्वीर को मॉर्फ करने और पोर्नोग्राफी के उद्देश्य से इस्तेमाल करने में भी शामिल किया गया था।"} />
                        <List.Item title={route.params.lanID == 2 ? "Cybersex trafficking" : "साइबरसेक्स तस्करी" }/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Unlike sex trafficking, the victim does not come in direct contact with the abuser. In cybersex trafficking, the dealer live-streams, films, or photos of the victim performing sexual/intimate acts from a central location and sells the material online to sexual predators and buyers. The offenders have been sexually abusing women by making them a part of cybersex trafficking byways of coercion, manipulation, and blackmailing." : "यौन तस्करी के विपरीत, पीड़िता दुर्व्यवहार करने वाले के सीधे संपर्क में नहीं आती है। साइबरसेक्स तस्करी में, डीलर एक केंद्रीय स्थान से पीड़िता के यौन/अंतरंग कृत्यों का लाइव-स्ट्रीम, फिल्में, या तस्वीरें लाइव-स्ट्रीम करता है और यौन शिकारियों और खरीदारों को सामग्री ऑनलाइन बेचता है। अपराधी महिलाओं को जबरदस्ती, हेरफेर और ब्लैकमेलिंग के जरिए साइबरसेक्स तस्करी का हिस्सा बनाकर उनका यौन शोषण कर रहे हैं।" }/>

                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "Crime Against Children" : "बच्चों के खिलाफ अपराध"}>
                        <List.Item title={route.params.lanID == 2 ? "Sexual abuse" : "बच्चों का यौन शोषण"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "This includes child sexual abuse materials such as child pornographic images and videos, online sexual exploitation of children over phone call/video call where children are coerced into performing sexual acts." : "इसमें बाल यौन शोषण सामग्री जैसे बाल अश्लील चित्र और वीडियो, फोन कॉल / वीडियो कॉल पर बच्चों का ऑनलाइन यौन शोषण, जहां बच्चों को यौन कृत्य करने के लिए मजबूर किया जाता है।"} />
                        <List.Item title={route.params.lanID == 2 ? "Child Pornographic/sexually explicit content" : "बच्चों के लिए अश्लील/स्पष्ट यौन सामग्री"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "While using the internet for education and entertainment purposes or going through a social media page, children are being induced to open certain websites which direct them to sexually explicit content and pornographic videos/images. This corrupts the mentality of the child but the offender gets views and money." : "शिक्षा और मनोरंजन के उद्देश्यों के लिए इंटरनेट का उपयोग करते समय या सोशल मीडिया पेज के माध्यम से बच्चों को कुछ ऐसी वेबसाइटें खोलने के लिए प्रेरित किया जा रहा है जो उन्हें स्पष्ट यौन सामग्री और अश्लील वीडियो / छवियों के लिए निर्देशित करती हैं। यह बच्चे की मानसिकता को भ्रष्ट करता है लेकिन अपराधी को विचार और पैसा मिलता है।"} />
                        <List.Item title={route.params.lanID == 2 ? "Cybersex trafficking" : "साइबरसेक्स तस्करी"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Unlike sex trafficking, the victim does not come in direct contact with the abuser. In cybersex trafficking, the dealer live-streams, films, or photos of the victim performing sexual/intimate acts from a central location and sells the material online to sexual predators and buyers. The offenders have been sexually abusing children by making them a part of cybersex trafficking byways of manipulation and coercion." : "यौन तस्करी के विपरीत, पीड़िता दुर्व्यवहार करने वाले के सीधे संपर्क में नहीं आती है। साइबरसेक्स तस्करी में, डीलर एक केंद्रीय स्थान से पीड़िता के यौन/अंतरंग कृत्यों का लाइव-स्ट्रीम, फिल्में, या तस्वीरें लाइव-स्ट्रीम करता है और यौन शिकारियों और खरीदारों को सामग्री ऑनलाइन बेचता है। अपराधी बच्चों को हेरफेर और जबरदस्ती के जरिए साइबरसेक्स तस्करी का हिस्सा बनाकर उनका यौन शोषण कर रहे हैं।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Cyberbullying" : "साइबरबुलिंग"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "This includes harsh, mean, abusive, or cruel comments and messages against the child victim. Children are easy to bully because of their innocent nature and it becomes even much easier for the offenders to bully children on virtual platforms. Cyberbullying causes; avoiding school classes via virtual platforms, suddenly wanting to stop using the internet and computer devices, being secretive about their digital life, distress, and emotional instability among children." : "इसमें पीड़िता के खिलाफ कठोर, मतलबी, अपमानजनक या क्रूर टिप्पणियां और संदेश शामिल हैं। बच्चों को उनके मासूम स्वभाव के कारण धमकाना आसान होता है और अपराधियों के लिए वर्चुअल प्लेटफॉर्म पर बच्चों को धमकाना और भी आसान हो जाता है। साइबरबुलिंग के कारण; आभासी प्लेटफार्मों के माध्यम से स्कूल की कक्षाओं से बचना, अचानक इंटरनेट और कंप्यूटर उपकरणों का उपयोग बंद करना चाहते हैं, अपने डिजिटल जीवन, संकट और बच्चों के बीच भावनात्मक अस्थिरता के बारे में गुप्त रहना चाहते हैं।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Child grooming" : "बच्चे को संवारना"} />
                        < List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "The offender befriends the child victim by forming an emotional and fiduciary bond with him/her with the objective of sexual abuse of the child. The children tend to trust easily and hence, it becomes very much easy for the offenders to create such a bond with them. Once the bond is created, the offender starts manipulating the child to perform sexual acts. Child grooming via online platforms and social media has been one of the most committed cybercrimes during the pandemic. Child groomers were able to operate and gain children’s trust online and it became easy for them to do so because of the unawareness of children and parents about the dark side of the internet world." : "अपराधी बच्चे के यौन शोषण के उद्देश्य से उसके साथ भावनात्मक और भरोसेमंद बंधन बनाकर पीड़िता से दोस्ती करता है। बच्चे आसानी से भरोसा कर लेते हैं और इसलिए, अपराधियों के लिए उनके साथ ऐसा बंधन बनाना बहुत आसान हो जाता है। एक बार बंधन बन जाने के बाद, अपराधी बच्चे के साथ यौन क्रिया करने के लिए छेड़छाड़ करना शुरू कर देता है। ऑनलाइन प्लेटफॉर्म और सोशल मीडिया के माध्यम से बच्चों को संवारना महामारी के दौरान सबसे अधिक प्रतिबद्ध साइबर अपराधों में से एक रहा है। चाइल्ड ग्रूमर्स बच्चों का ऑनलाइन संचालन और विश्वास हासिल करने में सक्षम थे और इंटरनेट की दुनिया के अंधेरे पक्ष के बारे में बच्चों और माता-पिता की अनभिज्ञता के कारण उनके लिए ऐसा करना आसान हो गया।"} />
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

export default WnC;