
var IE=document.all?1:0;var LCUNI=0;var LC=0;var LC_KAR=0;var LC_STRING="";var EnglishKeyboard=false;var KeyBoardLayout=2;var ctl_v_conversion=false;var Avro_Cha_Flag=false;var Avro_A_Press_Flag=false;var bijoy_keyboard_map={"0":"à§¦","1":"à§§","2":"à§¨","3":"à§©","4":"à§ª","5":"à§«","6":"à§¬","7":"à§­","8":"à§®","9":"à§¯","a":"à§ƒ","A":"à¦°à§","d":"à¦¿","D":"à§€","s":"à§","S":"à§‚","f":"à¦¾","F":"à¦…","g":"à§","G":"à¥¤","h":"à¦¬","H":"à¦­","j":"à¦•","J":"à¦–","k":"à¦¤","K":"à¦¥","l":"à¦¦","L":"à¦§","z":"à§à¦°","Z":"à§à¦¯","x":"à¦“","X":"à§—","c":"à§‡","C":"à§ˆ","v":"à¦°","V":"à¦²","b":"à¦¨","B":"à¦£","n":"à¦¸","N":"à¦·","m":"à¦®","M":"à¦¶","q":"à¦™","Q":"à¦‚","w":"à¦¯","W":"à§Ÿ","e":"à¦¡","E":"à¦¢","r":"à¦ª","R":"à¦«","t":"à¦Ÿ","T":"à¦ ","y":"à¦š","Y":"à¦›","u":"à¦œ","U":"à¦","i":"à¦¹","I":"à¦ž","o":"à¦—","O":"à¦˜","p":"à§œ","P":"à§","&":"à¦","$":"à§³","`":"\u200C","~":"\u200D","\\":"à§Ž","|":"à¦ƒ"};var somewherein_phonetic_keyboard_map={"0":"à§¦","1":"à§§","2":"à§¨","3":"à§©","4":"à§ª","5":"à§«","6":"à§¬","7":"à§­","8":"à§®","9":"à§¯","a":"à¦¾","A":"à¦†","d":"à¦¡","D":"à¦¦","s":"à¦¸","S":"à¦·","f":"à¦«","F":"à¦‹","g":"à¦—","G":"à¦˜","h":"à¦¹","H":"à¦ƒ","j":"à¦œ","J":"à¦","k":"à¦•","K":"à¦–","l":"à¦²","L":"à¦–","z":"à¦¯","Z":"à¦¤","x":"à¦•à§à¦¸","X":"à¦¢","c":"à¦š","C":"à¦›","v":"à¦­","V":"à¦ ","b":"à¦¬","B":"à¦‡","n":"à¦¨","N":"à¦£","m":"à¦®","M":"à¦—","q":"à§Ÿ","Q":"à¦›","w":"à§ƒ","W":"à¦‹","e":"à§‡","E":"à¦","r":"à¦°","R":"à§œ","t":"à¦Ÿ","T":"à¦¤","y":"à§Ÿ","Y":"à§à¦¯","u":"à§","U":"à¦‰","i":"à¦¿","I":"à¦‡","o":"à§‹","O":"à¦“","p":"à¦ª","P":"à¦š","&":"à§","$":"à§³","+":"à§",".":"à¥¤","`":"\u200C","~":"\u200D","\\":"à¥¥","|":"à¥¤"};var avro_phonetic_keyboard_map={"0":"à§¦","1":"à§§","2":"à§¨","3":"à§©","4":"à§ª","5":"à§«","6":"à§¬","7":"à§­","8":"à§®","9":"à§¯","o":"à¦…","a":"à¦†","A":"à¦†","i":"à¦‡","I":"à¦ˆ","u":"à¦‰","U":"à¦Š","e":"à¦","E":"à¦","O":"à¦“","d":"à¦¦","D":"à¦¡","s":"à¦¸","S":"à¦¶","f":"à¦«","g":"à¦—","h":"à¦¹","H":"à¦¹","j":"à¦œ","J":"à¦¯","k":"à¦•","K":"à¦•","l":"à¦²","L":"à¦²","z":"à¦¯","Z":"à§à¦¯","c":"à¦š","v":"à¦­","V":"à¦­","b":"à¦¬","n":"à¦¨","N":"à¦£","m":"à¦®","y":"à§Ÿ","w":"à§à¦¬","r":"à¦°","R":"à§œ","t":"à¦¤","T":"à¦Ÿ","y":"à§Ÿ","p":"à¦ª","$":"à§³","+":"à§",".":"à¥¤",":":"à¦ƒ","^":"à¦","`":"à§"};var unijoy_keyboard_map={"0":"à§¦","1":"à§§","2":"à§¨","3":"à§©","4":"à§ª","5":"à§«","6":"à§¬","7":"à§­","8":"à§®","9":"à§¯","a":"à§ƒ","A":"à¦°à§","d":"à¦¿","D":"à§€","s":"à§","S":"à§‚","f":"à¦¾","F":"à¦…","g":"à§","G":"à¥¤","h":"à¦¬","H":"à¦­","j":"à¦•","J":"à¦–","k":"à¦¤","K":"à¦¥","l":"à¦¦","L":"à¦§","z":"à§à¦°","Z":"à§à¦¯","x":"à§‹","X":"à§Œ","c":"à§‡","C":"à§ˆ","v":"à¦°","V":"à¦²","b":"à¦¨","B":"à¦£","n":"à¦¸","N":"à¦·","m":"à¦®","M":"à¦¶","q":"à¦™","Q":"à¦‚","w":"à¦¯","W":"à§Ÿ","e":"à¦¡","E":"à¦¢","r":"à¦ª","R":"à¦«","t":"à¦Ÿ","T":"à¦ ","y":"à¦š","Y":"à¦›","u":"à¦œ","U":"à¦","i":"à¦¹","I":"à¦ž","o":"à¦—","O":"à¦˜","p":"à§œ","P":"à§","&":"à¦","$":"à§³","`":"\u200C","~":"\u200D","^":"Ã·","*":"Ã—","\\":"à§Ž","|":"à¦ƒ"};function MapUnicodeCharacter(C)
{if(KeyBoardLayout==2)
return bijoy_keyboard_map[C];else if(KeyBoardLayout==3)
return somewherein_phonetic_keyboard_map[C];else if(KeyBoardLayout==4)
return avro_phonetic_keyboard_map[C];else if(KeyBoardLayout==5)
return unijoy_keyboard_map[C];return C;}
function ResetKarModifier()
{LC_KAR=0;LC_STRING="";}
function KarModification(field,CUni)
{if(LC_KAR==LCUNI||IsBanglaHalant(LCUNI)||CUni=="à§à¦°"||CUni=="à§à¦¯")
{var len=LC_STRING.length;LC_STRING=LC_STRING+CUni;RemoveNInsert(field,LC_STRING+LC_KAR,len+LC_KAR.length);}
else if(CUni=="à¦°à§")
{var len=LC_STRING.length;LC_STRING=CUni+LC_STRING;RemoveNInsert(field,LC_STRING+LC_KAR,len+LC_KAR.length);}
else if(IsBanglaHalant(CUni))
{LC_STRING=LC_STRING+CUni;Insert(field,CUni);}
else
{Insert(field,CUni);ResetKarModifier();}}
function RefModification(field)
{var len=1;var kar="";var str="";var halant_found=true;var CH="";field.focus();while(true)
{if(document.selection)
{sel=document.selection.createRange();if(field.value.length>=len)
{sel.moveStart('character',-1*len);}
else
{CH="",len--;sel.moveStart('character',-1*len);break;}
CH=sel.text.charAt(0);}
else if(field.selectionStart||field.selectionStart==0)
{var startPos=field.selectionStart-len;var endPos=field.selectionEnd;var scrollTop=field.scrollTop;if(startPos<0)
{CH="",len--;startPos=field.selectionStart-len;break;}
CH=field.value.substring(startPos,startPos+1)}
if(len!=1&&IsBanglaKar(CH))
break;if(len==1&&IsBanglaKar(CH))
kar=CH;else if(IsBanglaSoroborno(CH)||IsBanglaDigit(CH)||IsSpace(CH))
break;else if(IsBanglaBanjonborno(CH))
{if(halant_found==true)
{str=CH+str;halant_found=false;}
else
break;}
else if(IsBanglaHalant(CH))
{str=CH+str;halant_found=true;}
len++;}
var line=CH+"à¦°à§"+str+kar;if(document.selection)
{sel.text=line;sel.collapse(true);sel.select();}
else if(field.selectionStart||field.selectionStart==0)
{field.value=field.value.substring(0,startPos)+line+field.value.substring(endPos,field.value.length);field.focus();field.selectionStart=startPos+line.length;field.selectionEnd=startPos+line.length;field.scrollTop=scrollTop;}}
function OAndOuKarModification(field,CH1,CH2)
{if(document.selection)
{field.focus();sel=document.selection.createRange();if(field.value.length>=1)
sel.moveStart('character',-1);if(sel.text.charAt(0)=='à§‡')
sel.text=CH1;else
sel.text=sel.text.charAt(0)+CH2;sel.collapse(true);sel.select();}
else if(field.selectionStart||field.selectionStart==0)
{var startPos=field.selectionStart-1;var endPos=field.selectionEnd;var scrollTop=field.scrollTop;var CH;startPos=(startPos==-1?field.value.length:startPos);if(field.value.substring(startPos,startPos+1)=="à§‡")
CH=CH1;else
{startPos=startPos+1;CH=CH2;}
field.value=field.value.substring(0,startPos)+CH+field.value.substring(endPos,field.value.length);field.focus();field.selectionStart=startPos+CH.length;field.selectionEnd=startPos+CH.length;field.scrollTop=scrollTop;}}
function IsSomewhereinPhoneticModifierCharaceter(CUni)
{if(CUni=='à¦¹'||CUni=='à¦—'||CUni=='à¦˜'||CUni=='à¦£'||CUni=='à¦ƒ'||CUni=='à¦Ÿ'||CUni=='à§‹'||CUni=='à¦‡'||CUni=='à¦¿'||CUni=='à¦‰'||CUni=='à§'||CUni=='à¦°'||CUni=='à§œ')
return true;return false;}
function GetSomewhereinPhoneticModifiedCharaceter(CUni)
{var CMod=CUni;if(LCUNI=='à¦•'&&CUni=='à¦¹')CMod='à¦–';else if(LCUNI=='à¦—'&&CUni=='à¦¹')CMod='à¦˜';else if(LCUNI=='à¦š'&&CUni=='à¦¹')CMod='à¦š';else if(LCUNI=='à¦œ'&&CUni=='à¦¹')CMod='à¦';else if(LCUNI=='à¦Ÿ'&&CUni=='à¦¹')CMod='à¦ ';else if(LCUNI=='à¦¡'&&CUni=='à¦¹')CMod='à¦¢';else if(LCUNI=='à¦¤'&&CUni=='à¦¹')CMod='à¦¥';else if(LCUNI=='à¦¦'&&CUni=='à¦¹')CMod='à¦§';else if(LCUNI=='à¦ª'&&CUni=='à¦¹')CMod='à¦«';else if(LCUNI=='à¦¬'&&CUni=='à¦¹')CMod='à¦­';else if(LCUNI=='à¦¸'&&CUni=='à¦¹')CMod='à¦¶';else if(LCUNI=='à§œ'&&CUni=='à¦¹')CMod='à§';else if(LCUNI=='à¦£'&&CUni=='à¦—')CMod='à¦™';else if(LCUNI=='à¦¨'&&CUni=='à¦—')CMod='à¦‚';else if(LCUNI=='à¦£'&&CUni=='à¦˜')CMod='à¦ž';else if(LCUNI=='à¦£'&&CUni=='à¦£')CMod='à¦';else if(LCUNI=='à¦ƒ'&&CUni=='à¦ƒ')CMod='à¦ƒ';else if(LCUNI=='à¦Ÿ'&&CUni=='à¦Ÿ')CMod='à§Ž';else if(LCUNI=='à¦¾'&&CUni=='à§‹')CMod='à¦…';else if(LCUNI=='à¦¿'&&CUni=='à¦¿')CMod='à§€';else if(LCUNI=='à¦‡'&&CUni=='à¦‡')CMod='à¦ˆ';else if(LCUNI=='à§'&&CUni=='à§')CMod='à§‚';else if(LCUNI=='à¦‰'&&CUni=='à¦‰')CMod='à¦Š';else if(LCUNI=='à¦“'&&CUni=='à¦‡')CMod='à¦';else if(LCUNI=='à§‹'&&CUni=='à¦¿')CMod='à§ˆ';else if(LCUNI=='à¦“'&&CUni=='à¦‰')CMod='à¦”';else if(LCUNI=='à§‹'&&CUni=='à§')CMod='à§Œ';else if(LCUNI=='à§ƒ'&&CUni=='à¦°')CMod='à§ƒ';else if(LCUNI=='à¦‹'&&CUni=='à§œ')CMod='à¦‹';return CMod;}
function IsAvroPhoneticModifierCharaceter(CUni)
{if(CUni=='à¦ƒ'||CUni=='à§‹'||CUni=='à¦¿'||CUni=='à§'||IsBanglaSoroborno(CUni)||IsBanglaBanjonborno(CUni))
return true;return false;}
function GetAvroPhoneticBanjonBanjonEquivalent(CUni1,CUni2)
{var CMod=CUni2;if((CUni1=='à¦•'&&CUni2=='à¦•')||(CUni1=='à¦•'&&CUni2=='à¦–'))
CMod='\u09CD'+CUni2;return CMod;}
function GetAvroPhoneticModifiedCharaceter(CUni)
{var CMod=CUni;if(CUni!='à¦¹'&&Avro_Cha_Flag==true)
Avro_Cha_Flag=false;if(LCUNI=='à¦•'&&CUni=='à¦¹')CMod='à¦–';else if(LCUNI=='à¦—'&&CUni=='à¦¹')CMod='à¦˜';else if(LCUNI=='à¦š'&&CUni=='à¦¹'&&Avro_Cha_Flag==false){CMod='à¦š';Avro_Cha_Flag=true;}
else if(LCUNI=='à¦š'&&CUni=='à¦¹'&&Avro_Cha_Flag==true){CMod='à¦›';Avro_Cha_Flag=false;}
else if(LCUNI=='à¦œ'&&CUni=='à¦¹')CMod='à¦';else if(LCUNI=='à¦Ÿ'&&CUni=='à¦¹')CMod='à¦ ';else if(LCUNI=='à¦¡'&&CUni=='à¦¹')CMod='à¦¢';else if(LCUNI=='à¦¤'&&CUni=='à¦¹')CMod='à¦¥';else if(LCUNI=='à¦¦'&&CUni=='à¦¹')CMod='à¦§';else if(LCUNI=='à¦ª'&&CUni=='à¦¹')CMod='à¦«';else if(LCUNI=='à¦¬'&&CUni=='à¦¹')CMod='à¦­';else if(LCUNI=='à¦¸'&&CUni=='à¦¹')CMod='à¦¶';else if(LCUNI=='à¦¶'&&CUni=='à¦¹')CMod='à¦·';else if(LCUNI=='à§œ'&&CUni=='à¦¹')CMod='à§';else if(LCUNI=='à¦£'&&CUni=='à¦—')CMod='à¦™';else if(LCUNI=='à¦¨'&&CUni=='à¦—')CMod='à¦‚';else if(LCUNI=='à¦£'&&CUni=='à¦˜')CMod='à¦ž';else if(LCUNI=='à¦ƒ'&&CUni=='à¦ƒ')CMod='à¦ƒ';else if(LCUNI=='à¦Ÿ'&&CUni=='à¦Ÿ')CMod='à§Ž';else if(LCUNI=='à¦¾'&&CUni=='à§‹')CMod='à¦…';else if(LCUNI=='à¦¿'&&CUni=='à¦¿')CMod='à§€';else if(LCUNI=='à§'&&CUni=='à§')CMod='à§‚';else if(LCUNI=='à¦‰'&&CUni=='à¦‰')CMod='à¦Š';else if(LCUNI=='à¦“'&&CUni=='à¦‡')CMod='à¦';else if(LCUNI=='à§‹'&&CUni=='à¦¿')CMod='à§ˆ';else if(LCUNI=='à¦“'&&CUni=='à¦‰')CMod='à¦”';else if(LCUNI=='à§‹'&&CUni=='à§')CMod='à§Œ';else if(LCUNI=='à§ƒ'&&CUni=='à¦°')CMod='à§ƒ';else if(LCUNI=='à¦‹'&&CUni=='à§œ')CMod='à¦‹';else if((LCUNI=='à¦°'||LCUNI=='à§œ')&&IsBanglaBanjonborno(CUni))CMod=CUni;else if(CUni=='à¦')
CMod=CUni;else if(IsBanglaBanjonborno(LCUNI)&&CUni=='à¦…'&&Avro_A_Press_Flag==false){Avro_A_Press_Flag=true;CMod=LCUNI;}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaSoroborno(CUni)&&Avro_A_Press_Flag==true){CMod=CUni;}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaSoroborno(CUni))
CMod=MapSorbornoToKar(CUni);else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaBanjonborno(CUni)&&Avro_A_Press_Flag==false)
CMod='\u09CD'+CUni;else if(LCUNI=='à¦…'&&CUni=='à¦…')CMod='à¦‰';else if(LCUNI=='à¦…'&&CUni=='à¦‡')CMod='à¦';else if(LCUNI=='à¦…'&&CUni=='à¦‡')CMod='à¦';else if(LCUNI=='à¦¾'&&CUni=='à¦…')CMod='à¦“';else if(LCUNI=='à¦'&&CUni=='à¦')CMod='à¦ˆ';else if(LCUNI=='à§‡'&&CUni=='à¦…')CMod='à¦“';else if(LCUNI=='à¦“'&&CUni=='à¦ˆ')CMod='à¦”';if(CUni!='à¦…'&&CUni!='\u09CD'&&Avro_A_Press_Flag==true)
Avro_A_Press_Flag=false;return CMod;}
function ProcessCharacter(field,C,K,CUni)
{if(LCUNI=='â€Œ'&&CUni=="à§à¦¯")
{RemoveNInsert(field,field.value.charAt(field.value.length-1)+"â€Œà§à¦¯",1);ResetKarModifier();return;}
if(IsBanglaPostKar(CUni))
ResetKarModifier();if(IsBanglaDigit(CUni))
ResetKarModifier();if(LCUNI=='à¦…'&&CUni=='à¦¾'){RemoveNInsert(field,"à¦†",1);ResetKarModifier();}
else if(IsBanglaHalant(LCUNI)&&IsBanglaKar(CUni)){RemoveNInsert(field,MapKarToSorborno(CUni),1);ResetKarModifier();}
else if(KeyBoardLayout!=5&&IsBanglaNukta(LCUNI)&&IsBanglaPostKar(CUni)==true){RemoveNInsert(field,CUni+LCUNI,1);ResetKarModifier();}
else if(KeyBoardLayout!=5&&IsBanglaNukta(LCUNI)&&IsBanglaFola(CUni)){RemoveNInsert(field,CUni+LCUNI,1);ResetKarModifier();}
else if(KeyBoardLayout==2&&IsBanglaPreKar(LC_KAR))
KarModification(field,CUni);else if(KeyBoardLayout==3&&IsSomewhereinPhoneticModifierCharaceter(CUni)&&IsSpace(LCUNI)==false)
{var CUni2=GetSomewhereinPhoneticModifiedCharaceter(CUni);if(CUni2!=CUni){CUni=CUni2;RemoveNInsert(field,CUni,1);ResetKarModifier();}
else Insert(field,CUni);}
else if(KeyBoardLayout==4&&IsAvroPhoneticModifierCharaceter(CUni)&&IsSpace(LCUNI)==false)
{var CUni2=GetAvroPhoneticModifiedCharaceter(CUni);if(CUni2!=CUni){if(IsBanglaBanjonborno(LCUNI)&&CUni=='à¦¹')
{RemoveNInsert(field,CUni2,1);}
else if(IsBanglaBanjonborno(LCUNI)&&IsBanglaBanjonborno(CUni))
{Insert(field,CUni2);}
else if(IsBanglaKar(LCUNI)&&IsBanglaSoroborno(CUni))
{Insert(field,CUni2);}
else if(CUni2==MapSorbornoToKar(CUni))
{Insert(field,CUni2);}
else
{RemoveNInsert(field,CUni2,1);}
CUni=CUni2;ResetKarModifier();}
else Insert(field,CUni);}
else if(KeyBoardLayout!=5&&CUni=="à¦°à§")
RefModification(field);else if(KeyBoardLayout!=5&&CUni=='à¦¾')
OAndOuKarModification(field,'à§‹','à¦¾');else if(KeyBoardLayout!=5&&CUni=='à§—')
OAndOuKarModification(field,'à§Œ','à§—');else if(K>29){Insert(field,CUni);}
else if(K==13&&IE){Insert(field,CUni);}
if((IsBanglaHalant(LCUNI)==false&&IsBanglaPreKar(CUni)))
LC_KAR=CUni;if(!(IsBanglaNukta(LCUNI)&&IsBanglaFola(CUni)))
{LCUNI=CUni;}}
function KeyBoardDown(ev)
{var field;if(IE)
field=ev.srcElement;else
field=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(K==27)
EnglishKeyboard=!EnglishKeyboard;if((K>=8&&K<=13)||K==27||K==32||K==46)
{LCUNI=0;ResetKarModifier();Avro_Cha_Flag=false;Avro_A_Press_Flag=false;}
if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e'))
KeyBoardLayout=1;else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b'))
KeyBoardLayout=(KeyBoardLayout==2?1:2);else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p'))
KeyBoardLayout=(KeyBoardLayout==3?1:3);else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a'))
KeyBoardLayout=(KeyBoardLayout==4?1:4);else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u'))
KeyBoardLayout=(KeyBoardLayout==5?1:5);ChangeKeyboarLayoutStatus();if(K==27)
return false;return true;}
function KeyBoardPress(ev)
{var field;if(IE)
field=ev.srcElement;else
field=ev.target;var K=(window.event)?event.keyCode:ev.which;var C=String.fromCharCode(K);if(ev.altKey&&ev.ctrlKey&&(C=='E'||C=='e'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='B'||C=='b'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='P'||C=='p'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='A'||C=='a'))
return false;else if(ev.altKey&&ev.ctrlKey&&(C=='U'||C=='u'))
return false;else if(ev.ctrlKey||ev.altKey)
return true;if(KeyBoardLayout==1||EnglishKeyboard==true)
{return true;}
var CUni="";CUni=MapUnicodeCharacter(C);if(CUni==null)
return true;ProcessCharacter(field,C,K,CUni);if(IE)
event.keyCode=0;LC=C;if(K>29)return false;return true;}