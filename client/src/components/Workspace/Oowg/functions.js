import formatContent from "./format-content.js";

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


    <!-- updated -->
    <p><strong>最終更新日</strong>：<span style="text-decoration: underline;">2022-12-09</span></p>


    <!-- content images with alt -->

    <img src="/assets/images/content/1.png" alt="/assets/images/content/1.png"/>
    <img src="/assets/images/content/2.png" alt="/assets/images/content/2.png"/>
    <img src="/assets/images/content/3.png" alt="/assets/images/content/3.png"/>
    <img src="/assets/images/content/4.png" alt="/assets/images/content/4.png"/>
    <img src="/assets/images/content/5.png" alt="/assets/images/content/5.png"/>

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

<!--<link rel="stylesheet" href="./assets/styles/water.min.css">-->

<style>
:root{--background-body:#fff;--background:#efefef;--background-alt:#f7f7f7;--selection:#9e9e9e;--text-main:#363636;--text-bright:#000;--text-muted:#70777f;--links:#0076d1;--focus:rgba(0,150,191,0.67);--border:#dbdbdb;--code:#000;--animation-duration:0.1s;--button-base:#d0cfcf;--button-hover:#9b9b9b;--scrollbar-thumb:#aaa;--scrollbar-thumb-hover:var(--button-hover);--form-placeholder:#949494;--form-text:#1d1d1d;--variable:#39a33c;--highlight:#ff0;--select-arrow:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='63' width='117' fill='%23161f27'%3E%3Cpath d='M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z'/%3E%3C/svg%3E")}@media (prefers-color-scheme:dark){:root{--background-body:#202b38;--background:#161f27;--background-alt:#1a242f;--selection:#1c76c5;--text-main:#dbdbdb;--text-bright:#fff;--text-muted:#a9b1ba;--links:#41adff;--focus:rgba(0,150,191,0.67);--border:#526980;--code:#ffbe85;--animation-duration:0.1s;--button-base:#0c151c;--button-hover:#040a0f;--scrollbar-thumb:var(--button-hover);--scrollbar-thumb-hover:#000;--form-placeholder:#a9a9a9;--form-text:#fff;--variable:#d941e2;--highlight:#efdb43;--select-arrow:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='63' width='117' fill='%23efefef'%3E%3Cpath d='M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z'/%3E%3C/svg%3E")}}html{scrollbar-color:#aaa #fff;scrollbar-color:var(--scrollbar-thumb) var(--background-body);scrollbar-width:thin}@media (prefers-color-scheme:dark){html{scrollbar-color:#040a0f #202b38;scrollbar-color:var(--scrollbar-thumb) var(--background-body)}}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Segoe UI Emoji,Apple Color Emoji,Noto Color Emoji,sans-serif;line-height:1.4;max-width:800px;margin:20px auto;padding:0 10px;word-wrap:break-word;color:#363636;color:var(--text-main);background:#fff;background:var(--background-body);text-rendering:optimizeLegibility}@media (prefers-color-scheme:dark){body{background:#202b38;background:var(--background-body);color:#dbdbdb;color:var(--text-main)}}button{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){button{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}input{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){input{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}textarea{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}@media (prefers-color-scheme:dark){textarea{transition:background-color .1s linear,border-color .1s linear,color .1s linear,box-shadow .1s linear,transform .1s ease;transition:background-color var(--animation-duration) linear,border-color var(--animation-duration) linear,color var(--animation-duration) linear,box-shadow var(--animation-duration) linear,transform var(--animation-duration) ease}}h1{font-size:2.2em;margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:12px;margin-top:24px}h1{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h1{color:#fff;color:var(--text-bright)}}h2{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h2{color:#fff;color:var(--text-bright)}}h3{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h3{color:#fff;color:var(--text-bright)}}h4{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h4{color:#fff;color:var(--text-bright)}}h5{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h5{color:#fff;color:var(--text-bright)}}h6{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){h6{color:#fff;color:var(--text-bright)}}strong{color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){strong{color:#fff;color:var(--text-bright)}}b,h1,h2,h3,h4,h5,h6,strong,th{font-weight:600}q:after,q:before{content:none}blockquote{border-left:4px solid rgba(0,150,191,.67);border-left:4px solid var(--focus);margin:1.5em 0;padding:.5em 1em;font-style:italic}@media (prefers-color-scheme:dark){blockquote{border-left:4px solid rgba(0,150,191,.67);border-left:4px solid var(--focus)}}q{border-left:4px solid rgba(0,150,191,.67);border-left:4px solid var(--focus);margin:1.5em 0;padding:.5em 1em;font-style:italic}@media (prefers-color-scheme:dark){q{border-left:4px solid rgba(0,150,191,.67);border-left:4px solid var(--focus)}}blockquote>footer{font-style:normal;border:0}address,blockquote cite{font-style:normal}a[href^=mailto\\:]:before{content:"📧 "}a[href^=tel\\:]:before{content:"📞 "}a[href^=sms\\:]:before{content:"💬 "}mark{background-color:#ff0;background-color:var(--highlight);border-radius:2px;padding:0 2px;color:#000}@media (prefers-color-scheme:dark){mark{background-color:#efdb43;background-color:var(--highlight)}}a>code,a>strong{color:inherit}button,input[type=button],input[type=checkbox],input[type=radio],input[type=range],input[type=reset],input[type=submit],select{cursor:pointer}input,select{display:block}[type=checkbox],[type=radio]{display:initial}input{color:#1d1d1d;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:none}@media (prefers-color-scheme:dark){input{background-color:#161f27;background-color:var(--background);color:#fff;color:var(--form-text)}}button{color:#1d1d1d;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:none}@media (prefers-color-scheme:dark){button{background-color:#161f27;background-color:var(--background);color:#fff;color:var(--form-text)}}textarea{color:#1d1d1d;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:none}@media (prefers-color-scheme:dark){textarea{background-color:#161f27;background-color:var(--background);color:#fff;color:var(--form-text)}}select{color:#1d1d1d;color:var(--form-text);background-color:#efefef;background-color:var(--background);font-family:inherit;font-size:inherit;margin-right:6px;margin-bottom:6px;padding:10px;border:none;border-radius:6px;outline:none}@media (prefers-color-scheme:dark){select{background-color:#161f27;background-color:var(--background);color:#fff;color:var(--form-text)}}button{background-color:#d0cfcf;background-color:var(--button-base);padding-right:30px;padding-left:30px}@media (prefers-color-scheme:dark){button{background-color:#0c151c;background-color:var(--button-base)}}input[type=submit]{background-color:#d0cfcf;background-color:var(--button-base);padding-right:30px;padding-left:30px}@media (prefers-color-scheme:dark){input[type=submit]{background-color:#0c151c;background-color:var(--button-base)}}input[type=reset]{background-color:#d0cfcf;background-color:var(--button-base);padding-right:30px;padding-left:30px}@media (prefers-color-scheme:dark){input[type=reset]{background-color:#0c151c;background-color:var(--button-base)}}input[type=button]{background-color:#d0cfcf;background-color:var(--button-base);padding-right:30px;padding-left:30px}@media (prefers-color-scheme:dark){input[type=button]{background-color:#0c151c;background-color:var(--button-base)}}button:hover{background:#9b9b9b;background:var(--button-hover)}@media (prefers-color-scheme:dark){button:hover{background:#040a0f;background:var(--button-hover)}}input[type=submit]:hover{background:#9b9b9b;background:var(--button-hover)}@media (prefers-color-scheme:dark){input[type=submit]:hover{background:#040a0f;background:var(--button-hover)}}input[type=reset]:hover{background:#9b9b9b;background:var(--button-hover)}@media (prefers-color-scheme:dark){input[type=reset]:hover{background:#040a0f;background:var(--button-hover)}}input[type=button]:hover{background:#9b9b9b;background:var(--button-hover)}@media (prefers-color-scheme:dark){input[type=button]:hover{background:#040a0f;background:var(--button-hover)}}input[type=color]{min-height:2rem;padding:8px;cursor:pointer}input[type=checkbox],input[type=radio]{height:1em;width:1em}input[type=radio]{border-radius:100%}input{vertical-align:top}label{vertical-align:middle;margin-bottom:4px;display:inline-block}button,input:not([type=checkbox]):not([type=radio]),input[type=range],select,textarea{-webkit-appearance:none}textarea{display:block;margin-right:0;box-sizing:border-box;resize:vertical}textarea:not([cols]){width:100%}textarea:not([rows]){min-height:40px;height:140px}select{background:#efefef url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='63' width='117' fill='%23161f27'%3E%3Cpath d='M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z'/%3E%3C/svg%3E") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat;padding-right:35px}@media (prefers-color-scheme:dark){select{background:#161f27 url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='63' width='117' fill='%23efefef'%3E%3Cpath d='M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z'/%3E%3C/svg%3E") calc(100% - 12px) 50%/12px no-repeat;background:var(--background) var(--select-arrow) calc(100% - 12px) 50%/12px no-repeat}}select::-ms-expand{display:none}select[multiple]{padding-right:10px;background-image:none;overflow-y:auto}input:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){input:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}}select:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){select:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}}button:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){button:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}}textarea:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}@media (prefers-color-scheme:dark){textarea:focus{box-shadow:0 0 0 2px rgba(0,150,191,.67);box-shadow:0 0 0 2px var(--focus)}}button:active,input[type=button]:active,input[type=checkbox]:active,input[type=radio]:active,input[type=range]:active,input[type=reset]:active,input[type=submit]:active{transform:translateY(2px)}button:disabled,input:disabled,select:disabled,textarea:disabled{cursor:not-allowed;opacity:.5}::-moz-placeholder{color:#949494;color:var(--form-placeholder)}:-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::-ms-input-placeholder{color:#949494;color:var(--form-placeholder)}::placeholder{color:#949494;color:var(--form-placeholder)}@media (prefers-color-scheme:dark){::-moz-placeholder{color:#a9a9a9;color:var(--form-placeholder)}:-ms-input-placeholder{color:#a9a9a9;color:var(--form-placeholder)}::-ms-input-placeholder{color:#a9a9a9;color:var(--form-placeholder)}::placeholder{color:#a9a9a9;color:var(--form-placeholder)}}fieldset{border:1px solid rgba(0,150,191,.67);border:1px solid var(--focus);border-radius:6px;margin:0 0 12px;padding:10px}@media (prefers-color-scheme:dark){fieldset{border:1px solid rgba(0,150,191,.67);border:1px solid var(--focus)}}legend{font-size:.9em;font-weight:600}input[type=range]{margin:10px 0;padding:10px 0;background:transparent}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:9.5px;-webkit-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}@media (prefers-color-scheme:dark){input[type=range]::-webkit-slider-runnable-track{background:#161f27;background:var(--background)}}input[type=range]::-webkit-slider-thumb{box-shadow:0 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border);-webkit-appearance:none;margin-top:-7px}@media (prefers-color-scheme:dark){input[type=range]::-webkit-slider-thumb{background:#526980;background:var(--border)}}input[type=range]:focus::-webkit-slider-runnable-track{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-webkit-slider-runnable-track{background:#161f27;background:var(--background)}}input[type=range]::-moz-range-track{width:100%;height:9.5px;-moz-transition:.2s;transition:.2s;background:#efefef;background:var(--background);border-radius:3px}@media (prefers-color-scheme:dark){input[type=range]::-moz-range-track{background:#161f27;background:var(--background)}}input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}@media (prefers-color-scheme:dark){input[type=range]::-moz-range-thumb{background:#526980;background:var(--border)}}input[type=range]::-ms-track{width:100%;height:9.5px;background:transparent;border-color:transparent;border-width:16px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}@media (prefers-color-scheme:dark){input[type=range]::-ms-fill-lower{background:#161f27;background:var(--background)}}input[type=range]::-ms-fill-upper{background:#efefef;background:var(--background);border:.2px solid #010101;border-radius:3px;box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d}@media (prefers-color-scheme:dark){input[type=range]::-ms-fill-upper{background:#161f27;background:var(--background)}}input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:20px;border-radius:50%;background:#dbdbdb;background:var(--border)}@media (prefers-color-scheme:dark){input[type=range]::-ms-thumb{background:#526980;background:var(--border)}}input[type=range]:focus::-ms-fill-lower{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-ms-fill-lower{background:#161f27;background:var(--background)}}input[type=range]:focus::-ms-fill-upper{background:#efefef;background:var(--background)}@media (prefers-color-scheme:dark){input[type=range]:focus::-ms-fill-upper{background:#161f27;background:var(--background)}}a{text-decoration:none;color:#0076d1;color:var(--links)}@media (prefers-color-scheme:dark){a{color:#41adff;color:var(--links)}}a:hover{text-decoration:underline}code{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){code{color:#ffbe85;color:var(--code);background:#161f27;background:var(--background)}}samp{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){samp{color:#ffbe85;color:var(--code);background:#161f27;background:var(--background)}}time{background:#efefef;background:var(--background);color:#000;color:var(--code);padding:2.5px 5px;border-radius:6px;font-size:1em}@media (prefers-color-scheme:dark){time{color:#ffbe85;color:var(--code);background:#161f27;background:var(--background)}}pre>code{padding:10px;display:block;overflow-x:auto}var{color:#39a33c;color:var(--variable);font-style:normal;font-family:monospace}@media (prefers-color-scheme:dark){var{color:#d941e2;color:var(--variable)}}kbd{background:#efefef;background:var(--background);border:1px solid #dbdbdb;border:1px solid var(--border);border-radius:2px;color:#363636;color:var(--text-main);padding:2px 4px}@media (prefers-color-scheme:dark){kbd{color:#dbdbdb;color:var(--text-main);border:1px solid #526980;border:1px solid var(--border);background:#161f27;background:var(--background)}}img,video{max-width:100%;height:auto}hr{border:none;border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}@media (prefers-color-scheme:dark){hr{border-top:1px solid #526980;border-top:1px solid var(--border)}}table{border-collapse:collapse;margin-bottom:10px;width:100%;table-layout:fixed}table caption,td,th{text-align:left}td,th{padding:6px;vertical-align:top;word-wrap:break-word}thead{border-bottom:1px solid #dbdbdb;border-bottom:1px solid var(--border)}@media (prefers-color-scheme:dark){thead{border-bottom:1px solid #526980;border-bottom:1px solid var(--border)}}tfoot{border-top:1px solid #dbdbdb;border-top:1px solid var(--border)}@media (prefers-color-scheme:dark){tfoot{border-top:1px solid #526980;border-top:1px solid var(--border)}}tbody tr:nth-child(2n){background-color:#efefef;background-color:var(--background)}@media (prefers-color-scheme:dark){tbody tr:nth-child(2n){background-color:#161f27;background-color:var(--background)}}tbody tr:nth-child(2n) button{background-color:#f7f7f7;background-color:var(--background-alt)}@media (prefers-color-scheme:dark){tbody tr:nth-child(2n) button{background-color:#1a242f;background-color:var(--background-alt)}}tbody tr:nth-child(2n) button:hover{background-color:#fff;background-color:var(--background-body)}@media (prefers-color-scheme:dark){tbody tr:nth-child(2n) button:hover{background-color:#202b38;background-color:var(--background-body)}}::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-track{background:#efefef;background:var(--background);border-radius:6px}@media (prefers-color-scheme:dark){::-webkit-scrollbar-track{background:#161f27;background:var(--background)}}::-webkit-scrollbar-thumb{background:#aaa;background:var(--scrollbar-thumb);border-radius:6px}@media (prefers-color-scheme:dark){::-webkit-scrollbar-thumb{background:#040a0f;background:var(--scrollbar-thumb)}}::-webkit-scrollbar-thumb:hover{background:#9b9b9b;background:var(--scrollbar-thumb-hover)}@media (prefers-color-scheme:dark){::-webkit-scrollbar-thumb:hover{background:#000;background:var(--scrollbar-thumb-hover)}}::-moz-selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}::selection{background-color:#9e9e9e;background-color:var(--selection);color:#000;color:var(--text-bright)}@media (prefers-color-scheme:dark){::-moz-selection{color:#fff;color:var(--text-bright)}::selection{color:#fff;color:var(--text-bright)}}@media (prefers-color-scheme:dark){::-moz-selection{background-color:#1c76c5;background-color:var(--selection)}::selection{background-color:#1c76c5;background-color:var(--selection)}}details{display:flex;flex-direction:column;align-items:flex-start;background-color:#f7f7f7;background-color:var(--background-alt);padding:10px 10px 0;margin:1em 0;border-radius:6px;overflow:hidden}@media (prefers-color-scheme:dark){details{background-color:#1a242f;background-color:var(--background-alt)}}details[open]{padding:10px}details>:last-child{margin-bottom:0}details[open] summary{margin-bottom:10px}summary{display:list-item;background-color:#efefef;background-color:var(--background);padding:10px;margin:-10px -10px 0;cursor:pointer;outline:none}@media (prefers-color-scheme:dark){summary{background-color:#161f27;background-color:var(--background)}}summary:focus,summary:hover{text-decoration:underline}details>:not(summary){margin-top:0}summary::-webkit-details-marker{color:#363636;color:var(--text-main)}@media (prefers-color-scheme:dark){summary::-webkit-details-marker{color:#dbdbdb;color:var(--text-main)}}dialog{background-color:#f7f7f7;background-color:var(--background-alt);color:#363636;color:var(--text-main);border-radius:6px;border:#dbdbdb;border-color:var(--border);padding:10px 30px}@media (prefers-color-scheme:dark){dialog{border-color:#526980;border-color:var(--border);color:#dbdbdb;color:var(--text-main);background-color:#1a242f;background-color:var(--background-alt)}}dialog>header:first-child{background-color:#efefef;background-color:var(--background);border-radius:6px 6px 0 0;margin:-10px -30px 10px;padding:10px;text-align:center}@media (prefers-color-scheme:dark){dialog>header:first-child{background-color:#161f27;background-color:var(--background)}}dialog::-webkit-backdrop{background:rgba(0,0,0,.61);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}dialog::backdrop{background:rgba(0,0,0,.61);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}footer{border-top:1px solid #dbdbdb;border-top:1px solid var(--border);padding-top:10px;color:#70777f;color:var(--text-muted)}@media (prefers-color-scheme:dark){footer{color:#a9b1ba;color:var(--text-muted);border-top:1px solid #526980;border-top:1px solid var(--border)}}body>footer{margin-top:40px}@media print{body,button,code,details,input,pre,summary,textarea{background-color:#fff}button,input,textarea{border:1px solid #000}body,button,code,footer,h1,h2,h3,h4,h5,h6,input,pre,strong,summary,textarea{color:#000}summary::marker{color:#000}summary::-webkit-details-marker{color:#000}tbody tr:nth-child(2n){background-color:#f2f2f2}a{color:#00f;text-decoration:underline}}
</style>

<!--<link rel="stylesheet" href="./assets/styles/style.css">-->
<style>
.blob {
    width: 100%;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}

nav.scrollmenu {
    /*background-color: #333;*/
    overflow: auto;
    white-space: nowrap;
}

nav.scrollmenu a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}

nav.scrollmenu a:hover {
    background-color: #777;
}
</style>
</body>
</html>`;
};

export { generateHtmlTemplate, getWaterCss, getCustomStyles, getDemoData };
