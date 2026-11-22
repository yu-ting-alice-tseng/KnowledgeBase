/* ═══════════ 國別史：依國家篩選，線性 + 主題式敘事 ═══════════
   Each country is a matrix: PERIODS (the linear spine) × THEMES (the
   threads). The linear view reads it row by row, the thematic view
   reads one column top to bottom. To add a country, append an entry
   to COUNTRIES with the same shape; the chips and both views follow. */

const CX_THEMES = [
  { id:'state',   icon:'🏛️', color:'#c9a85c',
    name:{ zh:'國家與政體', en:'State & Regime', fr:'État et régime' },
    intro:{ zh:'從部族、封建到中央集權的共和：看權力如何一步步收向巴黎。',
      en:'From tribes and feudal lords to a centralised republic: how power was drawn steadily towards Paris.',
      fr:'Des tribus et seigneurs féodaux à la République centralisée : comment le pouvoir s’est peu à peu concentré à Paris.' } },
  { id:'faith',   icon:'⛪', color:'#9a8ab8',
    name:{ zh:'宗教與世俗', en:'Religion & Secularism', fr:'Religion et laïcité' },
    intro:{ zh:'從「教會長女」到世俗共和：宗教始終是法國政治的核心戰場。',
      en:'From “eldest daughter of the Church” to secular republic: religion has always been a front line of French politics.',
      fr:'De « fille aînée de l’Église » à République laïque : la religion a toujours été un front majeur de la politique française.' } },
  { id:'society', icon:'⚒️', color:'#7fa07a',
    name:{ zh:'社會與經濟', en:'Society & Economy', fr:'Société et économie' },
    intro:{ zh:'土地、城市與工作：從莊園與小農，到工業化與福利國家。',
      en:'Land, towns and work: from manors and smallholders to industry and the welfare state.',
      fr:'La terre, la ville et le travail : des domaines et petits paysans à l’industrie et à l’État-providence.' } },
  { id:'culture', icon:'✒️', color:'#c48a6a',
    name:{ zh:'思想與文化', en:'Ideas & Culture', fr:'Idées et culture' },
    intro:{ zh:'語言、思想與藝術：法國如何成為歐洲的文化中心，又如何把文化當成國家事業。',
      en:'Language, ideas and art: how France became a cultural centre of Europe, and why culture became an affair of state.',
      fr:'Langue, idées et arts : comment la France est devenue un centre culturel de l’Europe, et pourquoi la culture est devenue une affaire d’État.' } },
  { id:'world',   icon:'🌍', color:'#6a94b0',
    name:{ zh:'法國與世界', en:'France & the World', fr:'La France et le monde' },
    intro:{ zh:'戰爭、帝國與歐洲：從歐陸爭霸、海外殖民到推動歐洲整合。',
      en:'War, empire and Europe: from continental rivalry and overseas colonies to building the European Union.',
      fr:'Guerre, empire et Europe : des rivalités continentales et des colonies à la construction européenne.' } },
];

const COUNTRIES = [
{
  id:'france', flag:'flag-fr', color:'#6a7fb0',
  name:{ zh:'法國', en:'France', fr:'France' },
  intro:{ zh:'法國常被稱為「由國家塑造的民族」：先有王權把領土一塊塊收攏，才有共同的語言與認同。這裡用兩種方式閱讀同一段歷史：線性敘事沿著十一個時期往下走，主題敘事則挑一條線索，貫穿兩千六百年看它如何變化。',
    en:'France is often called a nation made by its state: the crown gathered the land piece by piece before a shared language and identity followed. Read the same history two ways: the linear narrative walks through eleven periods in order, while the thematic narrative follows one thread across 2,600 years.',
    fr:'On dit souvent de la France qu’elle est une nation façonnée par son État : la couronne a rassemblé le territoire pièce par pièce, avant qu’une langue et une identité communes ne suivent. Lisez la même histoire de deux façons : le récit linéaire parcourt onze périodes dans l’ordre, le récit thématique suit un fil à travers 2 600 ans.' },
  periods:[
  {
    id:'gaul', icon:'🛡️', start:-600, end:486, world:'roman',
    name:{ zh:'高盧與羅馬高盧', en:'Gaul and Roman Gaul', fr:'La Gaule et la Gaule romaine' },
    summary:{ zh:'凱爾特部族在今日法國的土地上建立部落與城鎮。凱撒征服之後，高盧在羅馬帝國之內度過五百年，拉丁語、城市與道路成為法國文明的底層。',
      en:'Celtic peoples built tribes and towns across what is now France. After Caesar’s conquest, Gaul spent five centuries inside the Roman Empire, and Latin, cities and roads became the bedrock of French civilisation.',
      fr:'Des peuples celtes fondent tribus et bourgades sur le territoire actuel de la France. Après la conquête de César, la Gaule passe cinq siècles dans l’Empire romain : latin, villes et routes deviennent le socle de la civilisation française.' },
    events:[
      { y:-600, zh:'希臘人建立馬薩利亞（今馬賽）', en:'Greeks found Massalia, today’s Marseille', fr:'Des Grecs fondent Massalia, l’actuelle Marseille' },
      { y:-52,  zh:'阿萊西亞之戰，維欽托利向凱撒投降', en:'Siege of Alesia: Vercingetorix surrenders to Caesar', fr:'Siège d’Alésia : Vercingétorix se rend à César' },
      { y:177,  zh:'里昂的基督徒殉道，高盧最早的教會紀錄', en:'Martyrs of Lyon, the earliest record of the Church in Gaul', fr:'Martyrs de Lyon, première trace de l’Église en Gaule' },
      { y:406,  zh:'汪達爾等日耳曼部族渡過萊茵河', en:'Vandals and other Germanic peoples cross the Rhine', fr:'Vandales et autres peuples germaniques franchissent le Rhin' },
    ],
    themes:{
      state:{ zh:'高盧由數十個彼此競爭的部族組成，沒有統一的國家。羅馬把它劃為行省，以城市為行政核心，里昂成為高盧首府。',
        en:'Gaul was a patchwork of rival tribes with no single state. Rome organised it into provinces run from cities, with Lyon as the capital of the Gauls.',
        fr:'La Gaule est une mosaïque de peuples rivaux, sans État unique. Rome l’organise en provinces administrées depuis les villes, Lyon devenant la capitale des Gaules.' },
      faith:{ zh:'德魯伊主持凱爾特宗教，羅馬時期高盧與羅馬的神祇相互融合。基督教在二世紀傳入，四世紀圖爾的聖馬丁把它帶進鄉村。',
        en:'Druids led Celtic religion, and Roman rule blended Gallic and Roman gods. Christianity arrived in the second century, and in the fourth Martin of Tours carried it into the countryside.',
        fr:'Les druides dirigent la religion celtique, et l’époque romaine mêle dieux gaulois et romains. Le christianisme arrive au IIᵉ siècle ; au IVᵉ, saint Martin de Tours l’implante dans les campagnes.' },
      society:{ zh:'羅馬道路、別墅莊園與葡萄種植改造了鄉村，尼姆、阿爾勒等城市興起，高盧成為帝國的糧倉與兵源。',
        en:'Roman roads, villa estates and vineyards transformed the countryside. Cities such as Nîmes and Arles flourished, and Gaul supplied the empire with grain and soldiers.',
        fr:'Routes romaines, villae et vignobles transforment les campagnes. Des villes comme Nîmes et Arles prospèrent, et la Gaule fournit à l’Empire blé et soldats.' },
      culture:{ zh:'拉丁語逐步取代高盧語，成為日後法語的根源。凱撒的《高盧戰記》至今仍是了解高盧人最主要的文字資料。',
        en:'Latin gradually replaced Gaulish and became the root of French. Caesar’s Gallic War remains the main written source on the Gauls.',
        fr:'Le latin remplace peu à peu le gaulois et devient la racine du français. La Guerre des Gaules de César reste la principale source écrite sur les Gaulois.' },
      world:{ zh:'高盧位在羅馬與日耳曼世界的交界。三世紀起邊境屢遭入侵，到了五世紀，法蘭克人、西哥德人與勃艮第人瓜分了這片土地。',
        en:'Gaul sat on the frontier between Rome and the Germanic world. From the third century raids multiplied, and by the fifth Franks, Visigoths and Burgundians had divided the land.',
        fr:'La Gaule se trouve à la frontière entre Rome et le monde germanique. Dès le IIIᵉ siècle les incursions se multiplient ; au Vᵉ, Francs, Wisigoths et Burgondes se partagent le territoire.' },
    }
  },
  {
    id:'franks', icon:'👑', start:486, end:987, world:'medieval',
    name:{ zh:'法蘭克王國', en:'The Frankish Kingdoms', fr:'Les royaumes francs' },
    summary:{ zh:'克洛維擊敗高盧最後的羅馬勢力，並皈依天主教。墨洛溫與加洛林兩代王朝把高盧變成法蘭克人的王國；查理曼加冕為帝後，帝國在孫輩手中一分為三，西法蘭克成為法國的前身。',
      en:'Clovis defeated the last Roman ruler in Gaul and converted to Catholicism. The Merovingian and Carolingian dynasties turned Gaul into a Frankish realm; after Charlemagne’s imperial crowning, his grandsons split the empire, and West Francia became the ancestor of France.',
      fr:'Clovis bat le dernier pouvoir romain en Gaule et se convertit au catholicisme. Mérovingiens puis Carolingiens font de la Gaule un royaume franc ; après le couronnement impérial de Charlemagne, ses petits-fils partagent l’empire, et la Francie occidentale devient l’ancêtre de la France.' },
    events:[
      { y:486, zh:'蘇瓦松之戰，克洛維擊敗羅馬將領西阿格里烏斯', en:'Battle of Soissons: Clovis defeats the Roman general Syagrius', fr:'Bataille de Soissons : Clovis bat le général romain Syagrius' },
      { y:500, c:true, zh:'克洛維在蘭斯受洗', en:'Clovis is baptised at Reims', fr:'Baptême de Clovis à Reims' },
      { y:732, zh:'普瓦捷之戰，查理·馬特擊退倭馬亞軍隊', en:'Battle of Poitiers: Charles Martel halts an Umayyad army', fr:'Bataille de Poitiers : Charles Martel arrête une armée omeyyade' },
      { y:800, zh:'查理曼在羅馬加冕為皇帝', en:'Charlemagne crowned emperor in Rome', fr:'Charlemagne couronné empereur à Rome' },
      { y:843, zh:'凡爾登條約把帝國一分為三', en:'Treaty of Verdun divides the empire in three', fr:'Le traité de Verdun partage l’empire en trois' },
    ],
    themes:{
      state:{ zh:'法蘭克人把王國視為王室私產，由諸子平分，因此反覆分裂。加洛林王朝以伯爵與巡察使治理地方，但王權在九世紀的維京入侵中衰落。',
        en:'The Franks treated the kingdom as family property shared among sons, so it split again and again. The Carolingians ruled through counts and royal envoys, but royal power waned under the Viking raids of the ninth century.',
        fr:'Les Francs traitent le royaume comme un bien familial partagé entre les fils, d’où des partages répétés. Les Carolingiens gouvernent par les comtes et les missi dominici, mais le pouvoir royal décline sous les raids vikings du IXᵉ siècle.' },
      faith:{ zh:'克洛維選擇天主教而非亞流派，與高盧羅馬的主教結盟，法國因此有「教會長女」之稱。丕平在教宗支持下受膏，王權從此帶有神聖色彩。',
        en:'Clovis chose Catholicism over Arianism and allied with the Gallo-Roman bishops, which earned France the title “eldest daughter of the Church”. Pepin was anointed with papal blessing, giving kingship a sacred aura.',
        fr:'Clovis choisit le catholicisme plutôt que l’arianisme et s’allie aux évêques gallo-romains, d’où le titre de « fille aînée de l’Église ». Pépin reçoit l’onction avec l’appui du pape, et la royauté prend un caractère sacré.' },
      society:{ zh:'城市萎縮，經濟轉向自給自足的莊園。大地主與修道院掌握土地，自由農民逐漸依附於領主。',
        en:'Towns shrank and the economy fell back on self-sufficient estates. Great landowners and monasteries held the land, and free peasants slid into dependence on lords.',
        fr:'Les villes se rétractent et l’économie se replie sur des domaines autarciques. Grands propriétaires et monastères tiennent la terre, et les paysans libres tombent peu à peu sous la dépendance des seigneurs.' },
      culture:{ zh:'加洛林文藝復興在宮廷學校與修道院抄寫古典文獻，並創造了加洛林小寫字體。842年的《斯特拉斯堡誓言》是最早的古法語文獻之一。',
        en:'The Carolingian Renaissance copied classical texts in palace schools and monasteries and created the Carolingian minuscule. The Oaths of Strasbourg of 842 are among the earliest texts in Old French.',
        fr:'La renaissance carolingienne recopie les textes antiques à l’école du palais et dans les monastères, et crée la minuscule caroline. Les Serments de Strasbourg (842) comptent parmi les plus anciens textes en langue romane.' },
      world:{ zh:'查理曼的帝國從庇里牛斯山延伸到易北河。凡爾登條約把它分為西、中、東三國，西法蘭克與東法蘭克日後分別演變為法國與德國。',
        en:'Charlemagne’s empire stretched from the Pyrenees to the Elbe. The Treaty of Verdun cut it into western, middle and eastern kingdoms, and West and East Francia later grew into France and Germany.',
        fr:'L’empire de Charlemagne s’étend des Pyrénées à l’Elbe. Le traité de Verdun le divise en trois royaumes ; la Francie occidentale et la Francie orientale deviendront la France et l’Allemagne.' },
    }
  },
  {
    id:'capetian', icon:'⚜️', start:987, end:1328, world:'medieval',
    name:{ zh:'卡佩王朝與中世紀盛期', en:'The Capetians and the High Middle Ages', fr:'Les Capétiens et le Moyen Âge central' },
    summary:{ zh:'雨果·卡佩登基時，王室只直接控制巴黎與奧爾良一帶。三百多年間，卡佩王朝靠婚姻、戰爭與法律，把四分五裂的封建領地收攏為以巴黎為中心的王國。',
      en:'When Hugh Capet took the throne, the crown directly held little more than the land around Paris and Orléans. Over three centuries the Capetians used marriage, war and law to gather scattered feudal lands into a kingdom centred on Paris.',
      fr:'À l’avènement d’Hugues Capet, la couronne ne contrôle guère que la région de Paris et d’Orléans. En trois siècles, les Capétiens rassemblent par mariages, guerres et droit des terres féodales éclatées en un royaume centré sur Paris.' },
    events:[
      { y:987,  zh:'雨果·卡佩被推舉為國王', en:'Hugh Capet elected king', fr:'Hugues Capet élu roi' },
      { y:1163, zh:'巴黎聖母院動工', en:'Construction of Notre-Dame de Paris begins', fr:'Début de la construction de Notre-Dame de Paris' },
      { y:1214, zh:'布汶戰役，腓力二世擊敗英格蘭與神聖羅馬帝國聯軍', en:'Battle of Bouvines: Philip II defeats an English and imperial coalition', fr:'Bataille de Bouvines : Philippe Auguste bat la coalition anglo-impériale' },
      { y:1270, zh:'路易九世在十字軍途中死於突尼斯', en:'Louis IX dies at Tunis on crusade', fr:'Louis IX meurt devant Tunis en croisade' },
      { y:1302, zh:'腓力四世召開首次三級會議', en:'Philip IV summons the first Estates General', fr:'Philippe le Bel réunit les premiers états généraux' },
    ],
    themes:{
      state:{ zh:'腓力二世從英格蘭金雀花王朝手中奪回諾曼第等地，並派王室官員管理領地。腓力四世與教宗對抗，開始倚重法學家治國。',
        en:'Philip II won Normandy and other lands from the Plantagenet kings of England and sent royal officials to govern them. Philip IV defied the pope and came to rely on trained lawyers to rule.',
        fr:'Philippe Auguste reprend la Normandie et d’autres terres aux Plantagenêts et y envoie des baillis royaux. Philippe le Bel défie le pape et gouverne en s’appuyant sur des légistes.' },
      faith:{ zh:'克呂尼與熙篤修會的改革遍及歐洲。王室支持十字軍，也參與阿爾比十字軍，鎮壓南方的清潔派；路易九世死後被封為聖人。',
        en:'Reform movements from Cluny and Cîteaux spread across Europe. The crown backed the crusades and joined the Albigensian Crusade against the Cathars of the south; Louis IX was made a saint after his death.',
        fr:'Les réformes de Cluny et de Cîteaux rayonnent sur l’Europe. La couronne soutient les croisades et prend part à la croisade des Albigeois contre les cathares du Midi ; Louis IX est canonisé après sa mort.' },
      society:{ zh:'人口與耕地大幅擴張，香檳市集連結義大利與法蘭德斯的商人，城市取得自治特許狀，巴黎成為西歐最大的城市之一。',
        en:'Population and farmland grew sharply. The Champagne fairs linked Italian and Flemish merchants, towns won charters of self-government, and Paris became one of the largest cities in Western Europe.',
        fr:'Population et terres cultivées augmentent fortement. Les foires de Champagne relient marchands italiens et flamands, les villes obtiennent des chartes de franchise, et Paris devient l’une des plus grandes villes d’Occident.' },
      culture:{ zh:'哥德式建築從聖德尼修道院發展出來，巴黎大學成為神學重鎮。北方的武功歌與南方奧克語的吟遊詩人，開創了法國文學。',
        en:'Gothic architecture grew out of the abbey of Saint-Denis, and the University of Paris became the centre of theology. Epic chansons de geste in the north and Occitan troubadours in the south founded French literature.',
        fr:'L’art gothique naît à l’abbaye de Saint-Denis et l’université de Paris devient le grand centre de théologie. Chansons de geste au nord et troubadours de langue d’oc au sud fondent la littérature française.' },
      world:{ zh:'卡佩王室捲入十字軍與英法領地之爭。1309年起教宗駐在亞維儂，顯示法國王權在基督教世界的影響力。',
        en:'The Capetians were drawn into the crusades and into territorial quarrels with England. From 1309 the popes resided at Avignon, a sign of French royal influence in Christendom.',
        fr:'Les Capétiens s’engagent dans les croisades et dans les querelles territoriales avec l’Angleterre. À partir de 1309, la papauté réside à Avignon, signe de l’influence de la monarchie française dans la chrétienté.' },
    }
  },
  {
    id:'valois', icon:'⚔️', start:1328, end:1515, world:'medieval',
    name:{ zh:'百年戰爭與王權重建', en:'The Hundred Years’ War and Royal Recovery', fr:'La guerre de Cent Ans et le redressement royal' },
    summary:{ zh:'卡佩直系絕嗣後，瓦盧瓦家族與英格蘭國王爭奪王位，引發百年戰爭。黑死病、內戰與外患幾乎拖垮王國，最後卻換來常備軍、固定稅收與更強的王權。',
      en:'When the direct Capetian line died out, the Valois and the kings of England fought over the throne in the Hundred Years’ War. Plague, civil war and invasion nearly broke the kingdom, yet it emerged with a standing army, regular taxes and a stronger crown.',
      fr:'À l’extinction des Capétiens directs, les Valois et les rois d’Angleterre se disputent le trône : c’est la guerre de Cent Ans. Peste, guerre civile et invasion manquent de briser le royaume, qui en sort pourtant avec une armée permanente, un impôt régulier et une monarchie renforcée.' },
    events:[
      { y:1337, zh:'百年戰爭爆發', en:'The Hundred Years’ War begins', fr:'Début de la guerre de Cent Ans' },
      { y:1348, zh:'黑死病傳入法國', en:'The Black Death reaches France', fr:'La peste noire atteint la France' },
      { y:1415, zh:'阿金庫爾戰役，法國騎士慘敗', en:'Battle of Agincourt: a crushing defeat for French knights', fr:'Bataille d’Azincourt : désastre pour la chevalerie française' },
      { y:1429, zh:'聖女貞德解奧爾良之圍', en:'Joan of Arc relieves the siege of Orléans', fr:'Jeanne d’Arc délivre Orléans' },
      { y:1453, zh:'卡斯蒂永戰役，英格蘭在法國只剩加萊', en:'Battle of Castillon: England keeps only Calais', fr:'Bataille de Castillon : l’Angleterre ne garde que Calais' },
    ],
    themes:{
      state:{ zh:'查理七世建立王家常備軍與固定的直接稅「人頭稅」，路易十一收回勃艮第公國等大貴族的領地，王權壓過了諸侯。',
        en:'Charles VII created a permanent royal army and a regular direct tax, the taille. Louis XI absorbed the duchy of Burgundy and other great fiefs, and the crown prevailed over the princes.',
        fr:'Charles VII crée une armée royale permanente et un impôt régulier, la taille. Louis XI récupère le duché de Bourgogne et d’autres grands fiefs : la couronne l’emporte sur les princes.' },
      faith:{ zh:'教會大分裂期間，法國支持亞維儂的教宗。1438年的《布爾日國事詔書》確立法國教會相對於羅馬的自主，也就是「高盧主義」。',
        en:'During the Great Schism France backed the Avignon popes. The Pragmatic Sanction of Bourges in 1438 asserted the French Church’s autonomy from Rome, known as Gallicanism.',
        fr:'Pendant le Grand Schisme, la France soutient les papes d’Avignon. La Pragmatique Sanction de Bourges (1438) affirme l’autonomie de l’Église de France face à Rome : c’est le gallicanisme.' },
      society:{ zh:'黑死病奪走約三分之一的人口，勞力短缺與戰亂引發1358年的扎克雷農民起義。戰後重建時，倖存農民的處境反而常有改善。',
        en:'The Black Death killed about a third of the population, and labour shortages and war fuelled the Jacquerie peasant revolt of 1358. In the recovery that followed, surviving peasants often found their lot improved.',
        fr:'La peste noire emporte environ un tiers de la population ; pénurie de main-d’œuvre et guerre nourrissent la Jacquerie de 1358. Lors de la reconstruction, les paysans survivants voient souvent leur sort s’améliorer.' },
      culture:{ zh:'貞德的故事成為民族認同的象徵。維永的詩歌，以及《貝里公爵的豪華時禱書》等手抄本插畫，代表這個時代的文化成就。',
        en:'Joan of Arc’s story became a symbol of national identity. François Villon’s poetry and illuminated manuscripts such as the Très Riches Heures du duc de Berry mark the culture of the age.',
        fr:'L’histoire de Jeanne d’Arc devient un symbole de l’identité nationale. La poésie de François Villon et les enluminures des Très Riches Heures du duc de Berry marquent la culture de l’époque.' },
      world:{ zh:'戰爭起於王位繼承與吉耶訥領地之爭，結束時英格蘭勢力退出歐陸。1494年查理八世入侵義大利，揭開義大利戰爭的序幕。',
        en:'The war began over the succession and the duchy of Guyenne and ended with England driven from the continent. In 1494 Charles VIII invaded Italy, opening the Italian Wars.',
        fr:'Née d’une querelle de succession et de la question de Guyenne, la guerre s’achève par le départ des Anglais du continent. En 1494, Charles VIII envahit l’Italie et ouvre les guerres d’Italie.' },
    }
  },
  {
    id:'renaissance', icon:'🏰', start:1515, end:1610, world:'reformation',
    name:{ zh:'文藝復興與宗教戰爭', en:'Renaissance and Wars of Religion', fr:'Renaissance et guerres de Religion' },
    summary:{ zh:'法蘭索瓦一世把義大利文藝復興帶進法國宮廷，並規定官方文書使用法語。隨後新教傳入，天主教徒與胡格諾派爆發三十多年的內戰，直到亨利四世頒布南特詔書。',
      en:'Francis I brought the Italian Renaissance to the French court and made French the language of official acts. Protestantism then spread, and Catholics and Huguenots fought for more than thirty years until Henry IV issued the Edict of Nantes.',
      fr:'François Iᵉʳ fait entrer la Renaissance italienne à la cour et impose le français dans les actes officiels. Puis le protestantisme se répand, et catholiques et huguenots s’affrontent plus de trente ans, jusqu’à l’édit de Nantes d’Henri IV.' },
    events:[
      { y:1515, zh:'馬里尼亞諾戰役，法蘭索瓦一世奪取米蘭', en:'Battle of Marignano: Francis I takes Milan', fr:'Bataille de Marignan : François Iᵉʳ prend Milan' },
      { y:1539, zh:'維萊科特雷敕令規定官方文書以法語書寫', en:'Ordinance of Villers-Cotterêts makes French the language of official acts', fr:'L’ordonnance de Villers-Cotterêts impose le français dans les actes officiels' },
      { y:1562, zh:'宗教戰爭爆發', en:'The Wars of Religion begin', fr:'Début des guerres de Religion' },
      { y:1572, zh:'聖巴托洛繆大屠殺', en:'St Bartholomew’s Day massacre', fr:'Massacre de la Saint-Barthélemy' },
      { y:1598, zh:'亨利四世頒布南特詔書', en:'Henry IV issues the Edict of Nantes', fr:'Henri IV signe l’édit de Nantes' },
    ],
    themes:{
      state:{ zh:'王權透過宮廷與官職買賣擴張。宗教戰爭期間王室權威一度崩潰，直到波旁家族的亨利四世改宗天主教，才重建統一。',
        en:'The crown grew through the court and the sale of offices. Royal authority collapsed during the Wars of Religion and was restored only when the Bourbon Henry IV converted to Catholicism.',
        fr:'La monarchie s’affermit par la cour et la vénalité des offices. Son autorité s’effondre pendant les guerres de Religion et n’est restaurée qu’avec la conversion au catholicisme du Bourbon Henri IV.' },
      faith:{ zh:'1516年的《博洛尼亞協定》讓國王掌握主教任命權。喀爾文的教義在貴族與城市菁英間迅速傳播，南特詔書則給予新教徒有限的信仰自由與安全據點。',
        en:'The Concordat of Bologna in 1516 gave the king the right to name bishops. Calvin’s teaching spread fast among nobles and urban elites, and the Edict of Nantes granted Protestants limited freedom of worship and safe towns.',
        fr:'Le concordat de Bologne (1516) donne au roi la nomination des évêques. La doctrine de Calvin gagne vite noblesse et élites urbaines, et l’édit de Nantes accorde aux protestants une liberté de culte limitée et des places de sûreté.' },
      society:{ zh:'美洲白銀帶來物價上漲，羅亞爾河谷的城堡展現貴族財富，戰亂則讓許多地區飽受劫掠與饑荒。',
        en:'American silver drove prices up, and the châteaux of the Loire displayed noble wealth. War brought plunder and famine to many provinces.',
        fr:'L’argent d’Amérique fait monter les prix, et les châteaux de la Loire affichent la richesse nobiliaire. La guerre apporte pillages et famines dans de nombreuses provinces.' },
      culture:{ zh:'達文西晚年受邀定居法國。拉伯雷、蒙田與七星詩社用法語寫作，1530年設立的王家講師團就是今日的法蘭西公學院。',
        en:'Leonardo da Vinci spent his last years in France. Rabelais, Montaigne and the Pléiade poets wrote in French, and the royal lecturers founded in 1530 became today’s Collège de France.',
        fr:'Léonard de Vinci finit ses jours en France. Rabelais, Montaigne et les poètes de la Pléiade écrivent en français, et les lecteurs royaux institués en 1530 deviennent le Collège de France.' },
      world:{ zh:'法國在義大利戰爭中與哈布斯堡家族爭霸，甚至與鄂圖曼帝國結盟。卡蒂埃自1534年起探索聖羅倫斯河，開啟法國在北美的足跡。',
        en:'France fought the Habsburgs in the Italian Wars and even allied with the Ottoman Empire. Jacques Cartier explored the St Lawrence from 1534, opening France’s path into North America.',
        fr:'La France affronte les Habsbourg dans les guerres d’Italie et s’allie même à l’Empire ottoman. Jacques Cartier explore le Saint-Laurent à partir de 1534 et ouvre la voie à la présence française en Amérique du Nord.' },
    }
  },
  {
    id:'absolutism', icon:'☀️', start:1610, end:1789, world:'enlightenment_revolution',
    name:{ zh:'絕對君主制與啟蒙', en:'Absolute Monarchy and the Enlightenment', fr:'Monarchie absolue et Lumières' },
    summary:{ zh:'黎塞留與路易十四把國家權力集中到國王一人身上，凡爾賽成為歐洲宮廷的典範。但連年戰爭與財政赤字，加上啟蒙思想對權威的質疑，讓舊制度走向危機。',
      en:'Richelieu and Louis XIV concentrated power in the king, and Versailles became the model for Europe’s courts. Constant war, chronic deficits and Enlightenment challenges to authority pushed the Old Regime into crisis.',
      fr:'Richelieu puis Louis XIV concentrent le pouvoir dans la personne du roi, et Versailles devient le modèle des cours européennes. Guerres incessantes, déficits chroniques et critique des Lumières mènent l’Ancien Régime à la crise.' },
    events:[
      { y:1635, zh:'黎塞留創立法蘭西學術院', en:'Richelieu founds the Académie française', fr:'Richelieu fonde l’Académie française' },
      { y:1661, zh:'路易十四親政', en:'Louis XIV begins his personal rule', fr:'Début du règne personnel de Louis XIV' },
      { y:1682, zh:'宮廷遷往凡爾賽', en:'The court moves to Versailles', fr:'La cour s’installe à Versailles' },
      { y:1685, zh:'撤銷南特詔書', en:'Revocation of the Edict of Nantes', fr:'Révocation de l’édit de Nantes' },
      { y:1751, zh:'《百科全書》第一卷出版', en:'First volume of the Encyclopédie', fr:'Premier volume de l’Encyclopédie' },
      { y:1763, zh:'巴黎條約，加拿大割讓給英國', en:'Treaty of Paris: Canada ceded to Britain', fr:'Traité de Paris : le Canada cédé à la Grande-Bretagne' },
    ],
    themes:{
      state:{ zh:'中央派往各省的監察官削弱了地方勢力。投石黨之亂後，路易十四把貴族吸納進凡爾賽宮廷，形成後人以「朕即國家」概括的絕對王權。',
        en:'Intendants sent from Paris to the provinces curbed local powers. After the Fronde, Louis XIV drew the nobility into the court at Versailles, the absolute monarchy later summed up as “I am the State”.',
        fr:'Les intendants envoyés dans les provinces affaiblissent les pouvoirs locaux. Après la Fronde, Louis XIV attire la noblesse à Versailles : c’est la monarchie absolue, résumée plus tard par le mot « L’État, c’est moi ».' },
      faith:{ zh:'撤銷南特詔書後，約二十萬胡格諾派信徒出走他國。冉森派之爭與耶穌會的爭議，動搖了教會的權威。',
        en:'After the revocation of the Edict of Nantes, some 200,000 Huguenots fled abroad. Quarrels over Jansenism and the Jesuits shook the Church’s authority.',
        fr:'Après la révocation de l’édit de Nantes, quelque 200 000 huguenots s’exilent. Les querelles du jansénisme et des jésuites ébranlent l’autorité de l’Église.' },
      society:{ zh:'柯爾貝推行重商主義，設立王家工場。社會仍分為教士、貴族與第三等級，稅負主要落在農民身上。',
        en:'Colbert pursued mercantilism and founded royal manufactures. Society remained divided into clergy, nobility and Third Estate, with the tax burden falling mainly on peasants.',
        fr:'Colbert mène une politique mercantiliste et crée des manufactures royales. La société reste divisée en clergé, noblesse et tiers état, et l’impôt pèse surtout sur les paysans.' },
      culture:{ zh:'高乃依、拉辛與莫里哀的古典戲劇，以及凡爾賽的品味，為全歐洲立下標準。十八世紀伏爾泰、孟德斯鳩、盧梭與狄德羅掀起啟蒙運動，法語成為歐洲上流社會的共通語言。',
        en:'The classical drama of Corneille, Racine and Molière and the taste of Versailles set Europe’s standards. In the eighteenth century Voltaire, Montesquieu, Rousseau and Diderot led the Enlightenment, and French became the common tongue of Europe’s elites.',
        fr:'Le théâtre classique de Corneille, Racine et Molière et le goût de Versailles donnent le ton à l’Europe. Au XVIIIᵉ siècle, Voltaire, Montesquieu, Rousseau et Diderot portent les Lumières, et le français devient la langue des élites européennes.' },
      world:{ zh:'法國是歐洲最強的陸權國家，卻在七年戰爭中把加拿大與在印度的大部分利益輸給英國。支持美國獨立戰爭雖然報了一箭之仇，卻加深了財政危機。',
        en:'France was Europe’s greatest land power, yet in the Seven Years’ War it lost Canada and most of its position in India to Britain. Backing American independence brought revenge but deepened the financial crisis.',
        fr:'Première puissance terrestre d’Europe, la France perd pourtant le Canada et l’essentiel de ses positions en Inde face à la Grande-Bretagne pendant la guerre de Sept Ans. Le soutien à l’indépendance américaine offre une revanche mais aggrave la crise financière.' },
    }
  },
  {
    id:'revolution', icon:'🔥', start:1789, end:1815, world:'enlightenment_revolution',
    name:{ zh:'大革命與拿破崙', en:'Revolution and Napoleon', fr:'Révolution et Empire' },
    summary:{ zh:'財政破產迫使國王召開三級會議，第三等級自組國民議會，巴士底獄陷落後，舊制度在數月內瓦解。歷經共和、恐怖統治與督政府，拿破崙稱帝，把革命的制度輸出到整個歐洲。',
      en:'Bankruptcy forced the king to summon the Estates General; the Third Estate declared itself a National Assembly, and after the fall of the Bastille the Old Regime collapsed within months. Republic, Terror and Directory followed, until Napoleon crowned himself emperor and carried revolutionary institutions across Europe.',
      fr:'La banqueroute oblige le roi à convoquer les états généraux ; le tiers état se proclame Assemblée nationale et, après la prise de la Bastille, l’Ancien Régime s’effondre en quelques mois. République, Terreur et Directoire se succèdent, jusqu’au sacre de Napoléon, qui exporte les institutions révolutionnaires dans toute l’Europe.' },
    events:[
      { y:1789, zh:'攻佔巴士底獄，發表《人權和公民權宣言》', en:'Storming of the Bastille; Declaration of the Rights of Man and of the Citizen', fr:'Prise de la Bastille ; Déclaration des droits de l’homme et du citoyen' },
      { y:1792, zh:'廢除君主制，第一共和成立', en:'Monarchy abolished; the First Republic proclaimed', fr:'Abolition de la monarchie ; proclamation de la Première République' },
      { y:1793, zh:'路易十六被處決，恐怖統治開始', en:'Louis XVI executed; the Terror begins', fr:'Exécution de Louis XVI ; début de la Terreur' },
      { y:1804, zh:'《民法典》頒布，拿破崙加冕稱帝', en:'Civil Code promulgated; Napoleon crowned emperor', fr:'Promulgation du Code civil ; sacre de Napoléon' },
      { y:1815, zh:'滑鐵盧戰役，拿破崙最終失敗', en:'Waterloo: Napoleon’s final defeat', fr:'Waterloo : défaite définitive de Napoléon' },
    ],
    themes:{
      state:{ zh:'革命廢除封建特權，把全國劃為八十三個省，建立中央集權的行政體系。拿破崙再設立省長、國務會議與法蘭西銀行，這些制度大多沿用至今。',
        en:'The Revolution abolished feudal privilege, divided the country into 83 departments and built a centralised administration. Napoleon added prefects, the Council of State and the Banque de France, most of which survive today.',
        fr:'La Révolution abolit les privilèges, découpe le pays en 83 départements et bâtit une administration centralisée. Napoléon y ajoute préfets, Conseil d’État et Banque de France, institutions pour la plupart encore en place.' },
      faith:{ zh:'1790年的《教士公民組織法》要求教士宣誓效忠國家，造成天主教會分裂。1801年拿破崙與教宗簽訂《教務專約》，恢復宗教和平。',
        en:'The Civil Constitution of the Clergy of 1790 required priests to swear loyalty to the state and split the Catholic Church. Napoleon’s Concordat with the pope in 1801 restored religious peace.',
        fr:'La Constitution civile du clergé (1790) impose aux prêtres un serment à l’État et divise l’Église catholique. Le Concordat signé par Napoléon avec le pape en 1801 rétablit la paix religieuse.' },
      society:{ zh:'教會與流亡貴族的土地被沒收拍賣，許多農民成為小地主。行會廢除，度量衡改用公制，法律之前人人平等成為原則。',
        en:'Church and émigré lands were seized and sold, and many peasants became smallholders. Guilds were abolished, the metric system introduced, and equality before the law became a principle.',
        fr:'Les biens du clergé et des émigrés sont confisqués et vendus, et de nombreux paysans deviennent petits propriétaires. Les corporations sont abolies, le système métrique adopté, et l’égalité devant la loi devient un principe.' },
      culture:{ zh:'「自由、平等、博愛」的口號與《馬賽曲》在這時誕生。羅浮宮在1793年開放為公共博物館，國家開始主導教育與文化。',
        en:'The motto “Liberty, Equality, Fraternity” and the Marseillaise were born. The Louvre opened as a public museum in 1793, and the state took charge of education and culture.',
        fr:'La devise « Liberté, Égalité, Fraternité » et la Marseillaise voient le jour. Le Louvre ouvre comme musée public en 1793, et l’État prend en main l’enseignement et la culture.' },
      world:{ zh:'革命戰爭與拿破崙戰爭把法國軍隊帶到馬德里與莫斯科，民族主義隨之在歐洲各地興起。1815年的維也納會議重劃了歐洲版圖。',
        en:'The revolutionary and Napoleonic wars took French armies to Madrid and Moscow and stirred nationalism across Europe. The Congress of Vienna redrew the map of Europe in 1815.',
        fr:'Les guerres révolutionnaires et napoléoniennes mènent les armées françaises à Madrid et à Moscou et éveillent les nationalismes en Europe. Le congrès de Vienne redessine la carte du continent en 1815.' },
    }
  },
  {
    id:'c19', icon:'🚂', start:1815, end:1870, world:'industrial',
    name:{ zh:'復辟、革命與第二帝國', en:'Restoration, Revolutions and the Second Empire', fr:'Restauration, révolutions et Second Empire' },
    summary:{ zh:'波旁王朝復辟後，法國在王權、共和與帝制之間反覆擺盪，1830年與1848年兩度爆發革命。第二帝國帶來鐵路與現代化的巴黎，最後敗於普法戰爭。',
      en:'After the Bourbon Restoration, France swung between monarchy, republic and empire, with revolutions in 1830 and 1848. The Second Empire brought railways and a modern Paris, then fell in the Franco-Prussian War.',
      fr:'Après la Restauration des Bourbons, la France oscille entre monarchie, république et empire, avec les révolutions de 1830 et 1848. Le Second Empire apporte chemins de fer et Paris moderne, puis s’effondre dans la guerre franco-prussienne.' },
    events:[
      { y:1830, zh:'七月革命，七月王朝成立', en:'July Revolution: the July Monarchy', fr:'Révolution de Juillet : la monarchie de Juillet' },
      { y:1848, zh:'二月革命，實施男性普選並廢除奴隸制', en:'February Revolution: universal male suffrage and the abolition of slavery', fr:'Révolution de février : suffrage universel masculin et abolition de l’esclavage' },
      { y:1852, zh:'拿破崙三世建立第二帝國', en:'Napoleon III proclaims the Second Empire', fr:'Napoléon III proclame le Second Empire' },
      { y:1853, zh:'奧斯曼開始改造巴黎', en:'Haussmann begins rebuilding Paris', fr:'Haussmann commence la transformation de Paris' },
      { y:1870, zh:'色當戰敗，第二帝國垮台', en:'Defeat at Sedan; the Second Empire falls', fr:'Défaite de Sedan ; chute du Second Empire' },
    ],
    themes:{
      state:{ zh:'七月王朝以有產者選舉為基礎。1848年第二共和首次實施成年男性普選，卻選出路易·拿破崙，他隨後發動政變稱帝。',
        en:'The July Monarchy rested on a franchise of property owners. The Second Republic introduced universal male suffrage in 1848 but elected Louis-Napoléon, who seized power in a coup and made himself emperor.',
        fr:'La monarchie de Juillet repose sur un suffrage censitaire. La IIᵉ République instaure en 1848 le suffrage universel masculin, mais élit Louis-Napoléon, qui s’empare du pouvoir par un coup d’État et se fait empereur.' },
      faith:{ zh:'復辟時期教會與王權重新結盟。此後天主教與共和派的對立，成為十九世紀法國政治的主軸。',
        en:'The Restoration renewed the alliance of throne and altar. From then on the clash between Catholics and republicans became the central thread of nineteenth-century French politics.',
        fr:'La Restauration renoue l’alliance du trône et de l’autel. Dès lors, l’affrontement entre catholiques et républicains structure la vie politique française du XIXᵉ siècle.' },
      society:{ zh:'工業化比英國緩慢，以紡織、冶金與鐵路為主。城市工人階級出現，里昂的絲織工人在1831年與1834年兩度起義。',
        en:'Industry grew more slowly than in Britain, led by textiles, metalworking and railways. An urban working class emerged, and the silk workers of Lyon rose in 1831 and 1834.',
        fr:'L’industrialisation, plus lente qu’en Grande-Bretagne, s’appuie sur le textile, la métallurgie et le rail. Une classe ouvrière urbaine apparaît, et les canuts de Lyon se soulèvent en 1831 et 1834.' },
      culture:{ zh:'浪漫主義的雨果與德拉克洛瓦之後，是巴爾札克、福樓拜與庫爾貝的寫實主義。1839年公布的達蓋爾銀版法開啟了攝影時代。',
        en:'Romantics such as Hugo and Delacroix were followed by the realism of Balzac, Flaubert and Courbet. The daguerreotype, made public in 1839, opened the age of photography.',
        fr:'Le romantisme de Hugo et Delacroix cède la place au réalisme de Balzac, Flaubert et Courbet. Le daguerréotype, rendu public en 1839, ouvre l’ère de la photographie.' },
      world:{ zh:'1830年起征服阿爾及利亞。第二帝國參與克里米亞戰爭、干預墨西哥，並開始在印度支那擴張。',
        en:'France began conquering Algeria in 1830. The Second Empire fought in the Crimean War, intervened in Mexico and began expanding into Indochina.',
        fr:'La conquête de l’Algérie commence en 1830. Le Second Empire participe à la guerre de Crimée, intervient au Mexique et entame l’expansion en Indochine.' },
    }
  },
  {
    id:'third', icon:'🗼', start:1870, end:1940, world:'worldwar',
    name:{ zh:'第三共和', en:'The Third Republic', fr:'La IIIᵉ République' },
    summary:{ zh:'普法戰敗與巴黎公社之後，第三共和逐步站穩腳步，建立免費義務教育與政教分離。法國擁有僅次於英國的殖民帝國，並以巨大代價打贏第一次世界大戰。',
      en:'After defeat by Prussia and the Paris Commune, the Third Republic took root, creating free compulsory schooling and separating church and state. France held the second-largest colonial empire and won the First World War at enormous cost.',
      fr:'Après la défaite face à la Prusse et la Commune de Paris, la IIIᵉ République s’enracine : école gratuite et obligatoire, séparation des Églises et de l’État. La France possède le deuxième empire colonial et gagne la Grande Guerre à un prix immense.' },
    events:[
      { y:1871, zh:'巴黎公社', en:'The Paris Commune', fr:'La Commune de Paris' },
      { y:1882, zh:'費里法案確立免費、義務、世俗的初等教育', en:'Ferry laws make primary school free, compulsory and secular', fr:'Les lois Ferry rendent l’école primaire gratuite, obligatoire et laïque' },
      { y:1894, zh:'德雷福斯事件爆發', en:'The Dreyfus affair begins', fr:'Début de l’affaire Dreyfus' },
      { y:1905, zh:'政教分離法通過', en:'Law separating the churches and the state', fr:'Loi de séparation des Églises et de l’État' },
      { y:1914, zh:'第一次世界大戰爆發', en:'The First World War begins', fr:'Début de la Première Guerre mondiale' },
      { y:1936, zh:'人民陣線執政', en:'The Popular Front takes power', fr:'Le Front populaire au pouvoir' },
    ],
    themes:{
      state:{ zh:'1875年的憲法性法律建立議會共和。內閣雖然頻繁更替，共和體制卻延續了七十年，是大革命以來最長壽的政體之一。',
        en:'The constitutional laws of 1875 set up a parliamentary republic. Cabinets changed often, yet the regime lasted seventy years, one of the longest-lived since the Revolution.',
        fr:'Les lois constitutionnelles de 1875 fondent une république parlementaire. Malgré l’instabilité ministérielle, le régime dure soixante-dix ans, l’un des plus longs depuis la Révolution.' },
      faith:{ zh:'德雷福斯事件撕裂了社會，也促成1905年的政教分離法：國家不承認、也不資助任何宗教，「世俗主義」成為共和的核心原則。',
        en:'The Dreyfus affair tore society apart and led to the 1905 law: the state recognises and funds no religion, and laïcité became a core principle of the Republic.',
        fr:'L’affaire Dreyfus déchire la société et débouche sur la loi de 1905 : la République ne reconnaît ni ne subventionne aucun culte, et la laïcité devient un principe fondamental.' },
      society:{ zh:'鐵路與學校把鄉村整合進全國市場，法語逐漸取代地方語言。1936年人民陣線引進帶薪假與每週四十小時工時。',
        en:'Railways and schools drew the countryside into a national market, and French displaced regional languages. In 1936 the Popular Front introduced paid holidays and the forty-hour week.',
        fr:'Chemins de fer et écoles intègrent les campagnes au marché national, et le français supplante les langues régionales. En 1936, le Front populaire instaure congés payés et semaine de quarante heures.' },
      culture:{ zh:'印象派、後印象派與立體派讓巴黎成為現代藝術之都。1889年艾菲爾鐵塔落成，左拉與普魯斯特代表這個時代的文學高峰。',
        en:'Impressionism, Post-Impressionism and Cubism made Paris the capital of modern art. The Eiffel Tower rose in 1889, and Zola and Proust marked the literary peaks of the age.',
        fr:'Impressionnisme, postimpressionnisme et cubisme font de Paris la capitale de l’art moderne. La tour Eiffel s’élève en 1889, et Zola et Proust dominent la littérature de l’époque.' },
      world:{ zh:'殖民帝國擴及北非、西非、馬達加斯加與印度支那。第一次世界大戰中約一百四十萬法國軍人陣亡，凡爾登成為犧牲的象徵。',
        en:'The colonial empire spread across North and West Africa, Madagascar and Indochina. Some 1.4 million French soldiers died in the First World War, and Verdun became the symbol of sacrifice.',
        fr:'L’empire colonial s’étend sur l’Afrique du Nord et de l’Ouest, Madagascar et l’Indochine. Environ 1,4 million de soldats français meurent pendant la Grande Guerre, et Verdun devient le symbole du sacrifice.' },
    }
  },
  {
    id:'war', icon:'🕯️', start:1940, end:1958, world:'worldwar',
    name:{ zh:'淪陷、抵抗與重建', en:'Defeat, Resistance and Reconstruction', fr:'Défaite, Résistance et reconstruction' },
    summary:{ zh:'1940年法國在六週內戰敗，北部被德軍佔領，貝當領導的維希政府與納粹合作，戴高樂則在倫敦號召抵抗。解放後的第四共和推動重建與歐洲整合，卻在殖民戰爭中崩潰。',
      en:'In 1940 France was defeated in six weeks; the north was occupied and Pétain’s Vichy regime collaborated with the Nazis while de Gaulle called for resistance from London. After Liberation the Fourth Republic rebuilt the country and launched European integration, but collapsed under colonial war.',
      fr:'En 1940, la France est battue en six semaines ; le Nord est occupé et le régime de Vichy de Pétain collabore avec les nazis, tandis que de Gaulle appelle à la résistance depuis Londres. Après la Libération, la IVᵉ République reconstruit le pays et lance la construction européenne, mais succombe aux guerres coloniales.' },
    events:[
      { y:1940, zh:'停戰協定簽訂，戴高樂發表六一八呼籲', en:'Armistice; de Gaulle’s Appeal of 18 June', fr:'Armistice ; appel du 18 Juin' },
      { y:1942, zh:'冬季自行車賽場大搜捕', en:'The Vel’ d’Hiv roundup', fr:'Rafle du Vél’ d’Hiv' },
      { y:1944, zh:'諾曼第登陸與巴黎解放，女性獲得投票權', en:'D-Day and the liberation of Paris; women win the vote', fr:'Débarquement de Normandie et libération de Paris ; droit de vote des femmes' },
      { y:1951, zh:'簽約成立歐洲煤鋼共同體', en:'Treaty founding the European Coal and Steel Community', fr:'Traité instituant la Communauté européenne du charbon et de l’acier' },
      { y:1954, zh:'奠邊府戰敗，阿爾及利亞戰爭爆發', en:'Defeat at Dien Bien Phu; the Algerian War begins', fr:'Défaite de Diên Biên Phu ; début de la guerre d’Algérie' },
    ],
    themes:{
      state:{ zh:'維希政權廢除共和，以「工作、家庭、祖國」取代「自由、平等、博愛」。1946年的第四共和恢復議會制，但政府更迭頻繁，難以處理殖民危機。',
        en:'Vichy abolished the Republic and replaced its motto with “Work, Family, Fatherland”. The Fourth Republic of 1946 restored parliamentary rule, but its short-lived governments could not resolve the colonial crisis.',
        fr:'Vichy abolit la République et remplace sa devise par « Travail, Famille, Patrie ». La IVᵉ République de 1946 rétablit le régime parlementaire, mais ses gouvernements éphémères ne parviennent pas à régler la crise coloniale.' },
      faith:{ zh:'部分教會高層支持維希政權，也有神職人員與修會冒險藏匿猶太兒童。戰後基督教民主政黨一度成為主要的政治力量。',
        en:'Some church leaders supported Vichy, while other clergy and religious orders risked their lives hiding Jewish children. After the war Christian democrats briefly became a major political force.',
        fr:'Une partie de la hiérarchie soutient Vichy, tandis que des prêtres et des congrégations cachent des enfants juifs au péril de leur vie. Après la guerre, la démocratie chrétienne devient un temps une force politique majeure.' },
      society:{ zh:'約七萬六千名猶太人從法國被遣送到死亡營。戰後的國有化與社會安全制度，開啟了經濟高速成長的「輝煌三十年」。',
        en:'Around 76,000 Jews were deported from France to the death camps. Post-war nationalisations and the new social security system opened the “Thirty Glorious Years” of rapid growth.',
        fr:'Environ 76 000 Juifs sont déportés de France vers les camps de la mort. Les nationalisations et la Sécurité sociale de l’après-guerre ouvrent les Trente Glorieuses.' },
      culture:{ zh:'沙特、卡繆與西蒙·波娃的存在主義，從聖日耳曼德佩的咖啡館影響全世界。波娃在1949年出版《第二性》。',
        en:'The existentialism of Sartre, Camus and Simone de Beauvoir spread from the cafés of Saint-Germain-des-Prés to the world. Beauvoir published The Second Sex in 1949.',
        fr:'L’existentialisme de Sartre, Camus et Simone de Beauvoir rayonne des cafés de Saint-Germain-des-Prés vers le monde. Beauvoir publie Le Deuxième Sexe en 1949.' },
      world:{ zh:'法國成為聯合國安理會常任理事國，與德國和解並推動歐洲整合。印度支那戰爭失敗後，阿爾及利亞戰爭最終拖垮了第四共和。',
        en:'France won a permanent seat on the UN Security Council, reconciled with Germany and drove European integration. After defeat in Indochina, the Algerian War brought down the Fourth Republic.',
        fr:'La France obtient un siège permanent au Conseil de sécurité, se réconcilie avec l’Allemagne et porte la construction européenne. Après la défaite en Indochine, la guerre d’Algérie emporte la IVᵉ République.' },
    }
  },
  {
    id:'fifth', icon:'🗳️', start:1958, end:2026, world:'coldwar',
    name:{ zh:'第五共和', en:'The Fifth Republic', fr:'La Vᵉ République' },
    summary:{ zh:'戴高樂以強勢總統制建立第五共和，並結束阿爾及利亞戰爭。此後法國歷經1968年五月風暴、去殖民化、歐洲統合與全球化，在社會模式與國家認同之間持續辯論。',
      en:'De Gaulle founded the Fifth Republic around a strong presidency and ended the Algerian War. Since then France has lived through May 1968, decolonisation, European integration and globalisation, in a running debate over its social model and national identity.',
      fr:'De Gaulle fonde la Vᵉ République autour d’une présidence forte et met fin à la guerre d’Algérie. Depuis, la France traverse Mai 68, la décolonisation, la construction européenne et la mondialisation, dans un débat continu sur son modèle social et son identité.' },
    events:[
      { y:1958, zh:'第五共和憲法通過', en:'Constitution of the Fifth Republic adopted', fr:'Adoption de la Constitution de la Vᵉ République' },
      { y:1962, zh:'阿爾及利亞獨立，總統改由人民直選', en:'Algeria becomes independent; direct presidential elections adopted', fr:'Indépendance de l’Algérie ; élection du président au suffrage universel direct' },
      { y:1968, zh:'五月風暴', en:'May 1968', fr:'Mai 68' },
      { y:1981, zh:'密特朗當選總統，廢除死刑', en:'Mitterrand elected president; death penalty abolished', fr:'Élection de François Mitterrand ; abolition de la peine de mort' },
      { y:1992, zh:'公投通過《馬斯垂克條約》', en:'Referendum approves the Maastricht Treaty', fr:'Le référendum approuve le traité de Maastricht' },
      { y:2002, zh:'歐元紙幣與硬幣開始流通', en:'Euro notes and coins enter circulation', fr:'Mise en circulation des billets et pièces en euros' },
      { y:2015, zh:'巴黎恐怖攻擊', en:'Terrorist attacks in Paris', fr:'Attentats de Paris' },
    ],
    themes:{
      state:{ zh:'1962年起總統由人民直選，主導外交與國防。左右兩派曾多次「共治」，2017年馬克宏以中間路線打破傳統的左右格局。',
        en:'Since 1962 the president has been directly elected and leads on foreign policy and defence. Left and right have several times shared power in “cohabitation”, and in 2017 Emmanuel Macron’s centrist bid broke the old left-right pattern.',
        fr:'Depuis 1962, le président est élu au suffrage universel direct et domine politique étrangère et défense. Gauche et droite ont plusieurs fois cohabité, et en 2017 la candidature centriste d’Emmanuel Macron fait éclater le clivage traditionnel.' },
      faith:{ zh:'世俗主義延伸到公立學校的宗教標誌爭議，2004年立法禁止學生在校內配戴明顯的宗教標誌。伊斯蘭教已是第二大宗教，如何兼顧信仰自由與共和原則，仍是辯論焦點。',
        en:'Laïcité extended to disputes over religious symbols in state schools, and a 2004 law banned conspicuous religious signs there. Islam is now the second religion, and reconciling freedom of belief with republican principles remains a live debate.',
        fr:'La laïcité s’étend aux signes religieux à l’école publique, interdits lorsqu’ils sont ostensibles par la loi de 2004. L’islam est désormais la deuxième religion, et concilier liberté de conscience et principes républicains reste un débat vif.' },
      society:{ zh:'1970年代石油危機後，輝煌三十年結束，失業、郊區問題與退休制度改革成為長期議題。1975年墮胎合法化，2013年同性婚姻合法化，2024年墮胎自由寫入憲法。',
        en:'The Thirty Glorious Years ended with the oil shocks of the 1970s, leaving unemployment, the banlieues and pension reform as lasting issues. Abortion was legalised in 1975, same-sex marriage in 2013, and the freedom to have an abortion entered the constitution in 2024.',
        fr:'Les Trente Glorieuses s’achèvent avec les chocs pétroliers ; chômage, banlieues et réforme des retraites deviennent des questions durables. L’IVG est légalisée en 1975, le mariage pour tous en 2013, et la liberté de recourir à l’IVG entre dans la Constitution en 2024.' },
      culture:{ zh:'新浪潮電影，以及李維史陀、傅柯、德希達的結構主義與後結構主義思想影響全球。國家以「文化例外」政策保護本國電影與出版。',
        en:'New Wave cinema and the structuralist and post-structuralist thought of Lévi-Strauss, Foucault and Derrida reached a global audience. The state defends French film and publishing through the policy of the “cultural exception”.',
        fr:'La Nouvelle Vague et la pensée structuraliste et poststructuraliste de Lévi-Strauss, Foucault et Derrida rayonnent dans le monde. L’État protège cinéma et édition au nom de l’exception culturelle.' },
      world:{ zh:'法國擁有核武，1966年至2009年間退出北約的整合軍事指揮，同時是歐盟的核心推動者。它在非洲的軍事與貨幣影響力，近年明顯收縮。',
        en:'France is a nuclear power, stood outside NATO’s integrated command from 1966 to 2009, and remains a driving force of the European Union. Its military and monetary influence in Africa has shrunk markedly in recent years.',
        fr:'Puissance nucléaire, la France quitte le commandement intégré de l’OTAN de 1966 à 2009 et reste un moteur de l’Union européenne. Son influence militaire et monétaire en Afrique recule nettement ces dernières années.' },
    }
  },
  ]
},
];

const CX_UI = {
  zh:{ tab:'國別史', head:'國別史', sub:'挑一個國家，沿著「時代」與「主題」兩條軸線閱讀它的歷史。',
       more:'更多國家陸續加入', linear:'線性敘事', linearDesc:'依時代順序閱讀，每個時期附上五個主題切面。',
       thematic:'主題敘事', thematicDesc:'挑一條主題線索，看它如何貫穿每個時代。',
       events:'關鍵事件', facets:'主題切面', trivia:'小知識．在哪裡看得到', where:'在地圖上查看', rulers:'統治者與領導人', seeWorld:'在世界時間軸中查看', toPeriod:'回到這個時期',
       follow:'沿這條主題讀下去', periods:'個時期', c:'約 ' },
  en:{ tab:'Countries', head:'Country Histories', sub:'Pick a country and read its history along two axes: time and theme.',
       more:'More countries coming', linear:'Linear', linearDesc:'Read period by period, each with five thematic facets.',
       thematic:'Thematic', thematicDesc:'Follow one theme as it runs through every period.',
       events:'Key events', facets:'Thematic facets', trivia:'Did you know? Where to see it', where:'Open on the map', rulers:'Rulers and leaders', seeWorld:'See in the world timeline', toPeriod:'Back to this period',
       follow:'Follow this theme', periods:'periods', c:'c. ' },
  fr:{ tab:'Par pays', head:'Histoires nationales', sub:'Choisissez un pays et lisez son histoire selon deux axes : le temps et les thèmes.',
       more:'D’autres pays à venir', linear:'Récit linéaire', linearDesc:'Lire période par période, chacune avec cinq angles thématiques.',
       thematic:'Récit thématique', thematicDesc:'Suivre un thème à travers toutes les périodes.',
       events:'Événements clés', facets:'Angles thématiques', trivia:'Le saviez-vous ? Où le voir', where:'Voir sur la carte', rulers:'Souverains et dirigeants', seeWorld:'Voir dans la frise mondiale', toPeriod:'Revenir à cette période',
       follow:'Suivre ce thème', periods:'périodes', c:'v. ' },
};

/* ─── state ─── */
const CX_KEY = 'wh_country_view';
let cx = { country:'france', mode:'linear', theme:'state' };
try {
  const s = JSON.parse(localStorage.getItem(CX_KEY) || 'null');
  if (s && typeof s === 'object') cx = Object.assign(cx, s);
} catch (e) { /* storage unavailable */ }
if (!COUNTRIES.some(c => c.id === cx.country)) cx.country = COUNTRIES[0].id;
if (!CX_THEMES.some(t => t.id === cx.theme)) cx.theme = CX_THEMES[0].id;
function cxSave() { try { localStorage.setItem(CX_KEY, JSON.stringify(cx)); } catch (e) {} }

function cxU(k) { return (CX_UI[LANG] || CX_UI.zh)[k]; }
function cxYear(y, approx) {
  const pre = approx ? cxU('c') : '';
  if (y < 0) {
    if (LANG === 'en') return pre + Math.abs(y) + ' BC';
    if (LANG === 'fr') return pre + Math.abs(y) + ' av. J.-C.';
    return pre + '前 ' + Math.abs(y);
  }
  return pre + y;
}
function cxRange(p) { return fmtYear(p.start) + ' — ' + fmtYear(p.end); }
function cxTheme(id) { return CX_THEMES.find(t => t.id === id); }

/* who ruled in this period, and what they did */
function cxRulers(pid) {
  const list = ((typeof CX_RULERS !== 'undefined' && CX_RULERS[cx.country]) || {})[pid] || [];
  if (!list.length) return '';
  const L = ['zh', 'en', 'fr'].indexOf(LANG) < 0 ? 0 : ['zh', 'en', 'fr'].indexOf(LANG);
  return '<div class="cx-label">' + cxU('rulers') + '</div><ul class="cx-rulers">'
    + list.map(r => {
        const yrs = r[0] === r[1] ? cxYear(r[0]) : cxYear(r[0]) + '–' + (r[1] >= 2026 ? fmtYear(r[1]) : cxYear(r[1]));
        return '<li><span class="cx-ru-y">' + yrs + '</span><div><b>' + r[2][L] + '</b><p>' + r[3][L] + '</p></div></li>';
      }).join('') + '</ul>';
}

/* little-known facts, each tagged with the place where you can still see the thing */
function cxTrivia(pid, themeId) {
  const all = ((typeof CX_TRIVIA !== 'undefined' && CX_TRIVIA[cx.country]) || {})[pid] || [];
  const list = themeId ? all.filter(x => x.theme === themeId) : all;
  if (!list.length) return '';
  return '<div class="cx-label">' + cxU('trivia') + '</div><div class="cx-trivia">'
    + list.map(x => {
        const th = cxTheme(x.theme);
        const url = x.q ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x.q) : '';
        const at = T(x.at);
        return '<div class="cx-tv" style="--tc:' + th.color + '">'
          + '<div class="cx-tv-h"><span class="cx-tv-ic">' + x.icon + '</span>' + T(x.title) + '</div>'
          + (themeId ? '' : '<div class="cx-tv-tag">' + T(th.name) + '</div>')
          + '<p>' + T(x.text) + '</p>'
          + (url
              ? '<a class="cx-where" href="' + url + '" target="_blank" rel="noopener noreferrer" title="' + cxU('where') + '">📍 ' + at + '<span class="cx-where-go">' + cxU('where') + ' ↗</span></a>'
              : '<div class="cx-where plain">📍 ' + at + '</div>')
          + '</div>';
      }).join('') + '</div>';
}

/* ─── render ─── */
function renderCountries() {
  const box = document.getElementById('view-countries');
  if (!box) return;
  const tab = document.querySelector('#vtab-countries .vt-txt');
  if (tab) tab.textContent = cxU('tab');

  const c = COUNTRIES.find(k => k.id === cx.country);
  const P = c.periods;

  let html =
    '<div id="mvx-head">'
    + '<div class="orn"><div class="l"></div><span class="g">✦</span><div class="r"></div></div>'
    + '<h2>' + cxU('head') + '</h2>'
    + '<p>' + cxU('sub') + '</p>'
    + '</div>';

  /* country filter */
  html += '<div class="cx-countries">'
    + COUNTRIES.map(k =>
        '<button class="chip' + (k.id === cx.country ? ' active' : '') + '" onclick="cxSet({country:\'' + k.id + '\'})"'
        + ' aria-pressed="' + (k.id === cx.country) + '">'
        + '<span class="cx-flag ' + k.flag + '"></span>' + T(k.name) + '</button>').join('')
    + '<span class="cx-more">' + cxU('more') + '</span></div>';

  /* intro */
  html += '<section class="cx-intro">'
    + '<div class="cx-intro-head"><span class="cx-flag big ' + c.flag + '"></span>'
    + '<div><h3>' + T(c.name) + '</h3><div class="cx-yrs">' + fmtYear(P[0].start) + ' — ' + fmtYear(P[P.length - 1].end)
    + ' · ' + P.length + ' ' + cxU('periods') + '</div></div></div>'
    + '<p>' + T(c.intro) + '</p></section>';

  /* the linear spine: one segment per period */
  html += '<div class="cx-strip" role="list">'
    + P.map((p, i) =>
        '<button class="cx-seg" role="listitem" onclick="cxGoPeriod(\'' + p.id + '\')" title="' + T(p.name) + '">'
        + '<span class="cx-seg-ic">' + p.icon + '</span>'
        + '<span class="cx-seg-y">' + cxYear(p.start) + '</span></button>').join('')
    + '</div>';

  /* narrative mode */
  html += '<div class="cx-modes" role="tablist">'
    + ['linear', 'thematic'].map(m =>
        '<button class="cx-mode' + (cx.mode === m ? ' active' : '') + '" role="tab" aria-selected="' + (cx.mode === m) + '"'
        + ' onclick="cxSet({mode:\'' + m + '\'})">'
        + '<span class="cx-mode-t">' + (m === 'linear' ? '↓ ' : '⇢ ') + cxU(m) + '</span>'
        + '<span class="cx-mode-d">' + cxU(m + 'Desc') + '</span></button>').join('')
    + '</div>';

  html += cx.mode === 'linear' ? cxLinear(P) : cxThematic(P);
  box.innerHTML = html;
}

function cxLinear(P) {
  return '<div class="cx-tl">' + P.map(p =>
    '<section class="cx-period" id="cx-p-' + p.id + '">'
    + '<div class="cx-node">' + p.icon + '</div>'
    + '<div class="cx-card">'
    + '<div class="cx-yrs">' + cxRange(p) + '</div>'
    + '<h3>' + T(p.name) + '</h3>'
    + '<p class="cx-sum">' + T(p.summary) + '</p>'
    + cxRulers(p.id)
    + '<div class="cx-label">' + cxU('events') + '</div>'
    + '<ul class="cx-ev">' + p.events.map(e =>
        '<li><span class="cx-ev-y">' + cxYear(e.y, e.c) + '</span><span>' + (e[LANG] || e.zh) + '</span></li>').join('') + '</ul>'
    + '<div class="cx-label">' + cxU('facets') + '</div>'
    + '<div class="cx-facets">' + CX_THEMES.map(t =>
        '<div class="cx-facet" style="--tc:' + t.color + '">'
        + '<button class="cx-facet-h" onclick="cxSet({mode:\'thematic\',theme:\'' + t.id + '\'},\'' + p.id + '\')" title="' + cxU('follow') + '">'
        + '<span>' + t.icon + '</span>' + T(t.name) + '<span class="cx-arr">⇢</span></button>'
        + '<p>' + T(p.themes[t.id]) + '</p></div>').join('') + '</div>'
    + cxTrivia(p.id, null)
    + (p.world ? '<button class="cx-link" onclick="goHist(\'' + p.world + '\')">◷ ' + cxU('seeWorld') + '</button>' : '')
    + '</div></section>').join('') + '</div>';
}

function cxThematic(P) {
  const th = cxTheme(cx.theme);
  return '<div class="cx-themes">' + CX_THEMES.map(t =>
      '<button class="chip' + (t.id === cx.theme ? ' active' : '') + '" onclick="cxSet({theme:\'' + t.id + '\'})"'
      + ' aria-pressed="' + (t.id === cx.theme) + '">'
      + '<span class="dot" style="background:' + t.color + '"></span>' + t.icon + ' ' + T(t.name) + '</button>').join('')
    + '</div>'
    + '<div class="cx-theme-intro" style="--tc:' + th.color + '"><span class="cx-theme-ic">' + th.icon + '</span>'
    + '<div><h3>' + T(th.name) + '</h3><p>' + T(th.intro) + '</p></div></div>'
    + '<div class="cx-tl thematic" style="--tc:' + th.color + '">' + P.map(p =>
        '<section class="cx-period" id="cx-p-' + p.id + '">'
        + '<div class="cx-node">' + p.icon + '</div>'
        + '<div class="cx-card slim">'
        + '<div class="cx-yrs">' + cxRange(p) + ' · ' + T(p.name) + '</div>'
        + '<p>' + T(p.themes[th.id]) + '</p>'
        + (th.id === 'state' ? cxRulers(p.id) : '')
        + cxTrivia(p.id, th.id)
        + '<button class="cx-link" onclick="cxSet({mode:\'linear\'},\'' + p.id + '\')">↑ ' + cxU('toPeriod') + '</button>'
        + '</div></section>').join('') + '</div>';
}

/* change state, re-render, and optionally bring one period into view */
function cxSet(patch, focusPeriod) {
  const modeChanged = patch.mode && patch.mode !== cx.mode;
  Object.assign(cx, patch);
  cxSave();
  const box = document.getElementById('view-countries');
  const keep = box.getBoundingClientRect().top;
  renderCountries();
  if (focusPeriod) cxScrollTo(focusPeriod);
  else if (modeChanged || patch.theme) {
    const modes = box.querySelector('.cx-modes');
    if (modes && modes.getBoundingClientRect().top < 0) modes.scrollIntoView({ block:'start' });
  } else window.scrollBy(0, box.getBoundingClientRect().top - keep);
}
function cxGoPeriod(id) {
  if (cx.mode !== 'linear') cxSet({ mode:'linear' }, id);
  else cxScrollTo(id);
}
function cxScrollTo(id) {
  const el = document.getElementById('cx-p-' + id);
  if (!el) return;
  el.scrollIntoView({ behavior:'smooth', block:'start' });
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
}

renderCountries();
