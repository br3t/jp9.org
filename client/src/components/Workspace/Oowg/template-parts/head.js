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
    <meta name="generator" content="OOWG 0.1"/>
</head>`;
};

export default head;
