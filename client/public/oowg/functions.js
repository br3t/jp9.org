const getDemoData = () => {
  return {
    language: "en",
    domainName: "example.com",
    title: "Example Title",
    description: "Example Description",
    htmlContent: `<h1>Slottica Casino: review, login, bonuses, play</h1>
<p>Slottica Casino is a new online casino that started to work in 2019. The platform has an official permit issued by the gambling regulators of the island state of Curacao. There are more than 20 producers of gaming software and about 1500 names for all sorts of games. The platform consists of slots and tablegames with "live" dealers. It is worth saying that Slottica has a flexible and generous bonus policy.</p>
<p>The purpose of our article is to tell more about it in detail. If you have any questions, you could write to the technical support team and they will provide assistance or suggest useful advice. They work day and night in any language.</p>
<p>Slottika has a large range of slot machines and classic table games that have been developed by world-renowned companies, including Net Entertainment, Play'n'Go, Wazdan, Microgaming, Quickspin, ProGaming, Amatic, Betsoft, Evolution Gaming, Ezugi, Booongo, Playson, Igrosoft, Endorphina, Tom Horn and other well-known and sought-after software studios. The portal also has a huge selection of all sorts of bonuses, lotteries, and tournaments in which you can win extra prizes.</p>
<p>Slottica casino is quite popular with both beginners and experienced gamblers, because of their professional approach, extensive experience, and licensed software. The website is decorated in light colors, and the information on the portal is accessible to find any answer that you have. You won't waste time finding the necessary information.</p>
<h2>Slottica Casino: Bonus program</h2>
<p>Registering at Slottica, you open up a lot of opportunities and privileges. The platform is loyal to new players and offers to activate a free bonus - 50 free spins in the popular Starburst video slot. To run the machine, it is necessary to place a bet of 1 cent. If the combination turns out to be a prize, the gamer will be able to make a choice: to continue the game or to withdraw funds. The second option involves wagering a 45x wager. This is the minimum number of bets that a player has to make to get the winnings. This coefficient is set by the club. The maximum wagering bet is 2$ (or 1 euro), and the transaction limit is 4$ or 2 euros.</p>
<p>Only adult gamers who have registered on the portal can activate the no deposit bonus. This is a simple procedure that takes place in a few steps. To apply a more simplified method, you need to log in via your social network page. It could be a resource: Vkontakte (VK), Twitter, Telegram, Facebook, Odnoklassniki (OK or Classmates), and Google+. The player needs to select a social network and click on the logo. When the information is processed, a new account will appear on the website.</p>
<p>But there is also a more traditional method. In the Registration section, the player has to enter your email and password. The last one should be as complex as possible. Also, choose the game currency. Then, gamers should enter more detailed information: name, surname, place of residence, full date of birth, and mobile phone number. To complete the process, confirm the phone number and email address by following the link in the email and sending the code from the text message.</p>
<p>The information provided by the client is not available to other gamers and is stored in an encrypted form. Slottica has a privacy policy and guarantees the safety of personal player&rsquo;s data.</p>
<h2>Slottica casino's range of games</h2>
<p>Slottica casino has a great variety of slot machines for every purse. On the platform, you easily find offers from such companies as Net Entertainment, Play'n'Go, Microgaming, Quickspin, Novomatic, XProGaming, and other popular providers. A convenient search system helps to find the ideal machine or slot for you. Games are filtered by the following criteria: new, popular, table, and live casino.</p>
<p>Slotika collection is regularly added with new features, slots. We advise you to pay attention to these popular games: Book of Dead, Starburst, Lights, Dynamite Riches, The Invisible Man, Elements: The Awakening, Steam Tower, Sushi Bar, and more.</p>
<h2>Table and card games</h2>
<p>Table games include different types of poker, roulette, blackjack, and baccarat. The specifics and rules of the game may differ depending on the type of simulator. You can also play other games that don't match into any of the categories: keno, craps, sic bo, and others. The range of slottika games allows you to switch between slots and classic games.</p>
<h2>Live casino at Slottika</h2>
<p>Guests of Slottica Casino might make bets on their favourite games in the live mode, i.e., play with real croupiers in live broadcast, and feel like a real customer of a real offline casino. A player can watch how the dealer plays the game at the table with the special sensors. Before each hand, the client needs to make a bet, so there should be enough money in the account to play. Bets are accepted automatically, and the result of each game will be known as soon as it is completed.</p>
<p>The Live casino shows that the platform has high-quality and powerful software, as it broadcasts happens day and night in different countries.</p>
<h2>Financial transactions</h2>
<p>To play for real money, you need to fund your balance. You can deposit via most of the popular payment methods: Visa/MasterCard, MIR debit cards; e-wallets Kiwi Wallet; Web Money; Umoney; Piastrix, Neteller; EcoPayz; cellular operators. The minimum top-up amount is only 1$. Withdrawal is carried out in the same way - card to card, wallet to wallet. The limit per day is 2 000$, per week is 9 500 $, per month is 40 000$. You need to go through the standard account verification procedure at the first withdrawal. To confirm the identity is necessary to send the administration the following documents: ID document or driving (a scan or clear photo). The user must be of legal age. Approval usually does not exceed three days (often much faster). After approval and completion of the process of verification, money is sent to electronic wallets almost instantly, to bank cards within three days.</p>
<h2>As a Conclusion</h2>
<p>To sum up, slottica is a solid online casino with a standard set of features that will satisfy even the most overnice person. A flexible bonus system, a wide range of gambling activities, and high limits make it one of the best gambling platforms. Casino slottica website has a nice design and intuitive navigation. A wide range of games and their variety can please everyone. Also, the institution has an official license, which is one of the most important factors in assessing the site.</p>`,
  };
};
const getWaterCss = async () => {
  let res = await fetch("/oowg/assets/styles/water.min.css");
  return await res.text();
};

const getCustomStyles = async () => {
  let res = await fetch("/oowg/assets/styles/style.css");
  return await res.text();
};

const formatContent = (htmlContent) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlContent, "text/html");

  // [name, url]
  const tableOfContentsData = [];

  // create custom id's on headings

  [...document.getElementsByTagName("h1")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h1_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
  });

  [...document.getElementsByTagName("h2")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h2_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
    // push to table on contents
    tableOfContentsData.push([heading.innerText, "h2_" + (index + 1)]);
  });

  const tableOfContents =
    "<ol>" +
    tableOfContentsData.map(
      (el) => ` <li><a href="#${el[1]}">💯 ${el[0]}</a></li>` + "</ol>"
    );

  document.body.append("Some text");

  console.log(document.body.innerHTML);
  return htmlContent;
};

const generateHtmlTemplate = ({
  language,
  title,
  description,
  domainName,
  htmlContent,
}) => {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    ${
      description === domainName + " Website Description" || description === ""
        ? ""
        : '<meta name="description" content="' + description + '" />'
    }
    <link rel="canonical" href="https://${domainName}/" />
    <meta name="generator" content="OOWG 0.1"/>
</head>
<body>
<article>
    <!-- content with anchor id headings -->
    ${formatContent(htmlContent)}

    <!-- custom article ul, ol, tables -->
    <!-- custom <b> in sentences with keyword -->
    <!-- pluses and minuses -->

    <!-- banner -->
    <img src="/assets/images/banner.jpg" style="border-radius: 10px"/>

    <!-- updated -->
    <p><strong>最終更新日</strong>：<span style="text-decoration: underline;">2022-12-09</span></p>

    <!-- table of contents -->

    <ol>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#bons-casino">💯 一般情報</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#login">🌐 ログイン</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#registration">🔥 登録</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#freespins">🎲 フリースピン</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#promocode">⚽ ボーナス</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#software">🏆 ソフトウェア</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#live">🎰 ライブ</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#products">💲 ブランド</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#mobile">💻 モバイル版</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#signup">📱 サインアップ</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#vip">💳 VIP</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#service">💬 サポート</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#tournament">💼 トーナメント</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#reviews">🔰 レビュー</a></li>
        <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#faq">❓ よくある質問</a></li>
    </ol>


    <!-- button -->
    <center>
        <button type="button" id="copy-button" class="blob">🔥 Играть</button>
    </center>

    <!-- content images with alt -->

    <img src="/assets/images/content/1.png"/>
    <img src="/assets/images/content/2.png"/>
    <img src="/assets/images/content/3.png"/>
    <img src="/assets/images/content/4.png"/>
    <img src="/assets/images/content/5.png"/>

    <!-- table -->
    <table class="c-table">
        <tbody>
        <tr>
            <td class="c-table__name">
                <p>🔥 ウェブサイト</p>
            </td>
            <td>
                <p><a href="https://xn--lck0ae6f0c4g.xn--tckwe/">ボンズカジノ.コム</a></p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🎰 設立年</p>
            </td>
            <td>
                <p>2020年</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>📄 ライセンス</p>
            </td>
            <td>
                <p>により提供され、ゲームライセンスにおいてAntillephone N.V.と合意しているキュラソーの法律に準じて運営されています。ゲーミングライセンス番号は8048/JAZ
                    2019-055です。</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🙌 会社のオーナー</p>
            </td>
            <td>
                <p>NestlingCorn Limited</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🎲 ゲーム数</p>
            </td>
            <td>
                <p>3000+</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🗺️ インターフェース言語</p>
            </td>
            <td>
                <p>
                    ロシア語、ウクライナ語、英語、ドイツ語、スペイン語、イタリア語、アラビア語、ルーマニア語、ポルトガル語、スウェーデン語、ポーランド語、ノルウェー語、フィンランド語、ブルガリア語、日本語、中国語、トルコ語、アゼリ語、フランス語、リトアニア語、チェコ語、ギリシャ語、クロアチア語、セルビア語、ベトナム語、ウズベク語、グルジア語、タイ語、韓国語、ラトビア語、カザフ語、インドネシア語、スロベニア語、ペルシャ語、ヘブライ語、ヒンディー語、マレー語、アルバニア語、ベラルーシ語、アルメニア語、デンマーク語</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💵 口座通貨</p>
            </td>
            <td>
                <p>USD, EUR, RUB, UAH, CAD, AUD, JPY, KZT, MDL, BYN, BTC, AED, ALL, AMD, AOA, AZN, BAM, BDT, BGN, BHD,
                    BIF, BOB, BRL, BWP, CDF, CHF, CLP, GHS, GMD, GNF, HKD, HRK, HTG, JOD, KES, KGS, KRW, KWD, MGA, MKD,
                    MMK, NAD, NGN, NOK, NPR, NZD, RON, RSD, RWF, SAR, SCR, SDG, SOS, SZL, THB, TJS, TMT, TND, TRY,
                    TWD</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🧑&zwj;💻 ソフトウェアプロバイダー</p>
            </td>
            <td>
                <p>Microgaming, Quickspin, Evolution Gaming, ELK Studios, Playson, Red Tiger, Push Gaming, iSoftBet,
                    Pragmatic Play, Habanero, Genesis Gaming, 1x2 Gaming, Kalamba Games, Rabcat, Foxium, Big Time
                    Gaming, Booming Games, Thunderkick, EGT, Amatic, Betsoft, Endorphina, GameArt, PariPlay, Bgaming,
                    Igrosoft, Rival, Red Rake, Ezugi, Booongo, Genii, Iron Dog Studio, Tom Horn Gaming, Authentic
                    Gaming, Spinomenal, Blueprint Gaming, Realistic Games, Wazdan, Belatra, Evoplay, Platipus, Vivo
                    Gaming, Lucky Streak, Felix Gaming, Swintt, Oryx, August, Leap Gaming, Fantasma Games, Gamefish
                    Global, JFTW, Apollo Games, Mr.Slotty, BF Games, Gamomat, Pg Soft, Fugaso, Multislot, Spigo,
                    Worldmatch, Netgame, Ruby Play, Sa Gaming, Reelnrg, Bbin, Betixon, Evolution Slots, Espresso Games,
                    N2-Live, Noble, Portomaso Gaming, Radi8, VRCasino, Gamzix, Live Solutions, Up Games</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💳 入力方法</p>
            </td>
            <td>
                <p>VISA, MasterCard, WebMoney, UzPay, PayTM Wallet, UPI, AirTM, HOTVouchers, GrataPay Vouchers, PayGiga,
                    Paytrust88, Hizli, Santander, Multibanco, Caixa, Bradesco, Banco de Brazil, Itau, Pay4Fun, Papara,
                    FastPay, Vcreditos, Flexepin, Trues USD, Nemo, Amigo, B-pay, BitShares, Ethereum Classic, Basic
                    Attention Token, OmiseGO, Chainlink, Paxos Standard Token, USD Coin, Tron, Stratis, QTUM, Verge,
                    Bitcoin Gold, DigiByte, Monero, Sticpay, Epay, TelePay, Zcash, Jeton Wallet, Piastrix, Dash, Tether,
                    Dogecoin, Boleto Bancario, Bitcoin Cash, MuchBetter, Litecoin, Ripple, Ethereum, ecoPayz, МИР,
                    Astropay</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💳 引き出し方法</p>
            </td>
            <td>
                <p>Astropay, VISA, MasterCard, МИР, ecoPayz, Bitcoin, Ethereum, Ripple, Litecoin, Maestro, Bitcoin Cash,
                    Payeer, Dogecoin, Tether, Dash, NEM, Piastrix, Jeton Wallet, Zcash, Sticpay, Monero, DigiByte,
                    Bitcoin Gold, Verge, QTUM, Stratis, Tron, USD Coin, Paxos Standard Token, Chainlink, OmiseGO, Basic
                    Attention Token, Ethereum Classic, BitShares, B-pay, Trues USD, Sepa</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>🎁 ボーナス</p>
            </td>
            <td>
                <p>最初のデポジットで100％、100％リロード+ Wheel of Fortuneの5スピン、5％キャッシュバック</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💰 最低入金額</p>
            </td>
            <td>
                <p>50 YEN</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💸 最小限の引き出し</p>
            </td>
            <td>
                <p>100 YEN</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>📱 モバイル版</p>
            </td>
            <td>
                <p>Android, iOS, Windows</p>
            </td>
        </tr>
        <tr>
            <td class="c-table__name">
                <p>💬 技術サポート</p>
            </td>
            <td>
                <p>E-mail:&nbsp;support@bons.com</p>
                <p>電話: ない</p>
                <p>オンラインチャット</p>
            </td>
        </tr>
        </tbody>
    </table>
    <!-- FAQ -->
    <h2>FAQ</h2>
    <details>
        <summary>Some summary/details can't hurt!</summary>
        <p>Lorem ipsum dolor sit blah blah.</p>
    </details>
    <details>
        <summary>Some summary/details can't hurt!</summary>
        <p>Lorem ipsum dolor sit blah blah.</p>
    </details>
    <details>
        <summary>Some summary/details can't hurt!</summary>
        <p>Lorem ipsum dolor sit blah blah.</p>
    </details>
    <details>
        <summary>Some summary/details can't hurt!</summary>
        <p>Lorem ipsum dolor sit blah blah.</p>
    </details>

</article>

<footer>

    <small>Онлайн-домен www.gama.casino принадлежит и управляется Traflow Media N.V., зарегистрированной компанией с
        номером 156583, расположенной по адресу Abraham de Veerstraat 9 в Кюрасао. SOLVEXI LIMITED, зарегистрированная
        компания с номером HE 422235, находится по адресу Georgiou Gennadiou 10 в Лимассоле, Кипр 3041, а NETICSS LTD,
        зарегистрированная компания с номером 13237657, находится по адресу Suite 17020, 43 Bedford Street в Лондоне,
        Великобритания WC2E 9HA. Обе эти компании выступают в качестве представителей лицензированной организации в
        Европейском Союзе и Европейской экономической зоне. Traflow Media N.V. владеет лицензией № 365/JAZ Sublicense
        GLH-OCCHKTW0703052021.</small>

    <a href="#">Back to top ⬆</a>
</footer>
<link rel="stylesheet" href="/assets/styles/water.min.css">
<link rel="stylesheet" href="/assets/styles/style.css">
</body>
</html>`;
};

export { generateHtmlTemplate, getWaterCss, getCustomStyles, getDemoData };
