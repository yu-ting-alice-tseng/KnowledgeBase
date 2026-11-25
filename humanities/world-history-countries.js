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
{
  id:'uk', flag:'flag-gb', color:'#b8433f',
  name:{ zh:'英國', en:'United Kingdom', fr:'Royaume-Uni' },
  intro:{ zh:'英國其實是由英格蘭、蘇格蘭、威爾斯與北愛爾蘭組成的聯合王國。它的歷史一面是島嶼一再被羅馬人、維京人與諾曼人征服，再轉身向全世界擴張；另一面是權力一步步從國王手中轉到議會。這裡同樣用十一個時期與五條主題線索，閱讀這五千年。',
    en:'The United Kingdom is a union of England, Scotland, Wales and Northern Ireland. Its history is on one side the story of an island conquered again and again, by Romans, Vikings and Normans, that then turned outward to the whole world; on the other, the story of power passing step by step from the crown to Parliament. Here too, eleven periods and five thematic threads take you through five thousand years.',
    fr:'Le Royaume-Uni réunit l’Angleterre, l’Écosse, le pays de Galles et l’Irlande du Nord. Son histoire est d’un côté celle d’une île conquise tour à tour par les Romains, les Vikings et les Normands, qui se tourne ensuite vers le monde entier ; de l’autre, celle d’un pouvoir passé pas à pas de la couronne au Parlement. Ici aussi, onze périodes et cinq fils thématiques parcourent cinq mille ans.' },
  threads:{
    state:{ intro:{ zh:'從七國並立、諾曼王權到議會主權：看權力如何從國王手中轉到西敏的議會。',
      en:'From rival kingdoms and Norman kingship to parliamentary sovereignty: how power passed from the crown to Parliament at Westminster.',
      fr:'Des royaumes rivaux et de la royauté normande à la souveraineté parlementaire : comment le pouvoir est passé de la couronne au Parlement de Westminster.' } },
    faith:{ name:{ zh:'宗教與國教', en:'Religion & the Established Church', fr:'Religion et Église établie' },
      intro:{ zh:'國王自立教會，新教與天主教之爭塑造了王位繼承、政黨與愛爾蘭問題。',
        en:'A king founded his own Church, and the struggle between Protestant and Catholic shaped the succession, party politics and the Irish question.',
        fr:'Un roi fonde sa propre Église, et la lutte entre protestants et catholiques façonne la succession, les partis et la question irlandaise.' } },
    society:{ intro:{ zh:'從莊園與羊毛，到世界第一個工業國家，再到福利國家與倫敦金融城。',
      en:'From manors and wool to the world’s first industrial nation, then to the welfare state and the City of London.',
      fr:'Des domaines et de la laine à la première nation industrielle, puis à l’État-providence et à la City de Londres.' } },
    culture:{ intro:{ zh:'英語、莎士比亞、科學與議會傳統：一個島國如何把語言與制度帶到全世界。',
      en:'English, Shakespeare, science and parliamentary tradition: how an island carried its language and institutions round the world.',
      fr:'L’anglais, Shakespeare, la science et la tradition parlementaire : comment une île a diffusé sa langue et ses institutions dans le monde.' } },
    world:{ name:{ zh:'英國與世界', en:'Britain & the World', fr:'Le Royaume-Uni et le monde' },
      intro:{ zh:'從被羅馬、維京與諾曼人征服的島嶼，到日不落帝國，再到脫歐後重新尋找定位。',
        en:'From an island conquered by Romans, Vikings and Normans to an empire on which the sun never set, and a new search for a role after Brexit.',
        fr:'D’une île conquise par les Romains, les Vikings et les Normands à un empire sur lequel le soleil ne se couchait jamais, puis à la recherche d’un nouveau rôle après le Brexit.' } },
  },
  periods:[
  {
    id:'britannia', icon:'🪨', start:-3000, end:410, world:'roman',
    name:{ zh:'史前與羅馬不列顛', en:'Prehistoric and Roman Britain', fr:'La Bretagne préhistorique et romaine' },
    summary:{ zh:'在巨石陣的建造者之後，凱爾特部族在島上建立山堡與王國。西元 43 年羅馬入侵，把英格蘭與威爾斯納入帝國將近四百年，蘇格蘭則始終在羅馬的掌控之外。410 年羅馬軍團撤離，不列顛只能自求多福。',
      en:'After the builders of Stonehenge, Celtic peoples raised hillforts and kingdoms across the island. Rome invaded in AD 43 and held England and Wales for nearly four centuries, while Scotland stayed beyond its grasp. By 410 the legions were gone and Britain was left to fend for itself.',
      fr:'Après les bâtisseurs de Stonehenge, des peuples celtes élèvent oppida et royaumes dans l’île. Rome envahit en 43 apr. J.-C. et tient l’Angleterre et le pays de Galles près de quatre siècles, tandis que l’Écosse échappe à son emprise. En 410, les légions sont parties et la Bretagne est livrée à elle-même.' },
    events:[
      { y:-3000, c:true, zh:'巨石陣開始興建', en:'Building of Stonehenge begins', fr:'Début de la construction de Stonehenge' },
      { y:-55, zh:'凱撒首次渡海遠征不列顛', en:'Julius Caesar’s first expedition to Britain', fr:'Première expédition de César en Bretagne' },
      { y:43,  zh:'克勞狄烏斯派兵入侵，羅馬征服開始', en:'Claudius sends an army: the Roman conquest begins', fr:'Claude envoie une armée : début de la conquête romaine' },
      { y:60,  c:true, zh:'布狄卡起義，倫敦被焚', en:'Boudica’s revolt: London is burned', fr:'Révolte de Boadicée : Londres est incendiée' },
      { y:122, zh:'哈德良長城開始興建', en:'Construction of Hadrian’s Wall begins', fr:'Début de la construction du mur d’Hadrien' },
      { y:410, zh:'羅馬統治結束，不列顛須自行防衛', en:'Roman rule ends: Britain must see to its own defence', fr:'Fin de la domination romaine : la Bretagne doit assurer sa propre défense' },
    ],
    themes:{
      state:{ zh:'鐵器時代的不列顛由許多部族王國組成。羅馬把南部劃為行省，以倫底紐姆（倫敦）為中心，北方以哈德良長城為界，一度推進到安東尼長城。',
        en:'Iron Age Britain was a patchwork of tribal kingdoms. Rome made the south a province centred on Londinium and drew its northern frontier at Hadrian’s Wall, for a time pushing on to the Antonine Wall.',
        fr:'La Bretagne de l’âge du fer est une mosaïque de royaumes tribaux. Rome fait du sud une province centrée sur Londinium et fixe sa frontière nord au mur d’Hadrien, poussant un temps jusqu’au mur d’Antonin.' },
      faith:{ zh:'德魯伊主持凱爾特宗教，羅馬在 60 年左右攻入安格爾西島，摧毀德魯伊的據點。基督教在羅馬晚期傳入，314 年已有不列顛主教出席高盧的宗教會議。',
        en:'Druids led Celtic religion, and around 60 Rome stormed their stronghold on Anglesey. Christianity arrived under late Rome, and by 314 British bishops were attending a church council in Gaul.',
        fr:'Les druides dirigent la religion celtique ; vers 60, Rome prend d’assaut leur sanctuaire d’Anglesey. Le christianisme arrive à la fin de l’époque romaine, et dès 314 des évêques bretons siègent à un concile en Gaule.' },
      society:{ zh:'羅馬帶來道路、城鎮、別墅莊園與浴場，倫敦、約克、巴斯因此興起。不列顛出口錫、鉛、羊毛與穀物，鄉村大多仍維持原本的部族生活。',
        en:'Rome brought roads, towns, villa estates and baths, and London, York and Bath grew up. Britain exported tin, lead, wool and grain, while much of the countryside kept its tribal ways.',
        fr:'Rome apporte routes, villes, villae et thermes ; Londres, York et Bath se développent. La Bretagne exporte étain, plomb, laine et céréales, tandis qu’une grande partie des campagnes garde ses usages tribaux.' },
      culture:{ zh:'凱爾特語在鄉間延續下來，是今日威爾斯語的祖先。拉丁語只在城市與軍營通行，沒有像在高盧那樣取代本地語言。',
        en:'Celtic speech survived in the countryside and is the ancestor of Welsh. Latin was used in towns and forts but never replaced the local language as it did in Gaul.',
        fr:'La langue celtique se maintient dans les campagnes et donne le gallois. Le latin, parlé dans les villes et les camps, ne remplace pas la langue locale comme en Gaule.' },
      world:{ zh:'不列顛是羅馬帝國最西北的邊陲，駐軍一度占帝國總兵力的十分之一左右。三世紀起，撒克遜海盜與北方的皮克特人不斷侵擾海岸與邊界。',
        en:'Britain was Rome’s north-western edge and at times held around a tenth of the empire’s army. From the third century Saxon raiders and the Picts of the north harried its coasts and frontier.',
        fr:'La Bretagne est la marche nord-ouest de l’Empire et abrite parfois près d’un dixième de son armée. Dès le IIIᵉ siècle, pirates saxons et Pictes du nord harcèlent côtes et frontière.' },
    }
  },
  {
    id:'anglosaxon', icon:'🗡️', start:410, end:1066, world:'medieval',
    name:{ zh:'盎格魯撒克遜與維京', en:'Anglo-Saxons and Vikings', fr:'Anglo-Saxons et Vikings' },
    summary:{ zh:'盎格魯人、撒克遜人與朱特人渡海定居，建立數個王國，原本的不列顛人被推往威爾斯與康瓦耳。維京人入侵時，威塞克斯的阿佛烈大帝領導抵抗，他的孫子艾塞斯坦成為第一位統治全英格蘭的國王。1066 年，諾曼第公爵威廉在哈斯丁擊敗哈洛德二世。',
      en:'Angles, Saxons and Jutes crossed the sea and founded a cluster of kingdoms, pushing the Britons west into Wales and Cornwall. When the Vikings came, Alfred the Great of Wessex led the resistance, and his grandson Æthelstan became the first king of all England. In 1066 Duke William of Normandy defeated Harold II at Hastings.',
      fr:'Angles, Saxons et Jutes traversent la mer et fondent plusieurs royaumes, repoussant les Bretons vers le pays de Galles et la Cornouailles. Face aux Vikings, Alfred le Grand de Wessex mène la résistance, et son petit-fils Æthelstan devient le premier roi de toute l’Angleterre. En 1066, le duc Guillaume de Normandie bat Harold II à Hastings.' },
    events:[
      { y:597,  zh:'奧古斯丁抵達坎特伯里，向肯特王國傳教', en:'Augustine reaches Canterbury to convert Kent', fr:'Augustin arrive à Cantorbéry pour évangéliser le Kent' },
      { y:793,  zh:'維京人劫掠林迪斯法恩修道院', en:'Vikings raid the monastery of Lindisfarne', fr:'Les Vikings pillent le monastère de Lindisfarne' },
      { y:878,  zh:'阿佛烈在埃丁頓擊敗維京大軍', en:'Alfred defeats the Viking army at Edington', fr:'Alfred bat l’armée viking à Edington' },
      { y:927,  zh:'艾塞斯坦統一英格蘭', en:'Æthelstan unites England', fr:'Æthelstan unifie l’Angleterre' },
      { y:1016, zh:'丹麥的克努特成為英格蘭國王', en:'Cnut of Denmark becomes king of England', fr:'Le Danois Cnut devient roi d’Angleterre' },
      { y:1066, zh:'哈斯丁之戰，諾曼人征服英格蘭', en:'Battle of Hastings: the Norman Conquest', fr:'Bataille d’Hastings : la conquête normande' },
    ],
    themes:{
      state:{ zh:'諾森布里亞、麥西亞、威塞克斯等王國彼此爭霸，最後由威塞克斯統一英格蘭。國王與「賢人會議」共同議事，全國劃分為郡，郡制沿用至今。北方則在 843 年前後由肯尼思·麥克亞爾平合併為蘇格蘭王國。',
        en:'Rival kingdoms such as Northumbria, Mercia and Wessex fought for supremacy until Wessex united England. Kings ruled with a council of wise men, the witan, and divided the land into shires that still exist. In the north, around 843, Kenneth MacAlpin joined its peoples into a single Scottish kingdom.',
        fr:'Des royaumes rivaux, Northumbrie, Mercie, Wessex, se disputent la suprématie jusqu’à ce que le Wessex unifie l’Angleterre. Les rois gouvernent avec un conseil des sages, le witan, et découpent le pays en comtés qui existent toujours. Au nord, vers 843, Kenneth MacAlpin réunit les peuples en un seul royaume d’Écosse.' },
      faith:{ zh:'盎格魯撒克遜人原本信奉日耳曼諸神，597 年起由羅馬與愛爾蘭兩路傳教士改宗。664 年的惠特比會議決定採用羅馬的復活節算法，英格蘭教會從此向羅馬看齊。',
        en:'The Anglo-Saxons worshipped Germanic gods until missionaries from Rome and Ireland converted them from 597. At the Synod of Whitby in 664 the English church chose the Roman date for Easter and turned towards Rome.',
        fr:'Les Anglo-Saxons vénèrent les dieux germaniques jusqu’à leur conversion, à partir de 597, par des missionnaires venus de Rome et d’Irlande. Au synode de Whitby, en 664, l’Église anglaise adopte la date romaine de Pâques et se tourne vers Rome.' },
      society:{ zh:'羅馬城鎮多半荒廢，人們住在木造村落，以農耕為生。阿佛烈興建稱為「堡」的設防城鎮；維京人控制的「丹麥法區」則帶來新的地名、法律與貿易網路。',
        en:'Most Roman towns fell into ruin and people lived by farming in timber villages. Alfred built fortified towns called burhs, and the Viking-ruled Danelaw brought new place names, laws and trading links.',
        fr:'La plupart des villes romaines tombent en ruine et l’on vit de l’agriculture dans des villages de bois. Alfred fonde des bourgs fortifiés, les burhs, et le Danelaw sous domination viking apporte noms de lieux, lois et réseaux commerciaux nouveaux.' },
      culture:{ zh:'古英語在這個時期成形，史詩《貝奧武夫》與比德的《英吉利教會史》都出自這幾個世紀。阿佛烈下令把拉丁文經典譯成英語，並開始編寫《盎格魯撒克遜編年史》。',
        en:'Old English took shape; the epic Beowulf and Bede’s Ecclesiastical History of the English People date from these centuries. Alfred had Latin classics translated into English and began the Anglo-Saxon Chronicle.',
        fr:'Le vieil anglais prend forme ; l’épopée de Beowulf et l’Histoire ecclésiastique du peuple anglais de Bède datent de ces siècles. Alfred fait traduire des classiques latins en anglais et lance la Chronique anglo-saxonne.' },
      world:{ zh:'不列顛被捲入北海世界：維京人從斯堪地那維亞而來，十一世紀初的克努特一度把英格蘭、丹麥與挪威合為一個北海帝國。',
        en:'Britain was drawn into the North Sea world: the Vikings came from Scandinavia, and in the early eleventh century Cnut briefly joined England, Denmark and Norway in a North Sea empire.',
        fr:'La Bretagne est entraînée dans le monde de la mer du Nord : les Vikings viennent de Scandinavie et, au début du XIᵉ siècle, Cnut réunit un temps l’Angleterre, le Danemark et la Norvège en un empire de la mer du Nord.' },
    }
  },
  {
    id:'norman', icon:'🏰', start:1066, end:1216, world:'medieval',
    name:{ zh:'諾曼與安茹王朝', en:'Normans and Angevins', fr:'Normands et Angevins' },
    summary:{ zh:'征服者威廉以城堡與封建制度控制英格蘭：貴族講法語，教會用拉丁語，百姓說英語。亨利二世開創金雀花王朝，領地從蘇格蘭邊境延伸到庇里牛斯山。約翰王失去諾曼第，又被貴族逼著在 1215 年接受《大憲章》。',
      en:'William the Conqueror held England down with castles and feudal lordship: the nobles spoke French, the Church Latin and the people English. Henry II founded the Plantagenet line, ruling from the Scottish border to the Pyrenees. King John lost Normandy and in 1215 was forced by his barons to seal Magna Carta.',
      fr:'Guillaume le Conquérant tient l’Angleterre par les châteaux et la féodalité : la noblesse parle français, l’Église latin et le peuple anglais. Henri II fonde la dynastie Plantagenêt, qui règne de la frontière écossaise aux Pyrénées. Jean sans Terre perd la Normandie et doit, en 1215, sceller la Grande Charte sous la pression de ses barons.' },
    events:[
      { y:1066, zh:'威廉在聖誕節於西敏寺加冕', en:'William is crowned at Westminster Abbey on Christmas Day', fr:'Guillaume est couronné à Westminster le jour de Noël' },
      { y:1086, zh:'編成《末日審判書》，普查全國土地', en:'The Domesday Book surveys the land of England', fr:'Le Domesday Book recense les terres d’Angleterre' },
      { y:1154, zh:'亨利二世即位，金雀花王朝開始', en:'Henry II becomes king: the Plantagenet era begins', fr:'Avènement d’Henri II : début des Plantagenêts' },
      { y:1170, zh:'坎特伯里大主教貝克特在大教堂內遇刺', en:'Archbishop Thomas Becket is murdered in Canterbury Cathedral', fr:'L’archevêque Thomas Becket est assassiné dans la cathédrale de Cantorbéry' },
      { y:1204, zh:'約翰王失去諾曼第', en:'King John loses Normandy', fr:'Jean sans Terre perd la Normandie' },
      { y:1215, zh:'約翰王在蘭尼米德接受《大憲章》', en:'King John seals Magna Carta at Runnymede', fr:'Jean sans Terre scelle la Grande Charte à Runnymede' },
    ],
    themes:{
      state:{ zh:'威廉把土地分給追隨他的諾曼貴族，換取軍事效忠，並以《末日審判書》掌握全國財產。亨利二世派法官巡迴各地、採用陪審制度，奠定了普通法的基礎。',
        en:'William granted land to his Norman followers in return for military service and recorded the kingdom’s wealth in the Domesday Book. Henry II sent judges on circuit and used juries, laying the foundations of the common law.',
        fr:'Guillaume distribue les terres à ses compagnons normands en échange du service militaire et recense la richesse du royaume dans le Domesday Book. Henri II envoie des juges itinérants et recourt aux jurys, posant les bases de la common law.' },
      faith:{ zh:'諾曼人重建大教堂與修道院，教會勢力大增。亨利二世想讓犯罪的教士接受王室法庭審判，與大主教貝克特決裂；貝克特遇刺後，成為歐洲最受朝拜的聖人之一。',
        en:'The Normans rebuilt cathedrals and monasteries and the Church grew powerful. Henry II’s attempt to try criminous clerks in royal courts led to his quarrel with Archbishop Becket, whose murder made him one of Europe’s most venerated saints.',
        fr:'Les Normands rebâtissent cathédrales et abbayes, et l’Église gagne en puissance. La volonté d’Henri II de juger les clercs criminels devant ses tribunaux le brouille avec l’archevêque Becket, dont l’assassinat fait l’un des saints les plus vénérés d’Europe.' },
      society:{ zh:'莊園制度把大多數農民綁在領主的土地上。羊毛出口到法蘭德斯的紡織城市，成為英格蘭最重要的財富來源。',
        en:'The manorial system tied most peasants to their lord’s land. Wool exported to the cloth towns of Flanders became England’s main source of wealth.',
        fr:'Le régime seigneurial attache la plupart des paysans à la terre de leur seigneur. La laine, exportée vers les villes drapières de Flandre, devient la principale richesse de l’Angleterre.' },
      culture:{ zh:'宮廷與法庭使用諾曼法語，英語因此吸收了大量法語詞彙，例如 beef、court、justice。十二世紀末，牛津已經以大學的形式授課。',
        en:'Court and law spoke Norman French, and English absorbed a flood of French words such as beef, court and justice. By the late twelfth century Oxford was teaching as a university.',
        fr:'La cour et la justice parlent le français normand, et l’anglais absorbe quantité de mots français comme beef, court ou justice. Dès la fin du XIIᵉ siècle, Oxford enseigne comme une université.' },
      world:{ zh:'英格蘭國王同時是法國的諾曼第公爵與安茹伯爵，安茹帝國的大半土地在法國境內，英法兩國王室數百年的糾葛由此開始。理查一世參加了第三次十字軍東征。',
        en:'England’s kings were also dukes of Normandy and counts of Anjou, and most of the Angevin empire lay in France, the root of centuries of Anglo-French entanglement. Richard I fought in the Third Crusade.',
        fr:'Les rois d’Angleterre sont aussi ducs de Normandie et comtes d’Anjou, et l’essentiel de l’empire angevin se trouve en France, origine de siècles d’imbrication franco-anglaise. Richard Cœur de Lion participe à la troisième croisade.' },
    }
  },
  {
    id:'plantagenet', icon:'⚔️', start:1216, end:1485, world:'medieval',
    name:{ zh:'金雀花晚期與玫瑰戰爭', en:'Later Plantagenets and the Wars of the Roses', fr:'Les derniers Plantagenêts et la guerre des Deux-Roses' },
    summary:{ zh:'國王需要錢打仗，只好召集貴族、騎士與市民開會，議會由此成形。愛德華一世征服威爾斯，卻在蘇格蘭受挫；接著是百年戰爭與黑死病。最後蘭開斯特與約克兩大家族爭奪王位，三十年的玫瑰戰爭以亨利·都鐸在博斯沃思獲勝告終。',
      en:'Kings needed money for war and summoned lords, knights and townsmen to grant it, and Parliament took shape. Edward I conquered Wales but failed in Scotland; the Hundred Years’ War and the Black Death followed. At the end the houses of Lancaster and York fought for the crown, and thirty years of the Wars of the Roses ended with Henry Tudor’s victory at Bosworth.',
      fr:'Les rois ont besoin d’argent pour la guerre et convoquent seigneurs, chevaliers et bourgeois pour l’accorder : le Parlement prend forme. Édouard Iᵉʳ conquiert le pays de Galles mais échoue en Écosse ; viennent la guerre de Cent Ans et la peste noire. Enfin les maisons de Lancastre et d’York se disputent la couronne, et trente ans de guerre des Deux-Roses s’achèvent par la victoire d’Henri Tudor à Bosworth.' },
    events:[
      { y:1265, zh:'西蒙·德·孟福爾召集包含市民代表的議會', en:'Simon de Montfort’s parliament includes townsmen', fr:'Le parlement de Simon de Montfort inclut des bourgeois' },
      { y:1284, zh:'《羅德蘭法令》把威爾斯納入英格蘭王室統治', en:'The Statute of Rhuddlan places Wales under the English crown', fr:'Le statut de Rhuddlan place le pays de Galles sous la couronne anglaise' },
      { y:1314, zh:'班諾克本之戰，蘇格蘭大敗英格蘭', en:'Battle of Bannockburn: Scotland routs England', fr:'Bataille de Bannockburn : l’Écosse écrase l’Angleterre' },
      { y:1337, zh:'百年戰爭爆發', en:'The Hundred Years’ War begins', fr:'Début de la guerre de Cent Ans' },
      { y:1348, zh:'黑死病傳入英格蘭', en:'The Black Death reaches England', fr:'La peste noire atteint l’Angleterre' },
      { y:1381, zh:'農民起義，起義者攻入倫敦', en:'The Peasants’ Revolt: rebels enter London', fr:'Révolte des paysans : les insurgés entrent dans Londres' },
      { y:1415, zh:'阿金庫爾戰役，英軍長弓手大勝', en:'Battle of Agincourt: triumph of the English longbowmen', fr:'Bataille d’Azincourt : triomphe des archers anglais' },
      { y:1455, zh:'玫瑰戰爭開始', en:'The Wars of the Roses begin', fr:'Début de la guerre des Deux-Roses' },
      { y:1485, zh:'博斯沃思之戰，理查三世戰死', en:'Battle of Bosworth: Richard III is killed', fr:'Bataille de Bosworth : Richard III est tué' },
    ],
    themes:{
      state:{ zh:'1295 年愛德華一世的「模範議會」確立了貴族、教士與各郡各城代表一同開會的模式，十四世紀再分成上議院與下議院。國王徵稅必須取得議會同意，成為英國政治的長期規則。',
        en:'Edward I’s “Model Parliament” of 1295 set the pattern of lords, clergy and representatives of shires and towns meeting together, and in the fourteenth century it split into Lords and Commons. Taxes needed Parliament’s consent, a rule that would shape English politics for good.',
        fr:'Le « Parlement modèle » d’Édouard Iᵉʳ, en 1295, fixe le principe d’une réunion des seigneurs, du clergé et des représentants des comtés et des villes ; au XIVᵉ siècle, il se divise en Lords et Communes. L’impôt exige le consentement du Parlement, règle durable de la vie politique anglaise.' },
      faith:{ zh:'牛津學者威克里夫批評教會的財富與權威，他的追隨者「羅拉德派」把聖經譯成英文。他們遭到教會打壓，常被視為宗教改革的先聲。',
        en:'The Oxford scholar John Wycliffe attacked the Church’s wealth and authority, and his followers, the Lollards, put the Bible into English. They were suppressed, but are often seen as forerunners of the Reformation.',
        fr:'Le théologien d’Oxford John Wycliffe dénonce la richesse et l’autorité de l’Église ; ses disciples, les lollards, traduisent la Bible en anglais. Réprimés, ils sont souvent vus comme des précurseurs de la Réforme.' },
      society:{ zh:'黑死病奪走三分之一到一半的人口，勞力短缺讓農民要求更高的工資，1381 年人頭稅引爆農民起義。此後農奴制逐漸瓦解，羊毛與毛織品貿易持續繁榮。',
        en:'The Black Death killed between a third and a half of the population. Labour grew scarce and peasants demanded higher wages, and a poll tax sparked the revolt of 1381. Serfdom slowly withered away while the wool and cloth trades thrived.',
        fr:'La peste noire tue entre un tiers et la moitié de la population. La main-d’œuvre se raréfie, les paysans réclament de meilleurs salaires, et une capitation déclenche la révolte de 1381. Le servage s’éteint peu à peu tandis que prospèrent laine et draperie.' },
      culture:{ zh:'英語重新成為法庭與議會的語言。喬叟用英語寫成《坎特伯里故事集》，1476 年卡克斯頓在西敏設立英格蘭第一台印刷機。',
        en:'English returned as the language of the law courts and Parliament. Chaucer wrote The Canterbury Tales in English, and in 1476 William Caxton set up England’s first printing press at Westminster.',
        fr:'L’anglais redevient la langue des tribunaux et du Parlement. Chaucer écrit les Contes de Canterbury en anglais, et en 1476 William Caxton installe la première presse d’Angleterre à Westminster.' },
      world:{ zh:'英王以法國王位繼承人自居，在百年戰爭中贏得克雷西與阿金庫爾等大勝，最後卻幾乎失去所有法國領土，只剩加萊。北方的蘇格蘭則與法國維持「古老同盟」。',
        en:'English kings claimed the French throne and won great victories at Crécy and Agincourt in the Hundred Years’ War, yet ended by losing almost all their French lands except Calais. Scotland, to the north, kept its “Auld Alliance” with France.',
        fr:'Les rois d’Angleterre revendiquent le trône de France et remportent Crécy et Azincourt pendant la guerre de Cent Ans, mais finissent par perdre presque toutes leurs terres françaises, sauf Calais. Au nord, l’Écosse maintient l’« Auld Alliance » avec la France.' },
    }
  },
  {
    id:'tudor', icon:'🌹', start:1485, end:1603, world:'reformation',
    name:{ zh:'都鐸王朝', en:'The Tudors', fr:'Les Tudors' },
    summary:{ zh:'亨利七世結束內戰，重建王室財政。亨利八世為了離婚與羅馬教廷決裂，自任英格蘭教會最高領袖，並解散修道院。經過愛德華六世與瑪麗一世在新舊教之間來回擺盪，伊莉莎白一世確立了英格蘭國教，擊退西班牙無敵艦隊，開啟英格蘭的海上時代。',
      en:'Henry VII ended the civil wars and rebuilt royal finances. Henry VIII broke with Rome to end his marriage, made himself supreme head of the Church of England and dissolved the monasteries. After Edward VI and Mary I swung the country between Protestant and Catholic, Elizabeth I settled the Church of England, beat off the Spanish Armada and opened England’s age of the sea.',
      fr:'Henri VII met fin aux guerres civiles et restaure les finances royales. Henri VIII rompt avec Rome pour mettre fin à son mariage, se proclame chef suprême de l’Église d’Angleterre et dissout les monastères. Après les revirements d’Édouard VI et de Marie Iʳᵉ entre protestantisme et catholicisme, Élisabeth Iʳᵉ fixe l’Église anglicane, repousse l’Invincible Armada et ouvre l’âge maritime de l’Angleterre.' },
    events:[
      { y:1534, zh:'《至尊法案》：國王成為英格蘭教會最高領袖', en:'Act of Supremacy: the king becomes head of the Church of England', fr:'Acte de suprématie : le roi devient chef de l’Église d’Angleterre' },
      { y:1536, zh:'開始解散修道院；威爾斯在法律上併入英格蘭', en:'The dissolution of the monasteries begins; Wales is joined to England in law', fr:'Début de la dissolution des monastères ; le pays de Galles est uni juridiquement à l’Angleterre' },
      { y:1549, zh:'第一部英文《公禱書》頒行', en:'The first English Book of Common Prayer', fr:'Premier Book of Common Prayer en anglais' },
      { y:1555, zh:'瑪麗一世開始燒死新教徒', en:'Mary I begins burning Protestants', fr:'Marie Iʳᵉ commence à faire brûler des protestants' },
      { y:1559, zh:'伊莉莎白宗教協議', en:'The Elizabethan religious settlement', fr:'Le compromis religieux élisabéthain' },
      { y:1587, zh:'蘇格蘭女王瑪麗被處決', en:'Mary, Queen of Scots, is executed', fr:'Exécution de Marie Stuart' },
      { y:1588, zh:'擊退西班牙無敵艦隊', en:'Defeat of the Spanish Armada', fr:'Défaite de l’Invincible Armada' },
      { y:1600, zh:'東印度公司成立', en:'The East India Company is chartered', fr:'Fondation de la Compagnie des Indes orientales' },
    ],
    themes:{
      state:{ zh:'都鐸君主透過樞密院與議會統治。亨利八世的宗教改革全靠議會立法完成，反而提高了議會的地位。1536 年與 1543 年的法案把威爾斯併入英格蘭的郡制與法律。',
        en:'The Tudors governed through the Privy Council and Parliament, and because Henry VIII’s Reformation was carried out by Acts of Parliament, it raised Parliament’s standing. Acts of 1536 and 1543 brought Wales into England’s shires and law.',
        fr:'Les Tudors gouvernent par le Conseil privé et le Parlement ; comme la Réforme d’Henri VIII passe par des lois votées au Parlement, elle renforce son autorité. Les lois de 1536 et 1543 intègrent le pays de Galles aux comtés et au droit anglais.' },
      faith:{ zh:'英格蘭在三十年內四度改變國教。伊莉莎白採取折衷路線：教義偏向新教，主教制與部分禮儀保留天主教的形式，這就是英格蘭國教會（聖公會）。蘇格蘭則在諾克斯帶領下走向長老會。',
        en:'England changed its official religion four times in thirty years. Elizabeth chose a middle way, Protestant in doctrine but Catholic in its bishops and much of its ritual: the Church of England. Scotland, led by John Knox, went Presbyterian.',
        fr:'L’Angleterre change quatre fois de religion officielle en trente ans. Élisabeth choisit une voie moyenne, protestante par la doctrine mais catholique par l’épiscopat et une partie du rite : l’Église d’Angleterre. L’Écosse, sous John Knox, devient presbytérienne.' },
      society:{ zh:'修道院的土地被賣給鄉紳，造就一批新的地主階級。圈地養羊讓許多農民失去土地，1601 年的《濟貧法》首次規定由各教區負責救濟窮人。',
        en:'Monastic lands were sold to the gentry, creating a new landed class. Enclosure for sheep pushed many peasants off the land, and the Poor Law of 1601 made each parish responsible for its poor.',
        fr:'Les terres monastiques sont vendues à la gentry, qui forme une nouvelle classe de propriétaires. Les enclosures pour l’élevage ovin chassent de nombreux paysans, et la loi sur les pauvres de 1601 charge chaque paroisse de secourir ses indigents.' },
      culture:{ zh:'伊莉莎白時代是英國文學的黃金時期：莎士比亞與馬洛的戲劇在環球劇場等公共劇院上演，史賓賽寫下《仙后》。',
        en:'The Elizabethan age was a golden age of English letters: plays by Shakespeare and Marlowe filled public theatres such as the Globe, and Spenser wrote The Faerie Queene.',
        fr:'L’époque élisabéthaine est un âge d’or des lettres anglaises : les pièces de Shakespeare et de Marlowe remplissent des théâtres publics comme le Globe, et Spenser écrit La Reine des fées.' },
      world:{ zh:'英格蘭從歐陸的小角色轉向海洋：德瑞克環球航行並劫掠西班牙船隻，1588 年擊退無敵艦隊。1600 年成立的東印度公司，日後成為統治印度的工具。',
        en:'England turned from minor continental player to seafaring power: Drake sailed round the world raiding Spanish ships, and the Armada was beaten in 1588. The East India Company, founded in 1600, would later become the instrument of rule in India.',
        fr:'D’acteur continental modeste, l’Angleterre devient une puissance maritime : Drake fait le tour du monde en pillant les navires espagnols, et l’Armada est repoussée en 1588. La Compagnie des Indes orientales, fondée en 1600, deviendra l’instrument de la domination sur l’Inde.' },
    }
  },
  {
    id:'stuart', icon:'⚖️', start:1603, end:1688, world:'reformation',
    name:{ zh:'斯圖亞特王朝與內戰', en:'The Stuarts and the Civil War', fr:'Les Stuarts et la guerre civile' },
    summary:{ zh:'蘇格蘭國王詹姆士六世繼承英格蘭王位，兩國從此共戴一君。查理一世與議會為了稅收與宗教衝突，1642 年爆發內戰；1649 年國王被處死，英格蘭短暫成為由克倫威爾主導的共和國。1660 年王政復辟，但國王與議會之間的權力之爭並未結束。',
      en:'James VI of Scotland inherited the English crown, and the two kingdoms came to share one king. Charles I clashed with Parliament over taxes and religion, and civil war broke out in 1642; in 1649 the king was executed and England briefly became a republic dominated by Oliver Cromwell. The monarchy was restored in 1660, but the struggle between king and Parliament went on.',
      fr:'Jacques VI d’Écosse hérite de la couronne d’Angleterre : les deux royaumes partagent désormais un même roi. Charles Iᵉʳ s’oppose au Parlement sur l’impôt et la religion, et la guerre civile éclate en 1642 ; en 1649, le roi est exécuté et l’Angleterre devient brièvement une république dominée par Oliver Cromwell. La monarchie est restaurée en 1660, mais la lutte entre roi et Parlement continue.' },
    events:[
      { y:1603, zh:'王冠聯合：英格蘭與蘇格蘭共戴一君', en:'Union of the Crowns: England and Scotland share a king', fr:'Union des couronnes : l’Angleterre et l’Écosse partagent un roi' },
      { y:1605, zh:'火藥陰謀，企圖炸毀議會', en:'The Gunpowder Plot to blow up Parliament', fr:'La Conspiration des poudres contre le Parlement' },
      { y:1611, zh:'欽定版聖經出版', en:'The King James Bible is published', fr:'Publication de la Bible du roi Jacques' },
      { y:1620, zh:'五月花號載著清教徒前往北美', en:'The Mayflower carries the Pilgrims to America', fr:'Le Mayflower emmène les Pères pèlerins en Amérique' },
      { y:1642, zh:'內戰爆發', en:'Civil war breaks out', fr:'Début de la guerre civile' },
      { y:1649, zh:'查理一世被處死，英格蘭成為共和國', en:'Charles I is executed; England becomes a republic', fr:'Exécution de Charles Iᵉʳ ; l’Angleterre devient une république' },
      { y:1653, zh:'克倫威爾就任護國公', en:'Cromwell becomes Lord Protector', fr:'Cromwell devient Lord Protecteur' },
      { y:1660, zh:'王政復辟', en:'The Restoration', fr:'La Restauration' },
      { y:1666, zh:'倫敦大火', en:'The Great Fire of London', fr:'Le Grand Incendie de Londres' },
    ],
    themes:{
      state:{ zh:'斯圖亞特國王相信君權神授，與議會在徵稅權上衝突。內戰後英格蘭經歷了唯一一次的共和，但軍事統治不得人心；復辟後議會分成托利與輝格兩派，成為政黨的起源。',
        en:'The Stuart kings believed in divine right and clashed with Parliament over the power to tax. After the Civil War England had its only experiment as a republic, but military rule proved unpopular; after the Restoration, Parliament divided into Tories and Whigs, the origin of party politics.',
        fr:'Les rois Stuarts croient au droit divin et s’opposent au Parlement sur le droit de lever l’impôt. Après la guerre civile, l’Angleterre connaît sa seule expérience républicaine, mais le régime militaire est impopulaire ; après la Restauration, le Parlement se divise en tories et whigs, origine des partis.' },
      faith:{ zh:'清教徒希望進一步「淨化」國教，查理一世與大主教勞德卻推行講究儀式的禮拜，這場衝突是內戰的導火線之一。共和時期清教徒禁止聖誕節慶祝並關閉劇場；復辟後國教恢復，不從國教者受到限制。',
        en:'Puritans wanted to “purify” the Church further, while Charles I and Archbishop Laud pushed elaborate ritual, a clash that helped spark the Civil War. Under the republic Puritans banned Christmas festivities and closed the theatres. The Restoration brought the established Church back and put limits on Dissenters.',
        fr:'Les puritains veulent « purifier » davantage l’Église, tandis que Charles Iᵉʳ et l’archevêque Laud imposent un rituel solennel : ce conflit contribue à la guerre civile. Sous la république, les puritains interdisent les réjouissances de Noël et ferment les théâtres. La Restauration rétablit l’Église officielle et restreint les dissidents.' },
      society:{ zh:'倫敦快速成長為歐洲最大的城市之一。1665 年大瘟疫與 1666 年大火重創倫敦，重建時改用磚石，聖保羅大教堂由雷恩重新設計。',
        en:'London grew into one of Europe’s largest cities. The Great Plague of 1665 and the Great Fire of 1666 devastated it, and it was rebuilt in brick and stone, with a new St Paul’s Cathedral by Christopher Wren.',
        fr:'Londres devient l’une des plus grandes villes d’Europe. La Grande Peste de 1665 et le Grand Incendie de 1666 la ravagent ; elle est rebâtie en brique et en pierre, avec une nouvelle cathédrale Saint-Paul de Christopher Wren.' },
      culture:{ zh:'欽定版聖經塑造了英語的節奏。霍布斯在內戰後寫下《利維坦》，彌爾頓寫出《失樂園》；1660 年成立的皇家學會，則是牛頓等人推動科學革命的舞台。',
        en:'The King James Bible shaped the rhythm of English. After the Civil War Hobbes wrote Leviathan and Milton Paradise Lost, and the Royal Society, founded in 1660, became the home of Newton and the Scientific Revolution.',
        fr:'La Bible du roi Jacques façonne le rythme de la langue anglaise. Après la guerre civile, Hobbes écrit le Léviathan et Milton Le Paradis perdu ; la Royal Society, fondée en 1660, devient le foyer de Newton et de la révolution scientifique.' },
      world:{ zh:'英國人在北美的維吉尼亞與新英格蘭建立殖民地，並在加勒比海種植甘蔗。英格蘭與荷蘭三度爆發海戰，1664 年奪下新阿姆斯特丹，改名紐約。',
        en:'English settlers founded colonies in Virginia and New England and planted sugar in the Caribbean. Three naval wars were fought with the Dutch, and in 1664 New Amsterdam was taken and renamed New York.',
        fr:'Des colons anglais fondent la Virginie et la Nouvelle-Angleterre et plantent la canne à sucre aux Antilles. Trois guerres navales sont livrées contre les Provinces-Unies, et en 1664 la Nouvelle-Amsterdam, prise, devient New York.' },
    }
  },
  {
    id:'georgian', icon:'🏛️', start:1688, end:1815, world:'enlightenment_revolution',
    name:{ zh:'光榮革命與大不列顛', en:'The Glorious Revolution and Great Britain', fr:'La Glorieuse Révolution et la Grande-Bretagne' },
    summary:{ zh:'1688 年議會迎立威廉與瑪麗，確立議會高於國王的原則。1707 年英格蘭與蘇格蘭合併為大不列顛王國，首相與內閣逐漸成為真正的權力中心。英國贏得海上霸權，卻失去北美十三州；十八世紀後半，工業革命在這裡展開。',
      en:'In 1688 Parliament invited William and Mary to take the throne, establishing that Parliament stood above the king. In 1707 England and Scotland merged into the Kingdom of Great Britain, and the prime minister and cabinet gradually became the real centre of power. Britain won mastery of the seas but lost the thirteen American colonies, and in the later eighteenth century it became the birthplace of the Industrial Revolution.',
      fr:'En 1688, le Parlement appelle Guillaume et Marie au trône et affirme sa primauté sur le roi. En 1707, l’Angleterre et l’Écosse s’unissent en royaume de Grande-Bretagne, et le Premier ministre et le cabinet deviennent peu à peu le vrai centre du pouvoir. La Grande-Bretagne conquiert la maîtrise des mers mais perd les treize colonies américaines, et devient dans la seconde moitié du XVIIIᵉ siècle le berceau de la révolution industrielle.' },
    events:[
      { y:1688, zh:'光榮革命，詹姆士二世出逃', en:'The Glorious Revolution: James II flees', fr:'Glorieuse Révolution : Jacques II s’enfuit' },
      { y:1689, zh:'《權利法案》', en:'The Bill of Rights', fr:'Le Bill of Rights' },
      { y:1694, zh:'英格蘭銀行成立', en:'The Bank of England is founded', fr:'Fondation de la Banque d’Angleterre' },
      { y:1707, zh:'《聯合法案》，大不列顛王國成立', en:'The Acts of Union create the Kingdom of Great Britain', fr:'Les Actes d’Union créent le royaume de Grande-Bretagne' },
      { y:1721, zh:'沃波爾成為實質上的第一任首相', en:'Walpole becomes in effect the first prime minister', fr:'Walpole devient de fait le premier Premier ministre' },
      { y:1746, zh:'卡洛登戰役，詹姆士黨最後一次起事失敗', en:'Culloden: the last Jacobite rising is crushed', fr:'Culloden : écrasement du dernier soulèvement jacobite' },
      { y:1763, zh:'七年戰爭結束，英國取得加拿大', en:'The Seven Years’ War ends; Britain gains Canada', fr:'Fin de la guerre de Sept Ans : la Grande-Bretagne obtient le Canada' },
      { y:1776, zh:'北美殖民地宣布獨立', en:'The American colonies declare independence', fr:'Les colonies américaines déclarent leur indépendance' },
      { y:1801, zh:'大不列顛與愛爾蘭聯合王國成立', en:'The United Kingdom of Great Britain and Ireland is formed', fr:'Création du Royaume-Uni de Grande-Bretagne et d’Irlande' },
      { y:1805, zh:'特拉法加海戰，納爾遜在勝利中戰死', en:'Trafalgar: Nelson dies in victory', fr:'Trafalgar : Nelson meurt dans la victoire' },
      { y:1815, zh:'滑鐵盧戰役', en:'The Battle of Waterloo', fr:'La bataille de Waterloo' },
    ],
    themes:{
      state:{ zh:'《權利法案》規定國王不得未經議會同意徵稅或維持常備軍；1701 年的《王位繼承法》排除天主教徒繼位，德國的漢諾威家族因此入主。國王漸漸退居幕後，由掌握下議院多數的首相領導政府。',
        en:'The Bill of Rights barred the king from raising taxes or keeping a standing army without Parliament’s consent, and the Act of Settlement of 1701 excluded Catholics from the throne, bringing the Hanoverians over from Germany. Kings slowly withdrew behind a prime minister who commanded the Commons.',
        fr:'Le Bill of Rights interdit au roi de lever l’impôt ou d’entretenir une armée permanente sans le Parlement, et l’Acte d’établissement de 1701 écarte les catholiques du trône, faisant venir d’Allemagne la maison de Hanovre. Le roi s’efface peu à peu derrière un Premier ministre appuyé sur les Communes.' },
      faith:{ zh:'1689 年的《寬容法》容許新教的不從國教者公開禮拜，天主教徒則仍被排除在公職之外。十八世紀衛斯理兄弟發起循道運動，把信仰帶進工人與礦工之間。',
        en:'The Toleration Act of 1689 let Protestant Dissenters worship openly, while Catholics stayed barred from public office. In the eighteenth century John and Charles Wesley’s Methodist movement carried religion to workers and miners.',
        fr:'L’Acte de tolérance de 1689 permet aux dissidents protestants de célébrer leur culte, tandis que les catholiques restent exclus des charges publiques. Au XVIIIᵉ siècle, le méthodisme des frères Wesley porte la foi parmi ouvriers et mineurs.' },
      society:{ zh:'英格蘭銀行與國債制度讓政府能借錢打仗。農業革命提高了糧食產量；十八世紀後半，瓦特改良蒸汽機，紡織工廠與運河遍布英格蘭北部，工業革命由此展開。',
        en:'The Bank of England and the national debt let the state borrow for war. An agricultural revolution raised food output, and in the later eighteenth century James Watt improved the steam engine while textile mills and canals spread across northern England: the Industrial Revolution had begun.',
        fr:'La Banque d’Angleterre et la dette publique permettent à l’État d’emprunter pour la guerre. Une révolution agricole accroît la production, et dans la seconde moitié du XVIIIᵉ siècle James Watt perfectionne la machine à vapeur, tandis que filatures et canaux se multiplient dans le nord de l’Angleterre : la révolution industrielle commence.' },
      culture:{ zh:'洛克的政治哲學，以及休謨與亞當·斯密代表的蘇格蘭啟蒙運動影響深遠，斯密的《國富論》在 1776 年出版。倫敦的咖啡館與報紙培養出公共輿論，約翰生編出第一部權威的英語詞典。',
        en:'Locke’s political philosophy and the Scottish Enlightenment of Hume and Adam Smith had lasting influence; Smith’s Wealth of Nations appeared in 1776. London’s coffee houses and newspapers created public opinion, and Samuel Johnson compiled the first great English dictionary.',
        fr:'La philosophie politique de Locke et les Lumières écossaises de Hume et d’Adam Smith exercent une influence durable ; La Richesse des nations paraît en 1776. Cafés et journaux londoniens font naître l’opinion publique, et Samuel Johnson compile le premier grand dictionnaire anglais.' },
      world:{ zh:'英國與法國在歐洲、北美與印度反覆交戰。七年戰爭後英國取得加拿大並在印度占上風，卻在 1783 年被迫承認美國獨立。拿破崙戰爭中，英國以海權與資金支撐反法同盟，最後在滑鐵盧獲勝。',
        en:'Britain fought France again and again in Europe, North America and India. The Seven Years’ War won it Canada and the upper hand in India, but in 1783 it had to recognise American independence. In the Napoleonic Wars British sea power and money sustained the coalitions until victory at Waterloo.',
        fr:'La Grande-Bretagne affronte la France à maintes reprises en Europe, en Amérique du Nord et en Inde. La guerre de Sept Ans lui donne le Canada et l’avantage en Inde, mais en 1783 elle doit reconnaître l’indépendance américaine. Pendant les guerres napoléoniennes, sa flotte et son argent soutiennent les coalitions jusqu’à Waterloo.' },
    }
  },
  {
    id:'victorian', icon:'🚂', start:1815, end:1901, world:'industrial',
    name:{ zh:'工業時代與維多利亞時代', en:'The Industrial and Victorian Age', fr:'L’ère industrielle et victorienne' },
    summary:{ zh:'英國成為「世界工廠」，鐵路、煤礦與工廠改變了城市與生活。議會一步步擴大選舉權，廢除奴隸制與穀物法，走向自由貿易。維多利亞女王在位六十三年，大英帝國擴張到全球約四分之一的陸地。',
      en:'Britain became the “workshop of the world”, and railways, coal mines and factories transformed towns and lives. Parliament widened the vote step by step, abolished slavery and the Corn Laws, and embraced free trade. Queen Victoria reigned for sixty-three years as the empire grew to cover about a quarter of the world’s land.',
      fr:'La Grande-Bretagne devient « l’atelier du monde » : chemins de fer, mines de charbon et usines transforment villes et modes de vie. Le Parlement élargit le droit de vote pas à pas, abolit l’esclavage et les Corn Laws et adopte le libre-échange. La reine Victoria règne soixante-trois ans, tandis que l’empire s’étend sur environ un quart des terres émergées.' },
    events:[
      { y:1819, zh:'彼得盧屠殺：騎兵衝散要求改革的集會', en:'Peterloo: cavalry charge a rally for reform', fr:'Peterloo : la cavalerie charge un rassemblement réformateur' },
      { y:1825, zh:'斯托克頓至達靈頓鐵路通車', en:'The Stockton and Darlington Railway opens', fr:'Ouverture du chemin de fer Stockton–Darlington' },
      { y:1832, zh:'《改革法案》擴大選舉權', en:'The Great Reform Act widens the vote', fr:'Le Reform Act élargit le droit de vote' },
      { y:1833, zh:'大英帝國廢除奴隸制', en:'Slavery is abolished across the British Empire', fr:'Abolition de l’esclavage dans l’Empire britannique' },
      { y:1846, zh:'廢除穀物法', en:'Repeal of the Corn Laws', fr:'Abrogation des Corn Laws' },
      { y:1851, zh:'倫敦萬國工業博覽會', en:'The Great Exhibition in London', fr:'La Grande Exposition de Londres' },
      { y:1858, zh:'英國王室直接統治印度', en:'The Crown takes direct rule of India', fr:'La Couronne prend le gouvernement direct de l’Inde' },
      { y:1867, zh:'第二次改革法案，城市工人取得投票權', en:'The Second Reform Act gives the vote to urban workers', fr:'Le second Reform Act donne le vote aux ouvriers des villes' },
      { y:1877, zh:'維多利亞宣布為印度女皇', en:'Victoria is proclaimed Empress of India', fr:'Victoria est proclamée impératrice des Indes' },
      { y:1901, zh:'維多利亞女王去世', en:'Death of Queen Victoria', fr:'Mort de la reine Victoria' },
    ],
    themes:{
      state:{ zh:'1832 年的改革法案把選舉權擴大到中產階級，1867 與 1884 年再擴及大部分男性工人，1872 年改採祕密投票。自由黨的格萊斯頓與保守黨的迪斯雷利輪流執政，兩黨制由此成形。',
        en:'The Reform Act of 1832 gave the vote to much of the middle class, those of 1867 and 1884 extended it to most working men, and the secret ballot arrived in 1872. Gladstone’s Liberals and Disraeli’s Conservatives alternated in power, and two-party politics took shape.',
        fr:'Le Reform Act de 1832 accorde le vote à une grande partie des classes moyennes, ceux de 1867 et 1884 l’étendent à la plupart des ouvriers, et le scrutin secret arrive en 1872. Les libéraux de Gladstone et les conservateurs de Disraeli alternent au pouvoir : le bipartisme prend forme.' },
      faith:{ zh:'1829 年天主教徒獲得解放，可以進入議會。福音派推動廢奴、主日學與社會改革；1859 年達爾文出版《物種起源》，引發科學與信仰的激烈辯論。',
        en:'Catholic Emancipation in 1829 let Catholics sit in Parliament. Evangelicals drove the campaigns against slavery and for Sunday schools and social reform, and Darwin’s On the Origin of Species, in 1859, set off a fierce debate between science and faith.',
        fr:'L’émancipation des catholiques, en 1829, leur ouvre le Parlement. Les évangéliques portent l’abolition de l’esclavage, les écoles du dimanche et les réformes sociales, et L’Origine des espèces de Darwin, en 1859, déclenche un vif débat entre science et foi.' },
      society:{ zh:'曼徹斯特等工業城市爆炸性成長，童工、貧民窟與霍亂成為迫切的社會問題，催生了工廠法、公共衛生法與工會。1846 年廢除保護地主的穀物法，英國全面走向自由貿易。',
        en:'Industrial cities such as Manchester grew explosively, and child labour, slums and cholera became pressing problems, prompting Factory Acts, public health laws and trade unions. In 1846 the Corn Laws protecting landowners were repealed, and Britain went over to free trade.',
        fr:'Les villes industrielles comme Manchester connaissent une croissance explosive ; travail des enfants, taudis et choléra suscitent lois sur les fabriques, lois d’hygiène publique et syndicats. En 1846, les Corn Laws qui protégeaient les propriétaires sont abrogées, et le pays passe au libre-échange.' },
      culture:{ zh:'狄更斯的小說揭露工業社會的貧困，勃朗特姊妹、喬治·艾略特與哈代寫出鄉村生活與女性的處境。法拉第與麥克斯威的電磁學研究、達爾文的演化論，讓英國站上科學的最前線。',
        en:'Dickens’s novels exposed the poverty of industrial society, while the Brontës, George Eliot and Hardy wrote of rural life and women’s lot. Faraday and Maxwell’s work on electromagnetism and Darwin’s theory of evolution put Britain at the forefront of science.',
        fr:'Les romans de Dickens dénoncent la misère de la société industrielle, tandis que les sœurs Brontë, George Eliot et Hardy décrivent les campagnes et la condition des femmes. Les travaux de Faraday et Maxwell sur l’électromagnétisme et la théorie de l’évolution de Darwin placent le pays à l’avant-garde de la science.' },
      world:{ zh:'皇家海軍維持著「不列顛治世」：英國在鴉片戰爭中取得香港，1858 年直接統治印度，並在瓜分非洲時取得大片殖民地。愛爾蘭大饑荒（1845–1852）造成約一百萬人死亡、上百萬人移民。',
        en:'The Royal Navy upheld a “Pax Britannica”: Britain took Hong Kong in the Opium War, assumed direct rule of India in 1858 and seized vast territories in the Scramble for Africa. The Great Famine in Ireland (1845–1852) killed about a million people and drove over a million to emigrate.',
        fr:'La Royal Navy assure une « Pax Britannica » : le pays obtient Hong Kong lors de la guerre de l’opium, gouverne directement l’Inde dès 1858 et s’empare de vastes territoires lors du partage de l’Afrique. La Grande Famine irlandaise (1845-1852) fait environ un million de morts et pousse plus d’un million de personnes à émigrer.' },
    }
  },
  {
    id:'worldwars', icon:'🎖️', start:1901, end:1945, world:'worldwar',
    name:{ zh:'兩次世界大戰', en:'The Era of the World Wars', fr:'L’époque des guerres mondiales' },
    summary:{ zh:'二十世紀初英國仍擁有世界最大的帝國，卻面臨德國與美國的挑戰。第一次世界大戰奪走近九十萬英國軍人的生命；戰後女性取得投票權，愛爾蘭南部獨立，經濟陷入長期蕭條。1940 年英國在邱吉爾領導下獨力對抗納粹德國，最後與美蘇一同獲勝，國力卻已大幅消耗。',
      en:'At the start of the century Britain still ruled the largest empire in the world, but faced challengers in Germany and the United States. The First World War killed nearly 900,000 British servicemen; afterwards women won the vote, southern Ireland became independent and the economy sank into long depression. In 1940, under Churchill, Britain stood alone against Nazi Germany, and it ended on the winning side with the United States and the Soviet Union, but drained of its strength.',
      fr:'Au début du siècle, la Grande-Bretagne possède encore le plus vaste empire du monde, mais l’Allemagne et les États-Unis la défient. La Première Guerre mondiale tue près de 900 000 soldats britanniques ; ensuite les femmes obtiennent le vote, le sud de l’Irlande devient indépendant et l’économie s’enlise dans la dépression. En 1940, sous Churchill, le pays tient seul face à l’Allemagne nazie et finit dans le camp des vainqueurs avec les États-Unis et l’URSS, mais épuisé.' },
    events:[
      { y:1903, zh:'潘克斯特創立婦女社會政治聯盟，爭取女性投票權', en:'Emmeline Pankhurst founds the WSPU to win votes for women', fr:'Emmeline Pankhurst fonde la WSPU pour le vote des femmes' },
      { y:1911, by:'H. H. Asquith', zh:'《議會法》限制上議院的權力', en:'The Parliament Act curbs the House of Lords', fr:'Le Parliament Act limite les pouvoirs des Lords' },
      { y:1914, by:'H. H. Asquith', zh:'英國對德宣戰', en:'Britain declares war on Germany', fr:'La Grande-Bretagne déclare la guerre à l’Allemagne' },
      { y:1916, by:'H. H. Asquith', zh:'索姆河戰役；都柏林復活節起義', en:'The Somme; the Easter Rising in Dublin', fr:'La Somme ; l’insurrection de Pâques à Dublin' },
      { y:1918, zh:'三十歲以上女性取得投票權', en:'Women over thirty win the vote', fr:'Les femmes de plus de trente ans obtiennent le vote' },
      { y:1922, zh:'愛爾蘭自由邦成立', en:'The Irish Free State is founded', fr:'Création de l’État libre d’Irlande' },
      { y:1926, zh:'全國大罷工', en:'The General Strike', fr:'La grève générale' },
      { y:1936, zh:'愛德華八世退位', en:'Edward VIII abdicates', fr:'Abdication d’Édouard VIII' },
      { y:1940, zh:'敦克爾克大撤退與不列顛空戰', en:'Dunkirk and the Battle of Britain', fr:'Dunkerque et la bataille d’Angleterre' },
      { y:1945, zh:'歐戰勝利', en:'Victory in Europe', fr:'Victoire en Europe' },
    ],
    themes:{
      state:{ zh:'1911 年的議會法剝奪了上議院否決預算的權力。工黨在 1924 年首次組閣，取代自由黨成為兩大黨之一；兩次大戰期間則由聯合政府領導。1928 年起女性與男性享有相同的投票權。',
        en:'The Parliament Act of 1911 stripped the Lords of their veto over the budget. Labour formed its first government in 1924 and replaced the Liberals as one of the two great parties, while both wars were run by coalitions. From 1928 women voted on the same terms as men.',
        fr:'Le Parliament Act de 1911 retire aux Lords leur veto sur le budget. Les travaillistes forment leur premier gouvernement en 1924 et supplantent les libéraux comme l’un des deux grands partis, tandis que les deux guerres sont conduites par des coalitions. Dès 1928, les femmes votent aux mêmes conditions que les hommes.' },
      faith:{ zh:'上教堂的人持續減少，社會逐漸世俗化。愛爾蘭的分裂大致沿著宗教界線：天主教為主的南部獨立，新教徒占多數的北部六郡留在聯合王國。',
        en:'Church attendance kept falling and society grew more secular. Ireland was partitioned largely along religious lines: the Catholic south became independent, while six mostly Protestant northern counties stayed in the United Kingdom.',
        fr:'La pratique religieuse continue de reculer et la société se sécularise. L’Irlande est partagée en grande partie selon des lignes religieuses : le sud catholique devient indépendant, tandis que six comtés du nord, majoritairement protestants, restent dans le Royaume-Uni.' },
      society:{ zh:'自由黨政府推出養老金與國民保險，是福利國家的雛形。兩次大戰之間，煤礦與造船等傳統產業衰退，1926 年大罷工與 1930 年代的大蕭條讓北方工業區失業嚴重。',
        en:'Liberal governments introduced old-age pensions and national insurance, early foundations of the welfare state. Between the wars the old industries of coal and shipbuilding declined, and the General Strike of 1926 and the Depression of the 1930s left the industrial north with mass unemployment.',
        fr:'Les gouvernements libéraux créent retraites et assurance nationale, premières pierres de l’État-providence. Entre les deux guerres, charbon et construction navale déclinent, et la grève générale de 1926 puis la crise des années 1930 laissent le nord industriel frappé par un chômage de masse.' },
      culture:{ zh:'吳爾芙與艾略特引領現代主義文學；BBC 在 1922 年開播，成為全國共同的聲音。歐文與沙遜等戰爭詩人，記錄了壕溝戰的殘酷。',
        en:'Virginia Woolf and T. S. Eliot led literary modernism, and the BBC, broadcasting from 1922, became a shared national voice. War poets such as Wilfred Owen and Siegfried Sassoon recorded the horror of the trenches.',
        fr:'Virginia Woolf et T. S. Eliot mènent le modernisme littéraire, et la BBC, qui émet dès 1922, devient une voix nationale partagée. Des poètes de guerre comme Wilfred Owen et Siegfried Sassoon témoignent de l’horreur des tranchées.' },
      world:{ zh:'大英帝國在一戰後達到最大範圍，但各自治領日益獨立，1931 年《西敏法令》讓加拿大、澳洲等成為大英國協的平等成員。二戰中英國仰賴美國援助，戰後債台高築，帝國已難以維持。',
        en:'The empire reached its greatest extent after the First World War, but the dominions grew more independent, and the Statute of Westminster in 1931 made Canada, Australia and others equal members of the Commonwealth. In the Second World War Britain relied on American aid, and it emerged deep in debt with an empire it could no longer sustain.',
        fr:'L’empire atteint son extension maximale après la Première Guerre mondiale, mais les dominions s’émancipent, et le statut de Westminster de 1931 fait du Canada, de l’Australie et d’autres des membres égaux du Commonwealth. Pendant la Seconde Guerre mondiale, le pays dépend de l’aide américaine et en sort lourdement endetté, avec un empire qu’il ne peut plus soutenir.' },
    }
  },
  {
    id:'welfare', icon:'🏥', start:1945, end:1979, world:'coldwar',
    name:{ zh:'福利國家與帝國終結', en:'The Welfare State and the End of Empire', fr:'L’État-providence et la fin de l’empire' },
    summary:{ zh:'1945 年工黨大勝，建立國民保健署（NHS），並把煤礦、鐵路等產業收歸國有。印度在 1947 年獨立，其後二十年非洲與亞洲殖民地相繼獨立；1956 年的蘇伊士危機證明英國已不再是超級強權。1973 年英國加入歐洲共同體，七十年代卻陷入通膨與罷工潮。',
      en:'Labour’s landslide in 1945 created the National Health Service and nationalised coal, the railways and other industries. India became independent in 1947 and most colonies in Africa and Asia followed within twenty years, while the Suez Crisis of 1956 showed that Britain was no longer a superpower. Britain joined the European Community in 1973, but the decade sank into inflation and waves of strikes.',
      fr:'La victoire écrasante des travaillistes en 1945 crée le National Health Service et nationalise charbon, chemins de fer et d’autres industries. L’Inde devient indépendante en 1947, et la plupart des colonies d’Afrique et d’Asie suivent en vingt ans, tandis que la crise de Suez, en 1956, montre que le pays n’est plus une superpuissance. Le Royaume-Uni entre dans la Communauté européenne en 1973, mais la décennie s’enlise dans l’inflation et les grèves.' },
    events:[
      { y:1947, zh:'印度與巴基斯坦獨立', en:'India and Pakistan become independent', fr:'Indépendance de l’Inde et du Pakistan' },
      { y:1948, zh:'國民保健署成立；帝國疾風號載來加勒比海移民', en:'The NHS is founded; the Empire Windrush brings Caribbean migrants', fr:'Création du NHS ; l’Empire Windrush amène des immigrés antillais' },
      { y:1953, zh:'伊莉莎白二世加冕', en:'Coronation of Elizabeth II', fr:'Couronnement d’Élisabeth II' },
      { y:1956, zh:'蘇伊士危機', en:'The Suez Crisis', fr:'La crise de Suez' },
      { y:1960, zh:'麥克米倫發表「變革之風」演說', en:'Macmillan’s “Wind of Change” speech', fr:'Discours du « vent du changement » de Macmillan' },
      { y:1969, zh:'英軍進駐北愛爾蘭，北愛動亂擴大', en:'Troops are sent to Northern Ireland as the Troubles escalate', fr:'Envoi de troupes en Irlande du Nord alors que les Troubles s’aggravent' },
      { y:1973, zh:'加入歐洲共同體', en:'Britain joins the European Community', fr:'Le Royaume-Uni entre dans la Communauté européenne' },
      { y:1978, zh:'「不滿之冬」罷工潮', en:'The “Winter of Discontent” strikes', fr:'Les grèves de « l’hiver du mécontentement »' },
    ],
    themes:{
      state:{ zh:'戰後兩大黨形成「共識政治」，都接受混合經濟與福利國家。1969 年投票年齡降為十八歲；蘇格蘭與威爾斯的民族主義開始抬頭。',
        en:'Both main parties accepted a mixed economy and the welfare state in a post-war “consensus”. The voting age fell to eighteen in 1969, and Scottish and Welsh nationalism began to rise.',
        fr:'Les deux grands partis acceptent l’économie mixte et l’État-providence dans un « consensus » d’après-guerre. La majorité électorale passe à dix-huit ans en 1969, et les nationalismes écossais et gallois montent.' },
      faith:{ zh:'社會快速世俗化，1967 年同性性行為在英格蘭與威爾斯除罪化。北愛爾蘭天主教徒爭取民權，與新教效忠派衝突，演變成長達三十年的暴力「動亂」。',
        en:'Society secularised rapidly, and in 1967 homosexual acts were decriminalised in England and Wales. Catholic civil-rights campaigns in Northern Ireland collided with Protestant loyalism and turned into thirty years of violence, the Troubles.',
        fr:'La société se sécularise rapidement, et en 1967 l’homosexualité est dépénalisée en Angleterre et au pays de Galles. Les revendications des catholiques d’Irlande du Nord pour les droits civiques se heurtent au loyalisme protestant et débouchent sur trente ans de violences, les « Troubles ».' },
      society:{ zh:'NHS 讓所有人免費就醫，國宅大量興建。來自加勒比海與南亞的移民改變了城市的面貌；七十年代石油危機後通膨高漲，1978 至 1979 年的「不滿之冬」罷工讓工黨政府垮台。',
        en:'The NHS gave everyone free medical care and council housing was built on a vast scale. Migrants from the Caribbean and South Asia reshaped the cities; after the oil shocks of the 1970s inflation soared, and the strikes of the 1978–79 “Winter of Discontent” brought down the Labour government.',
        fr:'Le NHS offre des soins gratuits à tous et les logements sociaux se multiplient. Les immigrés des Antilles et d’Asie du Sud transforment les villes ; après les chocs pétroliers des années 1970, l’inflation s’envole, et les grèves de « l’hiver du mécontentement » de 1978-1979 font tomber le gouvernement travailliste.' },
      culture:{ zh:'六十年代的「搖擺倫敦」讓英國成為流行文化的中心：披頭四、滾石樂團、迷你裙與 007 電影風靡全球。',
        en:'The “Swinging London” of the sixties made Britain a capital of pop culture: the Beatles, the Rolling Stones, the miniskirt and James Bond films swept the world.',
        fr:'Le « Swinging London » des années 1960 fait du pays une capitale de la culture pop : les Beatles, les Rolling Stones, la minijupe et les films de James Bond conquièrent le monde.' },
      world:{ zh:'英國是北約創始成員與核武國家，與美國維持「特殊關係」。帝國改組為大英國協；英國兩度申請加入歐洲共同體都被法國的戴高樂否決，1973 年才成功加入。',
        en:'Britain was a founding member of NATO and a nuclear power, bound to the United States by a “special relationship”. The empire became the Commonwealth, and two bids to join the European Community were vetoed by de Gaulle before entry finally came in 1973.',
        fr:'Membre fondateur de l’OTAN et puissance nucléaire, le pays entretient une « relation spéciale » avec les États-Unis. L’empire devient le Commonwealth, et deux candidatures à la Communauté européenne se heurtent au veto de De Gaulle avant l’adhésion de 1973.' },
    }
  },
  {
    id:'modern', icon:'🎡', start:1979, end:2026, world:'contemporary',
    name:{ zh:'柴契爾以後的英國', en:'Britain since Thatcher', fr:'Le Royaume-Uni depuis Thatcher' },
    summary:{ zh:'柴契爾推動私有化、削弱工會並解除金融管制，倫敦金融城重新成為全球金融中心。布萊爾的「新工黨」把權力下放給蘇格蘭、威爾斯與北愛爾蘭，並促成北愛和平。2016 年公投決定脫離歐盟，2020 年正式脫歐，英國至今仍在重新尋找自己的位置。',
      en:'Thatcher privatised industries, curbed the unions and deregulated finance, and the City of London became a global financial centre again. Blair’s New Labour devolved power to Scotland, Wales and Northern Ireland and helped bring peace to Northern Ireland. A 2016 referendum chose to leave the European Union, Britain left in 2020, and it is still searching for its place.',
      fr:'Thatcher privatise, affaiblit les syndicats et dérégule la finance, et la City redevient une place financière mondiale. Le New Labour de Blair transfère des pouvoirs à l’Écosse, au pays de Galles et à l’Irlande du Nord et contribue à la paix en Irlande du Nord. Le référendum de 2016 choisit de quitter l’Union européenne, la sortie a lieu en 2020, et le pays cherche encore sa place.' },
    events:[
      { y:1982, zh:'福克蘭戰爭', en:'The Falklands War', fr:'La guerre des Malouines' },
      { y:1984, zh:'礦工大罷工開始', en:'The miners’ strike begins', fr:'Début de la grande grève des mineurs' },
      { y:1997, zh:'香港主權移交；蘇格蘭與威爾斯公投通過地方分權', en:'Hong Kong is handed over; Scotland and Wales vote for devolution', fr:'Rétrocession de Hong Kong ; l’Écosse et le pays de Galles votent la dévolution' },
      { y:1998, zh:'北愛爾蘭《耶穌受難日協議》', en:'The Good Friday Agreement in Northern Ireland', fr:'L’accord du Vendredi saint en Irlande du Nord' },
      { y:2003, zh:'英國參與入侵伊拉克', en:'Britain joins the invasion of Iraq', fr:'Le Royaume-Uni participe à l’invasion de l’Irak' },
      { y:2014, zh:'蘇格蘭獨立公投，55% 選擇留在英國', en:'Scottish independence referendum: 55% vote to stay', fr:'Référendum sur l’indépendance écossaise : 55 % pour rester' },
      { y:2016, by:'David Cameron', zh:'脫歐公投，52% 選擇離開歐盟', en:'Brexit referendum: 52% vote to leave the EU', fr:'Référendum sur le Brexit : 52 % pour quitter l’UE' },
      { y:2020, zh:'英國正式離開歐盟', en:'Britain leaves the European Union', fr:'Le Royaume-Uni quitte l’Union européenne' },
      { y:2022, zh:'伊莉莎白二世去世，查理三世即位', en:'Elizabeth II dies; Charles III becomes king', fr:'Mort d’Élisabeth II ; Charles III devient roi' },
    ],
    themes:{
      state:{ zh:'1999 年蘇格蘭議會、威爾斯議會與北愛爾蘭議會相繼成立，聯合王國從高度中央集權轉向分權。2014 年蘇格蘭獨立公投以 55% 對 45% 留下，但脫歐後獨立議題再度升溫。',
        en:'In 1999 the Scottish Parliament and the Welsh and Northern Irish assemblies opened, and the United Kingdom moved from tight centralisation to devolution. Scotland voted 55 to 45 per cent to stay in 2014, but Brexit revived the independence question.',
        fr:'En 1999 s’ouvrent le Parlement écossais et les assemblées galloise et nord-irlandaise : le Royaume-Uni passe d’une forte centralisation à la dévolution. L’Écosse vote à 55 % contre 45 % pour rester en 2014, mais le Brexit relance la question de l’indépendance.' },
      faith:{ zh:'英國已是歐洲最世俗化的社會之一，自認無宗教信仰的人數逐漸超過基督徒。1998 年的和平協議結束北愛動亂，宗教與身分的分界仍深刻影響當地政治。',
        en:'Britain became one of Europe’s most secular societies, with people of no religion coming to outnumber Christians. The 1998 peace agreement ended the Troubles, though religious and communal lines still shape politics in Northern Ireland.',
        fr:'Le pays devient l’une des sociétés les plus sécularisées d’Europe, les sans-religion finissant par dépasser les chrétiens. L’accord de paix de 1998 met fin aux Troubles, mais les lignes religieuses et communautaires structurent encore la politique en Irlande du Nord.' },
      society:{ zh:'製造業與煤礦大幅萎縮，服務業與金融業成為經濟主力，南北差距擴大。2008 年金融危機後政府推行緊縮政策；2020 年的新冠疫情對 NHS 造成巨大壓力。',
        en:'Manufacturing and coal shrank dramatically, services and finance came to dominate the economy, and the gap between north and south widened. After the 2008 financial crisis governments imposed austerity, and the Covid pandemic of 2020 put the NHS under immense strain.',
        fr:'L’industrie manufacturière et le charbon s’effondrent, les services et la finance dominent l’économie, et l’écart nord-sud se creuse. Après la crise financière de 2008, l’austérité s’impose, et la pandémie de Covid de 2020 met le NHS à rude épreuve.' },
      culture:{ zh:'從龐克、英倫搖滾到《哈利波特》，英國持續輸出流行文化。2012 年倫敦奧運開幕式以 NHS、工業革命與流行音樂講述國家故事，展現新的多元認同。',
        en:'From punk and Britpop to Harry Potter, Britain kept exporting popular culture. The opening ceremony of the 2012 London Olympics told the national story through the NHS, the Industrial Revolution and pop music, showcasing a new, diverse identity.',
        fr:'Du punk à la britpop et à Harry Potter, le pays continue d’exporter sa culture populaire. La cérémonie d’ouverture des Jeux de Londres en 2012 raconte l’histoire nationale par le NHS, la révolution industrielle et la pop, affichant une identité nouvelle et diverse.' },
      world:{ zh:'英國在 1997 年把香港交還中國，大英帝國的時代畫下句點。它追隨美國參與阿富汗與伊拉克戰爭；2020 年離開歐盟後，與歐洲的關係與在世界上的角色，仍在重新協商之中。',
        en:'The handover of Hong Kong in 1997 closed the age of empire. Britain followed the United States into Afghanistan and Iraq, and since leaving the EU in 2020 its relations with Europe and its role in the world are still being renegotiated.',
        fr:'La rétrocession de Hong Kong en 1997 clôt l’ère impériale. Le pays suit les États-Unis en Afghanistan et en Irak, et depuis sa sortie de l’UE en 2020, ses relations avec l’Europe et son rôle dans le monde restent à redéfinir.' },
    }
  },
  ]
},
];

const CX_UI = {
  zh:{ tab:'國別史', head:'國別史', sub:'挑一個國家，沿著「時代」與「主題」兩條軸線閱讀它的歷史。',
       more:'更多國家陸續加入', linear:'線性敘事', linearDesc:'依時代順序閱讀，每個時期附上五個主題切面。',
       thematic:'主題敘事', thematicDesc:'挑一條主題線索，看它如何貫穿每個時代。',
       events:'關鍵事件', facets:'主題切面', trivia:'小知識．在哪裡看得到', where:'在地圖上查看', rulers:'統治者與領導人', chron:'統治者與大事', power:'誰掌權', turn:'轉折', stagesOpen:'展開全部', stagesClose:'收合全部', seeWorld:'在世界時間軸中查看', toPeriod:'回到這個時期',
       follow:'沿這條主題讀下去', periods:'個時期', c:'約 ' },
  en:{ tab:'Countries', head:'Country Histories', sub:'Pick a country and read its history along two axes: time and theme.',
       more:'More countries coming', linear:'Linear', linearDesc:'Read period by period, each with five thematic facets.',
       thematic:'Thematic', thematicDesc:'Follow one theme as it runs through every period.',
       events:'Key events', facets:'Thematic facets', trivia:'Did you know? Where to see it', where:'Open on the map', rulers:'Rulers and leaders', chron:'Rulers and key events', power:'Who held power', turn:'Turning point', stagesOpen:'Expand all', stagesClose:'Collapse all', seeWorld:'See in the world timeline', toPeriod:'Back to this period',
       follow:'Follow this theme', periods:'periods', c:'c. ' },
  fr:{ tab:'Par pays', head:'Histoires nationales', sub:'Choisissez un pays et lisez son histoire selon deux axes : le temps et les thèmes.',
       more:'D’autres pays à venir', linear:'Récit linéaire', linearDesc:'Lire période par période, chacune avec cinq angles thématiques.',
       thematic:'Récit thématique', thematicDesc:'Suivre un thème à travers toutes les périodes.',
       events:'Événements clés', facets:'Angles thématiques', trivia:'Le saviez-vous ? Où le voir', where:'Voir sur la carte', rulers:'Souverains et dirigeants', chron:'Souverains et événements clés', power:'Qui détient le pouvoir', turn:'Tournant', stagesOpen:'Tout déplier', stagesClose:'Tout replier', seeWorld:'Voir dans la frise mondiale', toPeriod:'Revenir à cette période',
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
/* a theme as the current country tells it: a country may rename a thread or
   rewrite its intro through `threads` (e.g. “France & the World” → “Britain & the World”) */
function cxTheme(id) {
  const base = CX_THEMES.find(t => t.id === id);
  const c = COUNTRIES.find(k => k.id === cx.country);
  const o = c && c.threads && c.threads[id];
  return o ? Object.assign({}, base, o) : base;
}
function cxThemes() { return CX_THEMES.map(t => cxTheme(t.id)); }

/* a date written for the reader's language: 14 July 1789, 1789年7月14日, 14 juillet 1789 */
function cxDate(s) {
  const p = s.split('-').map(Number);
  const loc = { zh:'zh-TW', en:'en-GB', fr:'fr-FR' }[LANG] || 'zh-TW';
  const o = { year:'numeric', timeZone:'UTC' };
  if (p[1]) o.month = 'long';
  if (p[2]) o.day = 'numeric';
  return new Intl.DateTimeFormat(loc, o).format(new Date(Date.UTC(p[0], (p[1] || 1) - 1, p[2] || 1)));
}

/* one period read in finer stages, each folded open on demand */
function cxStages(pid) {
  const data = ((typeof CX_STAGES !== 'undefined' && CX_STAGES[cx.country]) || {})[pid];
  if (!data) return '';
  const L = Math.max(0, ['zh', 'en', 'fr'].indexOf(LANG));
  return '<div class="cx-stages"><div class="cx-label cx-stages-h"><span>' + T(data.title) + '</span>'
    + '<button class="cx-link cx-st-all" onclick="cxToggleStages(\'' + pid + '\')">' + cxU('stagesOpen') + '</button></div>'
    + data.list.map((s, i) =>
        '<details class="cx-stage"><summary><span class="cx-st-n">' + (i + 1) + '</span>'
        + '<span class="cx-st-t">' + T(s.name) + '</span>'
        + '<span class="cx-st-y">' + cxDate(s.a) + ' – ' + cxDate(s.b) + '</span></summary>'
        + '<div class="cx-st-body">'
        + '<div class="cx-st-power"><b>' + cxU('power') + '</b>' + T(s.power) + '</div>'
        + '<p>' + T(s.summary) + '</p>'
        + '<ul class="cx-ev cx-st-ev">' + s.ev.map(e =>
            '<li><span class="cx-ev-y">' + cxDate(e[0]) + '</span><span>' + e[1][L] + '</span></li>').join('') + '</ul>'
        + (s.turn ? '<div class="cx-st-turn"><b>' + cxU('turn') + '</b>' + T(s.turn) + '</div>' : '')
        + '</div></details>').join('')
    + '</div>';
}
function cxToggleStages(pid) {
  const root = document.getElementById('cx-p-' + pid);
  if (!root) return;
  const ds = [...root.querySelectorAll('details.cx-stage')];
  const open = ds.some(d => !d.open);
  ds.forEach(d => { d.open = open; });
  const b = root.querySelector('.cx-st-all');
  if (b) b.textContent = cxU(open ? 'stagesClose' : 'stagesOpen');
}

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

/* rulers and key events woven into one chronology: each event sits under
   whoever ruled when it happened. On overlaps the most recent accession wins;
   a ruler marked { side:true } (a king of Scotland beside the English line)
   only hosts events no main ruler covers, and an event may name its host with
   `by` (the ruler's English name) where the year alone is ambiguous.
   Events outside every reign stand on their own, in date order. */
function cxChron(p) {
  const rulers = (((typeof CX_RULERS !== 'undefined' && CX_RULERS[cx.country]) || {})[p.id] || [])
    .map((r, i) => ({ r, i, ev: [] }));
  const L = ['zh', 'en', 'fr'].indexOf(LANG) < 0 ? 0 : ['zh', 'en', 'fr'].indexOf(LANG);
  const evLi = e => '<li><span class="cx-ev-y">' + cxYear(e.y, e.c) + '</span><span>' + (e[LANG] || e.zh) + '</span></li>';
  const loose = [];
  p.events.forEach(e => {
    let host = e.by ? rulers.find(x => x.r[2][1] === e.by) || null : null;
    if (!host) {
      const inReign = rulers.filter(x => e.y >= x.r[0] && e.y <= x.r[1]);
      const main = inReign.filter(x => !(x.r[4] && x.r[4].side));
      (main.length ? main : inReign).forEach(x => { if (!host || x.r[0] >= host.r[0]) host = x; });
    }
    (host ? host.ev : loose).push(e);
  });
  if (!rulers.length) return '<div class="cx-label">' + cxU('events') + '</div><ul class="cx-ev">' + loose.map(evLi).join('') + '</ul>';
  const items = rulers.map(x => ({ y: x.r[0], o: 0, i: x.i, x }))
    .concat(loose.map((e, i) => ({ y: e.y, o: 1, i, e })))
    .sort((a, b) => a.y - b.y || a.o - b.o || a.i - b.i);
  return '<div class="cx-label">' + cxU('chron') + '</div><ul class="cx-rulers cx-chron">'
    + items.map(it => {
        if (it.e) return '<li class="cx-ch-ev"><span class="cx-ru-y">' + cxYear(it.e.y, it.e.c) + '</span><div><span>' + (it.e[LANG] || it.e.zh) + '</span></div></li>';
        const r = it.x.r;
        const yrs = r[0] === r[1] ? cxYear(r[0]) : cxYear(r[0]) + '–' + (r[1] >= 2026 ? fmtYear(r[1]) : cxYear(r[1]));
        return '<li><span class="cx-ru-y">' + yrs + '</span><div><b>' + r[2][L] + '</b><p>' + r[3][L] + '</p>'
          + (it.x.ev.length ? '<ul class="cx-ev cx-ch-sub">' + it.x.ev.map(evLi).join('') + '</ul>' : '')
          + '</div></li>';
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
    + cxStages(p.id)
    + cxChron(p)
    + '<div class="cx-label">' + cxU('facets') + '</div>'
    + '<div class="cx-facets">' + cxThemes().map(t =>
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
  return '<div class="cx-themes">' + cxThemes().map(t =>
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
