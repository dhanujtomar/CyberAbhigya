import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const SmC = () => {
    const route = useRoute();
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
                {route.params.lanID==2 ? "Many of us have grown to rely on social media platforms such as Facebook, Instagram, and Twitter to remain connected, follow the news, and even make purchases. However, as their popularity grows, so does the possibility of fraud. These sorts of frauds are becoming highly complicated, frequently use brand logos and fraudulent terms and conditions to seem real. Here, we will look at the most frequent forms of social media fraud and how to protect yourself online." :
                    "हम में से कई लोग फेसबुक, इंस्टाग्राम और ट्विटर जैसे सोशल मीडिया प्लेटफॉर्म से जुड़े रहने, खबरों का पालन करने और यहां तक कि खरीदारी करने के लिए निर्भर हो गए हैं। हालाँकि, जैसे-जैसे उनकी लोकप्रियता बढ़ती है, वैसे-वैसे धोखाधड़ी की संभावना भी बढ़ती जाती है। इस प्रकार की धोखाधड़ी अत्यधिक जटिल होती जा रही है, वास्तविक लगने के लिए अक्सर ब्रांड लोगो और कपटपूर्ण नियमों और शर्तों का उपयोग करते हैं। यहां, हम सोशल मीडिया धोखाधड़ी के सबसे लगातार रूपों और ऑनलाइन खुद को कैसे सुरक्षित रखें, इस पर ध्यान देंगे।"}

                </Text>
                <List.Section>
                    <List.Accordion
                        title={route.params.lanID==2 ? "Social media scams" : "सोशल मीडिया घोटाले"} style={{ backgroundColor: 'transparent', }}>
                        <List.Item title={route.params.lanID==2 ? "Fake friends" : "नकली मित्र"}/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID==2 ? "It goes without saying that you should be cautious about who you connect with on social media. People contacting you as a friend and requesting money may sound like something out of an American TV drama, but it is shockingly regular. The fraudster may even impersonate as one of your friends or send you phishing links that direct you to a dangerous website." : "यह बिना कहे चला जाता है कि आपको इस बात से सावधान रहना चाहिए कि आप सोशल मीडिया पर किसके साथ जुड़ते हैं। एक दोस्त के रूप में आपसे संपर्क करने वाले और पैसे का अनुरोध करने वाले लोग अमेरिकी टीवी नाटक की तरह लग सकते हैं, लेकिन यह चौंकाने वाला नियमित है। धोखेबाज आपके किसी मित्र के रूप में भी प्रतिरूपण कर सकता है या आपको फ़िशिंग लिंक भेज सकता है जो आपको एक खतरनाक वेबसाइट पर ले जाता है।"} />
                        <List.Item title={route.params.lanID==2 ? "Free app downloads" : "फ्री ऐप डाउनलोड"}/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID==2 ? "These apps frequently request personal information from you. An app that appears to be legitimate may in fact download virus onto your smartphone. Before downloading new apps, consider if you trust the source, conduct research, and avoid third-party app stores in favour of the one provided by your phone carrier." : "ये ऐप्स अक्सर आपसे व्यक्तिगत जानकारी का अनुरोध करते हैं। एक ऐप जो वैध प्रतीत होता है, वास्तव में आपके स्मार्टफोन में वायरस डाउनलोड कर सकता है। नए ऐप डाउनलोड करने से पहले, इस बात पर विचार करें कि क्या आप स्रोत पर भरोसा करते हैं, शोध करते हैं, और अपने फोन वाहक द्वारा प्रदान किए गए तीसरे पक्ष के ऐप स्टोर से बचते हैं।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Quizzes" : "प्रश्नोत्तरी"}/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Online questionnaires promising to tell you your personality type, which celebrity you look like or give you a too-good-to-be-true prize, come with hidden threats. They usually include terms and conditions which allow the data you enter to be sold to third parties. It also means the app developer can obtain a lot of information about you from your profile, friends and IP address. Avoid any short quizzes advertised on social media sites like Facebook and Twitter." : "ऑनलाइन प्रश्नावली जो आपको आपके व्यक्तित्व प्रकार को बताने का वादा करती है, आप किस सेलिब्रिटी की तरह दिखते हैं या आपको बहुत अच्छा-से-सच्चा पुरस्कार देते हैं, छिपे हुए खतरों के साथ आते हैं। उनमें आमतौर पर नियम और शर्तें शामिल होती हैं जो आपके द्वारा दर्ज किए गए डेटा को तीसरे पक्ष को बेचने की अनुमति देती हैं। इसका मतलब यह भी है कि ऐप डेवलपर आपकी प्रोफ़ाइल से आपके बारे में बहुत सारी जानकारी प्राप्त कर सकता है, दोस्तों और आईपी पता। फेसबुक और ट्विटर जैसी सोशल मीडिया साइटों पर विज्ञापित किसी भी छोटी प्रश्नोत्तरी से बचें।"} />
                        <List.Item title={route.params.lanID == 2 ? "Hidden URLS" : "छिपे हुए यूआरएल"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Beware of clicking on shortened URLs which hide the full location of the webpage. They are very common on Twitter and while they could innocently direct you to the correct site, there’s always a chance they might divert you to one which installs malware. Be wary of what you click on, check if the post is typical behaviour from the account publishing it and make sure you have real-time protection against spyware and viruses." : "छोटे URL पर क्लिक करने से सावधान रहें जो वेबपेज का पूरा स्थान छिपाते हैं। वे ट्विटर पर बहुत आम हैं और जब वे निर्दोष रूप से आपको सही साइट पर निर्देशित कर सकते हैं, तो हमेशा एक मौका होता है कि वे आपको मैलवेयर इंस्टॉल करने वाले साइट पर ले जा सकते हैं। आप जिस पर क्लिक करते हैं, उससे सावधान रहें, जांचें कि क्या पोस्ट इसे प्रकाशित करने वाले खाते से विशिष्ट व्यवहार है और सुनिश्चित करें कि आपके पास स्पाइवेयर और वायरस के खिलाफ रीयल-टाइम सुरक्षा है।"} />
                        <List.Item title={route.params.lanID == 2 ? "Identity theft and Defamation" : "पहचान की चोरी और मानहानि"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "When a computer linked to the internet is used as a tool or media to misrepresent a person or entity, this is referred to as cyber defamation. For example, publishing a defamatory comment about a person on a social networking site such as Facebook, Twitter, or others, or sending emails with defamatory information about a person with the aim to defame him or her." : "जब किसी व्यक्ति या संस्था को गलत तरीके से प्रस्तुत करने के लिए इंटरनेट से जुड़े कंप्यूटर का उपयोग उपकरण या मीडिया के रूप में किया जाता है, तो इसे साइबर मानहानि कहा जाता है। उदाहरण के लिए, फेसबुक, ट्विटर या अन्य जैसी सोशल नेटवर्किंग साइट पर किसी व्यक्ति के बारे में मानहानिकारक टिप्पणी प्रकाशित करना या किसी व्यक्ति को बदनाम करने के उद्देश्य से उसके बारे में मानहानिकारक जानकारी वाले ईमेल भेजना।"} />
                        <List.Item title={route.params.lanID == 2 ? "Sexting and Cyber-bullying" : "सेक्सटिंग और साइबर-बदमाशी"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Sexting is sending sexually explicit photographs, messages, and video in a text message or email. Cyberbullying is the act of spreading unpleasant or embarrassing images and words about another person via the Internet, mobile devices, or other technology. Examples of cyber bullying include: sending regular mean messages, spreading rumours, sharing private information, creating fake profiles to bully others or excluding anyone out of an online group." : "Sexting एक टेक्स्ट संदेश या ईमेल में यौन रूप से स्पष्ट तस्वीरें, संदेश और वीडियो भेज रहा है। साइबरबुलिंग इंटरनेट, मोबाइल उपकरणों या अन्य तकनीक के माध्यम से किसी अन्य व्यक्ति के बारे में अप्रिय या शर्मनाक छवियों और शब्दों को फैलाने का कार्य है। साइबर बुलिंग के उदाहरणों में शामिल हैं: नियमित रूप से मतलबी संदेश भेजना, अफवाहें फैलाना, निजी जानकारी साझा करना, दूसरों को धमकाने के लिए नकली प्रोफाइल बनाना या किसी को ऑनलाइन समूह से बाहर करना।"} />

                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "How to stay safe on social (PREVENTIONS AND PRECAUTIONS)" : "सामाजिक (रोकथाम और सावधानियां) पर सुरक्षित कैसे रहें"}>
                        <List.Item title={route.params.lanID == 2 ? "Use strong, unique passwords" : "मजबूत, अद्वितीय पासवर्ड का प्रयोग करें "} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "You should have unique passwords for all your online accounts, including email. People often have the same passwords for their accounts, which is dangerous. If your password also uses any type of personal details (like a pet’s name or mother’s maiden name) a fraudster might easily grab this from your social media posts." : "ईमेल सहित आपके सभी ऑनलाइन खातों के लिए आपके पास अद्वितीय पासवर्ड होने चाहिए। अक्सर लोगों के पास अपने अकाउंट के लिए एक जैसे पासवर्ड होते हैं, जो खतरनाक है। यदि आपका पासवर्ड किसी भी प्रकार के व्यक्तिगत विवरण (जैसे पालतू जानवर का नाम या माता का पहला नाम) का उपयोग करता है, तो धोखेबाज इसे आपके सोशल मीडिया पोस्ट से आसानी से प्राप्त कर सकता है।}" }/>
                        <List.Item title={route.params.lanID == 2 ? "Change your passwords every 30 days" : "हर 30 दिनों में अपना पासवर्ड बदलें"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "To ensure safety and privacy, one should stay out of risk by changing the passwords of their important personal/business accounts in every 30 days." : "सुरक्षा और गोपनीयता सुनिश्चित करने के लिए, हर 30 दिनों में अपने महत्वपूर्ण व्यक्तिगत / व्यावसायिक खातों के पासवर्ड बदलकर जोखिम से बाहर रहना चाहिए।"} />
                        <List.Item title={route.params.lanID == 2 ? "Don’t post personal details" : "व्यक्तिगत विवरण पोस्ट न करें"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "If you’re sharing your nicknames, pet’s names, address or when you’re on holiday, you’re probably increasing your risk of a fraudster being able to piece together your details." : "यदि आप अपने उपनाम, पालतू जानवर के नाम, पता या जब आप छुट्टी पर हों, साझा कर रहे हैं, तो संभवतः आप धोखेबाज के आपके विवरणों को एक साथ रखने में सक्षम होने का जोखिम बढ़ा रहे हैं।" }/>
                        <List.Item title={route.params.lanID == 2 ? "Make your accounts private" : "अपने खातों को निजी बनाएं"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Or have limited details showing on anything that can be viewed by the public. That way only trusted friends and family can see what you’re posting." : "जनता द्वारा देखी जा सकने वाली किसी भी चीज़ पर सीमित विवरण दिखाना। इस तरह केवल विश्वसनीय मित्र और परिवार ही देख सकते हैं कि आप क्या पोस्ट कर रहे हैं।"}/>
                        <List.Item title={route.params.lanID == 2 ? "Steer clear of strangers" : "अजनबियों से दूर रहें"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "If someone contacts you on social media asking for personal details, be very careful. Always make sure they are genuine and you’re providing details for the right reason." : "अगर कोई आपसे व्यक्तिगत जानकारी के लिए सोशल मीडिया पर संपर्क करता है, तो बहुत सावधान रहें। हमेशा सुनिश्चित करें कि वे वास्तविक हैं और आप सही कारण के लिए विवरण प्रदान कर रहे हैं।"} />
                        <List.Item title={route.params.lanID == 2 ? "Delete old social media profiles" : "पुराने सोशल मीडिया प्रोफाइल हटाएं"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Keep track of your digital footprint by removing any accounts you no longer user. If a profile was created ten years ago, there may be personal information currently available for a fraudster to use that you’re not aware of or you have forgotten about." : "ऐसे किसी भी खाते को हटाकर अपने डिजिटल पदचिह्न पर नज़र रखें, जिसका आप अब उपयोगकर्ता नहीं हैं। यदि कोई प्रोफ़ाइल दस साल पहले बनाई गई थी, तो धोखेबाज के उपयोग के लिए वर्तमान में व्यक्तिगत जानकारी उपलब्ध हो सकती है जिसके बारे में आपको जानकारी नहीं है या आप इसके बारे में भूल गए हैं।"} />
                        <List.Item title={route.params.lanID == 2 ? "Install anti-virus software" : "एंटी-वायरस सॉफ़्टवेयर स्थापित करें"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "There are a number of free services which can help protect your laptop and any other personal devices from malware." : "ऐसी कई मुफ्त सेवाएं हैं जो आपके लैपटॉप और किसी भी अन्य व्यक्तिगत उपकरणों को मैलवेयर से बचाने में मदद कर सकती हैं।"} />
                        <List.Item title={route.params.lanID == 2 ? "Take care on public Wi-Fi" : "सार्वजनिक वाई-फ़ाई पर ध्यान दें"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Sometimes scammers can impersonate a genuine Wi-Fi network or hack into an existing one. If you’re getting connected on the go, avoid using apps with sensitive information, like mobile banking." : "कभी-कभी स्कैमर्स वास्तविक वाई-फाई नेटवर्क का प्रतिरूपण कर सकते हैं या मौजूदा वाई-फाई नेटवर्क को हैक कर सकते हैं। यदि आप चलते-फिरते कनेक्ट हो रहे हैं, तो मोबाइल बैंकिंग जैसी संवेदनशील जानकारी वाले ऐप्स का उपयोग करने से बचें।"} />

                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "PUNISHMENTS ACCORDING TO IT ACT, 2000" : "आई टी अधिनियम, 2000 के अनुसार दंड"}>
                        <List.Item title={route.params.lanID == 2 ? "Posting offensive messages on a regular basis" : "नियमित आधार पर आपत्तिजनक संदेश पोस्ट करना"} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "SECTION 66A prescribes punishment for posting, regulating or transmitting any mails, comments or messages that are unwarranted or offensive : Imprisonment up to 3 years with a fine or both." : " 	धारा 66A किसी भी मेल, टिप्पणियों या संदेशों को पोस्ट करने, विनियमित करने या प्रसारित करने के लिए दंड का प्रावधान करती है जो अनुचित या आपत्तिजनक हैं। : 3 साल तक की कैद या जुर्माना या दोनों।" }/>

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