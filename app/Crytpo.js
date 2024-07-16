import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export default function Crypto (){
    const route = useRoute();
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor='white'/>
            <View style={{position:'absolute',right:0,top:40,}} >
                <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
            </View>
            <Header fdid={4} lanID={route.params.lanID}/>
            <ScrollView style={styles.container}>
                <Text style={{fontSize:18}}>
                {route.params.lanID == 2 ? "A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it." :
                "एक क्रिप्टोकुरेंसी, क्रिप्टो-मुद्रा, या क्रिप्टो एक डिजिटल मुद्रा है जिसे कंप्यूटर नेटवर्क के माध्यम से एक्सचेंज के माध्यम के रूप में काम करने के लिए डिज़ाइन किया गया है जो इसे बनाए रखने या बनाए रखने के लिए किसी भी केंद्रीय प्राधिकरण, जैसे सरकार या बैंक पर निर्भर नहीं है।"}
                </Text>
                <List.Section>
                    <List.Accordion
                        title={route.params.lanID == 2 ? "TYPES OF CRYPTOCURRENCY FRAUDS":" क्रिप्टोकरंसी धोखाधड़ी के प्रकार:"} style={{backgroundColor:'transparent',}}>
                        <List.Item title={route.params.lanID == 2 ?'1.FINANCIAL CRIMES:': 'वित्तीय अपराध'} />
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"it can be used as a new tool for the furtherance of tax avoidance, money-laundering, and bribery.":"इसे कर से बचने, धन शोधन और रिश्वतखोरी को आगे बढ़ाने के लिए एक नए उपकरण के रूप में इस्तेमाल किया  जा सकता है।"} />
                        <List.Item title={route.params.lanID == 2 ?'2.SCAM INITIAL COIN OFFEEING:': 'घोटाले की शुरूआती सिक्के की पेशकश'} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"The first offering of a particular cryptocurrency for sale, called an Initial Coin Offering or ICO, can be a means of preying on the unsophisticated.At least 900 people were scammed of over Rs 1,200 crore after they invested in an “initial coin offering” floated by a Kerala man for a non-existent cryptocurrency.":'बिक्री के लिए किसी विशेष क्रिप्टोकुरेंसी की पहली पेशकश, जिसे प्रारंभिक सिक्का पेशकश या आईसीओ कहा जाता है, अपरिष्कृत पर शिकार करने का माध्यम हो सकता है। केरल के एक व्यक्ति द्वारा गैर-मौजूद क्रिप्टोकुरेंसी के लिए "प्रारंभिक सिक्का पेशकश" में निवेश करने के बाद कम से कम 900 लोगों को 1,200 करोड़ रुपये से अधिक का घोटाला किया गया था।'} />
                        <List.Item title={route.params.lanID == 2 ?'3.PUMP AND DUMP SCHEME:':'पंप और डंप योजना'}/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"Crypto can provide a new variation of the classic pump and dump scheme, where owners of a stock try to drive the price up before selling off their holdings at an artificial peak.":"क्रिप्टो क्लासिक पंप और डंप योजना का एक नया रूप प्रदान कर सकता है, जहां स्टॉक के मालिक कृत्रिम शिखर पर अपनी होल्डिंग बेचने से पहले कीमत बढ़ाने की कोशिश करते हैं।"}/>
                        <List.Item title={route.params.lanID == 2 ?'4.MARKET MANIPULATION:':'बाजार में हेरफेर'} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"Fraudsters can attempt to manipulate the markets where cryptocurrencies or related derivative products are traded. Improper market manipulation may include spoofing, front-running, churning, and other schemes.":"जालसाज उन बाजारों में हेरफेर करने का प्रयास कर सकते हैं जहां क्रिप्टोकरेंसी या संबंधित व्युत्पन्न उत्पादों का कारोबार होता है। अनुचित बाजार हेरफेर में स्पूफिंग, फ्रंट-रनिंग, मंथन और अन्य योजनाएं शामिल हो सकती हैं।"}/>
                        <List.Item title={route.params.lanID == 2 ?'5.PONZI SCHEMES:':'पोंजी योजनाएं'}/>
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"A Ponzi scheme is an investment scam that involves the payment of purported returns to existing investors from funds contributed by new investors. Ponzi scheme organizers often solicit new investors by promising to invest funds in opportunities claimed to generate high returns with little or no risk.":"पोंजी योजना एक निवेश घोटाला है जिसमें नए निवेशकों द्वारा योगदान किए गए धन से मौजूदा निवेशकों को कथित रिटर्न का भुगतान शामिल है। पोंजी योजना के आयोजक अक्सर कम या बिना जोखिम के उच्च रिटर्न उत्पन्न करने के लिए दावा किए गए अवसरों में धन निवेश करने का वादा करके नए निवेशकों को आमंत्रित करते हैं।"}/>
                        <List.Item title={route.params.lanID == 2 ?'6.TRADITIONAL THEFT:':'पारंपरिक चोरी'} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"Crypto also provides criminals new opportunities for theft. They can hack investors’ crypto wallets and steal their currency; they can set up fake wallets to bilk counterparties; and they can set up phony crypto exchanges to steal customers’ money.":"क्रिप्टो अपराधियों को चोरी के नए अवसर भी प्रदान करता है। वे निवेशकों के क्रिप्टो वॉलेट को हैक कर सकते हैं और उनकी मुद्रा चुरा सकते हैं; वे नकली पर्स को बिल्क प्रतिपक्षों के लिए स्थापित कर सकते हैं; और वे ग्राहकों के पैसे चुराने के लिए नकली क्रिप्टो एक्सचेंज स्थापित कर सकते हैं।"}/>
                        <List.Item title={route.params.lanID == 2 ?'7.BROKER/DEALER FRAUD:':'ब्रोकर/डीलरधोखाधड़ी'} />
                        <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ?"The SEC has examined exchanges and funds investing in cryptocurrencies, which may, depending on the circumstances, need to register as broker-dealers or exchanges.":"एसईसी ने क्रिप्टोकरेंसी में निवेश करने वाले एक्सचेंजों और फंडों की जांच की है, जिन्हें परिस्थितियों के आधार पर ब्रोकर-डीलरों या एक्सचेंजों के रूप में पंजीकृत करने की आवश्यकता हो सकती है।"}/>
                        <List.Item title={route.params.lanID == 2 ?'8.UNSCRUPULOUS PROMOTORS:':'बेईमान प्रमोटर:'} />
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"The SEC famously fined Floyd Mayweather and DJ Khaled for failing to disclose payments they received for promoting investments in Initial Coin Offerings (ICOs).":"एसईसी ने फ्लोयड मेवेदर और डीजे खालिद पर इनिशियल कॉइन ऑफरिंग्स (आईसीओ) में निवेश को बढ़ावा देने के लिए प्राप्त भुगतानों का खुलासा करने में विफल रहने के लिए प्रसिद्ध जुर्माना लगाया।"} />

                    </List.Accordion>

                    <List.Accordion
                        title= {route.params.lanID == 2 ?"HOW TO PROTECT YOURSELF FROM CRYPTO FRAUDS:":"क्रिप्टो धोखाधड़ी से खुद को कैसे बचाएं:"}>
                        
                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"1.Never share your wallet credential with any firm or organization." :"कभी भी अपना वॉलेट क्रेडेंशियल किसी भी फर्म या संगठन के साथ साझा न करें।"}/>
                        
                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"2.Keep an eye on your wallet app.":"अपने वॉलेट ऐप पर नज़र रखें।"}/>
                        
                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"3.Only install 0r use valid apps from official platforms.":"केवल आधिकारिक प्लेटफॉर्म से मान्य ऐप्स इंस्टॉल करें या उनका उपयोग करें।"}/>
                        
                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"4.Is it too true to be true, it’s likely to be a scam. Avoid such apps or companies.":"क्या यह सच होना भी सच है, यह एक घोटाला होने की संभावना है। ऐसे ऐप्स या कंपनियों से बचें।"}/>
                        
                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"5.Do your research first before doing any investment.":"कोई भी निवेश करने से पहले पहले अपना शोध कर लें।"}/>

                        <List.Item descriptionNumberOfLines={null} description= {route.params.lanID == 2 ?"6.Always use a secure connection.":"हमेशा सुरक्षित कनेक्शन का उपयोग करें।"} />

                        
                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "CASES":"मामलों"}style={{backgroundColor:'transparent',}}>
                        <List.Item title= {route.params.lanID == 2 ?"GainBitcoin fraud: India's biggest crypto Ponzi scam may have cheated one lakh people of over rupees one trillion ":"GainBitcoin धोखाधड़ी: भारत के सबसे बड़े क्रिप्टो पोंजी घोटाले ने 1 लाख लोगों से 1 लाख करोड़ रुपये से अधिक की धोखाधड़ी की हो सकती है।\nकुछ समय पहले देश को हिला देने वाले GainBitcoin घोटाले का विशाल आकार सोच से कहीं अधिक बड़ा हो रहा है, रिपोर्टों से पता चलता है कि घोटाले में लगभग एक लाख पीड़ितों को 1 ट्रिलियन रुपये से अधिक का नुकसान हो सकता है।"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"The sheer size of the GainBitcoin scam that rocked the nation some time back is turning out to be way bigger than thought, with reports suggesting that around one lakh victims may have lost more than Rs 1 trillion in the scam.":"कुछसमयपहलेदेशकोहिलादेनेवालेGainBitcoinघोटालेकाविशालआकारसोचसेकहींअधिकबड़ाहोरहाहै, रिपोर्टोंसेपताचलताहैकिघोटालेमेंलगभगएकलाखपीड़ितोंको 1 ट्रिलियनरुपयेसेअधिककानुकसानहोसकताहै।"} />
                        <List.Item title= {route.params.lanID == 2 ?"Kerala: One arrested in Rs 1,200 crore crypto fraud case ":"केरल: 1,200 करोड़ रुपये की क्रिप्टो धोखाधड़ी मामले में एक गिरफ्तार"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"According to ED sources, Gafoor is the director of an inactive firm (shell company), Stox Global Brokers Private Limited, based in Malappuram. They said he had been actively involved in allegedly siphoning money from people who were lured with fake crypto investment offers, and then placing it in shell companies.":"ED के सूत्रों के मुताबिक, गफूर मलप्पुरम स्थित एक निष्क्रिय फर्म (शेल कंपनी) स्टॉक्स ग्लोबल ब्रोकर्स प्राइवेट लिमिटेड का निदेशक है। उन्होंने कहा कि वह कथित तौर पर नकली क्रिप्टो निवेश प्रस्तावों के लालच में आए लोगों से पैसे निकालने और फिर इसे शेल कंपनियों में रखने में सक्रिय रूप से शामिल था।"} />
                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "REVERSE UPI FRAUD":"रिवर्स यूपीआई फ्रॉड"} style={{backgroundColor:'transparent',}}>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "Fraudsters using UPI to cheat people often try to create a sense of urgency while promising to send money.":"लोगों को ठगने के लिए यूपीआई का इस्तेमाल कर रहे जालसाज अक्सर पैसे भेजने का वादा करते हुए तात्कालिकता की भावना पैदा करने की कोशिश करते हैं"} />
                        <List.Item title={route.params.lanID == 2 ? 'Methods of UPI frauds:':"UPI धोखाधड़ी के तरीके:"} />
                        <List.Item descriptionNumberOfLines={null}  description={"1."+(route.params.lanID == 2 ? "Phishing Scam. This is a scam in which payment links are sent by fraudsters in the form of an SMS.":"फ़िशिंग घोटाला। यह एक ऐसा घोटाला है जिसमें धोखेबाजों द्वारा एसएमएस के रूप में  भुगतान लिंक भेजे जाते हैं।") }/>
                        <List.Item descriptionNumberOfLines={null}  description={"2."+(route.params.lanID == 2 ? "Unverified Links.":"असत्यापित लिंक।") } />
                        <List.Item descriptionNumberOfLines={null}  description={"3."+(route.params.lanID == 2 ? "Remote screen monitoring.":"रिमोट स्क्रीन मॉनिटरिंग।") } />
                        <List.Item descriptionNumberOfLines={null}  description={"4."+(route.params.lanID == 2 ? "Deceptive UPI handles.":"भ्रामक UPI हैंडल।") } />
                        <List.Item descriptionNumberOfLines={null}  description={"5."+(route.params.lanID == 2 ? "Fake Calls.":"फर्जी कॉल।") } />
                        <List.Item descriptionNumberOfLines={null}  description={"6."+(route.params.lanID == 2 ? "Money Mule.":"धन खच्चर।") } />
                        <List.Item descriptionNumberOfLines={null}  description={"7."+(route.params.lanID == 2 ? "SIM Cloning.":"सिम क्लोनिंग।") }/>
                        <List.Item descriptionNumberOfLines={null}  description={"8."+(route.params.lanID == 2 ? "Malware.":" मैलवेयर।") } />
                    </List.Accordion>

                    <List.Accordion
                        title={route.params.lanID == 2 ? "How do hackers/fraudster execute fraud?":"हैकर्स/हैकर्स/धोखाधड़ी करने वाले धोखाधड़ी को कैसे अंजाम देते हैं?"} style={{backgroundColor:'transparent',}}>
                        <List.Item title= {route.params.lanID == 2 ? "It’s been observed that fraudsters follow a pattern.":"यह देखा गया है कि धोखेबाज एक पैटर्न का पालन करते हैं।"} />
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "STEP 1.They usually call the victim as a bank representative or any well reputed organisation, calling for a seemingly harmless issue." :"चरण 1: वे आम तौर पर पीड़ित को बैंक प्रतिनिधि या किसी भी प्रतिष्ठित संगठन के रूप में बुलाते हैं, जो एक हानिरहित समस्या के लिए कहते हैं।, जोएकहानिरहितसमस्याकेलिएकहतेहैं।"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "STEP 2.For taking you in confidence, they sound very professional. Ask verification question like DOB, name, or mobile number.":"चरण 2: आपको विश्वास में लेने के लिए, वे बहुत ही पेशेवर लगते हैं। सत्यापन प्रश्न जैसे जन्मतिथि, नाम या मोबाइल नंबर पूछें।"} />
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "STEP 3.Hacker always uses technical issue in app or website or also asked you to do KYC to get the personal details to resolve the issue." :"चरण 3: हैकर हमेशा ऐप या वेबसाइट में तकनीकी समस्या का उपयोग करता है या समस्या को हल करने के लिए व्यक्तिगत विवरण प्राप्त करने के लिए आपसे केवाईसी करने के लिए भी कहता है।"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"STEP 4.Once they convinced the victim, then ask you to download an app (Any desk and Screen share)." :"चरण 4: एक बार जब वे पीड़ित को मना लें, तो आपसे एक ऐप (कोई भी डेस्क और स्क्रीन शेयर) डाउनलोड करने के लिए कहें।"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"STEP 5.After installation of app, it asks for user’s privacy permission." :"चरण 5: ऐप इंस्टॉल करने के बाद यह यूजर की प्राइवेसी परमिशन मांगता है।"}/>
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"STEP 6.The fraudster will then ask the victim for a 9-digit OTP, which is generated on their phone. As soon as the victim reveals the code, the hacker will also ask to grant permission from the phone.":"चरण 6: जालसाज फिर पीड़ित से 9 अंकों का ओटीपी मांगेगा, जो उनके फोन पर उत्पन्न होता है। जैसे ही पीड़िता द्वारा कोड का खुलासा किया जाएगा, हैकर फोन से अनुमति देने के लिए भी कहेगा।"} />
                        <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ?"STEP 7.When the app acquires all permissions required, the caller starts to take full control of the victim’s phone without their knowledge. After getting full access to your phone, a hacker steals passwords and begins transacting with the victim’s UPI account." : "चरण 7: जब ऐप सभी आवश्यक अनुमतियां प्राप्त कर लेता है, तो कॉलर पीड़ित के फोन को उनकी जानकारी के बिना पूर्ण नियंत्रण में लेना शुरू कर देता है। आपके फोन तक पूरी पहुंच प्राप्त करने के बाद, एक हैकर पासवर्ड चुरा लेता है और पीड़ित के यूपीआई खाते से लेनदेन करना शुरू कर देता है।"} />

                        <List.Item title= {route.params.lanID == 2 ?  "PREVENTION AND PRECAUTION:":"रोकथाम और सावधानी:"}/>
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "1.Don’t share your PIN.":"1. अपना पिन साझा न करें।"} />
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "2.Be alert to transfer requests on UPI.":"2. UPI पर अनुरोध स्थानांतरित करने के लिए सतर्क रहें।"} />
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "3.Use strong password." :"3. मजबूत पासवर्ड का प्रयोग करें।"} />
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "4.Keep your transaction mode simple. (Try using only one of the payment apps)" :"4. अपने लेन-देन मोड को सरल रखें। (भुगतान ऐप्स में से केवल एक का उपयोग करने का प्रयास करें)"} />
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "5.Update UPI app regularly." :"5. यूपीआई ऐप को नियमित रूप से अपडेट करें।"} />
                        <List.Item descriptionNumberOfLines={null}  description= {route.params.lanID == 2 ? "6.Counterfeit UPI apps galore." :"6. नकली UPI ऐप्स प्रचुर मात्रा में हैं।"} />

                        <List.Item title= {route.params.lanID == 2 ? "CASES":"मामलों"}/>
                        <List.Item descriptionNumberOfLines={null}  description= {(route.params.lanID == 2 ?"Govt received over 61k complaints of digital payment fraud in 1 month." : "सरकार को 1 महीने में डिजिटल भुगतान धोखाधड़ी की 61 हजार से अधिक शिकायतें मिलीं।")+"\n\nhttps://www.hindustantimes.com/india-news/govt-received-over-61k-complaints-of-digital-payment-fraud-in-1-month-101655146626243.html"} />

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
