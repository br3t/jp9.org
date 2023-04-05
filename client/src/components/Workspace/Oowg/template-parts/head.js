const head = (title, description, domainName) => {
  return `<head>
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
    <meta name="generator" content="OOWG"/>
    <script type = "application/ld+json">
    {
    "@context": "http://www.schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "item": {
            "@type": "WebPage",
            "@id": "/",
            "name": "☘️Website"
        }
    }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
            "@type": "WebPage",
            "@id": "/#h1_1",
            "name": "⚡️⚡️⚡️ Click 💸💸💸"
        }
    }]
    }
    </script>
</head>`;
};

export default head;
