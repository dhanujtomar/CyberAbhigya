import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const EnS = () => {
    const route = useRoute();
    const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='white'/>
        <View style={{position:'absolute',right:0,top:40,}} >
            <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
        </View>
        <Header fdid={3}/>
        <ScrollView style={styles.container}>
            <Text style={{fontSize:18}}>
            {route.params.lanID==2 ? "Consumers are increasingly turning to smartphones, tablets, and other devices that run various Operating systems.{'\n\n'}This indicates that it is a feasible target for a variety of cybercriminal attacks aimed at infecting devices and spreading destructive activity." :
            "उपभोक्ता तेजी से स्मार्टफोन, टैबलेट और विभिन्न ऑपरेटिंग सिस्टम चलाने वाले अन्य उपकरणों की ओर रुख कर रहे हैं। यह इंगित करता है कि यह विभिन्न प्रकार के साइबर आपराधिक हमलों के लिए एक व्यवहार्य लक्ष्य है जिसका उद्देश्य उपकरणों को संक्रमित करना और विनाशकारी गतिविधि फैलाना है।"}

            </Text>
            <List.Section>
                <List.Accordion
                    title= {route.params.lanID == 2 ? "Email Frauds":"ईमेल धोखाधड़ी"} style={{backgroundColor:'transparent',}}>
                    <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "Email fraud (or email scam) is intentional deception for either personal gain or to damage another individual using email. Almost as soon as email became widely used, it began to be used as a means to defraud people. Email fraud can take the form of a con game, or scam." :"ईमेल धोखाधड़ी (या ईमेल घोटाला) व्यक्तिगत लाभ के लिए या ईमेल का उपयोग करके किसी अन्य व्यक्ति को नुकसान पहुंचाने के लिए जानबूझकर धोखा है। लगभग जैसे ही ईमेल का व्यापक रूप से उपयोग किया जाने लगा, इसका उपयोग लोगों को ठगने के साधन के रूप में किया जाने लगा। ईमेल धोखाधड़ी एक कोन गेम या घोटाले का रूप ले सकती है।"} />

                    <List.Item title={route.params.lanID == 2 ? "TYPES OF EMAIL FRAUD" :"ईमेल धोखाधड़ी के प्रकार"}/>
                    <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "1.Spoofing: Email sent from someone pretending to be someone else is known as spoofing. Spoofing may take place in a number of ways. Common to all of them is that the actual sender's name and the origin of the message are concealed or masked from the recipient. Many instances of email fraud use at least spoofing, and as most frauds are clearly criminal acts, criminals typically try to avoid easy traceability." :"स्पूफिंग: किसी और के होने का दिखावा करने वाले किसी व्यक्ति द्वारा भेजे गए ईमेल को स्पूफिंग के रूप में जाना जाता है। स्पूफिंग कई तरह से हो सकती है। उनमें से सभी के लिए सामान्य यह है कि वास्तविक प्रेषक का नाम और संदेश का मूल प्राप्तकर्ता से छुपाया या छुपाया जाता है। ईमेल धोखाधड़ी के कई उदाहरण कम से कम स्पूफिंग का उपयोग करते हैं, और चूंकि अधिकांश धोखाधड़ी स्पष्ट रूप से आपराधिक कृत्य हैं, अपराधी आमतौर पर आसान पता लगाने से बचने की कोशिश करते हैं।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Phishing: By the use of a fraudulent link, hackers try to take access to your details. It could be your bank details, credit card details, or income tax details.  Regardless of how innocent the message is in itself, it will always lead the victim to a duplicate web page with a fake log-in prompt." :"फ़िशिंग: एक कपटपूर्ण लिंक का उपयोग करके, हैकर्स आपके विवरण तक पहुँचने का प्रयास करते हैं। यह आपका बैंक विवरण, क्रेडिट कार्ड विवरण या आयकर विवरण हो सकता है। संदेश अपने आप में कितना भी निर्दोष क्यों न हो, यह पीड़ित को हमेशा नकली लॉग-इन प्रॉम्प्ट के साथ डुप्लीकेट वेब पेज पर ले जाएगा।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.Bogus offers: It means that items may be offered in advance of their actual availability. Like the fraudulent offer typically features a popular item or service, at a drastically reduced price." :"फर्जी प्रस्ताव: इसका मतलब है कि वस्तुओं को उनकी वास्तविक उपलब्धता से पहले ही पेश किया जा सकता है। जैसे कपटपूर्ण ऑफ़र में आम तौर पर एक लोकप्रिय वस्तु या सेवा होती है, जो बहुत कम कीमत पर होती है।"}/>
                   
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.Requests for help: The request for help type of email fraud takes this form: an email is sent requesting help in some way. However, a reward is included for this help, which acts as a hook. The reward may be a large amount of money, a treasure, or some artifact of supposedly great value." :"मदद के लिए अनुरोध: मदद के लिए अनुरोध प्रकार की ईमेल धोखाधड़ी इस रूप में होती है: किसी तरह से मदद के लिए अनुरोध करते हुए एक ईमेल भेजा जाता है। हालांकि, इस मदद के लिए एक इनाम शामिल है, जो हुक के रूप में कार्य करता है। इनाम एक बड़ी राशि, एक खजाना, या माना जाता है कि महान मूल्य की कोई कलाकृति हो सकती है।"}/>

                    <List.Item title={route.params.lanID == 2 ? "AVOID EMAIL FRAUD:":"ईमेल धोखाधड़ी से बचें:"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "1.Not responding to suspicious emails." :"संदिग्ध ईमेल का जवाब नहीं देना।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Using a spam filter." :"स्पैम फ़िल्टर का उपयोग करना।"}/>
                   
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.Not clicking on links." :"लिंक पर क्लिक न करना।"}/>

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.Ignoring offers from unknown sources." :"अज्ञात स्रोतों से प्रस्तावों को अनदेखा करना।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "5.Noticing the several spelling errors in the body of the “official-looking” email." :"आधिकारिक दिखने वाले ईमेल के मुख्य भाग में कई वर्तनी त्रुटियों को नोटिस करना।"}/>
                
                    <List.Item title={route.params.lanID == 2 ? "Frauds:":"धोखाधड़ी"} />

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "1.Advance Fee Fraud or Nigerian Scam. Advance Fee Fraud is also called a Nigerian scam because these scams first originated in Nigeria. ": "अग्रिम शुल्क धोखाधड़ी या नाइजीरियाई घोटाला। एडवांस फीस फ्रॉड को नाइजीरियाई घोटाला भी कहा जाता है क्योंकि ये घोटाले सबसे पहले नाइजीरिया में उत्पन्न हुए थे।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Lottery Scam. A lottery scam is also a type of advance fee fraud. " :"लॉटरी घोटाला। लॉटरी घोटाला भी एक प्रकार का अग्रिम शुल्क धोखाधड़ी है।"}/>
                   
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.Online Dating Scam. " :"ऑनलाइन डेटिंग घोटाला।"}/>

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.Job Scam." :"नौकरी घोटाला।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "5.Sick Baby Scam." :"बीमार बेबी घोटाला।"}/>
            
                    <List.Item title={route.params.lanID == 2 ? "News": "समाचार" }/>
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Marked an email as spam from an American who named you an heir in his will? India has lost Rs 5420 crore to Nigerian email scams! https://www.news18.com/news/buzz/marked-an-email-as-spam-from-an-american-who-named-you-an-heir-in-his-will-india-has-lost-rs-5420-crore-to-nigerian-email-scams-703392.html" :"एक अमेरिकी के ईमेल को स्पैम के रूप में चिह्नित किया जिसने आपको अपनी वसीयत में वारिस का नाम दिया? नाइजीरियाई ईमेल घोटालों में भारत को 5420 करोड़ रुपये का नुकसान!"}/>
                    
                </List.Accordion>

                <List.Accordion
                    title={route.params.lanID == 2 ? "SMS FRAUDS":"एसएमएस धोखाधड़ी"}>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Smishing, or SMS phishing, is the act of committing text message fraud to try to lure victims into revealing account information or installing malware.": "स्मिशिंग, या एसएमएस फ़िशिंग, पीड़ितों को खाता जानकारी प्रकट करने या मैलवेयर स्थापित करने के लिए लुभाने का प्रयास करने के लिए टेक्स्ट संदेश धोखाधड़ी करने का कार्य है।"} />
                    <List.Item title={route.params.lanID == 2 ? "TYPES OF SMS FRAUDS:":"एसएमएस धोखाधड़ी के प्रकार:"} />
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "While using the internet for education and entertainment purposes or going through a social media page, children are being induced to open certain websites which direct them to sexually explicit content and pornographic videos/images. This corrupts the mentality of the child but the offender gets views and money.":""}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "1.Mail Fraud.":"मेल धोखाधड़ी।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Driver's License Fraud.": "चालक का लाइसेंस धोखाधड़ी।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.Healthcare Fraud.": "हेल्थकेयर धोखाधड़ी।"}/>

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.Debit and Credit Card Fraud." :"डेबिट और क्रेडिट कार्ड धोखाधड़ी।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "5.Bank Account Takeover Fraud." :"बैंक खाता अधिग्रहण धोखाधड़ी।"}/>
                   
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "6.Stolen Tax Refund Fraud." :"चोरी कर वापसी धोखाधड़ी।"}/>

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "7.Voter Fraud." :"मतदाता धोखाधड़ी।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "8.Internet Fraud.":"इंटरनेट धोखाधड़ी।"}/>

                    <List.Item title={route.params.lanID == 2 ? "Preventions:":"रोकथाम:"} />
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "1.Don’t click on unnecessary links." :"अनावश्यक लिंक पर क्लिक न करें।"}/>
                   
                   <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Verify the correct SMS header names before following actions." :"निम्नलिखित क्रियाओं से पहले सही एसएमएस हेडर नामों को सत्यापित करें।"}/>

                   <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.Don’t fall into money or gift card traps." :"पैसे या उपहार कार्ड के जाल में न पड़ें।"}/>
                   
                   <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.Unsubscribe from useless SMS and Email senders." :"बेकार एसएमएस और ईमेल भेजने वालों से सदस्यता समाप्त करें।"}/>

                   <List.Item descriptionNumberOfLines={null} description="https://www.google.com/search?q=types+of+sms+fraud+india&rlz=1C1CHBF_enIN997IN997&tbm=isch&sxsrf=ALiCzsapRA3sPS3WlcxR8uoNJfXGQ0XpCA:1657751970623&source=lnms&sa=X&ved=2ahUKEwiyrdaq9_b4AhWoSGwGHXpXDDYQ_AUoAnoECAEQBA&biw=681&bih=607&dpr=1#imgrc=kK4G9KeA4o3SVM"/>

                   <List.Item descriptionNumberOfLines={null} description="https://www.google.com/search?q=types+of+sms+fraud+india&rlz=1C1CHBF_enIN997IN997&tbm=isch&sxsrf=ALiCzsapRA3sPS3WlcxR8uoNJfXGQ0XpCA:1657751970623&source=lnms&sa=X&ved=2ahUKEwiyrdaq9_b4AhWoSGwGHXpXDDYQ_AUoAnoECAEQBA&biw=681&bih=607&dpr=1#imgrc=dmEEJe5eKNq1wM"/>

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

export default EnS;