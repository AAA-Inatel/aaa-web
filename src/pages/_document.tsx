import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />

          <link rel="icon" type="image/x-icon" href="favicon.ico" />

          <meta name="author" content="Gabriel Costa" />
          <meta
            name="copyright"
            content="Associação Acadêmica Atlética do Inatel"
          />
          <meta name="designer" content="Gabriel Costa" />
          <meta
            name="abstract"
            content="Associação Acadêmica Atlética do Inatel - Vem fazer parte da família do papai touro."
          />

          <meta name="robots" content="index,nofollow" />
          {/* <meta
            property="og:image"
            content="https://beduka.com/blog/wp-content/uploads/2018/11/Beduka2018.jpg"
          />
          <meta
            property="twitter:image"
            content="https://beduka.com/blog/wp-content/uploads/2018/11/Beduka2018.jpg"
          /> */}
          <meta property="twitter:card" content="summary" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:title"
            content="AAA Inatel | Associação Acadêmica Atlética do Inatel"
          />
          <meta
            property="og:description"
            content="Associação Acadêmica Atlética do Inatel - Vem fazer parte da família do papai touro."
          />

          <meta
            name="description"
            content="Associação Acadêmica Atlética do Inatel - Vem fazer parte da família do papai touro."
          />
          <meta property="og:url" content="https://www.atleticainatel.com/" />

          <meta
            name="keywords"
            content="Inatel, Atlética, Atlética Inatel, AAA Inatel, AAA, Associação, Associação Inatel, Santa rita do sapucaí"
          />

          <meta name="msapplication-TileColor" content="#ffc100" />

          <meta
            name="msapplication-TileImage"
            content="/seo/ms-icon-144x144.png"
          />

          <meta name="theme-color" content="#ffc100"></meta>

          <link
            rel="canonical"
            href="https://www.atleticainatel.com/"
            itemProp="url"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
