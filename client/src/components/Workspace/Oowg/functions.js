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
  isDemo,
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
  
    ${formatContent(htmlContent, isDemo)}

    <!-- custom article ul, ol, tables -->
    <!-- custom <b> in sentences with keyword -->
    <!-- pluses and minuses -->

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

${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/water.min.css">`
    : `<link rel="stylesheet" href="/assets/styles/water.min.css">`
}

${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/style.css">`
    : `<link rel="stylesheet" href="/assets/styles/style.css">`
}
</body>
</html>`;
};

export { generateHtmlTemplate, getWaterCss, getCustomStyles, getDemoData };
