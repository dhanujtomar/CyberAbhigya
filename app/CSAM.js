import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import Header from './Header';
import { WnCinfo } from './Info';
import { List } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export default function CSAM(){
    const route = useRoute();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView>
        <StatusBar backgroundColor='white'/>
        <View style={{position:'absolute',right:0,top:40,}} >
            <Image resizeMode='cover' source={require('../assets/MyAssets/AWERbg.png')} />
        </View>
        <Header fdid={6} lanID={route.params.lanID}/>
        <ScrollView style={styles.container}>
            <Text style={{fontSize:18}}>
                {route.params.lanID == 2 ? "Child sexual abuse material includes any depiction of a child participating in real or simulated explicit sexual activity, as well as any representation of a child's sexual organs for primarily sexual purposes, whether it be through publication, exhibition, cinematography, electronic media, or any other means. \nThese photographs and videos not only capture victims' exploitation and abuse, but when these files are shared on the internet, young victims are re-victimized each time the image of their sexual abuse is seen.\nComputers and other types of technology are used to view and spread CSAM, but the images and videos show actual crimes against children. The worrying fact is that CSAM is progressively being shared and collected via the online channels we utilise on a daily basis for communication and information exchange, like social media, online gaming, and e-mail.\nFurthermore, children are re-victimized every time a file is shared, sustaining the abuse in a continuous loop." :
                "बाल यौन शोषण सामग्री में वास्तविक या नकली स्पष्ट यौन गतिविधि में भाग लेने वाले बच्चे के किसी भी चित्रण के साथ-साथ मुख्य रूप से यौन उद्देश्यों के लिए बच्चे के यौन अंगों का कोई भी प्रतिनिधित्व शामिल है, चाहे वह प्रकाशन, प्रदर्शनी, छायांकन, इलेक्ट्रॉनिक मीडिया, या किसी अन्य के माध्यम से हो। साधन।\nये तस्वीरें और वीडियो न केवल पीड़ितों के शोषण और दुर्व्यवहार को पकड़ते हैं, बल्कि जब इन फाइलों को इंटरनेट पर साझा किया जाता है, तो हर बार उनके यौन शोषण की छवि देखने पर युवा पीड़ितों को फिर से शिकार बनाया जाता है।\nसीएसएएम को देखने और फैलाने के लिए कंप्यूटर और अन्य प्रकार की तकनीक का उपयोग किया जाता है, लेकिन चित्र और वीडियो बच्चों के खिलाफ वास्तविक अपराध दिखाते हैं। चिंताजनक तथ्य यह है कि सीएसएएम को उत्तरोत्तर उन ऑनलाइन चैनलों के माध्यम से साझा और एकत्र किया जा रहा है जिनका उपयोग हम दैनिक आधार पर संचार और सूचना के आदान-प्रदान के लिए करते हैं, जैसे सोशल मीडिया, ऑनलाइन गेमिंग और ई-मेल।\nइसके अलावा, हर बार जब भी कोई फ़ाइल साझा की जाती है, तो बच्चों का फिर से शिकार किया जाता है, जिससे दुर्व्यवहार निरंतर लूप में बना रहता है।"} 
            </Text>
            <List.Section>
                <List.Accordion
                    title={route.params.lanID == 2 ? "Below are key findings from studies:":"नीचे अध्ययनों से प्रमुख निष्कर्ष दिए गए हैं:"} style={{backgroundColor:'transparent',}}>
                    
                    <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "1.Girls appear in the overwhelming majority of CSAM.":"सीएसएएम के भारी बहुमत में लड़कियां दिखाई देती हैं।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Prepubescent children are at the greatest risk to be depicted in CSAM.":"सीएसएएम में दर्शाए जाने के लिए प्रीपेबसेंट बच्चों को सबसे बड़ा जोखिम है।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.When boys are victimized, they are much more likely than girls to be subjected to very explicit or egregious abuse.":"जब लड़कों को शिकार बनाया जाता है, तो लड़कियों की तुलना में उनके बहुत स्पष्ट या गंभीर दुर्व्यवहार के शिकार होने की संभावना बहुत अधिक होती है।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "4.On average boys depicted in CSAM are younger than girls and more likely to have not yet reached puberty.":"सीएसएएम में दर्शाए गए लड़के औसतन लड़कियों से छोटे होते हैं और उनके अभी तक यौवन तक नहीं पहुंचने की संभावना अधिक होती है।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "5.78% of reports regarding online enticementinvolved girls and 15% involved boys (in 8% of reports, the gender of the child could not be determined)." :"ऑनलाइन प्रलोभन के संबंध में 78% रिपोर्ट में लड़कियां शामिल थीं और 15% लड़के शामिल थे (8% रिपोर्टों में, बच्चे का लिंग निर्धारित नहीं किया जा सका)।"}/>
                </List.Accordion>

                <List.Accordion
                    title={route.params.lanID == 2 ? "PREVENTIONS:":"निवारण:"}>
                    <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "1.Sending safety alerts to the people who have shared viral, meme child exploitative content about the harms it can cause and warning with the legal consequences.":"वायरल साझा करने वाले लोगों को सुरक्षा अलर्ट भेजना, बाल शोषण सामग्री को इससे होने वाले नुकसान के बारे में याद करना और कानूनी परिणामों के साथ चेतावनी देना।"} />
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.High-end companies like Meta are working towards the avoidance of sexually abusive content on the latest social media platforms by showing pop-ups and alerts." :"मेटा जैसी हाई-एंड कंपनियां पॉप-अप और अलर्ट दिखाकर नवीनतम सोशल मीडिया प्लेटफॉर्म पर यौन शोषण वाली सामग्री से बचने की दिशा में काम कर रही हैं।"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "3.All streaming platforms like Netflix and social media sites should have a restricting access to obscene material.":"नेटफ्लिक्स और सोशल मीडिया साइट्स जैसे सभी स्ट्रीमिंग प्लेटफॉर्म पर अश्लील सामग्री तक सीमित पहुंच होनी चाहिए।"}/>
                    
                </List.Accordion>

                <List.Accordion
                    title={route.params.lanID == 2 ? "PUNISHMENTS ACCORDING TO IT ACT, 2000":"आईटी अधिनियम, 2000 के अनुसार दंड"}>
                   <List.Item descriptionNumberOfLines={null}  description={route.params.lanID == 2 ? "Publishing or transmitting obscene or sexually explicit material in electronic form:":"अश्लील या स्पष्ट यौन सामग्री को इलेक्ट्रॉनिक रूप में प्रकाशित या प्रसारित करना:"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "Section 67/67A/67B prescribes punishment for publishing or transmitting any sexually inappropriate content using electronic resources involving children :" : "धारा 67/67A/67B बच्चों से जुड़े इलेक्ट्रॉनिक संसाधनों का उपयोग करके किसी भी यौन अनुपयुक्त सामग्री को प्रकाशित करने या प्रसारित करने के लिए दंड का प्रावधान करती है:"}/>
                    
                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "1.First conviction imprisonment extending up to 3 years with a fine of 5 lakh rupees" :"5 लाख रुपये के जुर्माने के साथ 3 साल तक की पहली सजा कारावास"}/>

                    <List.Item descriptionNumberOfLines={null} description={route.params.lanID == 2 ? "2.Second conviction imprisonment extending up to 5 years with a fine of 10 lakh rupees." :"दूसरा दोषसिद्धि कारावास, जिसे 5 वर्ष तक बढ़ाया जा सकता है, साथ ही 10 लाख रुपये का जुर्माना भी लगाया जा सकता है।"}/>
                    
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
